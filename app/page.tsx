"use client"

import { Phone, Mail, MapPin, Hammer, Building, Home, Wrench, ExternalLink, Linkedin } from "lucide-react" // Import Linkedin icon
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const images = [
    {
        id: 1,
        src: "/1.jpg"
    },
    {
        id: 2,
        src: "/2.jpg",
    },
    {
        id: 3,
        src: "/3.jpg",
    },
    {
        id: 4,
        src: "/4.jpg",
    },
    {
        id: 5,
        src: "/5.jpg",
    },
    {
        id: 6,
        src: "/6.jpg",
    },
    {
        id: 7,
        src: "/7.jpg",
    },
    {
        id: 8,
        src: "/8.jpg",
    },
    {
        id: 9,
        src: "/9.jpg",
    },
    {
        id: 10,
        src: "/10.jpg",
    },
    {
        id: 11,
        src: "/11.jpg",
    },
    {
        id: 12,
        src: "/12.jpg",
    },
    {
        id: 13,
        src: "/13.jpg",
    },
    {
        id: 14,
        src: "/14.jpg",
    },
    {
        id: 15,
        src: "/15.jpg",
    },
    {
        id: 16,
        src: "/16.jpg",
    },
    {
        id: 17,
        src: "/17.jpg",
    },
    {
        id: 18,
        src: "/18.jpg",
    },
    {
        id: 19,         
        src: "/19.jpg",
    },
    {
        id: 20,
        src: "/20.jpg",
    },
    {
        id: 21,
        src: "/21.jpg",
    },
    {
        id: 22,
        src: "/22.jpg",
    },
    {
        id: 23,
        src: "/23.jpg",
    },          
    {
        id: 24,
        src: "/24.jpg",
    },
    {
        id: 25,
        src: "/25.jpg",
    },
    {
        id: 26,
        src: "/26.jpg",
    },
    {
        id: 27,
        src: "/27.jpg",
    },
    {
        id: 28,
        src: "/28.jpg",
    },
    {
        id: 29,
        src: "/29.jpg",
    },
    {
        id: 30,
        src: "/30.jpg",         
    },
    {
        id: 31,
        src: "/31.jpg",
    },
    {
        id: 32,
        src: "/32.jpg",
    },
    {
        id: 33,
        src: "/33.jpg",
    },
    {
        id: 34,
        src: "/34.jpg",
    },
    {
        id: 35,
        src: "/35.jpg",
    },          
    {
        id: 36,
        src: "/36.jpg",
    },
    {
        id: 37,
        src: "/37.jpg",
    },
]

