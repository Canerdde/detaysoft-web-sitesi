'use client';

import Image from "next/image";
import Link from 'next/link';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import TeklifButton from '@/components/TeklifButton';
import { useState } from 'react';

export default function Home() {
  const services = [
    {
      title: 'E-Ticaret Çözümleri',
      description: 'Online satış yapmanızı sağlayacak, kolay yönetilebilir e-ticaret siteleri.',
      icon: '🛒',
      href: '/services/e-commerce',
    },
    {
      title: 'Kurumsal Web Siteleri',
      description: 'Markanızı en iyi şekilde yansıtan, profesyonel kurumsal web siteleri.',
      icon: '🏢',
      href: '/services/corporate',
    },
    {
      title: 'Mobil Uygulamalar',
      description: 'İşinizi mobil cihazlara taşıyan, kullanıcı dostu mobil uygulamalar.',
      icon: '📱',
      href: '/services/mobile',
    },
    {
      title: 'SEO Optimizasyonu',
      description: 'Arama motorlarında üst sıralarda yer almanızı sağlayan SEO çalışmaları.',
      icon: '🔍',
      href: '/services/seo',
    },
  ];

  const features = [
    {
      title: 'Uzman Teknoloji Ekibi',
      description: 'Deneyimli ekibimizle en güncel teknolojileri kullanarak işinizi dijital dünyada üst seviyeye taşıyoruz.',
      icon: '⚙️',
    },
    {
      title: 'Kolay İçerik Yönetimi',
      description: 'Sitenizi güncellemek için uzman olmanıza gerek yok. Basit arayüzler ile içeriklerinizi yönetin.',
      icon: '📝',
    },
    {
      title: '7/24 Destek',
      description: 'Sorularınız ve ihtiyaçlarınız için her zaman yanınızdayız.',
      icon: '🛠️',
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "DetaySoft sayesinde online satışlarımız %60 arttı. Teknik konularla hiç uğraşmadan harika bir e-ticaret sitemiz oldu.",
      author: "Ayşe Yılmaz",
      title: "Butik Mağaza Sahibi",
      icon: "💡",
    },
    {
      quote: "Arama motorlarındaki görünürlüğümüz DetaySoft'un SEO çalışmaları sayesinde önemli ölçüde arttı. Artık potansiyel müşteriler bizi çok daha kolay buluyor.",
      author: "Mehmet Kaya",
      title: "Hizmet Sektörü Yöneticisi",
      icon: "🔍",
    },
    {
      quote: "Mobil uygulamamız müşterilerimizle iletişimimizi tamamen değiştirdi. Kullanıcı dostu arayüzü ve hızlı performansıyla uygulama müşteri memnuniyetimizi artırdı.",
      author: "Zeynep Demir",
      title: "Restoran Zinciri Sahibi",
      icon: "📱",
    },
    {
      quote: "Kurumsal web sitemiz markamızı tam olarak yansıtıyor. Profesyonel görünümü ve kolay içerik yönetim sistemi sayesinde web varlığımızı güçlendirdik.",
      author: "Ali Öztürk",
      title: "Finans Danışmanlık Firması CEO'su",
      icon: "🏢",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col relative bg-gradient-to-br from-blue-50 via-slate-50 to-gray-100">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large Circle */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-indigo-500/20"></div>
        <div className="absolute top-1/3 left-20 w-72 h-72 rounded-full bg-blue-500/15"></div>
        <div className="absolute bottom-20 right-40 w-80 h-80 rounded-full bg-indigo-400/10"></div>
        
        {/* Wavy Lines */}
        <svg className="absolute bottom-10 left-10 w-96 h-96 text-blue-600/10" viewBox="0 0 100 100">
          <path fill="currentColor" d="M0,50 Q20,60 40,50 T80,50 T120,50 V100 H0 Z" />
          <path fill="currentColor" d="M0,20 Q20,30 40,20 T80,20 T120,20 V70 H0 Z" />
        </svg>
        
        {/* Diagonal Lines */}
        <svg className="absolute top-0 right-0 w-full h-full text-blue-600/5" preserveAspectRatio="none">
          <pattern id="diagonalLines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="100%" height="100%" fill="none"/>
            <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="2" />
            <line x1="20" y1="0" x2="20" y2="40" stroke="currentColor" strokeWidth="2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
        
        {/* Dots Grid Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-blue-300/15"></div>
          <div className="absolute top-2/3 left-2/3 w-8 h-8 rounded-full bg-blue-300/10"></div>
          <div className="absolute top-1/4 left-3/4 w-8 h-8 rounded-full bg-blue-500/10"></div>
          <div className="absolute top-3/4 left-1/3 w-8 h-8 rounded-full bg-indigo-500/10"></div>
          <div className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-blue-300/10"></div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-blue-950">
        {/* Animated Star Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-950"></div>
          
          {/* Animated Stars */}
          <div className="stars-container absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <div 
                key={i} 
                className="absolute rounded-full bg-white"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  animation: `twinkle ${Math.random() * 5 + 5}s ease-in-out infinite ${Math.random() * 5}s`,
                  opacity: Math.random() * 0.7 + 0.3
                }}
              ></div>
            ))}
          </div>
          
          {/* Moving Gradients */}
          <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-500/5 filter blur-[120px] animate-orbit"></div>
          <div className="absolute -top-[30%] -right-[20%] w-[50%] h-[50%] rounded-full bg-indigo-500/5 filter blur-[120px] animate-orbit animation-delay-2000"></div>
          <div className="absolute -bottom-[20%] left-[30%] w-[60%] h-[60%] rounded-full bg-violet-500/5 filter blur-[120px] animate-orbit-reverse animation-delay-4000"></div>
        </div>
        
        {/* Grid Lines */}
        <div className="absolute inset-0 z-[1] grid-lines opacity-10" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
        
        <div className="absolute inset-0 z-[1]">
          <div className="h-full grid grid-cols-12 opacity-10">
            {Array.from({ length: 13 }).map((_, i) => (
              <div key={i} className="border-l border-blue-500/20 h-full"></div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  <span className="text-xs uppercase tracking-widest text-blue-400 font-medium bg-blue-950/80 backdrop-blur px-3 py-1 rounded-full border border-blue-800/60">
                    Dijital Çözüm Merkezi
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                  <span className="relative inline-block mb-2">
                    <span className="relative z-10">Modern Dijital</span>
                    <span className="absolute -bottom-1.5 left-0 w-full h-3 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 opacity-80 rounded-lg blur-sm"></span>
                  </span> 
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 text-transparent bg-clip-text text-stroke-white">
                    Çözümler
                  </span>
                </h1>
                
                <p className="mt-8 text-xl leading-8 text-blue-100/90 max-w-2xl mx-auto lg:mx-0 bg-blue-950/30 backdrop-blur-sm p-4 rounded-lg border border-blue-800/20 shadow-xl">
                  DetaySoft ile işletmenizi dijital dünyada güçlendirin. 
                  İşinize özel web siteleri, e-ticaret platformları ve 
                  mobil uygulamalar ile müşterilerinize her kanaldan ulaşın.
                </p>
                
                <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                  <TeklifButton
                    className="relative group overflow-hidden rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-5 text-base font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-all duration-500 transform hover:-translate-y-1 hover:scale-105"
                  >
                    <span className="flex items-center justify-center relative z-10">
                      <span className="mr-2">✨</span>
                      Ücretsiz Danışmanlık
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></span>
                  </TeklifButton>
                  
                  <Link
                    href="/services"
                    className="group relative overflow-hidden rounded-md px-8 py-5 text-base font-medium transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 border border-blue-400/30 bg-blue-900/20 backdrop-blur-md"
                  >
                    <span className="relative z-10 flex items-center justify-center text-blue-300 group-hover:text-blue-100 transition-colors duration-300">
                      Hizmetlerimiz
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1 opacity-70" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 border-b-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                  </Link>
                </div>
                
                {/* Trust Badges */}
                <div className="mt-14 flex flex-wrap justify-center lg:justify-start gap-6 items-center">
                  <div className="flex items-center space-x-2 bg-blue-900/20 backdrop-blur-sm p-3 rounded-xl border border-blue-800/30 transform transition-transform hover:scale-105 hover:shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">100+</div>
                      <div className="text-xs text-blue-300">Memnun Müşteri</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 bg-blue-900/20 backdrop-blur-sm p-3 rounded-xl border border-blue-800/30 transform transition-transform hover:scale-105 hover:shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">5/5</div>
                      <div className="text-xs text-blue-300">Değerlendirme</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 bg-blue-900/20 backdrop-blur-sm p-3 rounded-xl border border-blue-800/30 transform transition-transform hover:scale-105 hover:shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">7/24</div>
                      <div className="text-xs text-blue-300">Teknik Destek</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 3D Device Mockup */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="w-full max-w-lg relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 z-0 blur-3xl rounded-full bg-gradient-to-r from-blue-500/30 via-indigo-500/20 to-purple-500/30 opacity-30 animate-pulse-slow"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-10 -left-5 z-30 transform -rotate-12">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center animate-float">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                      Özelleştirilebilir
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 -right-8 z-30 transform rotate-12">
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center animate-float animation-delay-1000">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                      </svg>
                      Responsive
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-8 left-1/4 z-30">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center animate-float animation-delay-2000">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      Hızlı & Güvenli
                    </div>
                  </div>
                  
                  {/* Laptop Mockup */}
                  <div className="relative z-20 mockup perspective">
                    <div className="laptop transform-3d rotate-y-5 rotate-x-10">
                      {/* Laptop Lid */}
                      <div className="lid bg-gray-800 rounded-t-xl pt-2 pb-1 px-2">
                        <div className="screen bg-gray-950 rounded-t-lg overflow-hidden relative">
                          {/* Screen Content */}
                          <div className="screen-content h-[300px] md:h-[350px] p-2 relative">
                            {/* Browser Chrome */}
                            <div className="browser">
                              <div className="browser-header bg-gray-800 h-6 flex items-center px-3 rounded-t-md">
                                <div className="flex items-center gap-1.5">
                                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                </div>
                                <div className="ml-4 bg-gray-700 rounded-full flex-grow max-w-[180px] h-3.5 flex items-center px-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-1"></div>
                                  <div className="h-1 w-16 bg-gray-600 rounded-full"></div>
                                </div>
                              </div>
                              <div className="browser-content relative rounded-b-md overflow-hidden">
                                {/* Website Preview */}
                                <div className="relative w-full h-full">
                                  <Image
                                    src="/images/hero-background.jpg"
                                    alt="Web Site Demo"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    className="object-cover object-center opacity-90 z-0"
                                  />
                                </div>
                                
                                {/* UI Elements Overlay */}
                                <div className="absolute inset-0 flex flex-col">
                                  <div className="h-10 border-b border-gray-700/50 flex items-center px-4 bg-gray-900/80 backdrop-blur">
                                    <div className="w-20 h-5 bg-blue-500/30 rounded"></div>
                                    <div className="ml-auto flex gap-3">
                                      <div className="w-12 h-4 bg-gray-600/50 rounded-full"></div>
                                      <div className="w-12 h-4 bg-gray-600/50 rounded-full"></div>
                                      <div className="w-12 h-4 bg-gray-600/50 rounded-full"></div>
                                    </div>
                                  </div>
                                  <div className="flex-1 p-4">
                                    <div className="flex flex-col h-full backdrop-blur-sm bg-gray-900/30 rounded p-3">
                                      <div className="w-3/4 h-8 bg-blue-500/20 rounded mb-3"></div>
                                      <div className="w-full h-4 bg-gray-600/30 rounded mb-2"></div>
                                      <div className="w-5/6 h-4 bg-gray-600/30 rounded mb-2"></div>
                                      <div className="w-4/6 h-4 bg-gray-600/30 rounded mb-4"></div>
                                      <div className="flex gap-2 mb-6">
                                        <div className="w-24 h-8 bg-blue-500/40 rounded"></div>
                                        <div className="w-24 h-8 bg-gray-600/20 rounded"></div>
                                      </div>
                                      <div className="flex-1 grid grid-cols-3 gap-2">
                                        <div className="bg-gray-800/50 rounded"></div>
                                        <div className="bg-gray-800/50 rounded"></div>
                                        <div className="bg-gray-800/50 rounded"></div>
                                        <div className="bg-gray-800/50 rounded"></div>
                                        <div className="bg-gray-800/50 rounded"></div>
                                        <div className="bg-gray-800/50 rounded"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Camera */}
                        <div className="camera mx-auto w-3 h-3 rounded-full bg-gray-700 mb-1 relative">
                          <div className="absolute inset-0.5 rounded-full bg-black opacity-80"></div>
                        </div>
                      </div>
                      
                      {/* Laptop Base */}
                      <div className="base bg-gradient-to-b from-gray-700 to-gray-800 h-3 rounded-b-xl"></div>
                      
                      {/* Reflection */}
                      <div className="reflection absolute -bottom-16 inset-x-8 h-16 bg-gradient-to-b from-blue-500/20 to-transparent blur-md rounded-[50%] z-10"></div>
                    </div>
                  </div>
                  
                  {/* Stats Counter Cards */}
                  <div className="absolute -bottom-6 -left-6 md:-left-12 bg-gradient-to-br from-blue-950/80 to-blue-900/50 backdrop-blur-md p-4 rounded-xl shadow-[0_5px_20px_rgba(59,130,246,0.3)] border border-blue-700/30 z-20 animate-float-slow transform-gpu">
                    <div className="text-2xl font-bold text-blue-300">250+</div>
                    <div className="text-blue-200 text-sm">Tamamlanan Proje</div>
                  </div>
                  
                  <div className="absolute -top-6 -right-6 md:-right-12 bg-gradient-to-br from-indigo-950/80 to-indigo-900/50 backdrop-blur-md p-4 rounded-xl shadow-[0_5px_20px_rgba(99,102,241,0.3)] border border-indigo-700/30 z-20 animate-float-slow transform-gpu animation-delay-700">
                    <div className="text-2xl font-bold text-indigo-300">5+</div>
                    <div className="text-indigo-200 text-sm">Yıllık Deneyim</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10 transform translate-y-1">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 120L48 108C96 96 192 72 288 66C384 60 480 72 576 78C672 84 768 84 864 78C960 72 1056 60 1152 54C1248 48 1344 48 1392 48H1440V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V120Z" fill="white"/>
          </svg>
        </div>
      </section>
      
      {/* Separator with pattern */}
      <div className="h-12 section-separator relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-2 bg-blue-200/20"></div>
        </div>
        <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-blue-200/20"></div>
        <div className="absolute left-2/4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-blue-200/20"></div>
        <div className="absolute left-3/4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-blue-200/20"></div>
      </div>
      
      {/* Services Section */}
      <section className="py-20 px-6 sm:py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 text-white relative overflow-hidden mx-4 sm:mx-8 md:mx-12 lg:mx-16 rounded-xl shadow-xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" viewBox="0 0 800 800">
            <path fill="none" stroke="white" strokeWidth="3" d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"></path>
            <path fill="none" stroke="white" strokeWidth="3" d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764"></path>
            <path fill="none" stroke="white" strokeWidth="3" d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880"></path>
          </svg>
        </div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Hizmetlerimiz
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-100 max-w-2xl mx-auto">
              İşinizi büyütmek için ihtiyacınız olan tüm dijital çözümler tek çatı altında.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group">
                <div className="h-full flex flex-col bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:translate-y-[-5px]">
                  <div className="text-4xl mb-5 bg-white/20 w-16 h-16 flex items-center justify-center rounded-full">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-blue-100 flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center text-white">
                    <span className="text-sm font-medium">Detaylı Bilgi</span>
                    <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Separator with pattern */}
      <div className="h-12 section-separator relative">
        <svg className="absolute inset-0 w-full" preserveAspectRatio="none" viewBox="0 0 1200 12">
          <path d="M0,0 C300,8 400,8 600,4 C800,0 900,12 1200,8 L1200,12 L0,12 Z" fill="#93c5fd" opacity="0.2" />
        </svg>
      </div>
      
      {/* Why Us Section */}
      <section className="py-20 px-6 sm:py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden mx-4 sm:mx-8 md:mx-12 lg:mx-16 rounded-xl shadow-xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 800 800">
            <path fill="none" stroke="white" strokeWidth="3" d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"></path>
            <path fill="none" stroke="white" strokeWidth="3" d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764"></path>
            <path fill="none" stroke="white" strokeWidth="3" d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880"></path>
          </svg>
          
          {/* Dot Grid */}
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
            {Array.from({length: 20}).map((_, i) => (
              <div key={i} className="opacity-20">
                <div className="h-1 w-1 rounded-full bg-blue-300 transform translate-x-4 translate-y-4"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mx-auto max-w-7xl relative z-10 pt-6">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-blue-400 sm:text-4xl">
                  Neden DetaySoft?
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  DetaySoft olarak, işletmenizin dijital dönüşümünü kolaylaştırıyor, teknolojiyi işinizin merkezine taşıyoruz. Size özel çözümlerle rekabet avantajı kazanmanızı sağlıyoruz.
                </p>
                <div className="mt-10 grid gap-6">
                  {features.map((feature) => (
                    <div key={feature.title} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-400/30">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-2xl">
                          {feature.icon}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-blue-300">{feature.title}</h3>
                          <p className="mt-2 text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative w-full h-full min-h-[450px] p-8">
                <div className="absolute top-4 right-4 w-56 h-56 bg-blue-500/20 rounded-xl backdrop-blur-md"></div>
                <div className="absolute bottom-4 left-4 w-56 h-56 bg-indigo-500/20 rounded-xl backdrop-blur-md"></div>
                <div className="relative z-10 h-full w-full bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg flex flex-col items-center justify-center p-8 border border-gray-700">
                  
                  {/* Testimonial Carousel */}
                  <div className="w-full h-full flex flex-col items-center justify-center relative">
                    {/* Testimonial Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
                      <span className="text-3xl">{testimonials[currentTestimonial].icon}</span>
                    </div>
                    
                    {/* Testimonial Content */}
                    <div className="w-full transition-opacity duration-300">
                      <blockquote className="text-center">
                        <p className="text-xl font-medium text-gray-200 mb-6 italic relative">
                          <span className="absolute -top-6 -left-2 text-5xl text-blue-500/20">"</span>
                          {testimonials[currentTestimonial].quote}
                          <span className="absolute -bottom-6 -right-2 text-5xl text-blue-500/20">"</span>
                        </p>
                        <div className="mt-4">
                          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                          <cite className="mt-6 block text-base text-blue-300 not-italic font-medium">
                            — {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].title}
                          </cite>
                        </div>
                      </blockquote>
                    </div>
                    
                    {/* Indicator Dots */}
                    <div className="flex space-x-2 mt-6">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            currentTestimonial === index 
                              ? 'bg-blue-400 w-6' 
                              : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                    
                    {/* Navigation Buttons (moved to bottom corners) */}
                    <div className="w-full absolute bottom-0 left-0 px-2 pointer-events-none flex justify-between">
                      <button 
                        onClick={prevTestimonial}
                        className="bg-gray-800/80 backdrop-blur-sm text-blue-400 hover:text-white p-2 rounded-full border border-gray-700 transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-400/30 pointer-events-auto translate-y-1/2 translate-x-1/2"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeftIcon className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={nextTestimonial}
                        className="bg-gray-800/80 backdrop-blur-sm text-blue-400 hover:text-white p-2 rounded-full border border-gray-700 transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-400/30 pointer-events-auto translate-y-1/2 -translate-x-1/2"
                        aria-label="Next testimonial"
                      >
                        <ChevronRightIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Separator with pattern */}
      <div className="h-12 section-separator relative">
        <div className="w-full h-full flex items-center justify-center">
          <div className="h-0.5 w-1/3 bg-blue-200/30"></div>
          <div className="h-3 w-3 rounded-full bg-blue-200/30 mx-2"></div>
          <div className="h-0.5 w-1/3 bg-blue-200/30"></div>
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="py-20 px-6 sm:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden mx-4 sm:mx-8 md:mx-12 lg:mx-16 mb-8 rounded-xl shadow-xl">
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" viewBox="0 0 800 800">
            <path fill="none" stroke="white" strokeWidth="3" d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"></path>
            <path fill="none" stroke="white" strokeWidth="3" d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764"></path>
            <path fill="none" stroke="white" strokeWidth="3" d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880"></path>
            <path fill="none" stroke="white" strokeWidth="3" d="M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382"></path>
            <path fill="none" stroke="white" strokeWidth="3" d="M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269"></path>
          </svg>
        </div>
        <div className="mx-auto max-w-7xl py-16 px-6 lg:flex lg:items-center lg:justify-between lg:px-8 relative z-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="block">Projenize başlamaya hazır mısınız?</span>
              <span className="block text-blue-100 mt-2 text-2xl">Hemen ücretsiz danışmanlık alın.</span>
            </h2>
            <p className="mt-5 text-lg text-blue-100 max-w-xl">
              Size özel dijital çözümler için ekibimiz yanınızda. Projenizin detaylarını konuşalım.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 lg:flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-md hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>
      
      {/* Extra bottom space with pattern */}
      <div className="h-8 section-separator relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center">
          <svg width="200" height="8" viewBox="0 0 200 8">
            <path d="M0,4 L40,4 M60,4 L140,4 M160,4 L200,4" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
