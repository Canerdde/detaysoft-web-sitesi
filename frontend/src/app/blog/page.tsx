import BlogClient from './BlogClient';

export const metadata = {
  title: 'Blog | DetaySoft',
  description: 'Yazılım ve dijital dünya hakkında bilgilendirici yazılar. Yazılım bilgisi olmadan web sitesi, e-ticaret ve mobil uygulama geliştirme.',
};

export default function BlogPage() {
  // Tüm blog verilerini server tarafında hazırlıyoruz
  const posts = [
    {
      slug: 'e-ticaret-sitesi-kurma-rehberi',
      title: 'Yazılım Bilmeden E-Ticaret Sitesi Kurma Rehberi',
      excerpt: 'Teknik bilgi gerektirmeden, kendi e-ticaret sitenizi nasıl kurabileceğinizi anlatan kapsamlı rehber.',
      category: 'E-Ticaret',
      date: '10 Mart 2023',
      author: {
        name: 'Ahmet Yılmaz',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
      },
      coverImage: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    },
    {
      slug: 'dijital-pazarlama-stratejileri',
      title: 'Küçük İşletmeler İçin Etkili Dijital Pazarlama Stratejileri',
      excerpt: 'Küçük bütçelerle büyük sonuçlar elde etmenizi sağlayacak dijital pazarlama taktikleri.',
      category: 'Dijital Pazarlama',
      date: '22 Nisan 2023',
      author: {
        name: 'Zeynep Kaya',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
      },
      coverImage: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    },
    {
      slug: 'mobil-uygulama-trendleri-2023',
      title: '2023 Mobil Uygulama Trendleri',
      excerpt: 'Mobil uygulama dünyasında öne çıkan son trendler ve teknolojiler.',
      category: 'Teknoloji Trendleri',
      date: '5 Mayıs 2023',
      author: {
        name: 'Mehmet Demir',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
      },
      coverImage: 'https://images.unsplash.com/photo-1601784551127-9db0d11913dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    },
    {
      slug: 'web-sitesi-performans-artirma',
      title: 'Web Sitenizin Performansını Artırmanın 10 Yolu',
      excerpt: 'Web sitenizin yükleme hızını ve performansını artıracak pratik öneriler.',
      category: 'Web Geliştirme',
      date: '18 Haziran 2023',
      author: {
        name: 'Ayşe Öztürk',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
      },
      coverImage: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    },
    {
      slug: 'seo-temel-prensipleri',
      title: 'Yazılım Bilgisi Olmadan SEO: Temel Prensipler',
      excerpt: 'Arama motoru optimizasyonunun temel prensiplerini anlatan, teknik olmayan bir rehber.',
      category: 'Dijital Pazarlama',
      date: '30 Temmuz 2023',
      author: {
        name: 'Zeynep Kaya',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
      },
      coverImage: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    },
    {
      slug: 'e-ticaret-guvenlik-onlemleri',
      title: 'E-Ticaret Siteniz İçin Temel Güvenlik Önlemleri',
      excerpt: 'Online mağazanızı güvende tutmak için alabileceğiniz önlemler ve güvenlik uygulamaları.',
      category: 'E-Ticaret',
      date: '12 Ağustos 2023',
      author: {
        name: 'Ahmet Yılmaz',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
      },
      coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    },
  ];

  const categories = ['Tümü', 'E-Ticaret', 'Web Geliştirme', 'Dijital Pazarlama', 'Teknoloji Trendleri'];
  
  // Client component'e props olarak verilerimizi iletiyoruz
  return <BlogClient posts={posts} categories={categories} />;
} 