const ImageGallery = () => {
    const [open, setOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    const handleOpen = (image) => {
        setSelectedImage(image)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setSelectedImage(null)
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image) => (
                    <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                        <button
                            onClick={() => handleOpen(image)}
                            className="relative aspect-[4/3] overflow-hidden w-full h-full block"
                        >
                            <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                width={400}
                                height={300}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </button>
                        <CardContent className="p-4">
                            <h4 className="font-semibold text-lg mb-2">{image.alt}</h4>
                            <p className="text-gray-600 text-sm">{image.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[720px]">
                    {selectedImage && (
                        <div className="flex flex-col">
                            <Image
                                src={selectedImage.src || "/placeholder.svg"}
                                alt={selectedImage.alt}
                                width={800}
                                height={600}
                                className="object-contain w-full h-auto"
                            />
                            <div className="mt-4">
                                <h4 className="font-semibold text-lg mb-2">{selectedImage.alt}</h4>
                                <p className="text-gray-600 text-sm">{selectedImage.description}</p>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}

const Slideshow = () => {
    const [index, setIndex] = useState(0)
    const total = images.length

    const prev = () => setIndex((i) => (i - 1 + total) % total)
    const next = () => setIndex((i) => (i + 1) % total)

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                    src={images[index].src}
                    alt={images[index].alt}
                    width={800}
                    height={600}
                    className="object-contain w-full h-full"
                />
            </div>
            <div className="flex justify-between items-center mt-4">
                <button onClick={prev} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                    Préc
                </button>
                <div className="text-sm text-gray-600">
                    {index + 1} / {total}
                </div>
                <button onClick={next} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                    Suiv
                </button>
            </div>
            <div className="mt-2 text-center text-gray-700 font-semibold">{images[index].alt}</div>
            <div className="text-center text-gray-500 text-sm">{images[index].description}</div>
        </div>
    )
}

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Akdemir Maçonnerie Logo"
                                width={200}
                                height={80}
                                className="h-16 w-auto"
                            />
                        </div>
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
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Maçonnerie Professionnelle
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Spécialiste en travaux de maçonnerie à Annecy. Qualité, expertise et savoir-faire au
                        service de vos projets.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                            <a href="tel:0670591546">
                                <Phone className="mr-2 h-5 w-5" />
                                Appelez-nous
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a href="mailto:akdemir.kemal@neuf.fr">
                                <Mail className="mr-2 h-5 w-5" />
                                Contactez-nous
                            </a>
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
                                <CardDescription>
                                    Construction de murs, fondations et structures en béton
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Home className="h-12 w-12 text-red-600 mx-auto mb-4" />
                                <CardTitle className="text-lg">Rénovation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Rénovation et restauration de bâtiments anciens
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Hammer className="h-12 w-12 text-red-600 mx-auto mb-4" />
                                <CardTitle className="text-lg">Démolition</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Travaux de démolition sécurisés et professionnels
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Wrench className="h-12 w-12 text-red-600 mx-auto mb-4" />
                                <CardTitle className="text-lg">Réparation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Réparation et entretien de structures existantes
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Réalisations Section */}
            <section className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Nos Réalisations
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Découvrez quelques-uns de nos projets récents et la qualité de notre travail
                        </p>
                    </div>

                    <Slideshow />

                    <div className="text-center mt-8">
                        <p className="text-gray-600 mb-4">Vous avez un projet similaire ?</p>
                        <Button className="bg-red-600 hover:bg-red-700" asChild>
                            <a href="tel:0670591546">
                                <Phone className="mr-2 h-4 w-4" />
                                Demandez votre devis gratuit
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Contactez-nous
                        </h3>
                        <p className="text-gray-600">
                            N'hésitez pas à nous contacter pour un devis gratuit
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="text-center">
                                <CardHeader>
                                    <Phone className="h-8 w-8 text-red-600 mx-auto mb-2" />
                                    <CardTitle className="text-lg">Téléphone</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <a
                                        href="tel:0670591546"
                                        className="text-lg font-semibold hover:text-red-600 transition-colors"
                                    >
                                        06 70 59 15 46
                                    </a>
                                    <p className="text-sm text-gray-600 mt-2">Disponible 7j/7</p>
                                </CardContent>
                            </Card>

                            <Card className="text-center">
                                <CardHeader>
                                    <Mail className="h-8 w-8 text-red-600 mx-auto mb-2" />
                                    <CardTitle className="text-lg">Email</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <a
                                        href="mailto:akdemir.kemal@neuf.fr"
                                        className="text-lg font-semibold break-all hover:text-red-600 transition-colors"
                                    >
                                        akdemir.kemal@neuf.fr
                                    </a>
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
                            <div className="flex items-center mb-2">
                                <Image
                                    src="/logo.png"
                                    alt="Akdemir Maçonnerie Logo"
                                    width={200}
                                    height={80}
                                    className="h-16 w-auto"
                                />
                            </div>
                            <p className="text-gray-400 text-sm">
                                Votre expert en maçonnerie à Annecy
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
                            <a
                                href="tel:0670591546"
                                className="flex items-center space-x-2 hover:text-red-400 transition-colors"
                            >
                                <Phone className="h-4 w-4" />
                                <span>06 70 59 15 46</span>
                            </a>
                            <a
                                href="mailto:akdemir.kemal@neuf.fr"
                                className="flex items-center space-x-2 hover:text-red-400 transition-colors"
                            >
                                <Mail className="h-4 w-4" />
                                <span>akdemir.kemal@neuf.fr</span>
                            </a>
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>ANNECY</span>
                            </div>
                            {/* Option 1: Add LinkedIn next to existing contact info */}
                            <a
                                href="https://www.linkedin.com/company/akdemir-ma%C3%A7onnerie/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 hover:text-red-400 transition-colors"
                            >
                                <Linkedin className="h-4 w-4" />
                                <span>LinkedIn</span>
                            </a>
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