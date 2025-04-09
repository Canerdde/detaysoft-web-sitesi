'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function Cookies() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Çerez Politikası</h1>
          
          <div className="prose prose-blue max-w-none text-gray-600">
            <p className="lead">Bu Çerez Politikası, DetaySoft web sitesinde kullanılan çerezleri ve bunların nasıl yönetileceğini açıklar.</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Çerez Nedir?</h2>
            <p>Çerezler, web siteleri tarafından bilgisayarınıza, akıllı telefonunuza veya tabletinize yerleştirilen küçük metin dosyalarıdır. Çerezler, web sitesinin çalışması için gerekli olan bilgileri, oturum bilgilerinizi, tercihlerinizi ve benzeri verileri saklar.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Kullandığımız Çerez Türleri</h2>
            <p>Web sitemizde aşağıdaki türlerde çerezleri kullanıyoruz:</p>
            
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">a) Zorunlu Çerezler</h3>
            <p>Bu çerezler, web sitesinin temel işlevlerini yerine getirmesi için gereklidir. Bunlar olmadan, web sitesi düzgün çalışmaz. Bu çerezler devre dışı bırakılamaz.</p>
            
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">b) Performans Çerezleri</h3>
            <p>Bu çerezler, ziyaretçilerin web sitemizi nasıl kullandıklarına dair bilgi toplar. Örneğin, hangi sayfaların en çok ziyaret edildiğini ve ziyaretçilerin site içinde nasıl gezindiğini öğrenmemizi sağlar. Bu bilgiler, web sitemizi iyileştirmemize yardımcı olur.</p>
            
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">c) İşlevsellik Çerezleri</h3>
            <p>Bu çerezler, web sitemizde yaptığınız tercihleri hatırlar ve size daha kişiselleştirilmiş bir deneyim sunar. Örneğin, dil tercihlerinizi veya giriş bilgilerinizi hatırlayabilirler.</p>
            
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">d) Hedefleme/Reklam Çerezleri</h3>
            <p>Bu çerezler, size ve ilgi alanlarınıza uygun reklamlar göstermek için kullanılır. Ayrıca, bir reklamı görme sayınızı sınırlamak ve reklam kampanyalarının etkinliğini ölçmek için de kullanılırlar.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Üçüncü Taraf Çerezleri</h2>
            <p>Web sitemizde, üçüncü taraf hizmet sağlayıcılarının çerezleri de bulunabilir. Bu üçüncü taraflar, web analitiği hizmetleri, sosyal medya platformları ve reklam ağları olabilir. Bu çerezlerin kullanımını kontrol edemiyoruz ve bu çerezler, ilgili üçüncü tarafların gizlilik politikalarına tabidir.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
            <p>Çoğu web tarayıcısı, çerezleri kabul etmeye ayarlıdır, ancak tarayıcı ayarlarınızı değiştirerek çerezleri engelleyebilir veya çerez ayarlarınızı değiştirebilirsiniz. Çerezleri nasıl kontrol edeceğiniz, kullandığınız tarayıcıya bağlıdır:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Chrome</strong>: Ayarlar &gt; Gelişmiş &gt; Gizlilik ve Güvenlik &gt; Site Ayarları &gt; Çerezler</li>
              <li><strong>Firefox</strong>: Seçenekler &gt; Gizlilik ve Güvenlik &gt; Çerezler ve Site Verileri</li>
              <li><strong>Safari</strong>: Tercihler &gt; Gizlilik</li>
              <li><strong>Internet Explorer</strong>: Ayarlar &gt; İnternet Seçenekleri &gt; Gizlilik</li>
              <li><strong>Microsoft Edge</strong>: Ayarlar &gt; Site İzinleri &gt; Çerezler ve Site Verileri</li>
            </ul>
            <p className="mt-4">Çerezleri devre dışı bırakırsanız, web sitemizin bazı özellikleri düzgün çalışmayabilir.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Çerez Duvarımız</h2>
            <p>Web sitemize ilk kez eriştiğinizde, çerez kullanımımız hakkında bir bildirim alacaksınız. Bu bildirim, çerezleri kabul etme, reddetme veya çerez tercihlerinizi ayarlama seçeneklerini içerir.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Değişiklikler</h2>
            <p>Bu Çerez Politikası'nı herhangi bir zamanda değiştirme hakkını saklı tutuyoruz. Çerez Politikamızda yapılan değişiklikler, web sitemizde yayınlandığı anda yürürlüğe girer.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. İletişim</h2>
            <p>Çerez Politikamız veya çerez kullanımımız ile ilgili herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:</p>
            <p className="mt-2">E-posta: info@detaysoft.com</p>
            <p>Adres: [Şirket Adresi]</p>
            
            <p className="mt-8 text-sm text-gray-500">Son Güncelleme Tarihi: {new Date().toLocaleDateString('tr-TR')}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 