'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPage() {
  // Filter kategorileri
  const categories = ['Tümü', 'E-Ticaret', 'Kurumsal', 'Mobil Uygulama', 'Web Uygulama'];
  const [activeCategory, setActiveCategory] = useState('Tümü');

  // Proje verileri
  const projects = [
    {
      id: 1,
      title: 'ModaStore E-Ticaret Sitesi',
      category: 'E-Ticaret',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      description: 'Giyim sektöründe faaliyet gösteren marka için geliştirdiğimiz e-ticaret platformu.',
      features: ['Ürün filtreleme', 'Ödeme sistemi entegrasyonu', 'Mobil uyumlu tasarım'],
      link: '/portfolio/1',
    },
    {
      id: 2,
      title: 'TechCorp Kurumsal Web Sitesi',
      category: 'Kurumsal',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      description: 'Teknoloji şirketi için hazırladığımız kurumsal web sitesi.',
      features: ['Hizmet sayfaları', 'Blog entegrasyonu', 'İletişim formu'],
      link: '/portfolio/2',
    },
    {
      id: 3,
      title: 'FitLife Mobil Uygulama',
      category: 'Mobil Uygulama',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      description: 'Fitness ve sağlıklı yaşam için geliştirilmiş mobil uygulama.',
      features: ['Egzersiz takibi', 'Beslenme programı', 'İlerleme grafikleri'],
      link: '/portfolio/3',
    },
    {
      id: 4,
      title: 'FastDelivery Restoran Sipariş Sistemi',
      category: 'Web Uygulama',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      description: 'Restoranlar için online sipariş ve teslimat takip sistemi.',
      features: ['Sipariş yönetimi', 'Teslimat takibi', 'Ödeme entegrasyonu'],
      link: '/portfolio/4',
    },
    {
      id: 5,
      title: 'BeautyShop E-Ticaret Sitesi',
      category: 'E-Ticaret',
      image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      description: 'Kozmetik ürünleri satan marka için e-ticaret sitesi.',
      features: ['Ürün detay sayfaları', 'İnceleme sistemi', 'Kargo takibi'],
      link: '/portfolio/5',
    },
    {
      id: 6,
      title: 'TravelGuide Seyahat Uygulaması',
      category: 'Mobil Uygulama',
      image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      description: 'Seyahat rotaları ve öneriler sunan mobil uygulama.',
      features: ['Harita entegrasyonu', 'Favori yerler', 'Seyahat planlayıcı'],
      link: '/portfolio/6',
    },
  ];

  // Filtreleme fonksiyonu
  const filteredProjects = activeCategory === 'Tümü'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Portfolyo</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Başarıyla tamamladığımız projelerden bazıları. Müşterilerimiz için geliştirdiğimiz
            dijital çözümleri inceleyebilirsiniz.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="mt-10 flex justify-center flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={project.id} className="flex flex-col items-start bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-full h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-xs font-medium">
                  {project.category}
                </div>
              </div>
              <div className="max-w-xl p-6">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2023" className="text-gray-500">
                    2023
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600">
                    <Link href={project.link}>
                      <span className="absolute inset-0" />
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{project.description}</p>
                </div>
                <div className="mt-4">
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Sizin için de bir proje geliştirelim
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              İhtiyaçlarınıza özel, etkili dijital çözümler için bizimle iletişime geçin.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Teklif Alın
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 