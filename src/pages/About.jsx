import { useState } from 'react'

function About() {
  const [imagesLoaded, setImagesLoaded] = useState([false, false])

  const handleImageLoad = (index) => {
    setImagesLoaded(prev => {
      const newState = [...prev]
      newState[index] = true
      return newState
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-rounded font-normal text-center mb-16 text-gray-900 tracking-tight">
          About
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative aspect-square bg-gray-50">
            {!imagesLoaded[0] && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse" />
            )}
            <img 
              src="https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&h=800&fit=crop" 
              alt="ロージーの写真1" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                imagesLoaded[0] ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => handleImageLoad(0)}
              loading="lazy"
            />
          </div>
          <div className="relative aspect-square bg-gray-50">
            {!imagesLoaded[1] && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse" />
            )}
            <img 
              src="https://images.unsplash.com/photo-1583337130417-6a25332b5d3b?w=800&h=800&fit=crop" 
              alt="ロージーの写真2" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                imagesLoaded[1] ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => handleImageLoad(1)}
              loading="lazy"
            />
          </div>
        </div>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
            ジャックラッセルテリアの女の子🎀<br />
            2024年11月30日生まれ✨<br />
            2025年2月16日 Welcome Rosie🎉<br />
            社会人兄姉＆高校生兄に愛でられてわがまま姫に成長中🐶
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
