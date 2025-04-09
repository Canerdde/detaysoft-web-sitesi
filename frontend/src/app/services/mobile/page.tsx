'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import TeklifButton from '@/components/TeklifButton';

export default function Mobile() {
  const features = [
    {
      title: 'iOS ve Android Uygulama Geliştirme',
      description: 'Her iki mobil platform için native uygulamalar geliştiriyoruz. Performans ve kullanıcı deneyiminden ödün vermeden hedef kitlenize ulaşın.',
      icon: '📱'
    },
    {
      title: 'Özel Arayüz Tasarımı',
      description: 'Kullanıcı odaklı, modern ve sezgisel arayüzler tasarlıyoruz. Markanızın kimliğini yansıtan ve kullanıcılarınızı etkileyen mobil deneyimler sunun.',
      icon: '🎨'
    },
    {
      title: 'API Entegrasyonları',
      description: 'Mevcut sistemleriniz ve üçüncü parti servislerle entegrasyon sağlıyoruz. Uygulamanız diğer platformlarla sorunsuz iletişim kurabilir.',
      icon: '🔄'
    },
    {
      title: 'Push Bildirim Sistemleri',
      description: 'Kullanıcılarla iletişimde kalmak için etkili push bildirim sistemleri. Kampanyalarınızı, güncellemelerinizi ve önemli bilgileri anında iletin.',
      icon: '🔔'
    },
    {
      title: 'Analitik ve Raporlama',
      description: 'Kullanıcı davranışlarını anlayın, uygulamanızın performansını ölçün. Veri odaklı kararlar almanızı sağlayan detaylı analitik ve raporlama.',
      icon: '📊'
    },
    {
      title: 'Sürekli Bakım ve Destek',
      description: 'Lansman sonrası sürekli bakım, güncelleme ve teknik destek. Uygulamanızın her zaman güncel ve sorunsuz çalışmasını sağlıyoruz.',
      icon: '🛠️'
    }
  ];

  const cases = [
    {
      title: 'FitnessBuddy',
      description: 'Kişisel fitness takibi yapan kullanıcı dostu bir mobil uygulama. Egzersiz programları, beslenme takibi ve ilerleme raporları sunan kapsamlı bir sağlık çözümü.',
      image: '/images/portfolio/mobile-1.jpg'
    },
    {
      title: 'DeliveryExpress',
      description: 'Yerel işletmeler için geliştirdiğimiz sipariş ve teslimat uygulaması. Müşteri ve kurye arayüzleri, ödeme entegrasyonu ve gerçek zamanlı takip özellikleriyle fark yaratıyor.',
      image: '/images/portfolio/mobile-2.jpg'
    }
  ];

  const faqs = [
    {
      question: 'Mobil uygulama geliştirme süreci ne kadar sürer?',
      answer: 'Projenin kapsamına ve karmaşıklığına bağlı olarak, ortalama bir mobil uygulama geliştirme süreci 3-6 ay sürer. Basit uygulamalar daha kısa sürede tamamlanabilirken, karmaşık projeler daha uzun zaman alabilir.'
    },
    {
      question: 'Hem iOS hem de Android için uygulama geliştiriyor musunuz?',
      answer: 'Evet, hem iOS hem de Android platformları için native uygulamalar geliştiriyoruz. Ayrıca, bütçe ve zaman kısıtlamaları olan projeler için cross-platform çözümler de sunuyoruz.'
    },
    {
      question: 'Uygulamamı App Store ve Google Play Store\'a yüklemeye yardımcı oluyor musunuz?',
      answer: 'Evet, uygulama mağazalarına yükleme sürecini sizin için yönetiyoruz. Gerekli tüm hesapları oluşturma, mağaza görsellerini hazırlama ve onay süreçlerini takip etme konularında destek sağlıyoruz.'
    },
    {
      question: 'Mevcut web sitemle entegre çalışacak bir mobil uygulama yapabilir misiniz?',
      answer: 'Kesinlikle. Web siteniz veya diğer sistemlerinizle entegre çalışacak mobil uygulamalar geliştiriyoruz. API entegrasyonları sayesinde verileriniz tüm platformlarda senkronize şekilde çalışabilir.'
    },
    {
      question: 'Uygulamamın lansman sonrası bakımı ve güncellemeleri nasıl yapılır?',
      answer: 'Lansman sonrası için bakım ve destek paketleri sunuyoruz. Bu paketler, performans izleme, hata düzeltme, küçük güncellemeler ve yeni özellik geliştirme gibi hizmetleri içerir. İşletim sistemi güncellemeleriyle uyumluluk da bu kapsamda sağlanmaktadır.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/services/mobile-hero.jpg')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:px-8 min-h-screen flex items-center">
          <div className="md:max-w-2xl lg:max-w-3xl">
            <Link href="/services" className="group inline-flex items-center text-sm text-purple-200 mb-8 hover:text-white transition-colors duration-200">
              <ArrowLeftIcon className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              <span>Tüm Hizmetler</span>
            </Link>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Mobil Uygulamalar
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-purple-100 max-w-3xl">
              Kullanıcı dostu, yüksek performanslı mobil uygulamalar ile işletmenizi her an müşterilerinizin cebine taşıyın.
              iOS ve Android için özel çözümler geliştiriyoruz.
            </p>
            <div className="mt-12 flex items-center gap-6">
              <TeklifButton className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full text-base font-semibold shadow-lg transition-all duration-200 hover:shadow-xl">
                Ücretsiz Keşif Görüşmesi
              </TeklifButton>
              <a href="#features" className="text-purple-200 hover:text-white transition-colors duration-200">
                Hizmetlerimizi Keşfedin ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600 uppercase tracking-wider">Kapsamlı Hizmetler</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Mobil Uygulama Geliştirme Özelliklerimiz
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              İşletmenizin ihtiyaçlarına göre özelleştirilmiş, modern teknolojilerle geliştirilen
              mobil uygulamalar sunuyoruz.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} 
                     className="group relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-20">
            <h2 className="text-base font-semibold leading-7 text-purple-600 uppercase tracking-wider">Başarı Hikayeleri</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Başarılı Mobil Uygulama Projelerimiz
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Farklı sektörlerden müşterilerimiz için geliştirdiğimiz mobil uygulama örneklerimiz.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {cases.map((caseStudy, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{caseStudy.title}</h3>
                    <p className="text-gray-200">{caseStudy.description}</p>
                  </div>
                </div>
                <div className="p-8 bg-white">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium group"
                  >
                    <span>Daha fazla proje gör</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-20">
            <h2 className="text-base font-semibold leading-7 text-purple-600 uppercase tracking-wider">Geliştirme Metodolojimiz</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Mobil Uygulama Geliştirme Sürecimiz
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Fikirden uygulama mağazalarında yayınlanmaya kadar izlediğimiz adımlar.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 hidden lg:block"></div>
            <div className="space-y-16 lg:space-y-0 relative">
              {[
                { number: 1, title: 'Keşif', description: 'İhtiyaçları belirleme, pazar araştırması ve proje kapsamını netleştirme.' },
                { number: 2, title: 'Tasarım', description: 'Kullanıcı deneyimi (UX) ve kullanıcı arayüzü (UI) tasarımı, wireframe ve prototip oluşturma.' },
                { number: 3, title: 'Geliştirme', description: 'Frontend ve backend kodlama, API entegrasyonları ve uygulama işlevselliğinin oluşturulması.' },
                { number: 4, title: 'Test', description: 'Kalite kontrol, kullanılabilirlik testi, hata ayıklama ve performans optimizasyonu.' },
                { number: 5, title: 'Yayınlama', description: 'Uygulama mağazalarında yayınlama, lansman sonrası izleme ve sürekli iyileştirme.' }
              ].map((step, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="w-full lg:w-1/2 relative">
                    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-purple-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold">
                          {step.number}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-20">
            <h2 className="text-base font-semibold leading-7 text-purple-600 uppercase tracking-wider">Teknoloji Yığınımız</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Kullandığımız Teknolojiler
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Modern ve güvenilir teknolojilerle yüksek kaliteli mobil uygulamalar geliştiriyoruz.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4">
            {[
              { name: 'Swift', logo: '/images/tech/swift.jpg', color: '#F05138' },
              { name: 'Kotlin', logo: '/images/tech/kotlin.jpg', color: '#7F52FF' },
              { name: 'React Native', logo: '/images/tech/react-native.jpg', color: '#61DAFB' },
              { name: 'Flutter', logo: '/images/tech/flutter.jpg', color: '#02569B' },
              { name: 'Firebase', logo: '/images/tech/firebase.jpg', color: '#FFCA28' },
              { name: 'Node.js', logo: '/images/tech/nodejs.jpg', color: '#339933' },
              { name: 'GraphQL', logo: '/images/tech/graphql.jpg', color: '#E10098' },
              { name: 'MongoDB', logo: '/images/tech/mongodb.jpg', color: '#47A248' }
            ].map((tech, index) => (
              <div key={index} className="group flex flex-col items-center">
                <div className="relative w-24 h-24 mb-6 bg-gray-50 rounded-xl p-4 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image 
                      src={tech.logo}
                      alt={tech.name}
                      fill
                      className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full flex items-center justify-center text-2xl font-bold';
                          fallback.style.color = tech.color;
                          fallback.textContent = tech.name.split(' ')[0][0];
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                </div>
                <p className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors duration-200">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-20">
            <h2 className="text-base font-semibold leading-7 text-purple-600 uppercase tracking-wider">Sıkça Sorulan Sorular</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Merak Edilenler
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Mobil uygulama geliştirme süreciyle ilgili en çok sorulan sorular ve yanıtları.
            </p>
          </div>
          <div className="mx-auto max-w-3xl divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 