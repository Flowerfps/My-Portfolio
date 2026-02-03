import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ内容を入力してください'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      alert('送信しました（FormspreeのフォームIDを設定してください）')
    }, 1000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-rounded font-medium text-center mb-12 text-primary tracking-tight">
          お仕事のご依頼はこちら
        </h2>
        <form 
          onSubmit={handleSubmit}
          className="w-full"
          noValidate
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-sm">
              お名前
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-primary transition-colors ${
                errors.name ? 'border-red-400' : ''
              }`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
                {errors.name}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-sm">
              メールアドレス
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-primary transition-colors ${
                errors.email ? 'border-red-400' : ''
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                {errors.email}
              </p>
            )}
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-sm">
              お問い合わせ内容
            </label>
            <textarea 
              id="message" 
              name="message" 
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-primary transition-colors resize-none ${
                errors.message ? 'border-red-400' : ''
              }`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            ></textarea>
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
                {errors.message}
              </p>
            )}
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white px-8 py-4 text-base font-medium hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '送信中...' : '送信する'}
          </button>
        </form>
        <p className="mt-6 text-center text-gray-500 text-sm font-light">
          FormspreeのフォームIDを設定してください
        </p>
      </div>
    </div>
  )
}

export default Contact
