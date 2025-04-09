'use client';

import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: false });

    try {
      // Burada gerçek bir API çağrısı yapılacak
      // Şimdi sadece başarılı olduğunu simüle ediyoruz
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({ submitted: true, submitting: false, error: false });
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setFormStatus({ submitted: false, submitting: false, error: true });
    }
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 lg:mx-0 lg:max-w-none">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">İletişime Geçin</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Proje teklifi, bilgi almak veya herhangi bir soru için bize ulaşın. En kısa sürede size dönüş yapacağız.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">İletişim Bilgilerimiz</h3>
              <dl className="mt-8 space-y-6">
                <dt className="sr-only">Telefon</dt>
                <dd className="flex">
                  <PhoneIcon className="h-6 w-6 text-blue-600 flex-shrink-0" aria-hidden="true" />
                  <span className="ml-3 text-gray-600">+90 (555) 123 4567</span>
                </dd>
                <dt className="sr-only">E-posta</dt>
                <dd className="flex">
                  <EnvelopeIcon className="h-6 w-6 text-blue-600 flex-shrink-0" aria-hidden="true" />
                  <span className="ml-3 text-gray-600">info@detaysoft.com</span>
                </dd>
                <dt className="sr-only">Adres</dt>
                <dd className="flex">
                  <MapPinIcon className="h-6 w-6 text-blue-600 flex-shrink-0" aria-hidden="true" />
                  <span className="ml-3 text-gray-600">
                    Merkez Mah. Atatürk Cad. No:123<br />
                    Kat:5 Daire:12<br />
                    İstanbul, Türkiye
                  </span>
                </dd>
              </dl>

              <div className="mt-10 rounded-lg bg-gray-50 p-8">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Çalışma Saatleri</h3>
                <dl className="mt-4 space-y-2 text-sm leading-6 text-gray-600">
                  <div className="flex">
                    <dt className="w-1/2 flex-none">Pazartesi - Cuma:</dt>
                    <dd>09:00 - 18:00</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-1/2 flex-none">Cumartesi:</dt>
                    <dd>10:00 - 14:00</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-1/2 flex-none">Pazar:</dt>
                    <dd>Kapalı</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 rounded-xl bg-white shadow-lg p-8 border border-gray-200">
              {formStatus.submitted ? (
                <div className="rounded-md bg-green-50 p-6 text-center">
                  <h3 className="text-xl font-semibold text-green-800">Teşekkürler!</h3>
                  <p className="mt-2 text-green-700">
                    Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Ad Soyad
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                        E-posta
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                        Telefon
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                        Konu
                      </label>
                      <div className="mt-2.5">
                        <select
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        >
                          <option value="">Lütfen seçin</option>
                          <option value="Proje Teklifi">Proje Teklifi</option>
                          <option value="E-Ticaret Çözümleri">E-Ticaret Çözümleri</option>
                          <option value="Kurumsal Web Sitesi">Kurumsal Web Sitesi</option>
                          <option value="Mobil Uygulama">Mobil Uygulama</option>
                          <option value="SEO & Dijital Pazarlama">SEO & Dijital Pazarlama</option>
                          <option value="Diğer">Diğer</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                        Mesajınız
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          value={formState.message}
                          onChange={handleChange}
                          required
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                      className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-70"
                    >
                      {formStatus.submitting ? 'Gönderiliyor...' : 'Gönder'}
                    </button>
                  </div>
                  {formStatus.error && (
                    <div className="text-red-600 text-sm">
                      Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-16 rounded-lg overflow-hidden border border-gray-200 shadow-md">
          <div className="aspect-[16/9] w-full bg-gray-100 flex items-center justify-center">
            <div className="text-center p-12">
              <p className="text-gray-500">Harita Görünümü</p>
              <p className="text-sm text-gray-400 mt-2">Gerçek bir harita entegrasyonu burada olacak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 