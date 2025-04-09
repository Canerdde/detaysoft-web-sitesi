import { CheckIcon, PlusCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import TeklifButton from '@/components/TeklifButton';
import Image from 'next/image';

export const metadata = {
  title: 'Paketlerimiz | DetaySoft',
  description: 'DetaySoft web geliştirme ve dijital çözüm paketleri. İşletmeniz için en uygun paketi seçin.',
};

export default function PackagesPage() {
  const packages = [
    {
      name: 'Başlangıç',
      price: '5.000',
      description: 'Yeni başlayan işletmeler için uygun fiyatlı web çözümü',
      features: [
        'Kurumsal web sitesi (5-10 sayfa)',
        'Mobil uyumlu tasarım',
        'İletişim formu',
        'SEO temel optimizasyon',
        'Sosyal medya entegrasyonu',
        '3 aylık ücretsiz teknik destek',
        'İlk 1 yıl domain ve hosting hediye',
      ],
      popular: false,
      cta: 'Paketi Seç',
      icon: '🚀'
    },
    {
      name: 'Profesyonel',
      price: '12.000',
      description: 'Büyüyen işletmeler için gelişmiş dijital varlık',
      features: [
        'Kurumsal web sitesi (10-20 sayfa)',
        'Gelişmiş responsive tasarım',
        'Blog yönetimi',
        'İçerik yönetim sistemi',
        'Gelişmiş SEO optimizasyonu',
        'Çoklu dil desteği',
        'Hızlı sayfa yükleme optimizasyonu',
        '6 aylık ücretsiz teknik destek',
        'İlk 1 yıl domain ve hosting hediye',
      ],
      popular: true,
      cta: 'Paketi Seç',
      icon: '💼'
    },
    {
      name: 'E-Ticaret',
      price: '20.000',
      description: 'Online satış yapmak isteyen işletmeler için kapsamlı çözüm',
      features: [
        'Tam kapsamlı e-ticaret sitesi',
        'Ürün yönetim paneli',
        'Ödeme sistemi entegrasyonu',
        'Stok yönetimi',
        'Müşteri üyelik sistemi',
        'Toplu ürün yükleme',
        'Mobil uyguma desteği',
        'İndirim ve kupon sistemleri',
        '12 aylık ücretsiz teknik destek',
        'İlk 1 yıl domain ve hosting hediye',
      ],
      popular: false,
      cta: 'Paketi Seç',
      icon: '🛒'
    },
    {
      name: 'Premium',
      price: '30.000',
      description: 'Eksiksiz dijital dönüşüm isteyen büyük işletmeler için',
      features: [
        'Tam kapsamlı kurumsal site veya e-ticaret',
        'Özel tasarımlı kullanıcı arayüzü',
        'İleri düzey güvenlik önlemleri',
        'Tamamen özelleştirilmiş fonksiyonlar',
        'API entegrasyonları',
        'Mobil uygulama geliştirme',
        'Özel CRM entegrasyonu',
        'Performans optimizasyonu',
        '24 aylık ücretsiz teknik destek',
        'İlk 1 yıl domain ve hosting hediye',
        'Yıllık SEO danışmanlığı',
      ],
      popular: false,
      cta: 'Paketi Seç',
      highlight: true,
      icon: '✨'
    },
    {
      name: 'Yıllık Bakım',
      price: '3.600',
      description: 'Mevcut web siteniz için yıllık bakım ve destek hizmeti',
      features: [
        'Aylık güvenlik güncellemeleri',
        'Haftalık yedekleme',
        'Teknik destek',
        'Site içerik güncellemeleri (aylık 2 saat)',
        'Hosting ve domain yönetimi',
        'SSL sertifikası',
        'Performans optimizasyonu',
        'Sorun giderme ve hata düzeltmeleri',
        'Domain ve hosting ücretleri dahil',
      ],
      popular: false,
      cta: 'Bakım Planı Al',
      isMonthly: true,
      icon: '🔧'
    }
  ];

  const freeFeatures = [
    'İlk 1 yıl domain ücreti HEDİYE',
    'İlk 1 yıl hosting hizmeti HEDİYE',
    'SSL sertifikası dahil',
    'Sınırsız e-posta hesabı',
    'Teknik destek'
  ];

  return (
    <div className="pt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen text-gray-800">
      {/* Page Header */}
      <div className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-[20%] w-64 h-64 rounded-full bg-blue-400/20"></div>
          <div className="absolute bottom-10 right-[10%] w-80 h-80 rounded-full bg-indigo-400/20"></div>
          
          {/* Abstract shapes */}
          <div className="absolute top-1/3 left-0 h-12 w-12 rounded-full bg-blue-300/20"></div>
          <div className="absolute bottom-1/3 right-1/4 h-8 w-8 rounded-full bg-indigo-300/20"></div>
          <div className="absolute top-1/4 right-1/3 h-16 w-16 rounded-full bg-blue-200/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Paketlerimiz
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-800/70">
              İşletmenizin ihtiyaçlarına ve bütçenize uygun çözümler sunuyoruz.
            </p>
          </div>
        </div>
        
        {/* Header Decorative Waves */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full text-blue-500/10">
            <path fill="currentColor" fillOpacity="1" d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,42.7C840,43,960,53,1080,53.3C1200,53,1320,43,1380,37.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Hero Image Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-background.jpg" 
              alt="Background"
              fill
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-indigo-700/80 mix-blend-multiply"></div>
          </div>
          <div className="relative px-8 py-16 sm:px-16 sm:py-20 lg:py-24">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <SparklesIcon className="inline-block h-8 w-8 mr-2 text-yellow-300" />
                  İlk Yıl Domain ve Hosting Hediye!
                </h2>
                <p className="mt-4 max-w-xl text-lg text-blue-100">
                  Tüm web site paketlerimizde ilk yıl domain ve hosting hizmeti ücretsiz sunulmaktadır.
                  Bu avantajdan yararlanarak işletmenizi hemen online dünyaya taşıyın.
                </p>
              </div>
              <div className="flex flex-wrap justify-center">
                {freeFeatures.map((feature, index) => (
                  <span 
                    key={index} 
                    className="flex items-center m-1 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm border border-white/30 shadow-sm"
                  >
                    <CheckIcon className="h-4 w-4 mr-1.5 text-yellow-300" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Package Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Temel Paketlerimiz</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            İşletmenizin ihtiyaçlarına göre uygun paketi seçerek dijital dönüşümünüzü başlatın
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {packages.slice(0, 3).map((pkg) => (
            <div 
              key={pkg.name} 
              className={`flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-10px] hover:shadow-xl ${
                pkg.popular 
                  ? 'shadow-lg shadow-blue-200 bg-gradient-to-b from-white to-blue-50 border-2 border-blue-200' 
                  : 'shadow-md shadow-gray-100 bg-white border border-gray-100'
              }`}
            >
              {pkg.popular && (
                <div className="bg-blue-600 text-center py-1.5 text-sm font-semibold text-white">
                  En Çok Tercih Edilen
                </div>
              )}
              
              <div className="p-8 flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
                  <div className="text-3xl">{pkg.icon}</div>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{pkg.price}</span>
                  <span className="ml-1 text-xl font-medium text-gray-500">₺</span>
                  <span className="ml-2 text-sm text-gray-500">'den başlayan</span>
                </div>
                <p className="mt-3 text-gray-600">{pkg.description}</p>
                
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className={`h-5 w-5 flex-shrink-0 ${pkg.popular ? 'text-blue-600' : 'text-blue-500'}`} />
                      <span className="ml-2 text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <TeklifButton 
                  className={`w-full rounded-md px-4 py-2.5 text-base font-semibold shadow-md transition-colors ${
                    pkg.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
                  }`}
                >
                  {pkg.cta}
                </TeklifButton>
              </div>
            </div>
          ))}
        </div>
        
        {/* Premium & Maintenance Plans */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Özel Paketlerimiz</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Daha kapsamlı ihtiyaçlar ve uzun vadeli çözümler için özel paketlerimizi inceleyin
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {packages.slice(3).map((pkg) => (
              <div 
                key={pkg.name} 
                className={`flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-10px] hover:shadow-xl ${
                  pkg.highlight 
                    ? 'shadow-lg shadow-indigo-200 bg-gradient-to-b from-white to-indigo-50 border-2 border-indigo-200' 
                    : 'shadow-md shadow-gray-100 bg-white border border-gray-100'
                }`}
              >
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{pkg.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
                    </div>
                    {pkg.highlight && (
                      <span className="bg-indigo-100 border border-indigo-200 px-3 py-1 rounded-full text-xs font-medium text-indigo-700">
                        Gelişmiş Çözüm
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold tracking-tight text-gray-900">{pkg.price}</span>
                    <span className="ml-1 text-xl font-medium text-gray-500">₺</span>
                    {pkg.isMonthly && (
                      <span className="ml-2 text-sm text-gray-500">/ yıllık</span>
                    )}
                    {!pkg.isMonthly && (
                      <span className="ml-2 text-sm text-gray-500">'den başlayan</span>
                    )}
                  </div>
                  <p className="mt-4 text-gray-600">{pkg.description}</p>
                  
                  <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckIcon className={`h-5 w-5 flex-shrink-0 ${pkg.highlight ? 'text-indigo-600' : 'text-blue-500'}`} />
                        <span className="ml-2 text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <TeklifButton 
                    className={`w-full rounded-md px-4 py-2.5 text-base font-semibold shadow-md transition-colors ${
                      pkg.highlight 
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                        : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
                    }`}
                  >
                    {pkg.cta}
                  </TeklifButton>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Custom Solution */}
        <div className="mt-32 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative">
            <div className="absolute inset-0">
              <Image
                src="/images/hero-background.jpg" 
                alt="Background"
                fill
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 to-indigo-800/90 mix-blend-multiply"></div>
            </div>
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="md:max-w-2xl mb-8 md:mb-0">
                  <h2 className="text-3xl font-bold text-white">Özel Çözüm mü Arıyorsunuz?</h2>
                  <p className="mt-4 text-lg text-blue-100">
                    İşletmenize özel ihtiyaçlar için size özel teklif hazırlayalım. İhtiyaçlarınızı dinleyip, 
                    bütçenize uygun çözümler sunalım. Tüm özel çözümlerimizde ilk yıl domain ve hosting hizmeti ücretsizdir.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <div className="flex items-center text-white">
                      <CheckIcon className="h-5 w-5 text-green-300 mr-2" />
                      <span>Kişiselleştirilmiş tasarım</span>
                    </div>
                    <div className="flex items-center text-white">
                      <CheckIcon className="h-5 w-5 text-green-300 mr-2" />
                      <span>Özel yazılım çözümleri</span>
                    </div>
                    <div className="flex items-center text-white">
                      <CheckIcon className="h-5 w-5 text-green-300 mr-2" />
                      <span>Öncelikli teknik destek</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-8 py-4 bg-white text-blue-800 rounded-lg shadow-lg font-semibold transition-colors duration-300 hover:bg-blue-50"
                >
                  <PlusCircleIcon className="h-5 w-5 mr-2" />
                  <span>Özel Teklif İsteyin</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQs & Payment Terms */}
        <div className="mt-32 grid gap-10 lg:grid-cols-2">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
            <h4 className="font-semibold text-xl text-gray-900 mb-6">Ödeme Koşulları</h4>
            <p className="text-gray-600 mb-6">
              Tüm projelerimizde ödeme aşağıdaki şekilde yapılmaktadır:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start p-4 bg-blue-50 rounded-lg">
                <div className="flex-shrink-0 p-1 rounded-full bg-blue-100 text-blue-600">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <h5 className="font-medium text-gray-900">Proje başlangıcında</h5>
                  <p className="text-gray-600">Toplam tutarın <span className="font-medium text-blue-600">%50</span>'si proje başlangıcında ödenir</p>
                </div>
              </li>
              <li className="flex items-start p-4 bg-blue-50 rounded-lg">
                <div className="flex-shrink-0 p-1 rounded-full bg-blue-100 text-blue-600">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <h5 className="font-medium text-gray-900">Proje tesliminde</h5>
                  <p className="text-gray-600">Kalan <span className="font-medium text-blue-600">%50</span> proje tesliminde ödenir</p>
                </div>
              </li>
              <li className="flex items-start p-4 bg-green-50 rounded-lg">
                <div className="flex-shrink-0 p-1 rounded-full bg-green-100 text-green-600">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <h5 className="font-medium text-gray-900">İlk yıl domain ve hosting hediye</h5>
                  <p className="text-gray-600">Tüm paketlerde ilk yıl domain ve hosting hizmeti ücrete dahildir</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
            <h4 className="font-semibold text-xl text-gray-900 mb-6">Sıkça Sorulan Sorular</h4>
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-medium text-blue-700">Projelere ortalama teslim süresi ne kadardır?</h5>
                <p className="mt-2 text-gray-600">Proje tipine bağlı olarak 2-6 hafta arasında değişmektedir. E-ticaret projeleri daha uzun sürebilir.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-medium text-blue-700">Paketlere geçiş yapabilir miyim?</h5>
                <p className="mt-2 text-gray-600">Evet, ihtiyaçlarınız değiştikçe paketler arasında geçiş yapabilirsiniz. Fiyat farkı uygulanır.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="font-medium text-blue-700">İlk yıl sonrası domain ve hosting ücreti nedir?</h5>
                <p className="mt-2 text-gray-600">İlk yıl sonrası hosting ve domain yenileme bedeli yıllık <span className="font-medium text-blue-600">1.200₺</span>'dir.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 