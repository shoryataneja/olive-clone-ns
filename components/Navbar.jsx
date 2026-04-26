'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/components/Navbar.css';

const solutionItems = [
  {
    icon: '🫙',
    label: 'Allergy Scanning',
    desc: 'Scan groceries and even bottled water to reveal hidden ingredients',
  },
  {
    icon: '🌾',
    label: 'Gluten Free Scanning',
    desc: 'Wheat, barley, rye, or their derivatives, the scanner flags any gluten-containing ingredients',
  },
  {
    icon: '🥛',
    label: 'Dairy and Lactose Scanning',
    desc: 'Detect common dairy-derived ingredients like casein, whey, lactose, and more',
  },
  {
    icon: '✅',
    label: 'Ingredient Checking',
    desc: 'Decode complex ingredient labels in seconds, with easy-to-understand alerts.',
  },
];

const solutionFeatured = {
  img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80',
  title: 'Modern-Day Miracle in Salinas, California',
};

const blogItems = [
  {
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&q=80',
    title: 'Modern-Day Miracle in Salinas, California',
    desc: "One author's journey from faith-based organic advocacy to witnessing a...",
  },
  {
    img: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&q=80',
    title: 'We Bought Eggs From Every Store... What We Discovered Will SHOCK You!',
    desc: 'Not all eggs are created equal. We decoded the confusing labels on egg...',
  },
];

const foodItems = [
  { emoji: '🥣', label: 'Breakfast Cereals' },
  { emoji: '🍅', label: 'Sauces And Condiments' },
  { emoji: '🍿', label: 'Snacks Salty' },
  { emoji: '🍫', label: 'Snacks Sweet' },
  { emoji: '🍦', label: 'Ice Cream And Frozen Dairy' },
  { emoji: '🍼', label: 'Baby And Infant Food' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        <Link href="/" className="navbar__logo">
          <Image src="/images/olive-logo.png" alt="olive" width={52} height={52} className="navbar__logo-icon" />
          <span className="navbar__logo-text">live</span>
        </Link>

        <nav className="navbar__nav">

          {/* Solutions */}
          <div
            className={`navbar__link navbar__link--dropdown ${activeDropdown === 'solutions' ? 'active' : ''}`}
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            Solutions
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {activeDropdown === 'solutions' && (
              <div className="navbar__dropdown navbar__dropdown--solutions">
                <div className="navbar__solutions-grid">
                  {solutionItems.map((item) => (
                    <a href="#" key={item.label} className="navbar__solution-item">
                      <span className="navbar__solution-icon">{item.icon}</span>
                      <div>
                        <div className="navbar__solution-label">{item.label}</div>
                        <div className="navbar__solution-desc">{item.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
                <a href="#" className="navbar__solutions-featured">
                  <img src={solutionFeatured.img} alt={solutionFeatured.title} />
                  <div className="navbar__solutions-featured-title">
                    {solutionFeatured.title}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </a>
              </div>
            )}
          </div>

          <Link href="#features" className="navbar__link">Features</Link>
          <Link href="#pricing" className="navbar__link">Pricing</Link>

          {/* Blog */}
          <div
            className={`navbar__link navbar__link--dropdown ${activeDropdown === 'blog' ? 'active' : ''}`}
            onMouseEnter={() => setActiveDropdown('blog')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            Blog
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {activeDropdown === 'blog' && (
              <div className="navbar__dropdown navbar__dropdown--blog">
                {blogItems.map((item) => (
                  <a href="#" key={item.title} className="navbar__blog-item">
                    <img src={item.img} alt={item.title} className="navbar__blog-img" />
                    <div>
                      <div className="navbar__blog-title">{item.title}</div>
                      <div className="navbar__blog-desc">{item.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="navbar__link">Restaurants</a>

          {/* Food */}
          <div
            className={`navbar__link navbar__link--dropdown ${activeDropdown === 'food' ? 'active' : ''}`}
            onMouseEnter={() => setActiveDropdown('food')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            Food
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {activeDropdown === 'food' && (
              <div className="navbar__dropdown navbar__dropdown--grid">
                {foodItems.map((item) => (
                  <a href="#" key={item.label} className="navbar__dropdown-item navbar__dropdown-item--icon">
                    <span className="navbar__dropdown-emoji">{item.emoji}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

        </nav>

        <div className="navbar__actions">
          <a href="#" className="navbar__signin">Sign in</a>
          <a href="#" className="btn-primary navbar__cta">
            Get Olive
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        <button className="navbar__mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 7H21M3 12H21M3 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="navbar__mobile">
          <a href="#">Solutions</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">Restaurants</a>
          <a href="#">Food</a>
          <a href="#" className="navbar__signin">Sign in</a>
          <a href="#" className="btn-primary" style={{ justifyContent: 'center' }}>Get Olive</a>
        </div>
      )}
    </header>
  );
}
