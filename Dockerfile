# Base on Node.js 20 Alpine for smaller image size
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies only when needed (using a separate stage)
FROM base AS deps
# Install dependencies needed for node-gyp (if any native modules are used)
RUN apk add --no-cache libc6-compat python3 make g++

# Copy package files
COPY package.json package-lock.json* .npmrc* ./

# Create .npmrc file with legacy-peer-deps flag to handle dependency conflicts
RUN echo "legacy-peer-deps=true" > .npmrc

# Install dependencies
RUN npm ci

# Development environment
FROM base AS development
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Use development port
ENV PORT 3000
EXPOSE 3000
# Run in development mode
CMD ["npm", "run", "dev"]

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate production build
RUN npm run build

# Production image
FROM base AS production
WORKDIR /app

ENV NODE_ENV production
# Uncomment if you need to use run-time environment variables in Next.js
# ENV NEXT_TELEMETRY_DISABLED 1

# Copy necessary files from builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Use production port (usually 3000 for Next.js)
ENV PORT 3000
EXPOSE 3000

# Run the application
CMD ["npm", "run", "start"]