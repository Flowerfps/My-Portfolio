function SNS() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-rounded font-normal mb-12 text-gray-900 tracking-tight">
          SNS
        </h2>
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block border border-gray-900 text-gray-900 px-12 py-4 text-sm font-normal hover:bg-gray-900 hover:text-white transition-all duration-300"
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
