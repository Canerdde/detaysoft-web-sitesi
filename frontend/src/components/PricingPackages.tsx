'use client';

import { CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import TeklifButton from './TeklifButton';

const PricingPackages = () => {
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
        '3 aylık ücretsiz teknik destek'
      ],
      popular: false,
      cta: 'Paketi Seç'
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
        '6 aylık ücretsiz teknik destek'
      ],
      popular: true,
      cta: 'Paketi Seç'
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
        '12 aylık ücretsiz teknik destek'
      ],
      popular: false,
      cta: 'Paketi Seç'
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 sm:py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white mx-4 sm:mx-8 md:mx-12 lg:mx-16 mb-8 rounded-xl shadow-xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 800 800">
          <path fill="none" stroke="white" strokeWidth="3" d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"></path>
          <path fill="none" stroke="white" strokeWidth="3" d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764"></path>
          <path fill="none" stroke="white" strokeWidth="3" d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880"></path>
        </svg>
      </div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Paketlerimiz
          </h2>
          <p className="mt-4 text-lg leading-8 text-blue-100 max-w-2xl mx-auto">
            İşletmenizin ihtiyaçlarına ve bütçenize uygun çözümler sunuyoruz. Özel gereksinimleriniz için teklif alabilirsiniz.
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div 
              key={pkg.name} 
              className={`flex flex-col rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:translate-y-[-10px] hover:shadow-xl ${
                pkg.popular 
                  ? 'bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 border-2 border-blue-400/30' 
                  : 'bg-white/10 backdrop-blur-sm border border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="bg-blue-500 text-center py-1.5 text-sm font-semibold">
                  En Çok Tercih Edilen
                </div>
              )}
              
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-white">{pkg.price}</span>
                  <span className="ml-1 text-xl font-medium text-gray-300">₺</span>
                  <span className="ml-2 text-sm text-gray-400">'den başlayan</span>
                </div>
                <p className="mt-3 text-gray-300">{pkg.description}</p>
                
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className={`h-5 w-5 flex-shrink-0 ${pkg.popular ? 'text-blue-300' : 'text-blue-500'}`} />
                      <span className="ml-2 text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 bg-gray-900/50 border-t border-white/10">
                <TeklifButton 
                  className={`w-full rounded-md px-4 py-2.5 text-base font-semibold shadow-md transition-colors ${
                    pkg.popular 
                      ? 'bg-white text-blue-700 hover:bg-blue-100' 
                      : 'bg-blue-600 text-white hover:bg-blue-500'
                  }`}
                >
                  {pkg.cta}
                </TeklifButton>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Özel Çözüm mü Arıyorsunuz?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            İşletmenize özel ihtiyaçlar için size özel teklif hazırlayalım. İhtiyaçlarınızı dinleyip, bütçenize uygun çözümler sunalım.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border-2 border-blue-500 bg-transparent px-8 py-3 text-base font-semibold text-blue-300 hover:bg-blue-900/30 transition-colors duration-200"
          >
            Özel Teklif Alın
          </Link>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/30">
              <h4 className="font-semibold text-lg text-white mb-2">Ödeme Koşulları</h4>
              <p className="text-gray-300 text-sm">
                Tüm projelerimizde ödeme aşağıdaki şekilde yapılmaktadır:
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-300">
                <li>• Proje başlangıcında: %50</li>
                <li>• Proje tesliminde: %50</li>
              </ul>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/30">
              <h4 className="font-semibold text-lg text-white mb-2">Sıkça Sorulan Sorular</h4>
              <ul className="mt-1 space-y-1 text-sm text-gray-300">
                <li><span className="text-blue-300">•</span> Projelere ortalama teslim süresi ne kadardır?</li>
                <li><span className="text-blue-300">•</span> Paketlere geçiş yapabilir miyim?</li>
                <li><span className="text-blue-300">•</span> Destek süresi sonrası ücretlendirme nasıldır?</li>
              </ul>
              <p className="mt-3 text-sm text-gray-400">Detaylı bilgi için bizimle iletişime geçin.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages; 