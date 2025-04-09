'use client';

import React, { Fragment, useState, useEffect } from 'react';
import { Dialog as HeadlessDialog, Transition } from '@headlessui/react';
import { XMarkIcon, ArrowSmallRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

// Headless UI Dialog bileşenini TypeScript hatalarını önlemek için yeniden tipleyelim
const Dialog = HeadlessDialog as React.FC<{
  open: boolean;
  onClose: (value: boolean) => void;
  className?: string;
  children: React.ReactNode;
}>;

const DialogTitle = HeadlessDialog.Title as React.FC<{
  as: React.ElementType;
  className?: string;
  children: React.ReactNode;
}>;

const DialogPanel = HeadlessDialog.Panel as React.FC<{
  className?: string;
  children: React.ReactNode;
}>;

interface TeklifModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'userInfo' | 'projectDetails' | 'priceEstimate' | 'success';

export default function TeklifModal({ isOpen, onClose }: TeklifModalProps) {
  const [step, setStep] = useState<Step>('userInfo');
  const [loading, setLoading] = useState(false);
  
  // Kullanıcı bilgileri
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
  });

  // Proje bilgileri
  const [projectInfo, setProjectInfo] = useState({
    projectType: '',
    projectSize: 'orta',
    hasDesign: 'hayir',
    timeline: 'normal',
    features: [] as string[],
    additionalInfo: '',
  });

  // Fiyat bilgileri
  const [priceEstimate, setPriceEstimate] = useState({
    basePrice: 0,
    discount: 0,
    totalPrice: 0,
    deposit: 0,
    finalPayment: 0,
  });

  // Formu sıfırla
  const resetForm = () => {
    setStep('userInfo');
    setUserInfo({
      name: '',
      email: '',
      phone: '',
      companyName: '',
    });
    setProjectInfo({
      projectType: '',
      projectSize: 'orta',
      hasDesign: 'hayir',
      timeline: 'normal',
      features: [],
      additionalInfo: '',
    });
    setPriceEstimate({
      basePrice: 0,
      discount: 0,
      totalPrice: 0,
      deposit: 0,
      finalPayment: 0,
    });
  };

  // Modal kapandığında formu sıfırla
  useEffect(() => {
    if (!isOpen) {
      setTimeout(resetForm, 300);
    }
  }, [isOpen]);

  // Kullanıcı bilgilerini güncelleme
  const handleUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  // Proje bilgilerini güncelleme
  const handleProjectInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setProjectInfo({
      ...projectInfo,
      [e.target.name]: e.target.value,
    });
  };

  // Checkbox özellikleri
  const handleFeatureToggle = (feature: string) => {
    setProjectInfo({
      ...projectInfo,
      features: projectInfo.features.includes(feature)
        ? projectInfo.features.filter(f => f !== feature)
        : [...projectInfo.features, feature],
    });
  };

  // Otomatik fiyat hesaplama
  const calculatePrice = () => {
    let basePrice = 0;
    
    // Proje tipine göre temel fiyat
    switch(projectInfo.projectType) {
      case 'e-ticaret':
        basePrice = 15000;
        break;
      case 'kurumsal':
        basePrice = 8000;
        break;
      case 'mobil':
        basePrice = 20000;
        break;
      case 'seo':
        basePrice = 5000;
        break;
      default:
        basePrice = 10000;
    }
    
    // Proje büyüklüğüne göre çarpan
    let sizeMultiplier = 1;
    switch(projectInfo.projectSize) {
      case 'kucuk':
        sizeMultiplier = 0.7;
        break;
      case 'orta':
        sizeMultiplier = 1;
        break;
      case 'buyuk':
        sizeMultiplier = 1.5;
        break;
    }
    
    // Tasarım varsa indirim
    const designDiscount = projectInfo.hasDesign === 'evet' ? 0.1 : 0;
    
    // Zaman çarpanı
    let timeMultiplier = 1;
    switch(projectInfo.timeline) {
      case 'acil':
        timeMultiplier = 1.3;
        break;
      case 'normal':
        timeMultiplier = 1;
        break;
      case 'esnek':
        timeMultiplier = 0.9;
        break;
    }
    
    // Ek özellikler için fiyat
    const featuresPrice = projectInfo.features.length * 1500;
    
    // Hesaplamalar
    const calculatedBasePrice = basePrice * sizeMultiplier * timeMultiplier + featuresPrice;
    const discount = calculatedBasePrice * designDiscount;
    const totalPrice = calculatedBasePrice - discount;
    
    setPriceEstimate({
      basePrice: calculatedBasePrice,
      discount: discount,
      totalPrice: totalPrice,
      deposit: totalPrice / 2,
      finalPayment: totalPrice / 2,
    });

    return totalPrice;
  };

  // Formun ilk aşamasını gönderme
  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('projectDetails');
  };

  // İkinci aşamayı gönderme
  const handleProjectInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fiyat hesaplama
    calculatePrice();
    setStep('priceEstimate');
  };

  // Son aşamayı gönderme
  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // API çağrısı simülasyonu 
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setStep('success');
    
    // 5 saniye sonra modalı kapat
    setTimeout(() => {
      onClose();
    }, 5000);
  };

  // Özellik seçenekleri
  const getFeatureOptions = () => {
    const allFeatures: {[key: string]: string[]} = {
      'e-ticaret': ['Ödeme entegrasyonu', 'Stok yönetimi', 'Çoklu dil desteği', 'Mobil uygulama', 'İndirim kuponları'],
      'kurumsal': ['Blog yönetimi', 'İletişim formu', 'SEO optimizasyonu', 'Sosyal medya entegrasyonu', 'Çoklu dil desteği'],
      'mobil': ['iOS uygulama', 'Android uygulama', 'Push bildirimler', 'Offline çalışma modu', 'Kullanıcı yetkilendirme'],
      'seo': ['Anahtar kelime analizi', 'Rakip analizi', 'İçerik optimizasyonu', 'Backlink stratejisi', 'Aylık raporlama'],
      'diger': ['Özel API geliştirme', 'Veri migrasyonu', 'Güvenlik testleri', 'Performans optimizasyonu', 'Sunucu yapılandırma'],
    };
    
    return projectInfo.projectType ? allFeatures[projectInfo.projectType] || allFeatures.diger : [];
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center mb-6">
                  <DialogTitle as="h3" className="text-lg sm:text-xl font-bold leading-6 text-gray-900">
                    {step === 'userInfo' && 'Ücretsiz Teklif Alın'}
                    {step === 'projectDetails' && 'Proje Detayları'}
                    {step === 'priceEstimate' && 'Fiyat Bilgisi'}
                    {step === 'success' && 'Teklif Talebiniz Alındı'}
                  </DialogTitle>
                  <button
                    type="button"
                    className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={onClose}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                
                {/* Adım göstergesi */}
                {step !== 'success' && (
                  <div className="mb-8 w-full">
                    <div className="relative">
                      <div className="absolute top-2 w-full h-1 bg-gray-200"></div>
                      <ul className="relative flex justify-between w-full">
                        <li className={`flex items-center justify-center w-10 h-10 rounded-full ${step === 'userInfo' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}>
                          1
                        </li>
                        <li className={`flex items-center justify-center w-10 h-10 rounded-full ${step === 'projectDetails' ? 'bg-blue-600 text-white' : (step === 'priceEstimate' || step === 'success') ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-500'}`}>
                          2
                        </li>
                        <li className={`flex items-center justify-center w-10 h-10 rounded-full ${step === 'priceEstimate' ? 'bg-blue-600 text-white' : (step === 'success') ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-500'}`}>
                          3
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">Bilgileriniz</span>
                      <span className="text-xs text-gray-500">Proje Detayları</span>
                      <span className="text-xs text-gray-500">Fiyat Bilgisi</span>
                    </div>
                  </div>
                )}
                
                {/* Başarı mesajı */}
                {step === 'success' ? (
                  <div className="bg-green-50 p-8 rounded-lg text-center">
                    <CheckCircleIcon className="mx-auto h-16 w-16 text-green-600" />
                    <h4 className="mt-4 text-xl font-semibold text-green-800">Teşekkürler, {userInfo.name}!</h4>
                    <p className="mt-2 text-green-700">
                      Teklif talebiniz başarıyla alındı. Tahmini fiyat bilgisi: <span className="font-semibold">{priceEstimate.totalPrice.toLocaleString()} TL</span>
                    </p>
                    <p className="mt-4 text-gray-600">
                      Ekibimiz en kısa sürede sizinle iletişime geçecek ve projeniz hakkında daha detaylı bilgi verecektir.
                    </p>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-gray-700 text-left">
                      <h5 className="font-semibold mb-2">Ödeme Bilgileri</h5>
                      <p>Projelerimizde ödeme aşağıdaki şekilde yapılmaktadır:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Proje başlangıcında: <span className="font-medium">{priceEstimate.deposit.toLocaleString()} TL (%50)</span></li>
                        <li>Proje tesliminde: <span className="font-medium">{priceEstimate.finalPayment.toLocaleString()} TL (%50)</span></li>
                      </ul>
                    </div>
                  </div>
                ) : step === 'userInfo' ? (
                  <form onSubmit={handleUserInfoSubmit} className="space-y-4">
                    <p className="text-sm text-gray-700 mb-5">
                      Detaylı teklif almak için lütfen bilgilerinizi girin. Daha sonraki adımlarda proje detaylarını belirleyeceğiz.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
                          Ad Soyad
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={userInfo.name}
                          onChange={handleUserInfoChange}
                          required
                          className="mt-1 block w-full rounded-md border border-gray-400 px-3.5 py-2 text-gray-900 font-medium shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          placeholder="Adınız Soyadınız"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                          E-posta
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={userInfo.email}
                          onChange={handleUserInfoChange}
                          required
                          className="mt-1 block w-full rounded-md border border-gray-400 px-3.5 py-2 text-gray-900 font-medium shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          placeholder="ornek@sirket.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-800">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={userInfo.phone}
                          onChange={handleUserInfoChange}
                          required
                          className="mt-1 block w-full rounded-md border border-gray-400 px-3.5 py-2 text-gray-900 font-medium shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          placeholder="+90 (___) ___ ____"
                        />
                      </div>

                      <div>
                        <label htmlFor="companyName" className="block text-sm font-semibold text-gray-800">
                          Şirket Adı
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          id="companyName"
                          value={userInfo.companyName}
                          onChange={handleUserInfoChange}
                          className="mt-1 block w-full rounded-md border border-gray-400 px-3.5 py-2 text-gray-900 font-medium shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          placeholder="Şirketinizin adı"
                        />
                      </div>
                    </div>

                    <div className="mt-8">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                      >
                        Devam Et
                        <ArrowSmallRightIcon className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </form>
                ) : step === 'projectDetails' ? (
                  <form onSubmit={handleProjectInfoSubmit} className="space-y-4">
                    <p className="text-sm text-gray-700 mb-5">
                      Projeniz hakkında biraz daha bilgi verin. Bu bilgiler, size özel bir teklif oluşturmamıza yardımcı olacak.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-semibold text-gray-800">
                          Proje Türü
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={projectInfo.projectType}
                          onChange={handleProjectInfoChange}
                          required
                          className="mt-1 block w-full rounded-md border border-gray-400 px-3.5 py-2 text-gray-900 font-medium shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        >
                          <option value="">Seçiniz</option>
                          <option value="e-ticaret">E-Ticaret Sitesi</option>
                          <option value="kurumsal">Kurumsal Web Sitesi</option>
                          <option value="mobil">Mobil Uygulama</option>
                          <option value="seo">SEO / Dijital Pazarlama</option>
                          <option value="diger">Diğer</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="projectSize" className="block text-sm font-semibold text-gray-800">
                          Proje Büyüklüğü
                        </label>
                        <select
                          id="projectSize"
                          name="projectSize"
                          value={projectInfo.projectSize}
                          onChange={handleProjectInfoChange}
                          className="mt-1 block w-full rounded-md border border-gray-400 px-3.5 py-2 text-gray-900 font-medium shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        >
                          <option value="kucuk">Küçük (5-10 sayfa)</option>
                          <option value="orta">Orta (10-20 sayfa)</option>
                          <option value="buyuk">Büyük (20+ sayfa)</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="hasDesign" className="block text-sm font-semibold text-gray-800">
                          Hazır tasarımınız var mı?
                        </label>
                        <select
                          id="hasDesign"
                          name="hasDesign"
                          value={projectInfo.hasDesign}
                          onChange={handleProjectInfoChange}
                          className="mt-1 block w-full rounded-md border border-gray-400 px-3.5 py-2 text-gray-900 font-medium shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        >
                          <option value="hayir">Hayır, tasarım da yapmanızı istiyorum</option>
                          <option value="evet">Evet, hazır tasarımım var</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-sm font-semibold text-gray-800">
                          Zaman Çizelgesi
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={projectInfo.timeline}
                          onChange={handleProjectInfoChange}
                          className="mt-1 block w-full rounded-md border border-gray-400 px-3.5 py-2 text-gray-900 font-medium shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        >
                          <option value="acil">Acil (1-2 hafta)</option>
                          <option value="normal">Normal (3-4 hafta)</option>
                          <option value="esnek">Esnek (1-2 ay)</option>
                        </select>
                      </div>

                      {projectInfo.projectType && (
                        <div>
                          <label className="block text-sm font-semibold text-gray-800 mb-2">
                            İstediğiniz Özellikler
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {getFeatureOptions().map((feature, index) => (
                              <div key={index} className="flex items-start">
                                <input
                                  id={`feature-${index}`}
                                  name={`feature-${index}`}
                                  type="checkbox"
                                  checked={projectInfo.features.includes(feature)}
                                  onChange={() => handleFeatureToggle(feature)}
                                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
                                />
                                <label htmlFor={`feature-${index}`} className="ml-2 text-sm font-medium text-gray-800">
                                  {feature}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-800">
                          Eklemek İstediğiniz Bilgiler
                        </label>
                        <textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          rows={3}
                          value={projectInfo.additionalInfo}
                          onChange={handleProjectInfoChange}
                          className="mt-1 block w-full rounded-md border border-gray-400 px-3.5 py-2 text-gray-900 font-medium shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          placeholder="Projenizle ilgili eklemek istediğiniz detaylar..."
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep('userInfo')}
                        className="inline-flex justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                      >
                        Geri
                      </button>
                      <button
                        type="submit"
                        className="inline-flex justify-center items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                      >
                        Devam Et
                        <ArrowSmallRightIcon className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </form>
                ) : step === 'priceEstimate' && (
                  <form onSubmit={handleFinalSubmit} className="space-y-4">
                    <p className="text-sm text-gray-700 mb-5">
                      Projeniz için tahmini fiyat bilgisi aşağıdadır. Lütfen onaylayarak talebinizi tamamlayın.
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg text-gray-900 mb-4">Fiyat Özeti</h4>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Temel Fiyat:</span>
                          <span className="font-medium">{priceEstimate.basePrice.toLocaleString()} TL</span>
                        </div>
                        
                        {priceEstimate.discount > 0 && (
                          <div className="flex justify-between text-green-600">
                            <span>Tasarım İndirimi:</span>
                            <span>-{priceEstimate.discount.toLocaleString()} TL</span>
                          </div>
                        )}
                        
                        <div className="flex justify-between border-t border-gray-200 pt-3 font-semibold text-gray-900">
                          <span>Toplam Tutar:</span>
                          <span>{priceEstimate.totalPrice.toLocaleString()} TL</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-blue-50 p-4 rounded-md">
                        <h5 className="font-semibold text-sm text-gray-800 mb-2">Ödeme Planı</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div className="flex flex-col">
                            <span className="text-gray-600">İlk Ödeme (Başlangıçta)</span>
                            <span className="font-medium text-gray-900">{priceEstimate.deposit.toLocaleString()} TL (%50)</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-gray-600">Son Ödeme (Teslimatta)</span>
                            <span className="font-medium text-gray-900">{priceEstimate.finalPayment.toLocaleString()} TL (%50)</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="mt-4 text-xs text-gray-500">
                        * Bu fiyat tahmini olup, projenin detaylı incelenmesi sonrasında değişiklik gösterebilir.
                        Kesin fiyat, talebinizi aldıktan sonra ekibimiz tarafından belirlenecektir.
                      </p>
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep('projectDetails')}
                        className="inline-flex justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                      >
                        Geri
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex justify-center items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm disabled:opacity-70"
                      >
                        {loading ? 'İşleniyor...' : 'Teklif Talebini Tamamla'}
                      </button>
                    </div>
                  </form>
                )}
              </DialogPanel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 