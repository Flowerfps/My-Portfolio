import { useState } from 'react'

function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1583337130417-6a25332b5d3b?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1583337130417-6a25332b5d3b?w=400&h=400&fit=crop',
  ]

  const [loadedImages, setLoadedImages] = useState(new Set())

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]))
  }

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-rounded font-medium text-center mb-16 text-primary tracking-tight">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-[3/4] overflow-hidden bg-gray-100">
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 bg-gray-100 animate-pulse" />
              )}
              <img 
                src={src} 
                alt={`ロージーのギャラリー写真 ${index + 1}`}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(index)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
