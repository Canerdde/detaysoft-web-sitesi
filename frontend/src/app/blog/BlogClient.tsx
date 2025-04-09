'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, MagnifyingGlassIcon, BookmarkIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

// Props tiplerini tanımlıyoruz
interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: {
    name: string;
    image: string;
  };
  coverImage: string;
}

interface BlogClientProps {
  posts: Post[];
  categories: string[];
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  // Popüler yazılar (en yeni 3 tanesi)
  const popularPosts = [...posts].slice(0, 3);

  // Filtreleme fonksiyonu (kategori ve arama)
  const filteredPosts = posts
    .filter(post => {
      // Kategori filtresi
      if (activeCategory !== 'Tümü' && post.category !== activeCategory) {
        return false;
      }
      
      // Arama filtresi
      if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      return true;
    });

  return (
    <div className="pt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
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
              Blog
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-800/70">
              Dijital dünya hakkında bilgilendirici yazılar, ipuçları ve rehberler.
              Yazılım bilgisi gerektirmeden işinizi büyütmenin yollarını keşfedin.
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg mb-10 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Search input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Blog yazılarında ara..."
                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            {/* Category filter buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {filteredPosts.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                <p className="text-lg text-gray-600">Aradığınız kriterlere uygun yazı bulunamadı.</p>
                <button 
                  onClick={() => {setActiveCategory('Tümü'); setSearchQuery('');}}
                  className="mt-4 text-blue-600 font-medium hover:text-blue-800"
                >
                  Filtreleri Temizle
                </button>
              </div>
            ) : (
              <>
                {/* Featured post (first post with special styling) */}
                {filteredPosts.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="relative h-72">
                      <Image
                        src={filteredPosts[0].coverImage}
                        alt={filteredPosts[0].title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-xs font-semibold text-white mb-3">
                          {filteredPosts[0].category}
                        </span>
                        <h2 className="text-2xl font-bold text-white mb-2">{filteredPosts[0].title}</h2>
                        <div className="flex items-center text-white/80 text-sm">
                          <Image
                            src={filteredPosts[0].author.image}
                            alt={filteredPosts[0].author.name}
                            width={24}
                            height={24}
                            className="rounded-full mr-2"
                          />
                          <span>{filteredPosts[0].author.name}</span>
                          <span className="mx-2">•</span>
                          <span>{filteredPosts[0].date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{filteredPosts[0].excerpt}</p>
                      <Link
                        href={`/blog/${filteredPosts[0].slug}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                      >
                        Devamını Oku <ArrowRightIcon className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* Remaining posts */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {filteredPosts.slice(1).map((post) => (
                    <div
                      key={post.slug}
                      className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="relative h-48">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-800">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-gray-500 text-xs mb-3">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <div className="flex items-center">
                            <Image
                              src={post.author.image}
                              alt={post.author.name}
                              width={20}
                              height={20}
                              className="rounded-full mr-1"
                            />
                            <span>{post.author.name}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
                          >
                            Devamını Oku <ArrowRightIcon className="h-3 w-3 ml-1" />
                          </Link>
                          <div className="flex space-x-2 text-gray-400">
                            <button className="hover:text-blue-600 transition-colors">
                              <ChatBubbleLeftIcon className="h-5 w-5" />
                            </button>
                            <button className="hover:text-blue-600 transition-colors">
                              <BookmarkIcon className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Popular Posts */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full inline-flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                </span>
                Popüler Yazılar
              </h2>
              <div className="space-y-5">
                {popularPosts.map((post, index) => (
                  <div key={post.slug} className="flex gap-4 transform transition-all duration-200 hover:-translate-y-1">
                    <div className="flex-none relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-blue-600 font-medium">{post.category}</span>
                      <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-1">
                        <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                    <div className="flex-none w-8 flex items-start justify-center">
                      <span className="bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold text-gray-700">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full inline-flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>
                </span>
                Kategoriler
              </h2>
              <div className="space-y-2">
                {categories.filter(cat => cat !== 'Tümü').map(category => {
                  const count = posts.filter(post => post.category === category).length;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`flex justify-between w-full items-center px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                        activeCategory === category
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span>{category}</span>
                      <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 text-xs">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-md p-6 text-white">
              <h2 className="text-xl font-bold mb-4">Bültenimize Abone Olun</h2>
              <p className="text-sm text-blue-100 mb-6">
                Yeni yazılarımızdan ve güncellemelerimizden haberdar olmak için e-posta listemize kaydolun.
              </p>
              <form>
                <div className="relative mb-3">
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="w-full px-4 py-3 rounded-lg border border-blue-400 bg-blue-700/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-white text-blue-700 font-semibold px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Abone Ol
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 