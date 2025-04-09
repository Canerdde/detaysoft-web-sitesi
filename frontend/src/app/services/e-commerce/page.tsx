'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import TeklifButton from '@/components/TeklifButton';

export default function ECommerce() {
  const features = [
    {
      title: 'Özelleştirilebilir Mağaza Tasarımı',
      description: 'Markanızın kimliğine uygun, tamamen özelleştirilebilir e-ticaret mağazaları tasarlıyoruz. Her detay, kullanıcı deneyimini optimize etmek için düşünülmüştür.',
      icon: '🎨'
    },
    {
      title: 'Kolay Ürün Yönetimi',
      description: 'Ürünlerinizi eklemek, düzenlemek ve kategorize etmek için sezgisel bir yönetim paneli. Toplu ürün yükleme, stok takibi ve varyasyon yönetimi kolaylığı.',
      icon: '📦'
    },
    {
      title: 'Güvenli Ödeme Sistemleri',
      description: 'Tüm popüler ödeme yöntemlerini entegre ediyoruz. Kredi kartı, havale, kapıda ödeme ve online ödeme sistemleri ile müşterilerinize seçenek sunun.',
      icon: '💳'
    },
    {
      title: 'Mobil Optimizasyon',
      description: 'Mobil cihazlarda mükemmel çalışan, hızlı ve kullanıcı dostu e-ticaret siteleri. Müşterileriniz her yerden alışveriş yapabilir.',
      icon: '📱'
    },
    {
      title: 'SEO Dostu Yapı',
      description: 'Arama motorlarında üst sıralarda yer almanızı sağlayan SEO uyumlu altyapı. Ürünleriniz potansiyel müşterileriniz tarafından kolayca bulunabilir.',
      icon: '🔍'
    },
    {
      title: 'Entegrasyon Çözümleri',
      description: 'Kargo şirketleri, muhasebe yazılımları, CRM sistemleri ve pazaryerleri ile entegrasyonlar. Tüm iş süreçlerinizi tek noktadan yönetin.',
      icon: '🔄'
    }
  ];

  const cases = [
    {
      title: 'ModaBoutiqueOnline',
      description: 'Yerel bir butik mağaza için geliştirdiğimiz e-ticaret çözümü ile satışlarını %200 artırdı ve uluslararası pazarlara açıldı.',
      image: '/images/portfolio/ecommerce-1.jpg'
    },
    {
      title: 'OrganikoMarket',
      description: 'Organik gıda satan bir işletme için kurduğumuz e-ticaret sistemi, abonelik modeli ve düzenli teslimat özellikleri ile müşteri memnuniyetini artırdı.',
      image: '/images/portfolio/ecommerce-2.jpg'
    }
  ];

  const faqs = [
    {
      question: 'E-ticaret sitemi kurmak ne kadar sürer?',
      answer: 'Projenin kapsamına bağlı olarak, temel bir e-ticaret sitesi genellikle 3-6 hafta içinde hazır olabilir. Daha karmaşık ve özelleştirilmiş projeler 8-12 hafta sürebilir.'
    },
    {
      question: 'Hangi e-ticaret platformlarını kullanıyorsunuz?',
      answer: 'Projeleriniz için WooCommerce, Shopify, Magento ve özel geliştirilmiş çözümler sunuyoruz. İhtiyaçlarınıza ve bütçenize en uygun platformu birlikte seçiyoruz.'
    },
    {
      question: 'E-ticaret sitem için aylık bakım ücreti ne kadar?',
      answer: 'Bakım paketlerimiz, sitenizin boyutuna ve ihtiyaçlarınıza göre değişmektedir. Hosting, güvenlik güncellemeleri, yedekleme ve temel teknik destek içeren paketlerimiz bulunmaktadır.'
    },
    {
      question: 'Mobil uygulama da sunuyor musunuz?',
      answer: 'Evet, e-ticaret sitenize ek olarak iOS ve Android uygulamaları da geliştiriyoruz. Mobil uygulamalar, sitenizin bir uzantısı olarak çalışır ve aynı yönetim panelinden kontrol edilebilir.'
    },
    {
      question: 'Sitenin SEO çalışmasını da yapıyor musunuz?',
      answer: 'Evet, tüm e-ticaret projelerimizde temel SEO optimizasyonu standart olarak sunulmaktadır. Ayrıca, daha kapsamlı SEO hizmetleri için özel paketlerimiz bulunmaktadır.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="/images/services/e-commerce-hero.jpg" 
            alt="E-Ticaret Çözümleri" 
            fill 
            className="object-cover object-center" 
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:px-8 lg:py-32">
          <div className="md:max-w-2xl lg:max-w-3xl">
            <Link href="/services" className="inline-flex items-center text-sm text-white mb-6 hover:text-blue-200">
              <ArrowLeftIcon className="h-4 w-4 mr-1" />
              <span>Tüm Hizmetler</span>
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              E-Ticaret Çözümleri
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl">
              Online satışlarınızı artıracak, müşterilerinize sorunsuz alışveriş deneyimi sunacak
              ve işinizi büyütmenize yardımcı olacak modern e-ticaret platformları geliştiriyoruz.
            </p>
            <div className="mt-10">
              <TeklifButton className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md text-base font-semibold shadow-md transition-colors duration-200">
                Ücretsiz Keşif Görüşmesi
              </TeklifButton>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Kapsamlı Çözüm</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              E-Ticaret Çözümlerimizin Özellikleri
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              DetaySoft olarak, işletmenizin online satışlarını artırmak için ihtiyaç duyduğu tüm özelliklerle 
              donatılmış e-ticaret çözümleri sunuyoruz.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-5">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Başarı Hikayeleri</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Başarılı E-Ticaret Projelerimiz
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              İşletmelere nasıl değer kattığımızı ve online satışlarını nasıl artırdığımızı gösteren örnek projelerimiz.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {cases.map((caseStudy, index) => (
                <div key={index} className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                  <div className="relative h-64">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{caseStudy.title}</h3>
                    <p className="text-gray-600">{caseStudy.description}</p>
                    <div className="mt-6">
                      <Link
                        href="/portfolio"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Daha fazla proje gör
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Çalışma Metodolojimiz</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              E-Ticaret Projesi Sürecimiz
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              E-ticaret sitenizi hayata geçirirken izlediğimiz adımlar ve nasıl çalıştığımız hakkında bilgi edinin.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-12 gap-x-8 lg:grid-cols-3">
              <div className="relative flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-6">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Keşif ve Planlama</h3>
                <p className="text-gray-600 text-center">İhtiyaçlarınızı anlamak, hedeflerinizi belirlemek ve projenizin kapsamını netleştirmek için detaylı bir keşif toplantısı yapıyoruz.</p>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-6">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Tasarım ve Geliştirme</h3>
                <p className="text-gray-600 text-center">Markanıza uygun, kullanıcı dostu bir arayüz tasarlıyor ve ardından e-ticaret platformunuzu geliştiriyoruz.</p>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-6">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Test ve Lansman</h3>
                <p className="text-gray-600 text-center">Kapsamlı testler yapıyor, içerikleri yüklüyor ve sitenizi canlıya alıyoruz. Lansman sonrası desteğimiz devam ediyor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Sıkça Sorulan Sorular</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              E-Ticaret Çözümlerimiz Hakkında
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              E-ticaret projelerimiz hakkında merak edilenler ve sıkça sorulan sorulara yanıtlarımız.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              E-Ticaret Sitenizi Kurmaya Hazır Mısınız?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-200">
              Online satışlarınızı artıracak, müşterilerinize benzersiz bir alışveriş deneyimi sunacak 
              e-ticaret çözümünüz için hemen iletişime geçin.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <TeklifButton className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Teklif Alın
              </TeklifButton>
              <Link href="/portfolio" className="text-base font-semibold leading-6 text-white hover:text-blue-100">
                Portfolyomuza Göz Atın <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 