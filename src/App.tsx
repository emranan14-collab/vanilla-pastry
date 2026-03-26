/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cake, X, Globe, Star, Phone, Mail, MapPin, Instagram, Facebook, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from './types';
import { content, products, reviews } from './constants';
import logo from './images/vanilla-pastry-logo.png';
import heroImage from './images/hero-image.jpg';

export default function App() {
  const [lang, setLang] = useState<Language>('fa');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  const t = content[lang];
  const isRtl = lang === 'fa';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'fa' ? 'en' : 'fa'));
  };

  const navItems = [
    { label: t.nav.products, id: 'products' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.story, id: 'story' },
    { label: t.nav.gallery, id: 'gallery' },
    { label: t.nav.reviews, id: 'reviews' },
    { label: t.nav.contact, id: 'contact' },
  ];

  const nextProduct = () => {
    setActiveProductIndex((prev) => (prev + 1) % products[lang].length);
  };

  const prevProduct = () => {
    setActiveProductIndex((prev) => (prev - 1 + products[lang].length) % products[lang].length);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 10);
  };

  return (
    // FIX: added overflow-x-hidden to prevent horizontal scroll on mobile
    <div className={`min-h-screen overflow-x-hidden ${isRtl ? 'rtl' : 'ltr'} selection:bg-gold-dark/30`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gold-dark/20 shadow-sm">
        {/*
          FIX: Navbar layout
          - Use a true 3-column grid (grid-cols-3) so the logo is always centered
          - The logo no longer uses absolute positioning that caused it to overlap the burger menu
          - On mobile the logo sits in the center column, language button on left, burger on right
          - The logo circle is sized down slightly (h-28 w-28) so it fits within the 20 nav height
            but still overlaps slightly with a positive z-index
        */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 items-center h-20" dir="ltr">
          {/* Left: Language Toggle */}
          <div className="flex justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold-dark/30 text-gold-gradient hover:bg-gold-gradient hover:text-white hover:[-webkit-text-fill-color:white] transition-colors duration-300 font-medium text-sm shadow-sm hover:shadow-gold/20"
            >
              <Globe size={16} />
              {lang === 'fa' ? 'English' : 'فارسی'}
            </motion.button>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer z-50 relative"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="h-28 w-28 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white flex items-center justify-center">
                <img 
                  src={logo}
                  alt="Vanilla Pastry Logo"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Right: Desktop Menu or Mobile Burger */}
          <div className="flex justify-end">
            {/* Desktop nav links */}
            <div className="hidden lg:flex gap-6 xl:gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  whileHover={{ y: -2 }}
                  className="text-gray-600 hover:text-gold-gradient transition-colors font-semibold text-sm relative group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-gradient transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Mobile burger button */}
            <div className="lg:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gold-gradient p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Cake size={28} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              dir={isRtl ? 'rtl' : 'ltr'}
              className="lg:hidden bg-white border-b border-gold-dark/20 absolute w-full overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gold-gradient hover:bg-gold-gradient/5 rounded-md"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

     {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src={heroImage}
            alt="Pastry background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gold-gradient mb-6 pb-6"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl text-yellow-500 mb-10"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            initial={{ opacity: 0, scale: 0.9, y: 0 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0]
            }}
            viewport={{ once: true }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.2 },
              scale: { duration: 0.8, delay: 0.2 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(212, 175, 55, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gold-gradient text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg shadow-gold/30 hover:brightness-110 transition-all"
          >
            {t.hero.cta}
          </motion.a>
        </div>
      </section>

      {/* Featured Products Section */}
      {/* FIX: changed overflow-hidden on section to prevent clipping, removed overflow-visible on inner div */}
      <section id="products" className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gold-gradient mb-4 pb-2"
            >
              {t.featured.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-600"
            >
              {t.featured.subtitle}
            </motion.p>
          </div>

          <div className="relative max-w-2xl mx-auto flex items-center justify-between gap-4">
            <motion.button
              whileHover={{ scale: 1.1, x: isRtl ? 5 : -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevProduct}
              className="p-4 rounded-full bg-white shadow-xl text-gold-gradient pointer-events-auto hover:bg-gold-gradient hover:text-white transition-colors border border-gold-dark/10"
            >
              {isRtl ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: isRtl ? -5 : 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextProduct}
              className="p-4 rounded-full bg-white shadow-xl text-gold-gradient pointer-events-auto hover:bg-gold-gradient hover:text-white transition-colors border border-gold-dark/10"
            >
              {isRtl ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
            </motion.button>
          </div>

          {/* FIX: removed overflow-visible which was causing horizontal scroll on mobile */}
          <div className="overflow-hidden mt-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeProductIndex}
                initial={{ opacity: 0, x: isRtl ? 150 : -150, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: isRtl ? -150 : 150, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className="w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gold-dark/10 group mx-auto"
              >
                <div className="relative overflow-hidden h-80">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={products[lang][activeProductIndex].image}
                    alt={products[lang][activeProductIndex].name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                </div>
                <div className="p-10 text-center">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-gold-gradient mb-3"
                  >
                    {products[lang][activeProductIndex].name}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-600 mb-6 text-lg"
                  >
                    {products[lang][activeProductIndex].description}
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gold-gradient font-bold text-2xl bg-gold-gradient/10 inline-block px-6 py-2 rounded-full"
                  >
                    {products[lang][activeProductIndex].price}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gold-gradient mb-16 text-center pb-2"
          >
            {t.services.title}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2.5rem] bg-gold-gradient/5 border border-gold-dark/10 text-center group transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold-gradient text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform">
                  <Cake size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <h2 className="text-4xl font-bold text-gold-gradient mb-8 pb-2 relative inline-block">
                {t.story.title}
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gold-gradient opacity-50 rounded-full"
                ></motion.span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                {t.story.content}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: isRtl ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <motion.div 
                animate={{ rotate: [3, 5, 3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-6 border-2 border-gold-dark/20 rounded-[3rem] -z-10"
              ></motion.div>
              <motion.img
                whileHover={{ scale: 1.02, rotate: 1 }}
                src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800"
                alt="Baking process"
                className="rounded-[2.5rem] shadow-2xl w-full h-[30rem] object-cover cursor-pointer"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gold-gradient mb-16 text-center pb-2"
          >
            {t.gallery.title}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.gallery.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg cursor-zoom-in group relative"
              >
                <img
                  src={`${item.image}?auto=format&fit=crop&q=80&w=600`}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3 md:p-4">
                  <span className="text-white font-semibold text-xs md:text-sm transform transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-gradient">
                    {item.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gold-gradient mb-16 text-center pb-2"
          >
            {t.reviews.title}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-10">
            {reviews[lang].map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)" }}
                className="p-10 rounded-[2.5rem] bg-gray-50 border border-gold-dark/10 shadow-sm transition-all duration-300"
              >
                <div className="flex gap-1.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < review.rating ? "fill-gold-gradient text-gold-gradient" : "text-gray-200"}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-8 text-xl leading-relaxed font-light">"{review.comment}"</p>
                <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-gradient/20 flex items-center justify-center text-gold font-bold">
                    {review.name[0]}
                  </div>
                  <div className="font-bold text-gold-gradient text-lg">{review.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-gold-gradient py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { text: t.contact.cta.visit, icon: MapPin },
              { text: t.contact.cta.order, icon: Phone },
              { text: t.contact.cta.find, icon: Globe }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-4 text-white"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <item.icon size={24} />
                </div>
                <span className="text-xl font-bold tracking-wide">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gold-gradient/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-gradient/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-gradient/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gold-gradient mb-10 pb-2">{t.contact.title}</h2>
              <div className="space-y-8">
                {[
                  { icon: MapPin, text: t.contact.address, sub: t.contact.hours },
                  { icon: Phone, text: t.contact.phone, sub: lang === 'fa' ? "دستیابی ۸ صبح - ۱۰ شب" : "Available 8AM - 10PM" },
                  { icon: Mail, text: "habibi.akasi@gmail.com", sub: lang === 'fa' ? "ما در عرض ۲۴ ساعت پاسخ می دهیم" : "We reply within 24h" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 group cursor-default"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-gold-gradient group-hover:bg-gold-gradient group-hover:text-white transition-all duration-300">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <div className="font-bold text-lg">{item.text}</div>
                      <div className="text-gray-500">{item.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 flex gap-6">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/vanilla_pastry_official/" },
                  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=100066137650815#" }
                ].map((item, i) => (
                  <motion.a 
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-2xl bg-gold-gradient text-white flex items-center justify-center hover:brightness-110 transition-colors shadow-lg shadow-gold/20"
                  >
                    <item.Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-6 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gold-dark/10"
            >
              <div className="grid gap-6">
                {[
                  { label: t.contact.name, type: "text" },
                  { label: t.contact.email, type: "email" }
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-gold-dark/50 focus:ring-4 focus:ring-gold-gradient/10 outline-none transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">{t.contact.message}</label>
                <textarea
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-gold-dark/50 focus:ring-4 focus:ring-gold-gradient/10 outline-none transition-all duration-300"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full bg-gold-gradient text-white py-5 rounded-2xl font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-gold/30"
              >
                {t.contact.send}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gold-gradient mb-4 pb-2"
            >
              {t.contact.cta.findUs}
            </motion.h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full opacity-50"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-gold-dark/10 group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.583321568218!2d69.1172653152264!3d34.500742980486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d1694f4f4f4f4f%3A0x4f4f4f4f4f4f4f4f!2sShahid%20Mazari%20Rd%2C%20Kabul%2C%20Afghanistan!5e0!3m2!1sen!2s!4v1648000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vanilla Pastry Location"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gold-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center gap-4 mb-8">
            <img 
              src={logo}
              alt="Vanilla Pastry Logo"
              className="rounded-full shadow-lg border-2 border-white/30 brightness-110 h-36 w-36 object-cover"
            />
          </div>

          <p className="text-white/80 text-sm max-w-md mx-auto leading-relaxed">
            {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
