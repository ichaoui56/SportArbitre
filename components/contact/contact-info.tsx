import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Informations de contact</h3>
        <p className="text-muted-foreground mb-8">
          N'hésitez pas à nous contacter pour toute question ou demande d'information. Notre équipe est là pour vous
          aider.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-primary/10 p-3">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-bold">Email</h4>
            <p className="text-muted-foreground">contact@cas.org.ma</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-full bg-primary/10 p-3">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-bold">Téléphone</h4>
            <p className="text-muted-foreground">+212 5XX XX XX XX</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-full bg-primary/10 p-3">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-bold">Adresse</h4>
            <p className="text-muted-foreground">
              123 Avenue Mohammed V<br />
              Casablanca, Maroc
            </p>
          </div>
        </div>
      </div>

      <div className="card hover:shadow-lg mt-8 bg-muted">
        <h4 className="font-bold mb-2">Heures d'ouverture</h4>
        <p className="text-muted-foreground mb-2">Lundi - Vendredi: 9h00 - 18h00</p>
        <p className="text-muted-foreground">Samedi - Dimanche: Fermé</p>
      </div>
    </div>
  )
}

