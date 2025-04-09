'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import TeklifButton from '@/components/TeklifButton';

export default function Corporate() {
  const features = [
    {
      title: 'Modern Tasarım',
      description: 'Markanızın kimliğine uygun, etkileyici ve profesyonel görünümlü web siteleri tasarlıyoruz. Görsel açıdan çarpıcı ve kullanıcı dostu arayüzler sunuyoruz.',
      icon: '🎨'
    },
    {
      title: 'Kolay İçerik Yönetimi',
      description: 'Güncellemelerinizi kolayca yapabileceğiniz, kullanımı basit bir yönetim paneli. Teknik bilgiye ihtiyaç duymadan içeriklerinizi yönetin.',
      icon: '📝'
    },
    {
      title: 'Mobil Uyumlu Tasarım',
      description: 'Tüm cihazlarda (bilgisayar, tablet, mobil) mükemmel görünen responsive tasarım. Ziyaretçileriniz her cihazda sorunsuz deneyim yaşar.',
      icon: '📱'
    },
    {
      title: 'Hızlı Yükleme Performansı',
      description: 'Optimize edilmiş kodlama ve modern teknolojilerle hızlı yüklenen web siteleri. Ziyaretçileriniz beklemez, hemen içeriğinize ulaşır.',
      icon: '⚡'
    },
    {
      title: 'SEO Uyumlu Altyapı',
      description: 'Arama motorlarında üst sıralarda yer almanızı sağlayan SEO dostu altyapı. Müşterileriniz sizi kolayca bulabilir.',
      icon: '🔍'
    },
    {
      title: 'Güvenlik ve Bakım',
      description: 'Güvenlik açıklarına karşı korumalı, düzenli yedeklenen ve sürekli güncellenen web siteleri. İşiniz güvende, 7/24 destek hizmetimizle yanınızdayız.',
      icon: '🛡️'
    }
  ];

  const cases = [
    {
      title: 'Arkitekt Mimarlık',
      description: 'Minimalist tasarımıyla öne çıkan, portfolyo odaklı bir kurumsal web sitesi. Büyük görseller ve temiz tipografi ile mimari projeleri etkili bir şekilde sergiliyor.',
      image: '/images/portfolio/corporate-1.jpg'
    },
    {
      title: 'Global Danışmanlık',
      description: 'Profesyonel hizmetler sunan bir danışmanlık firması için geliştirdiğimiz kurumsal site, bilgi paylaşımını ve müşteri iletişimini güçlendirdi.',
      image: '/images/portfolio/corporate-2.jpg'
    }
  ];

  const faqs = [
    {
      question: 'Kurumsal web sitemi oluşturmak ne kadar sürer?',
      answer: 'Proje kapsamına bağlı olarak, temel bir kurumsal web sitesi genellikle 2-4 hafta içinde tamamlanabilir. Daha kapsamlı ve özelleştirilmiş projeler 6-8 hafta sürebilir.'
    },
    {
      question: 'Web sitem için içerik oluşturmama yardımcı olur musunuz?',
      answer: 'Evet, metin yazarlığı ve içerik oluşturma hizmetlerimiz bulunmaktadır. Markanızın sesini yansıtan, etkileyici ve SEO uyumlu içerikler hazırlıyoruz.'
    },
    {
      question: 'Web sitemi kendim güncelleyebilir miyim?',
      answer: 'Kesinlikle. Tüm projelerimizde kullanımı kolay bir içerik yönetim sistemi (CMS) sağlıyoruz. Teknik bilgiye ihtiyaç duymadan içeriklerinizi, görsellerinizi ve diğer öğeleri güncelleyebilirsiniz.'
    },
    {
      question: 'Web sitem için domain ve hosting hizmeti sunuyor musunuz?',
      answer: 'Evet, domain kaydı ve güvenilir hosting hizmetleri sunuyoruz. Tüm teknik konuları tek elden yönetebilir, size sorunsuz bir deneyim sağlayabiliriz.'
    },
    {
      question: 'Sitemin SEO çalışmasını da yapıyor musunuz?',
      answer: 'Evet, tüm web sitelerimiz SEO dostu altyapıyla geliştirilir. Temel SEO optimizasyonu standart olarak sunulmaktadır. Ayrıca, daha kapsamlı SEO hizmetleri için özel paketlerimiz bulunmaktadır.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="/images/services/corporate-hero.jpg" 
            alt="Kurumsal Web Siteleri" 
            fill 
            className="object-cover object-center" 
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:px-8 lg:py-32">
          <div className="md:max-w-2xl lg:max-w-3xl">
            <Link href="/services" className="inline-flex items-center text-sm text-gray-300 mb-6 hover:text-white">
              <ArrowLeftIcon className="h-4 w-4 mr-1" />
              <span>Tüm Hizmetler</span>
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Kurumsal Web Siteleri
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              Markanızı en iyi şekilde temsil eden, profesyonel ve etkileyici kurumsal web siteleri
              ile dijital dünyadaki vitrininizi güçlendirin.
            </p>
            <div className="mt-10">
              <TeklifButton className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md text-base font-semibold shadow-md transition-colors duration-200">
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
            <h2 className="text-base font-semibold leading-7 text-blue-600">Profesyonel Çözüm</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Kurumsal Web Site Özelliklerimiz
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              DetaySoft olarak, markanızın dijital dünyada güçlü bir şekilde temsil edilmesi için gereken
              tüm özellikleri sunan kurumsal web siteleri geliştiriyoruz.
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
              Başarılı Kurumsal Web Projelerimiz
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Farklı sektörlerden müşterilerimiz için geliştirdiğimiz kurumsal web sitesi örneklerimiz.
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
              Kurumsal Web Sitesi Geliştirme Sürecimiz
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Projenizin her aşamasında şeffaf ve işbirlikçi bir yaklaşımla çalışıyoruz.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-12 gap-x-8 lg:grid-cols-4">
              <div className="relative flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-6">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Stratejik Planlama</h3>
                <p className="text-gray-600 text-center">İhtiyaçlarınızı, hedef kitlenizi ve hedeflerinizi anlamak için detaylı bir görüşme yapıyoruz.</p>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-6">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Tasarım</h3>
                <p className="text-gray-600 text-center">Markanızın kimliğine uygun, profesyonel ve etkileyici arayüz tasarımları oluşturuyoruz.</p>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-6">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Geliştirme</h3>
                <p className="text-gray-600 text-center">Modern teknolojiler kullanarak, hızlı, güvenli ve SEO dostu web sitenizi geliştiriyoruz.</p>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-6">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Lansman ve Destek</h3>
                <p className="text-gray-600 text-center">Sitenizi yayına alıyor, eğitim veriyor ve sürekli teknik destek sağlıyoruz.</p>
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
              Kurumsal Web Siteleri Hakkında
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Kurumsal web sitesi projelerimiz hakkında sıkça sorulan soruların yanıtları.
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
              Kurumsal Web Sitenizi Yenilemeye Hazır Mısınız?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-200">
              Markanızı en iyi şekilde yansıtan, profesyonel bir kurumsal web sitesi için
              ekibimizle iletişime geçin.
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