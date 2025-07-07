"use client"

import { Phone, Mail, MapPin, Hammer, Building, Home, Wrench, ExternalLink, Linkedin } from "lucide-react" // Import Linkedin icon
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

type ImageItem = {
    id: number;
    src: string;
    alt: string;
    description: string;
};

const images: ImageItem[] = [
    { id: 1, src: "/1.jpg", alt: "Réalisation Akdemir Maçonnerie 1", description: "Chantier de maçonnerie numéro 1" },
    { id: 2, src: "/2.jpg", alt: "Réalisation Akdemir Maçonnerie 2", description: "Chantier de maçonnerie numéro 2" },
    { id: 3, src: "/3.jpg", alt: "Réalisation Akdemir Maçonnerie 3", description: "Chantier de maçonnerie numéro 3" },
    { id: 4, src: "/4.jpg", alt: "Réalisation Akdemir Maçonnerie 4", description: "Chantier de maçonnerie numéro 4" },
    { id: 5, src: "/5.jpg", alt: "Réalisation Akdemir Maçonnerie 5", description: "Chantier de maçonnerie numéro 5" },
    { id: 6, src: "/6.jpg", alt: "Réalisation Akdemir Maçonnerie 6", description: "Chantier de maçonnerie numéro 6" },
    { id: 7, src: "/7.jpg", alt: "Réalisation Akdemir Maçonnerie 7", description: "Chantier de maçonnerie numéro 7" },
    { id: 8, src: "/8.jpg", alt: "Réalisation Akdemir Maçonnerie 8", description: "Chantier de maçonnerie numéro 8" },
    { id: 9, src: "/9.jpg", alt: "Réalisation Akdemir Maçonnerie 9", description: "Chantier de maçonnerie numéro 9" },
    { id: 10, src: "/10.jpg", alt: "Réalisation Akdemir Maçonnerie 10", description: "Chantier de maçonnerie numéro 10" },
    { id: 11, src: "/11.jpg", alt: "Réalisation Akdemir Maçonnerie 11", description: "Chantier de maçonnerie numéro 11" },
    { id: 12, src: "/12.jpg", alt: "Réalisation Akdemir Maçonnerie 12", description: "Chantier de maçonnerie numéro 12" },
    { id: 13, src: "/13.jpg", alt: "Réalisation Akdemir Maçonnerie 13", description: "Chantier de maçonnerie numéro 13" },
    { id: 14, src: "/14.jpg", alt: "Réalisation Akdemir Maçonnerie 14", description: "Chantier de maçonnerie numéro 14" },
    { id: 15, src: "/15.jpg", alt: "Réalisation Akdemir Maçonnerie 15", description: "Chantier de maçonnerie numéro 15" },
    { id: 16, src: "/16.jpg", alt: "Réalisation Akdemir Maçonnerie 16", description: "Chantier de maçonnerie numéro 16" },
    { id: 17, src: "/17.jpg", alt: "Réalisation Akdemir Maçonnerie 17", description: "Chantier de maçonnerie numéro 17" },
    { id: 18, src: "/18.jpg", alt: "Réalisation Akdemir Maçonnerie 18", description: "Chantier de maçonnerie numéro 18" },
    { id: 19, src: "/19.jpg", alt: "Réalisation Akdemir Maçonnerie 19", description: "Chantier de maçonnerie numéro 19" },
    { id: 20, src: "/20.jpg", alt: "Réalisation Akdemir Maçonnerie 20", description: "Chantier de maçonnerie numéro 20" },
    { id: 21, src: "/21.jpg", alt: "Réalisation Akdemir Maçonnerie 21", description: "Chantier de maçonnerie numéro 21" },
    { id: 22, src: "/22.jpg", alt: "Réalisation Akdemir Maçonnerie 22", description: "Chantier de maçonnerie numéro 22" },
    { id: 23, src: "/23.jpg", alt: "Réalisation Akdemir Maçonnerie 23", description: "Chantier de maçonnerie numéro 23" },
    { id: 24, src: "/24.jpg", alt: "Réalisation Akdemir Maçonnerie 24", description: "Chantier de maçonnerie numéro 24" },
    { id: 25, src: "/25.jpg", alt: "Réalisation Akdemir Maçonnerie 25", description: "Chantier de maçonnerie numéro 25" },
    { id: 26, src: "/26.jpg", alt: "Réalisation Akdemir Maçonnerie 26", description: "Chantier de maçonnerie numéro 26" },
    { id: 27, src: "/27.jpg", alt: "Réalisation Akdemir Maçonnerie 27", description: "Chantier de maçonnerie numéro 27" },
    { id: 28, src: "/28.jpg", alt: "Réalisation Akdemir Maçonnerie 28", description: "Chantier de maçonnerie numéro 28" },
    { id: 29, src: "/29.jpg", alt: "Réalisation Akdemir Maçonnerie 29", description: "Chantier de maçonnerie numéro 29" },
    { id: 30, src: "/30.jpg", alt: "Réalisation Akdemir Maçonnerie 30", description: "Chantier de maçonnerie numéro 30" },
    { id: 31, src: "/31.jpg", alt: "Réalisation Akdemir Maçonnerie 31", description: "Chantier de maçonnerie numéro 31" },
    { id: 32, src: "/32.jpg", alt: "Réalisation Akdemir Maçonnerie 32", description: "Chantier de maçonnerie numéro 32" },
    { id: 33, src: "/33.jpg", alt: "Réalisation Akdemir Maçonnerie 33", description: "Chantier de maçonnerie numéro 33" },
    { id: 34, src: "/34.jpg", alt: "Réalisation Akdemir Maçonnerie 34", description: "Chantier de maçonnerie numéro 34" },
    { id: 35, src: "/35.jpg", alt: "Réalisation Akdemir Maçonnerie 35", description: "Chantier de maçonnerie numéro 35" },
    { id: 36, src: "/36.jpg", alt: "Réalisation Akdemir Maçonnerie 36", description: "Chantier de maçonnerie numéro 36" },
    { id: 37, src: "/37.jpg", alt: "Réalisation Akdemir Maçonnerie 37", description: "Chantier de maçonnerie numéro 37" },
];

