'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-gray-600 text-center mb-10">
          Have questions or ready to book a session? Fill out the form below and we'll get back to you within 24 hours.
        </p>

        {/* Map Section */}
        <div className="w-full rounded-md overflow-hidden h-64 md:h-96 mb-12 border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.4175006956907!2d81.83121908505144!3d25.449794799426638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acbbd8fa40337%3A0xcce9d02d66cea2c!2sMalviya%20Studio!5e0!3m2!1sen!2sin!4v1722870822189!5m2!1sen!2sin"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Form + Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900"
              />
            </div>
            {/* <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900"
              />
            </div> */}
            <div>
              <label htmlFor="phone" required className="block text-sm font-medium text-gray-700 mb-1">
                Phone 
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service Interested In
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900"
              >
                <option value="">Select a service</option>
                <option value="wedding">Wedding Photography</option>
                <option value="portrait">Portrait Session</option>
                <option value="commercial">Commercial Photography</option>
                <option value="event">Event Coverage</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-gray-100 p-6 rounded-lg h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <strong>Email:</strong>
                  <p>malviyastudio1@gmail.com</p>
                </div>
                <div>
                  <strong>Phone:</strong>
                  <p>82993 38931</p>
                </div>
                <div>
                  <strong>Studio Address:</strong>
                  <p>
                    25/51, Mahatma Gandhi Marg,<br />
                    Opp. Hotel Samrat, Civil Lines,<br />
                    Prayagraj, Uttar Pradesh
                  </p>
                </div>
                <div>
                  <strong>Business Hours:</strong>
                  <p>
                    Mon - Sat: 10am - 8pm<br />
                    Sunday: 10am - 4pm
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  {/* Facebook */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H8.898V12h1.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/malviya__studio/" className="text-gray-600 hover:text-gray-900">
                  {/* Instagram */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.2c3.177 0 3.56.012 4.812.07 1.17.057 1.972.252 2.423.424a4.95 4.95 0 011.785 1.176 4.96 4.96 0 011.177 1.786c.172.451.367 1.252.424 2.423.058 1.252.07 1.635.07 4.812s-.012 3.56-.07 4.812c-.057 1.17-.252 1.972-.424 2.423a4.96 4.96 0 01-1.177 1.786 4.95 4.95 0 01-1.785 1.177c-.451.172-1.252.367-2.423.424-1.252.058-1.635.07-4.812.07s-3.56-.012-4.812-.07c-1.17-.057-1.972-.252-2.423-.424a4.95 4.95 0 01-1.785-1.177 4.96 4.96 0 01-1.177-1.786c-.172-.451-.367-1.252-.424-2.423C2.212 15.56 2.2 15.177 2.2 12s.012-3.56.07-4.812c.057-1.17.252-1.972.424-2.423a4.96 4.96 0 011.177-1.786A4.95 4.95 0 015.586 2.7c.451-.172 1.252-.367 2.423-.424C8.44 2.212 8.823 2.2 12 2.2zm0 1.6c-3.122 0-3.49.012-4.716.068-1.076.05-1.659.222-2.05.37a3.36 3.36 0 00-1.22.798 3.36 3.36 0 00-.798 1.22c-.148.391-.32.974-.37 2.05-.056 1.226-.068 1.594-.068 4.716s.012 3.49.068 4.716c.05 1.076.222 1.659.37 2.05.188.509.446.967.798 1.22a3.36 3.36 0 001.22.798c.391.148.974.32 2.05.37 1.226.056 1.594.068 4.716.068s3.49-.012 4.716-.068c1.076-.05 1.659-.222 2.05-.37a3.36 3.36 0 001.22-.798 3.36 3.36 0 00.798-1.22c.148-.391.32-.974.37-2.05.056-1.226.068-1.594.068-4.716s-.012-3.49-.068-4.716c-.05-1.076-.222-1.659-.37-2.05a3.36 3.36 0 00-.798-1.22 3.36 3.36 0 00-1.22-.798c-.391-.148-.974-.32-2.05-.37-1.226-.056-1.594-.068-4.716-.068zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM17.406 5.594a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
