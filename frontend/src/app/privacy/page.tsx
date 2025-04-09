'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function Privacy() {
  return (
    <div className="bg-gray-50 py-12 md:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            <span>Ana Sayfaya Dön</span>
          </Link>
        </div>
        
        <div className="bg-white shadow sm:rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Gizlilik Politikası</h1>
          
          <div className="prose prose-blue max-w-none text-gray-600">
            <p className="lead">Bu Gizlilik Politikası, DetaySoft ("biz", "bize" veya "şirketimiz") tarafından toplanan ve işlenen verilerinizin nasıl kullanıldığını açıklamaktadır.</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Toplanan Bilgiler</h2>
            <p>Aşağıdaki bilgileri toplayabiliriz:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Kişisel Bilgiler</strong>: Ad, soyad, e-posta adresi, telefon numarası gibi sizinle iletişim kurmamızı sağlayan bilgiler.</li>
              <li><strong>Davranışsal Bilgiler</strong>: Web sitemizde gezinme şekliniz, ziyaret ettiğiniz sayfalar, tıkladığınız bağlantılar ve web sitemizle nasıl etkileşimde bulunduğunuz.</li>
              <li><strong>Teknik Bilgiler</strong>: IP adresi, tarayıcı türü ve sürümü, saat dilimi ayarı, tarayıcı eklenti türleri ve sürümleri, işletim sistemi ve platformu gibi cihazınızla ilgili bilgiler.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Bilgi Toplama Yöntemleri</h2>
            <p>Bilgilerinizi aşağıdaki yollarla toplarız:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Doğrudan Etkileşimler</strong>: Web sitemizdeki formları doldurarak, e-posta göndererek veya telefonla iletişime geçerek bize bilgi verebilirsiniz.</li>
              <li><strong>Otomatik Teknolojiler</strong>: Web sitemizi ziyaret ettiğinizde, çerezler ve diğer izleme teknolojileri aracılığıyla bilgilerinizi otomatik olarak toplayabiliriz.</li>
              <li><strong>Üçüncü Taraflar</strong>: Analitik sağlayıcılar, reklam ağları ve arama bilgisi sağlayıcıları gibi üçüncü taraflardan bilgi alabiliriz.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Verilerinizi Kullanma Amacımız</h2>
            <p>Verilerinizi aşağıdaki amaçlar için kullanıyoruz:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Size hizmetlerimiz hakkında bilgi sağlamak</li>
              <li>İhtiyaçlarınıza en uygun içeriği ve hizmetleri sunmak</li>
              <li>Sözleşmeden doğan yükümlülüklerimizi yerine getirmek</li>
              <li>Web sitemizin ve hizmetlerimizin işlevselliğini ve güvenliğini sağlamak</li>
              <li>Müşteri desteği sağlamak</li>
              <li>İş ilişkilerimizi yönetmek ve geliştirmek</li>
              <li>Web sitemizin ve hizmetlerimizin kullanımını analiz etmek</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Çerezler</h2>
            <p>Web sitemiz çerezleri ve benzer izleme teknolojilerini kullanmaktadır. Çerezler, bilgisayarınıza veya mobil cihazınıza yerleştirilen küçük metin dosyalarıdır. Bu dosyalar, web sitemizi ziyaret ettiğinizde sizi tanımamıza yardımcı olur.</p>
            <p>Çerezler hakkında daha fazla bilgi için <Link href="/cookies" className="text-blue-600 hover:text-blue-800">Çerez Politikamıza</Link> bakabilirsiniz.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Veri Paylaşımı</h2>
            <p>Kişisel verilerinizi aşağıdaki durumlarda üçüncü taraflarla paylaşabiliriz:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Hizmet sağlayıcılarımız ve iş ortaklarımızla</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek için gerekli olduğunda</li>
              <li>Şirketimizin veya varlıklarımızın satılması, devredilmesi veya birleşmesi durumunda</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Veri Güvenliği</h2>
            <p>Kişisel verilerinizin güvenliğini sağlamak için uygun güvenlik önlemlerini alıyoruz. Verilerinizin kazara kaybedilmesini, yetkisiz kullanımını, değiştirilmesini veya ifşa edilmesini önlemek için teknik ve organizasyonel önlemler uygulamaktayız.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Veri Saklama</h2>
            <p>Kişisel verilerinizi, yasal, düzenleyici, vergi, muhasebe veya raporlama gerekliliklerini karşılamak için gerekli olan süre boyunca saklayacağız. Verilerinizi, gerekli yasal amaçlar için daha uzun süre saklamamız gerekmediği sürece, sizinle olan ilişkimiz sona erdikten sonra makul bir süre içinde sileceğiz.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Haklarınız</h2>
            <p>Kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Kişisel verilerinize erişim talep etme hakkı</li>
              <li>Kişisel verilerinizin düzeltilmesini talep etme hakkı</li>
              <li>Kişisel verilerinizin silinmesini talep etme hakkı</li>
              <li>Kişisel verilerinizin işlenmesine itiraz etme hakkı</li>
              <li>Kişisel verilerinizin işlenmesini kısıtlama hakkı</li>
              <li>Veri taşınabilirliği hakkı</li>
              <li>Otomatik karar verme süreçlerine tabi olmama hakkı</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Değişiklikler</h2>
            <p>Bu Gizlilik Politikası'nı herhangi bir zamanda değiştirme hakkını saklı tutuyoruz. Gizlilik Politikamızda yapılan değişiklikler, web sitemizde yayınlandığı anda yürürlüğe girer.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">10. İletişim</h2>
            <p>Gizlilik Politikamız veya kişisel verilerinizin işlenmesi ile ilgili herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:</p>
            <p className="mt-2">E-posta: info@detaysoft.com</p>
            <p>Adres: [Şirket Adresi]</p>
            
            <p className="mt-8 text-sm text-gray-500">Son Güncelleme Tarihi: {new Date().toLocaleDateString('tr-TR')}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 