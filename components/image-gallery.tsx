"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Construction de mur en pierre",
    title: "Construction de mur en pierre",
    description: "Réalisation d'un mur en pierre naturelle avec finition traditionnelle",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Rénovation de façade",
    title: "Rénovation de façade",
    description: "Restauration complète d'une façade ancienne avec enduit traditionnel",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Fondations en béton",
    title: "Fondations en béton",
    description: "Coulage de fondations pour construction neuve",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Terrasse en pierre",
    title: "Terrasse en pierre",
    description: "Aménagement d'une terrasse en pierre naturelle",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Mur de soutènement",
    title: "Mur de soutènement",
    description: "Construction d'un mur de soutènement en béton armé",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Cheminée traditionnelle",
    title: "Cheminée traditionnelle",
    description: "Réalisation d'une cheminée en pierre avec foyer traditionnel",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Escalier en béton",
    title: "Escalier en béton",
    description: "Construction d'un escalier extérieur en béton avec finition lisse",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Réparation de fissures",
    title: "Réparation de fissures",
    description: "Traitement et réparation de fissures sur mur porteur",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Dalle béton",
    title: "Dalle béton",
    description: "Coulage d'une dalle béton pour garage avec finition talochée",
  },
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setSelectedImage(galleryImages[index].id)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1
    setCurrentIndex(newIndex)
    setSelectedImage(galleryImages[newIndex].id)
  }

  const goToNext = () => {
    const newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    setSelectedImage(galleryImages[newIndex].id)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <Card
            key={image.id}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <CardContent className="p-4">
              <h4 className="font-semibold text-lg mb-2">{image.title}</h4>
              <p className="text-gray-600 text-sm line-clamp-2">{image.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Previous Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          {/* Next Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Image Container */}
          <div className="relative max-w-4xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[currentIndex].src || "/placeholder.svg"}
              alt={galleryImages[currentIndex].alt}
              width={800}
              height={600}
              className="w-full h-full object-contain"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">{galleryImages[currentIndex].title}</h3>
              <p className="text-gray-200">{galleryImages[currentIndex].description}</p>
              <div className="mt-2 text-sm text-gray-300">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
