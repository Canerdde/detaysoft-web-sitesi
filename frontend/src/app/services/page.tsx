'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Services() {
  const services = [
    {
      id: 'e-commerce',
      title: 'E-Ticaret Çözümleri',
      description: 'Satışlarınızı artıracak, kolay yönetilebilir ve güvenli e-ticaret platformları geliştiriyoruz. Müşterilerinize sorunsuz bir alışveriş deneyimi sunun.',
      icon: '🛒',
      image: '/images/services/e-commerce.jpg',
      features: [
        'Özelleştirilebilir ürün sayfaları',
        'Güvenli ödeme sistemleri entegrasyonu',
        'Stok ve sipariş yönetimi',
        'Mobil uyumlu tasarım',
        'SEO optimizasyonu'
      ]
    },
    {
      id: 'corporate',
      title: 'Kurumsal Web Siteleri',
      description: 'Markanızı en iyi şekilde yansıtan, profesyonel kurumsal web siteleri tasarlıyoruz. İlk izlenim için güçlü bir dijital vitrin oluşturun.',
      icon: '🏢',
      image: '/images/services/corporate.jpg',
      features: [
        'Modern ve profesyonel tasarım',
        'Kolay içerik yönetimi',
        'Hızlı yükleme süreleri',
        'Blog ve haber bölümleri',
        'İletişim formları ve entegrasyonlar'
      ]
    },
    {
      id: 'mobile',
      title: 'Mobil Uygulamalar',
      description: 'İşinizi mobil cihazlara taşıyan, kullanıcı dostu mobil uygulamalar geliştiriyoruz. Müşterilerinizle her an, her yerde bağlantıda kalın.',
      icon: '📱',
      image: '/images/services/mobile.jpg',
      features: [
        'iOS ve Android platformları',
        'Kullanıcı dostu arayüz tasarımı',
        'Performans optimizasyonu',
        'API entegrasyonları',
        'Push bildirim sistemi'
      ]
    },
    {
      id: 'seo',
      title: 'SEO & Dijital Pazarlama',
      description: 'Arama motorlarında üst sıralarda yer almanızı sağlayan SEO çalışmaları ve dijital pazarlama stratejileri geliştiriyoruz. Online görünürlüğünüzü artırın.',
      icon: '🔍',
      image: '/images/services/seo.jpg',
      features: [
        'Anahtar kelime analizi',
        'İçerik stratejisi',
        'Teknik SEO iyileştirmeleri',
        'Sosyal medya yönetimi',
        'Performans raporlama'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Hizmetlerimiz</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            DetaySoft olarak, işletmenizin dijital dünyada başarılı olması için ihtiyaç duyduğu tüm hizmetleri sunuyoruz.
            Modern teknolojiler ve yenilikçi yaklaşımlarla işinizi büyütmeye yardımcı oluyoruz.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-60 w-full overflow-hidden">
                  {service.image && (
                    <div className="w-full h-full relative">
                      <Image 
                        src={service.image} 
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/0 flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold leading-7 text-white">
                        <span className="mr-2">{service.icon}</span>
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-base text-gray-600">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span className="font-medium">Detaylı Bilgi</span>
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
        
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Özel İhtiyaçlarınız Mı Var?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Size özel çözüm geliştirmek için ekibimiz her zaman yanınızda. Projenizin detaylarını konuşalım.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
            >
              Ücretsiz Danışmanlık Alın
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 