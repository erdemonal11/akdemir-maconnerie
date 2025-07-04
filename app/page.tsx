import { Phone, Mail, MapPin, Hammer, Building, Home, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-red-600">AKDEMIR MAÇONNERIE</h1>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-600" />
                <span>06 70 59 15 46</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-600" />
                <span>ANNECY</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Maçonnerie Professionnelle</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Spécialiste en travaux de maçonnerie à Annecy. Qualité, expertise et savoir-faire au service de vos projets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Phone className="mr-2 h-5 w-5" />
              Appelez-nous
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="mr-2 h-5 w-5" />
              Contactez-nous
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Nos Services</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services de maçonnerie pour tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Construction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Construction de murs, fondations et structures en béton</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Rénovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Rénovation et restauration de bâtiments anciens</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Hammer className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Démolition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Travaux de démolition sécurisés et professionnels</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wrench className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Réparation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Réparation et entretien de structures existantes</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Contactez-nous</h3>
            <p className="text-gray-600">N'hésitez pas à nous contacter pour un devis gratuit</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Téléphone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">06 70 59 15 46</p>
                  <p className="text-sm text-gray-600 mt-2">Disponible 7j/7</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Mail className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold break-all">akdemir.kemal@neuf.fr</p>
                  <p className="text-sm text-gray-600 mt-2">Réponse rapide</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Localisation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">ANNECY</p>
                  <p className="text-sm text-gray-600 mt-2">Haute-Savoie</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold text-red-500">AKDEMIR MAÇONNERIE</h4>
              <p className="text-gray-400 text-sm mt-1">Votre expert en maçonnerie à Annecy</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>06 70 59 15 46</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>akdemir.kemal@neuf.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>ANNECY</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2025 Akdemir Maçonnerie. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
