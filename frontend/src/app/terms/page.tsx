'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function Terms() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Kullanım Koşulları</h1>
          
          <div className="prose prose-blue max-w-none text-gray-600">
            <p className="lead">Lütfen DetaySoft web sitesini kullanmadan önce aşağıdaki kullanım koşullarını dikkatlice okuyunuz.</p>
            <p>Web sitemizi kullanarak, bu koşulları kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız, lütfen web sitemizi kullanmayınız.</p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Tanımlar</h2>
            <p>"Biz", "bize", "bizim", "DetaySoft" terimleri DetaySoft şirketini ifade eder.</p>
            <p>"Siz", "sizin", "kullanıcı" terimleri web sitemizin kullanıcısını ifade eder.</p>
            <p>"Web sitesi", "site" terimleri DetaySoft'a ait web sitesini ve tüm alt alan adlarını ifade eder.</p>
            <p>"Hizmet" terimi, DetaySoft tarafından sunulan tüm ürünleri, hizmetleri, web sitesini ve içerikleri ifade eder.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Hizmetlerimizin Kullanımı</h2>
            <p>Web sitemizi ve hizmetlerimizi kullanırken, tüm geçerli yasalara ve düzenlemelere uymalısınız. Web sitemizi yasa dışı bir amaç için kullanamazsınız.</p>
            <p>Aşağıdaki durumlarda web sitemizi kullanma hakkınızı askıya alabilir veya sonlandırabiliriz:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Bu kullanım koşullarını ihlal ederseniz</li>
              <li>Web sitemizi veya hizmetlerimizi kötüye kullanırsanız</li>
              <li>Makul olarak, yasalara aykırı davrandığınızı düşünürsek</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Fikri Mülkiyet Hakları</h2>
            <p>Web sitemizdeki tüm içerikler (metin, grafik, logo, resim, ses, video, veri derlemeleri, yazılım ve diğer materyaller) DetaySoft'a veya içerik sağlayıcılarına aittir ve telif hakkı, ticari marka, patent ve diğer fikri mülkiyet yasaları ile korunmaktadır.</p>
            <p>Web sitemizdeki içerikleri aşağıdaki amaçlar dışında kopyalayamaz, çoğaltamaz, yeniden yayınlayamaz, yükleyemez, gönderemez veya dağıtamazsınız:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Kişisel, ticari olmayan kullanım</li>
              <li>DetaySoft'un önceden yazılı izni alınmış olması</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Gizlilik</h2>
            <p>Kişisel verilerinizin nasıl işlendiği hakkında bilgi için lütfen <Link href="/privacy" className="text-blue-600 hover:text-blue-800">Gizlilik Politikamıza</Link> bakın.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Çerezler</h2>
            <p>Web sitemiz çerezleri kullanmaktadır. Çerezlerin nasıl kullanıldığı hakkında daha fazla bilgi için lütfen <Link href="/cookies" className="text-blue-600 hover:text-blue-800">Çerez Politikamıza</Link> bakın.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Üçüncü Taraf Bağlantıları</h2>
            <p>Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar, yalnızca kullanıcılarımıza kolaylık sağlamak amacıyla sunulmaktadır. Üçüncü taraf web sitelerinin içeriği üzerinde kontrolümüz yoktur ve bu web sitelerinin içeriğinden veya gizlilik politikalarından sorumlu değiliz.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Sorumluluk Sınırlaması</h2>
            <p>Web sitemizi ve hizmetlerimizi "olduğu gibi" sunuyoruz. Web sitemizin kesintisiz, hatasız veya güvenli olacağına dair herhangi bir garanti vermiyoruz.</p>
            <p>Yasaların izin verdiği azami ölçüde, aşağıdakilerden kaynaklanan herhangi bir doğrudan, dolaylı, özel, arızi, sonuç olarak ortaya çıkan veya cezai zarardan sorumlu olmayacağız:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Web sitemize erişim veya web sitemizin kullanımı</li>
              <li>Web sitemize erişememe veya web sitemizi kullanamama</li>
              <li>Web sitemizdeki herhangi bir içeriğe güvenme</li>
              <li>Web sitemizdeki herhangi bir hata, eksiklik, kesinti, arıza veya gecikme</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Tazminat</h2>
            <p>Bu kullanım koşullarını ihlal etmenizden veya web sitemizi uygunsuz kullanmanızdan kaynaklanan herhangi bir talepten, yükümlülükten, zarardan ve masraftan (avukatlık ücretleri dahil) DetaySoft'u, yöneticilerini, çalışanlarını ve temsilcilerini savunacak, tazmin edecek ve zarar görmelerini önleyeceksiniz.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Değişiklikler</h2>
            <p>Bu kullanım koşullarını herhangi bir zamanda değiştirme hakkını saklı tutuyoruz. Değişiklikler, web sitemizde yayınlandığı anda yürürlüğe girer. Değişikliklerden sonra web sitemizi kullanmaya devam etmeniz, güncellenmiş kullanım koşullarını kabul ettiğiniz anlamına gelir.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">10. Geçerli Hukuk</h2>
            <p>Bu kullanım koşulları Türkiye Cumhuriyeti yasalarına tabidir. Herhangi bir uyuşmazlık, Türkiye Cumhuriyeti mahkemelerinin münhasır yargı yetkisine tabi olacaktır.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">11. İletişim</h2>
            <p>Bu kullanım koşulları ile ilgili herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:</p>
            <p className="mt-2">E-posta: info@detaysoft.com</p>
            <p>Adres: [Şirket Adresi]</p>
            
            <p className="mt-8 text-sm text-gray-500">Son Güncelleme Tarihi: {new Date().toLocaleDateString('tr-TR')}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 