const ImageGallery = () => {
    const [open, setOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null)

    const handleOpen = (image: ImageItem) => {
        setSelectedImage(image)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setSelectedImage(null)
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((image: ImageItem) => (
                    <Card key={image.id} className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow group bg-white">
                        <button
                            onClick={() => handleOpen(image)}
                            className="relative aspect-[4/3] overflow-hidden w-full h-full block rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500"
                            aria-label="Voir l'image en grand"
                        >
                            <Image
                                src={image.src || "/placeholder.svg"}
                                alt=""
                                width={400}
                                height={300}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 rounded-2xl"
                                draggable={false}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                <ExternalLink className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                            </div>
                        </button>
                    </Card>
                ))}
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[720px] bg-transparent shadow-none p-0 flex items-center justify-center">
                    {selectedImage && (
                        <div className="flex flex-col items-center justify-center w-full">
                            <Image
                                src={selectedImage.src || "/placeholder.svg"}
                                alt=""
                                width={900}
                                height={700}
                                className="object-contain w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
                                draggable={false}
                            />
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
            <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center shadow-lg">
                <Image
                    src={images[index].src}
                    alt=""
                    width={800}
                    height={600}
                    className="object-contain w-full h-full rounded-2xl"
                    draggable={false}
                />
            </div>
            <div className="flex justify-between items-center mt-4">
                <button onClick={prev} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white font-semibold transition-colors shadow">
                    Préc
                </button>
                <div className="text-sm text-gray-600">
                    {index + 1} / {total}
                </div>
                <button onClick={next} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white font-semibold transition-colors shadow">
                    Suiv
                </button>
            </div>
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
            <section className="bg-gradient-to-br from-red-50 via-white to-gray-100 py-20 md:py-32 border-b">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight drop-shadow-sm">
                        Maçonnerie Professionnelle à Annecy
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto font-medium">
                        Spécialiste en travaux de maçonnerie. Qualité, expertise et savoir-faire au service de vos projets.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4 shadow-lg transition-transform hover:scale-105" asChild>
                            <a href="tel:0670591546">
                                <Phone className="mr-2 h-6 w-6" />
                                Appelez-nous
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-red-600 hover:bg-red-50 shadow-lg transition-transform hover:scale-105" asChild>
                            <a href="mailto:akdemir.kemal@neuf.fr">
                                <Mail className="mr-2 h-6 w-6" />
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
            <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-red-900 text-white py-12 mt-16 relative">
                <div className="container mx-auto px-4 flex flex-col items-center gap-8">
                    <div className="flex items-center gap-4 mb-4">
                        <Image src="/icon.png" alt="Logo Akdemir Maçonnerie" width={48} height={48} className="rounded-full border-2 border-red-500" />
                        <span className="font-bold text-xl tracking-wide">Akdemir Maçonnerie</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-center text-gray-300 text-base text-center">
                        <span className="flex items-center gap-2"><Phone className="inline" /> 06 70 59 15 46</span>
                        <span className="flex items-center gap-2"><Mail className="inline" /> akdemir.kemal@neuf.fr</span>
                        <span className="flex items-center gap-2"><MapPin className="inline" /> Annecy</span>
                    </div>
                    <div className="flex gap-6 mt-4">
                        <a href="https://www.linkedin.com/company/akdemir-ma%C3%A7onnerie/" target="_blank" rel="noopener" className="hover:text-red-400 transition-colors"><Linkedin className="h-7 w-7" /></a>
                    </div>
                    <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="absolute right-6 bottom-6 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 shadow-lg transition-transform hover:scale-110 focus:outline-none" aria-label="En haut de la page">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>
                <div className="text-center text-gray-400 text-xs mt-8">&copy; {new Date().getFullYear()} Akdemir Maçonnerie. Tous droits réservés.</div>
            </footer>
        </div>
    )
}