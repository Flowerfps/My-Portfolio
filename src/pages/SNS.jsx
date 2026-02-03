function SNS() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-rounded font-medium mb-12 text-primary tracking-tight">
          SNS
        </h2>
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-12 py-4 text-lg font-medium hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Instagram
        </a>
        <p className="mt-8 text-gray-600 text-base font-light">
          最新の投稿はInstagramでチェック！
        </p>
      </div>
    </div>
  )
}

export default SNS
