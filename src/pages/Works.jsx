import { useState } from 'react'

function Works() {
  const works = [
    {
      image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=600&h=400&fit=crop',
      comment: '〇〇ブランドの広告モデルを担当しました'
    },
    {
      image: 'https://images.unsplash.com/photo-1583337130417-6a25332b5d3b?w=600&h=400&fit=crop',
      comment: '雑誌の表紙に登場しました'
    },
    {
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop',
      comment: 'CM出演しました'
    }
  ]

  const [loadedImages, setLoadedImages] = useState(new Set())

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]))
  }

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-rounded font-medium text-center mb-16 text-primary tracking-tight">
          Works / PR実績
        </h2>
        <div className="space-y-16">
          {works.map((work, index) => (
            <div key={index} className="w-full">
              <div className="relative mb-6 aspect-[3/2] bg-gray-100">
                {!loadedImages.has(index) && (
                  <div className="absolute inset-0 bg-gray-100 animate-pulse" />
                )}
                <img 
                  src={work.image} 
                  alt={`ロージーの実績 ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(index)}
                  loading="lazy"
                />
              </div>
              <p className="text-base md:text-lg text-gray-600 text-center font-light">
                {work.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works
