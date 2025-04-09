'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import TeklifButton from '@/components/TeklifButton';

export default function SEO() {
  const features = [
    {
      title: 'SEO Analizi ve Strateji',
      description: 'Sitenizin mevcut durumunu analiz ederek, rakiplerinizi inceleyerek ve hedef kitlenizi belirleyerek kişiselleştirilmiş SEO stratejileri oluşturuyoruz.',
      icon: '🔍'
    },
    {
      title: 'Anahtar Kelime Araştırması',
      description: 'Sektörünüze özgü, yüksek arama hacmine sahip ve rekabet edilebilir anahtar kelimeleri belirliyoruz. İçerikleriniz doğru kitleye ulaşır.',
      icon: '🔤'
    },
    {
      title: 'Site İçi Optimizasyon',
      description: 'Meta etiketleri, başlıklar, içerik yapılandırması ve teknik SEO iyileştirmeleri ile sitenizin arama motorları tarafından daha iyi anlaşılmasını sağlıyoruz.',
      icon: '⚙️'
    },
    {
      title: 'İçerik Stratejisi',
      description: 'SEO dostu, değerli ve özgün içerikler oluşturarak sitenizin otoritesini artırıyoruz. Blog yazıları, sosyal medya içerikleri ve e-posta kampanyaları.',
      icon: '📝'
    },
    {
      title: 'Backlink Çalışmaları',
      description: 'Kaliteli ve doğal bağlantılar oluşturarak site otoritenizi güçlendiriyoruz. Güvenilir kaynaklardan gelen backlinkler sıralamanızı yükseltir.',
      icon: '🔗'
    },
    {
      title: 'Performans Analizi ve Raporlama',
      description: 'SEO çalışmalarının sonuçlarını düzenli olarak izliyor ve detaylı raporlar sunuyoruz. Stratejilerimizi veriye dayalı olarak sürekli iyileştiriyoruz.',
      icon: '📊'
    }
  ];

  const cases = [
    {
      title: 'BestiFurniture',
      description: 'Mobilya perakendecisi için yaptığımız SEO çalışmaları ile organik trafik 6 ay içinde %185 arttı ve dönüşüm oranlarında %32 iyileşme sağlandı.',
      image: '/images/portfolio/seo-1.jpg'
    },
    {
      title: 'HealthPlus',
      description: 'Sağlık sektöründeki bir müşterimiz için oluşturduğumuz içerik stratejisi, 3 ay içinde arama motoru sıralamalarında ilk 3 pozisyona yükselme sağladı.',
      image: '/images/portfolio/seo-2.jpg'
    }
  ];

  const faqs = [
    {
      question: 'SEO çalışmalarının sonuçlarını ne zaman görebilirim?',
      answer: 'SEO uzun vadeli bir süreçtir. İlk sonuçları genellikle 3-6 ay içinde görmeye başlarsınız, ancak tam etkinin ortaya çıkması 6-12 ay sürebilir. Rekabete, sitenizin yaşına ve sektörünüze bağlı olarak bu süre değişebilir.'
    },
    {
      question: 'SEO çalışmaları için aylık paketleriniz var mı?',
      answer: 'Evet, farklı ihtiyaçlara ve bütçelere uygun aylık SEO paketlerimiz bulunmaktadır. Her paket, düzenli izleme, raporlama ve sürekli optimizasyon içerir. İhtiyaçlarınıza göre özelleştirilmiş çözümler de sunuyoruz.'
    },
    {
      question: 'Sosyal medya yönetimi hizmeti de veriyor musunuz?',
      answer: 'Evet, SEO çalışmalarımızın yanı sıra kapsamlı sosyal medya yönetimi hizmetleri de sunuyoruz. İçerik oluşturma, planlama, paylaşım ve topluluk yönetimi ile markanızın sosyal medyada etkin bir şekilde yer almasını sağlıyoruz.'
    },
    {
      question: 'Yerel SEO çalışmaları yapıyor musunuz?',
      answer: 'Evet, özellikle yerel işletmeler için optimize edilmiş SEO stratejileri geliştiriyoruz. Google İşletme Profili optimizasyonu, yerel dizinlere kayıt, yerel anahtar kelime çalışmaları ve çevrimiçi değerlendirme yönetimi ile yerel görünürlüğünüzü artırıyoruz.'
    },
    {
      question: 'Site hızlandırma ve teknik SEO çalışmaları da yapıyor musunuz?',
      answer: 'Kesinlikle. Teknik SEO hizmetlerimiz arasında site hızı optimizasyonu, mobil uyumluluk iyileştirmeleri, yapısal veri işaretlemeleri, XML site haritaları oluşturma ve robotlar.txt düzenlemeleri bulunmaktadır. Bu çalışmalar, arama motorlarının sitenizi daha iyi anlamasını sağlar.'
    }
  ];

  const tools = [
    {
      name: 'Google Analytics',
      icon: '/images/tools/google-analytics.svg'
    },
    {
      name: 'Google Search Console',
      icon: '/images/tools/search-console.svg'
    },
    {
      name: 'SEMrush',
      icon: '/images/tools/semrush.svg'
    },
    {
      name: 'Ahrefs',
      icon: '/images/tools/ahrefs.svg'
    },
    {
      name: 'Moz',
      icon: '/images/tools/moz.svg'
    },
    {
      name: 'Yoast SEO',
      icon: '/images/tools/yoast.svg'
    },
    {
      name: 'Screaming Frog',
      icon: '/images/tools/screaming-frog.svg'
    },
    {
      name: 'Google Tag Manager',
      icon: '/images/tools/gtm.svg'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="/images/services/seo-hero.jpg" 
            alt="SEO & Dijital Pazarlama" 
            fill 
            className="object-cover object-center" 
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:px-8 lg:py-32">
          <div className="md:max-w-2xl lg:max-w-3xl">
            <Link href="/services" className="inline-flex items-center text-sm text-green-200 mb-6 hover:text-white">
              <ArrowLeftIcon className="h-4 w-4 mr-1" />
              <span>Tüm Hizmetler</span>
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              SEO & Dijital Pazarlama
            </h1>
            <p className="mt-6 text-xl text-green-100 max-w-3xl">
              Online görünürlüğünüzü artırın, arama motoru sıralamalarında yükselin ve doğru müşterilere ulaşın.
              Veriye dayalı SEO ve dijital pazarlama stratejileri ile işinizi büyütün.
            </p>
            <div className="mt-10">
              <TeklifButton className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-md text-base font-semibold shadow-md transition-colors duration-200">
                Ücretsiz SEO Analizi
              </TeklifButton>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">Kapsamlı SEO Hizmetleri</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              SEO & Dijital Pazarlama Çözümlerimiz
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              İşletmenizin online performansını artırmak için ihtiyacınız olan tüm SEO ve dijital pazarlama
              hizmetlerini sunuyoruz.
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

      {/* Process Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">Çalışma Metodolojimiz</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              SEO Çalışması Sürecimiz
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Veri odaklı, şeffaf ve sonuç garantili bir yaklaşımla çalışıyoruz.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-12 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="relative flex flex-col items-center">
                <div className="bg-green-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-6">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Analiz</h3>
                <p className="text-gray-600 text-center">Site analizi, rakip araştırması ve anahtar kelime stratejisi oluşturma.</p>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="bg-green-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-6">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Optimizasyon</h3>
                <p className="text-gray-600 text-center">Teknik SEO iyileştirmeleri, site içi optimizasyon ve içerik stratejisi uygulama.</p>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="bg-green-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-6">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Yayılma</h3>
                <p className="text-gray-600 text-center">Backlink çalışmaları, sosyal sinyaller oluşturma ve içerik pazarlama.</p>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="bg-green-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-6">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Ölçüm</h3>
                <p className="text-gray-600 text-center">Performans analizi, raporlama ve sürekli iyileştirme.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">Başarı Hikayeleri</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              SEO Çalışmalarımızdan Örnekler
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Müşterilerimiz için sağladığımız organik trafik artışı ve dönüşüm oranı iyileştirmeleri.
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
                        className="text-green-600 hover:text-green-800 font-medium"
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

      {/* Tools Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">Kullandığımız Araçlar</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              SEO ve Analiz Araçlarımız
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              En güncel ve etkili SEO araçlarıyla veriye dayalı kararlar alıyoruz.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
              {tools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-gray-100 p-4 rounded-lg h-20 w-20 flex items-center justify-center">
                    <Image src={tool.icon} alt={tool.name} width={48} height={48} />
                  </div>
                  <p className="mt-4 text-gray-700 font-medium text-center">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">Sıkça Sorulan Sorular</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              SEO ve Dijital Pazarlama Hakkında
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              SEO ve dijital pazarlama hizmetlerimiz hakkında sıkça sorulan sorular.
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
      <div className="bg-green-700">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Online Görünürlüğünüzü Artırmaya Hazır Mısınız?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-green-100">
              SEO ve dijital pazarlama çalışmalarıyla organik trafiğinizi artırmak, müşteri 
              kazanımınızı güçlendirmek için hemen harekete geçin.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <TeklifButton className="rounded-md bg-white px-6 py-3 text-base font-semibold text-green-700 shadow-sm hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Ücretsiz SEO Analizi Alın
              </TeklifButton>
              <Link href="/portfolio" className="text-base font-semibold leading-6 text-white hover:text-green-100">
                Başarı Hikayelerimizi İnceleyin <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 