'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function KVKK() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">KVKK Aydınlatma Metni</h1>
          
          <div className="prose prose-blue max-w-none text-gray-600">
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Veri Sorumlusu</h2>
            <p>DetaySoft ("Şirket") olarak kişisel verilerinizin güvenliği ve korunması konusuna büyük önem vermekteyiz. Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, kişisel verilerinizin işlenmesi ile ilgili olarak sizi bilgilendirmek amacıyla hazırlanmıştır.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Kişisel Verilerin İşlenme Amacı</h2>
            <p>Kişisel verileriniz, DetaySoft tarafından aşağıdaki amaçlar doğrultusunda işlenebilmektedir:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Hizmetlerimizin sunulması ve geliştirilmesi</li>
              <li>İletişim faaliyetlerinin yürütülmesi</li>
              <li>Talep ve şikayetlerin değerlendirilmesi</li>
              <li>Müşteri memnuniyeti ve deneyiminin artırılması</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Hizmet kalitesinin ölçülmesi ve geliştirilmesi</li>
              <li>Güvenliğin sağlanması</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Kişisel Verilerin Aktarımı</h2>
            <p>Kişisel verileriniz, yukarıda belirtilen amaçlar doğrultusunda, KVKK'nın 8. ve 9. maddelerinde belirtilen şartlara uygun olarak, aşağıda belirtilen taraflara aktarılabilmektedir:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Yasal düzenlemeler ve hukuki yükümlülüklerimiz gereğince yetkili kamu kurum ve kuruluşlarına</li>
              <li>İş ortaklarımıza, tedarikçilerimize, hizmet sağlayıcılarımıza</li>
              <li>Hukuki süreçlerin takibi amacıyla avukatlarımıza, danışmanlarımıza</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Kişisel Veri Toplama Yöntemi ve Hukuki Sebebi</h2>
            <p>Kişisel verileriniz, DetaySoft tarafından aşağıdaki kanallar vasıtasıyla ve belirtilen hukuki sebeplere dayanarak toplanmaktadır:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Web sitesi üzerinden doldurulan formlar</li>
              <li>E-posta, telefon, sosyal medya ve diğer iletişim kanalları</li>
              <li>Çerezler (cookies) ve benzeri teknolojiler</li>
            </ul>
            <p className="mt-4">İşleme faaliyetine konu kişisel verileriniz, KVKK'nın 5. ve 6. maddelerinde yer alan aşağıdaki hukuki sebeplere dayanarak işlenmektedir:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Açık rızanızın bulunması</li>
              <li>Kanunlarda açıkça öngörülmesi</li>
              <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması</li>
              <li>Hukuki yükümlülüğümüzün yerine getirilmesi</li>
              <li>Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması</li>
              <li>Meşru menfaatlerimiz için veri işlenmesinin zorunlu olması</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. İlgili Kişinin Hakları</h2>
            <p>KVKK'nın 11. maddesi kapsamında, kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
              <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
              <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
              <li>Yukarıdaki (e) ve (f) maddeleri uyarınca yapılan işlemlerin, kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
              <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Başvuru Yöntemi</h2>
            <p>Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki iletişim bilgileri üzerinden başvuruda bulunabilirsiniz:</p>
            <p className="mt-2">E-posta: info@detaysoft.com</p>
            <p>Adres: [Şirket Adresi]</p>
            <p className="mt-4">Başvurunuzda;</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Ad-soyad ve iletişim bilgileriniz</li>
              <li>Kimliğinizi tevsik edici belgeler</li>
              <li>Talep konusu</li>
              <li>Konuya ilişkin bilgi ve belgeler</li>
            </ul>
            <p className="mt-2">yer almalıdır.</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Değişiklikler</h2>
            <p>DetaySoft, işbu aydınlatma metninde değişiklik yapma hakkını saklı tutar. İşbu aydınlatma metninde yapılacak değişiklikler, internet sitemizde yayımlandığı tarihte yürürlüğe girmiş sayılacaktır.</p>
            
            <p className="mt-8 text-sm text-gray-500">Son Güncelleme Tarihi: {new Date().toLocaleDateString('tr-TR')}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 