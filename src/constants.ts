import { Content, Product, Review } from './types';

export const content: Record<'fa' | 'en', Content> = {
  fa: {
    nav: {
      products: 'محصولات',
      services: 'خدمات',
      story: 'درباره ما',
      gallery: 'گالری',
      reviews: 'نظرات',
      contact: 'تماس با ما',
    },
    hero: {
      title: 'شیرینی سرای وانیلا',
      subtitle: 'طعم شیرین لحظات شما در قلب کابل',
      cta: 'از ما دیدن کنید',
    },
    featured: {
      title: 'محصولات ویژه',
      subtitle: 'بهترین‌های ما را امتحان کنید',
    },
    services: {
      title: 'خدمات ما',
      items: [
        { title: 'کیک‌های سفارشی', description: 'کیک‌های تولد و عروسی با طرح دلخواه شما' },
        { title: 'شیرینی‌های تازه', description: 'پخت روزانه انواع شیرینی‌های خشک و تر' },
        { title: 'خدمات مجالس', description: 'پذیرایی حرفه‌ای برای مراسم و جلسات شما' },
      ],
    },
    story: {
      title: 'درباره ما',
      content: 'وانیلا پاستری با هدف ارائه بهترین و با کیفیت‌ترین شیرینی‌ها و کیک‌ها در شهر کابل تاسیس شد. ما از بهترین مواد اولیه برای خلق طعم‌های به یاد ماندنی استفاده می‌کنیم.',
    },
    gallery: {
      title: 'گالری تصاویر',
      items: [
        { name: 'کیک وانیلی', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587' },
        { name: 'بستنی سنتی زعفرانی', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb' },
        { name: 'تارت میوه‌ای', image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13' },
        { name: 'شیرینی دانمارکی', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff' },
        { name: 'کلوچه سنتی', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e' },
        { name: 'نان روت', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff' },
        { name: 'گوش فیل', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35' },
        { name: 'باقلوا کابل', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548' },
        { name: 'شیرینی تازه', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a' },
        { name: 'کیک شکلاتی', image: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086' },
        { name: 'دسر مخصوص', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e' },
        { name: 'کاپ کیک', image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd' },
      ],
    },
    reviews: {
      title: 'نظرات مشتریان',
    },
    contact: {
      title: 'تماس با ما',
      name: 'نام',
      email: 'ایمیل',
      message: 'پیام',
      send: 'ارسال پیام',
      address: 'کابل جاده شهید مزاری ایستگاه گولایی مهتاب قلعه',
      phone: '۹۳ ۷۴ ۸۵۹ ۷۲۷۴',
      hours: 'همه روزه ۷:۳۰ صبح تا ۹:۰۰ شب',
      cta: {
        visit: 'همین امروز از ما دیدن کنید',
        order: 'برای سفارش تماس بگیرید',
        find: 'ما را در کابل پیدا کنید',
        findUs: 'ما را اینجا پیدا کنید',
      },
    },
    footer: {
      rights: 'تمامی حقوق محفوظ است. وانیلا پاستری ۲۰۲۶',
    },
  },
  en: {
    nav: {
      products: 'Products',
      services: 'Services',
      story: 'Our Story',
      gallery: 'Gallery',
      reviews: 'Reviews',
      contact: 'Contact',
    },
    hero: {
      title: 'Vanilla Pastry',
      subtitle: 'Sweetening your moments in the heart of Kabul',
      cta: 'Visit Us',
    },
    featured: {
      title: 'Featured Products',
      subtitle: 'Try our best creations',
    },
    services: {
      title: 'Our Services',
      items: [
        { title: 'Custom Cakes', description: 'Birthday and wedding cakes with your desired design' },
        { title: 'Fresh Pastries', description: 'Daily baking of various dry and wet pastries' },
        { title: 'Event Catering', description: 'Professional catering for your ceremonies and meetings' },
      ],
    },
    story: {
      title: 'Our Story',
      content: 'Vanilla Pastry was established with the goal of providing the best and highest quality pastries and cakes in Kabul. We use the finest ingredients to create unforgettable flavors.',
    },
    gallery: {
      title: 'Photo Gallery',
      items: [
        { name: 'Vanilla Cake', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587' },
        { name: 'Saffron Ice Cream', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb' },
        { name: 'Fruit Tart', image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13' },
        { name: 'Danish Pastry', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff' },
        { name: 'Traditional Kulcha', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e' },
        { name: 'Roat Bread', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff' },
        { name: 'Gosh-e-Fil', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35' },
        { name: 'Kabul Baklava', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548' },
        { name: 'Fresh Pastry', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a' },
        { name: 'Chocolate Cake', image: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086' },
        { name: 'Special Dessert', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e' },
        { name: 'Cupcake', image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd' },
      ],
    },
    reviews: {
      title: 'Customer Reviews',
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      address: 'Kabul, Shahid Mazari Road, Golaee Mahtab Qala Station',
      phone: '+93 74 859 7274',
      hours: 'Always 7:30am to 9:00pm',
      cta: {
        visit: 'Visit us today',
        order: 'Call to order',
        find: 'Find us in Kabul',
        findUs: 'Find Us Here',
      },
    },
    footer: {
      rights: 'All rights reserved. Vanilla Pastry 2026',
    },
  },
};

export const products: Record<'fa' | 'en', Product[]> = {
  fa: [
    { id: 1, name: 'کیک وانیلی', description: 'کیک کلاسیک با خامه تازه', price: '۵۰۰ افغانی', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800' },
    { id: 2, name: 'بستنی سنتی زعفرانی', description: 'با طعم اصیل زعفران و خلال پسته', price: '۳۰۰ افغانی', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800' },
    { id: 3, name: 'تارت میوه‌ای', description: 'با میوه‌های فصل', price: '۴۰۰ افغانی', image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800' },
    { id: 4, name: 'شیرینی دانمارکی', description: 'تازه و ترد', price: '۲۰۰ افغانی', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800' },
    { id: 5, name: 'کلوچه سنتی', description: 'کلوچه خانگی با طعم هل و زعفران', price: '۱۵۰ افغانی', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800' },
    { id: 6, name: 'نان روت', description: 'نان شیرین سنتی افغانستان', price: '۱۰۰ افغانی', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800' },
    { id: 7, name: 'گوش فیل', description: 'شیرینی ترد و عسلی', price: '۲۵۰ افغانی', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800' },
    { id: 8, name: 'باقلوا کابل', description: 'باقلوای مخصوص با پسته و گردو', price: '۴۵۰ افغانی', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800' },
  ],
  en: [
    { id: 1, name: 'Vanilla Cake', description: 'Classic cake with fresh cream', price: '500 AFN', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800' },
    { id: 2, name: 'Saffron Ice Cream', description: 'Authentic saffron flavor with pistachios', price: '300 AFN', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800' },
    { id: 3, name: 'Fruit Tart', description: 'With seasonal fruits', price: '400 AFN', image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800' },
    { id: 4, name: 'Danish Pastry', description: 'Fresh and crispy', price: '200 AFN', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800' },
    { id: 5, name: 'Traditional Kulcha', description: 'Homemade cookies with cardamom and saffron', price: '150 AFN', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800' },
    { id: 6, name: 'Roat Bread', description: 'Traditional Afghan sweet bread', price: '100 AFN', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800' },
    { id: 7, name: 'Gosh-e-Fil', description: 'Crispy honey pastry (Elephant Ear)', price: '250 AFN', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800' },
    { id: 8, name: 'Kabul Baklava', description: 'Special baklava with pistachios and walnuts', price: '450 AFN', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800' },
  ],
};

export const reviews: Record<'fa' | 'en', Review[]> = {
  fa: [
    { id: 1, name: 'احمد', comment: 'بهترین کیک‌هایی که تا حالا در کابل خوردم!', rating: 5 },
    { id: 2, name: 'سارا', comment: 'محیط عالی و شیرینی‌های بسیار تازه.', rating: 4 },
  ],
  en: [
    { id: 1, name: 'Ahmad', comment: 'The best cakes I have ever had in Kabul!', rating: 5 },
    { id: 2, name: 'Sara', comment: 'Great atmosphere and very fresh pastries.', rating: 4 },
  ],
};
