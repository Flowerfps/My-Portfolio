function SNS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-accent-light to-primary-light flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 drop-shadow-sm">
          SNS
        </h2>
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-white px-12 py-6 rounded-full text-xl md:text-2xl font-bold text-primary-dark shadow-xl hover:bg-primary-light hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-primary"
        >
          Instagram
        </a>
        <p className="mt-8 text-gray-700 text-lg">
          最新の投稿はInstagramでチェック！
        </p>
      </div>
    </div>
  )
}

export default SNS
