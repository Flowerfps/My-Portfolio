import { Link } from 'react-router-dom'
import { useState } from 'react'

function Top() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light to-accent-light flex items-center justify-center">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 relative">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-neutral-light animate-pulse rounded-3xl" />
          )}
          <img 
            src="https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&h=600&fit=crop" 
            alt="ロージーの写真" 
            className={`w-full max-w-2xl mx-auto rounded-3xl shadow-2xl transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4 drop-shadow-md">
          ロージー
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 drop-shadow-sm">
          元気いっぱい！みんなを笑顔にするわんこ
        </p>
        <Link 
          to="/contact"
          className="inline-block bg-primary-DEFAULT text-white px-8 py-4 rounded-full text-lg md:text-xl font-bold shadow-lg hover:bg-primary-dark hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-primary-light"
        >
          お仕事の依頼はこちら
        </Link>
      </div>
    </div>
  )
}

export default Top
