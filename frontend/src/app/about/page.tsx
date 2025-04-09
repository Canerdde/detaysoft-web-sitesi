import Image from 'next/image';
import { CheckIcon, UserGroupIcon, CogIcon, LightBulbIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  const values = [
    {
      title: 'Müşteri Odaklılık',
      description: 'Her projeyi müşterilerimizin ihtiyaçlarını anlamakla başlatıyoruz. İş hedeflerinizi destekleyen çözümler sunuyoruz.',
      icon: <UserGroupIcon className="h-8 w-8" />,
      color: 'blue',
    },
    {
      title: 'Teknik Mükemmellik',
      description: 'En son teknolojileri kullanarak güvenilir, hızlı ve ölçeklenebilir çözümler geliştiriyoruz.',
      icon: <CogIcon className="h-8 w-8" />,
      color: 'indigo',
    },
    {
      title: 'Sadelik',
      description: 'Karmaşık teknik konuları basitleştirerek, müşterilerimizin kolayca anlayabilecekleri çözümler sunuyoruz.',
      icon: <LightBulbIcon className="h-8 w-8" />,
      color: 'green',
    },
    {
      title: 'Sürekli Gelişim',
      description: 'Sürekli öğrenen ve gelişen bir ekip olarak, en güncel teknolojileri ve yöntemleri kullanıyoruz.',
      icon: <ChartBarIcon className="h-8 w-8" />,
      color: 'purple',
    },
  ];

  const teamMembers = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Kurucu & CEO',
      image: '/images/hero-background.jpg',
      description: '10+ yıl yazılım geliştirme ve dijital pazarlama deneyimi. İşletmelerin dijital dönüşümüne liderlik etmektedir.',
    },
    {
      name: 'Ayşe Demir',
      role: 'Baş Tasarımcı',
      image: '/images/hero-background.jpg',
      description: 'Kullanıcı deneyimi ve arayüz tasarımı konusunda uzmanlaşmış, 7+ yıl deneyimli sanatçı ve tasarımcı.',
    },
    {
      name: 'Mehmet Kaya',
      role: 'Teknik Direktör',
      image: '/images/hero-background.jpg',
      description: 'Modern web teknolojileri konusunda uzman, karmaşık projeleri başarıyla yöneten, 8+ yıl deneyimli geliştirici.',
    },
  ];

  return (
    <div className="pt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen text-gray-800">
      {/* Page Header */}
      <div className="relative pt-16 pb-16 overflow-hidden">
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
              Hakkımızda
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-800/70">
              DetaySoft'u tanıyın, hikayemizi ve değerlerimizi keşfedin.
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
      
      {/* Story Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <p className="text-base font-semibold leading-7 text-blue-600">DetaySoft Hikayemiz</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Dijital Dünyada Yanınızdayız</h2>
              <div className="mt-8 space-y-6 text-gray-600">
                <p>
                  <span className="font-semibold text-gray-900">DetaySoft</span>, 2018 yılında kurulmuş, yazılım bilgisi olmayan iş sahiplerine dijital çözümler sunan bir teknoloji şirketidir.
                </p>
                <p>
                  Temel amacımız, teknik karmaşıklıkları ortadan kaldırarak, işletmelerin dijital dönüşümlerini kolaylaştırmaktır. Müşterilerimizin iş hedeflerini anlar, ihtiyaçlarına uygun çözümler üretiriz.
                </p>
                <p>
                  E-ticaret siteleri, kurumsal web siteleri, mobil uygulamalar ve dijital pazarlama alanlarında uzmanlaşmış ekibimizle, müşterilerimizin dijital varlıklarını güçlendiriyoruz.
                </p>
                <p>
                  Her projede müşteri memnuniyetini ön planda tutarak, kullanımı kolay, etkili ve modern çözümler sunuyoruz. Teknik desteğimiz, proje tamamlandıktan sonra da devam eder.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="h-full relative">
                <Image 
                  src="/images/hero-background.jpg" 
                  alt="DetaySoft Ekibi" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-xl max-w-md shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">5+ Yıllık Deneyim</h3>
                    <p className="text-gray-600">
                      Dijital dünyada işletmelere çözüm üretiyoruz. Her projeyi aynı özen ve tutkuyla ele alıyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-md text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold">200</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">200+</h3>
            <p className="text-gray-600">Tamamlanan Proje</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold">150</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">150+</h3>
            <p className="text-gray-600">Mutlu Müşteri</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold">15</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">15+</h3>
            <p className="text-gray-600">Uzman Ekip Üyesi</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold">5</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">5+</h3>
            <p className="text-gray-600">Yıllık Deneyim</p>
          </div>
        </div>
      </div>
      
      {/* Vision & Mission */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" viewBox="0 0 800 800">
                <path fill="none" stroke="white" strokeWidth="2" d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"></path>
                <path fill="none" stroke="white" strokeWidth="2" d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764"></path>
                <path fill="none" stroke="white" strokeWidth="2" d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880"></path>
              </svg>
            </div>
            <div className="p-8 md:p-10 relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Vizyonumuz</h2>
              <p className="text-lg text-blue-100">
                Yazılım bilgisi olmayan iş sahiplerinin dijital dünyada başarılı olmalarını sağlamak ve teknolojiyi herkes için erişilebilir kılmak.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-2xl shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" viewBox="0 0 800 800">
                <path fill="none" stroke="white" strokeWidth="2" d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"></path>
                <path fill="none" stroke="white" strokeWidth="2" d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764"></path>
                <path fill="none" stroke="white" strokeWidth="2" d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880"></path>
              </svg>
            </div>
            <div className="p-8 md:p-10 relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Misyonumuz</h2>
              <p className="text-lg text-indigo-100">
                Müşterilerimize kullanımı kolay, etkili ve modern dijital çözümler sunarak, işlerini büyütmelerine ve rekabet avantajı kazanmalarına yardımcı olmak.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Values */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Değerlerimiz</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            DetaySoft'un temel değerleri, her projemizdeki çalışma prensiplerini belirler.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div 
              key={value.title} 
              className="bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-lg bg-${value.color}-100 flex items-center justify-center mb-6 text-${value.color}-600`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Team */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Ekibimiz</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Uzman ekibimiz, projelerinizi hayata geçirmek için burada.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-56 relative">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-blue-200">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Join Us CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="relative">
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" viewBox="0 0 800 800">
                <path fill="none" stroke="white" strokeWidth="2" d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"></path>
                <path fill="none" stroke="white" strokeWidth="2" d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764"></path>
                <path fill="none" stroke="white" strokeWidth="2" d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880"></path>
              </svg>
            </div>
            <div className="relative px-8 py-16 sm:px-16 sm:py-20 lg:py-24 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Bizimle Çalışmaya Hazır mısınız?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Dijital çözümlerimiz hakkında daha fazla bilgi almak ve işletmeniz için özel bir teklif için bizimle iletişime geçin.
              </p>
              <div className="mt-10 flex justify-center gap-x-6">
                <a
                  href="/contact"
                  className="rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-700 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  İletişime Geçin
                </a>
                <a href="/packages" className="text-base font-semibold leading-6 text-white flex items-center">
                  Paketlerimizi İnceleyin <span aria-hidden="true" className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 