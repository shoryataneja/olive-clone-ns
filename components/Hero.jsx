'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import '@/components/Hero.css';

const avatars = [
  'https://i.pravatar.cc/80?img=1',
  'https://i.pravatar.cc/80?img=2',
  'https://i.pravatar.cc/80?img=3',
  'https://i.pravatar.cc/80?img=4',
];

const products = [
  {
    carousel: [
      'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=120&q=80',
      'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=120&q=80',
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=120&q=80',
    ],
    activeIdx: 0,
    thumb: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=80&q=80',
    name: 'Fig and Olive Crackers, Fig and Olive',
    brand: 'Lesley Stowe',
    score: 46,
    verdict: 'Avoid',
    dotColor: '#E53E3E',
    oliverText: '"This product\'s low score mainly comes from processed sugars which can impact your family\'s health when consumed frequently."',
  },
  {
    carousel: [
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=120&q=80',
      'https://images.unsplash.com/photo-1563114773-84221bd62daa?w=120&q=80',
      'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=120&q=80',
    ],
    activeIdx: 0,
    thumb: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=80&q=80',
    name: 'Late July Snacks Thin and Crispy Organic Tortilla Chips',
    brand: 'Late July · Campbells',
    score: 58,
    verdict: 'Limit',
    dotColor: '#D97706',
    oliverText: '"A decent snack option but contains some additives worth monitoring. Enjoy in moderation as part of a balanced diet."',
  },
  {
    carousel: [
      'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=120&q=80',
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=120&q=80',
      'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=120&q=80',
    ],
    activeIdx: 0,
    thumb: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=80&q=80',
    name: 'Organic Fuji Apples, Fresh Picked',
    brand: 'Whole Foods Market',
    score: 91,
    verdict: 'Great',
    dotColor: '#38A169',
    oliverText: '"Excellent choice! Organic apples are free from synthetic pesticides and provide great nutritional value for your family."',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % products.length);
        setAnimating(false);
      }, 400);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const p = products[current];

  return (
    <section className="hero">
      <div className="container hero__container">

        {/* Trust badge */}
        <div className="hero__trust">
          <div className="hero__avatars">
            {avatars.map((src, i) => (
              <Image key={i} src={src} alt="user" width={32} height={32} className="hero__avatar" loading="lazy" />
            ))}
            <span className="hero__avatar-count">3k+</span>
          </div>
          <span className="hero__trust-text">Trusted by thousands of healthy families</span>
        </div>

        {/* Heading */}
        <h1 className="hero__title">
          The Safest Way to<br />Shop for Groceries
        </h1>

        <p className="hero__subtitle">
          Use the Olive Food Scanner App to Instantly Eliminate
          Harmful Ingredients from Your Family&apos;s Diet and Get
          Expert-Backed Food Insights
        </p>

        {/* CTA */}
        <a href="#" className="btn-primary hero__cta">
          <span className="hero__apple-icon"></span>
          Download for iOS
        </a>

        {/* Animated phone mockup */}
        <div className="hero__phone-outer">

          {/* Ghost side images */}
          <div className="hero__side-img hero__side-img--left2">
            <img src={products[(current + 2) % products.length].thumb} alt="" />
          </div>
          <div className="hero__side-img hero__side-img--left">
            <img src={products[(current + 1) % products.length].thumb} alt="" />
          </div>
          <div className="hero__side-img hero__side-img--right">
            <img src={products[(current + 1) % products.length].carousel[1]} alt="" />
          </div>
          <div className="hero__side-img hero__side-img--right2">
            <img src={products[(current + 2) % products.length].carousel[1]} alt="" />
          </div>

          <div className="hero__phone-wrapper">
            <div className="hero__phone">
              <div className="hero__phone-notch"></div>
              <div className={`hero__phone-screen ${animating ? 'hero__phone-screen--exit' : 'hero__phone-screen--enter'}`}>

                {/* Single active product image */}
                <div className="hero__phone-carousel">
                  <div className="hero__carousel-active">
                    <img src={p.carousel[0]} alt={p.name} loading="lazy" />
                  </div>
                </div>

                <div className="hero__product-card">
                  <div className="hero__product-header">
                    <img src={p.thumb} alt={p.name} className="hero__product-thumb" loading="lazy" />
                    <div className="hero__product-info">
                      <div className="hero__product-name">{p.name}</div>
                      <div className="hero__product-brand">{p.brand}</div>
                    </div>
                  </div>

                  <div className="hero__product-score">
                    <span className="hero__score-dot" style={{ background: p.dotColor }}></span>
                    <span className="hero__score-num">{p.score}<span>/100</span></span>
                    <span className="hero__score-label">{p.verdict}</span>
                    <div className="hero__product-actions">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.8"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                    </div>
                  </div>

                  <div className="hero__oliver-says">
                    <div className="hero__oliver-header">
                      <span className="hero__oliver-emoji">🫒</span>
                      <span className="hero__oliver-label">Oliver Says:</span>
                    </div>
                    <p className="hero__oliver-text">{p.oliverText}</p>
                  </div>

                  <div className="hero__breakdown-label">Breakdown</div>
                </div>

              </div>
            </div>

            {/* Dot indicators */}
            <div className="hero__phone-dots">
              {products.map((_, i) => (
                <span key={i} className={`hero__phone-dot ${i === current ? 'hero__phone-dot--active' : ''}`} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
