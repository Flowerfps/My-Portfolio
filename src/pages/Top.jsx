import { Link } from 'react-router-dom'
import { useState } from 'react'

function Top() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto w-full">
        <div className="mb-12 relative aspect-[4/3] max-w-2xl mx-auto bg-gray-100">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-100 animate-pulse" />
          )}
          <img 
            src="https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&h=600&fit=crop" 
            alt="ロージーの写真" 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </div>
        <h1 className="text-5xl md:text-display font-rounded font-medium text-primary mb-6 tracking-tight">
          ロージー
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 font-light">
          元気いっぱい！みんなを笑顔にするわんこ
        </p>
        <Link 
          to="/contact"
          className="inline-block bg-primary text-white px-8 py-3 text-base font-medium hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          お仕事の依頼はこちら
        </Link>
      </div>
    </div>
  )
}

export default Top
