import { Link } from 'react-router-dom'
import { useState } from 'react'

function Top() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full">
        <div className="relative w-full aspect-[4/3] bg-gray-50">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-100 animate-pulse" />
          )}
          <img 
            src="https://images.unsplash.com/photo-1551717743-49959800b1f6?w=1200&h=900&fit=crop" 
            alt="ロージー" 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="eager"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-rounded font-normal text-gray-900 mb-4 tracking-tight">
            ロージー
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 font-light leading-relaxed">
            元気いっぱい！みんなを笑顔にするわんこ
          </p>
          <Link 
            to="/contact"
            className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-sm font-normal hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            お仕事の依頼はこちら
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Top
