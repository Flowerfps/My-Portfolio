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
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Works / PR実績
        </h2>
        <div className="space-y-12">
          {works.map((work, index) => (
            <div key={index} className="bg-neutral-light rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                {!loadedImages.has(index) && (
                  <div className="absolute inset-0 bg-neutral animate-pulse rounded-xl" />
                )}
                <img 
                  src={work.image} 
                  alt={`ロージーの実績 ${index + 1}`}
                  className={`w-full rounded-xl mb-4 transition-opacity duration-500 ${
                    loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(index)}
                  loading="lazy"
                />
              </div>
              <p className="text-lg text-gray-700 text-center">
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
