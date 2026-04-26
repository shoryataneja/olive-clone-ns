'use client';

import { useEffect, useRef, useState } from 'react';
import '@/components/HowItWorks.css';

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

export default function HowItWorks() {
  const [ref, inView] = useInView();

  return (
    <section className="hiw" ref={ref}>
      <div className="container">

        <div className="hiw__header">
          <h2 className="hiw__title">
            How the Olive Food<br />Scanner App Works
          </h2>
          <span className="hiw__emoji">🥑</span>
        </div>

        <div className="hiw__cards">

          {/* Card 1 — Scan & Detect */}
          <div className={`hiw__card ${inView ? 'hiw__card--visible' : ''}`}>
            <p className="hiw__card-title">Scan &amp; Detect</p>
            <div className={`hiw__card-visual ${inView ? 'hiw__card-visual--visible' : ''}`}>
              <div className="hiw__scan-frame">
                <img src="/images/scan-product.png" alt="Scan product" />
                <div className="hiw__scan-line"></div>
                <div className="hiw__scan-corner hiw__scan-corner--tl"></div>
                <div className="hiw__scan-corner hiw__scan-corner--tr"></div>
                <div className="hiw__scan-corner hiw__scan-corner--bl"></div>
                <div className="hiw__scan-corner hiw__scan-corner--br"></div>
              </div>
            </div>
            <p className="hiw__card-desc">When you open Olive simply scan the barcode to instantly detect product ingredients. Olive&apos;s intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.</p>
          </div>

          {/* Card 2 — Data Analysis */}
          <div className={`hiw__card ${inView ? 'hiw__card--visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <p className="hiw__card-title">Data Analysis &amp; Validation</p>
            <div className={`hiw__card-visual hiw__card-visual--analysis ${inView ? 'hiw__card-visual--visible' : ''}`}>
              <div className="hiw__analysis-imgs">
                <img src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=120&q=80" alt="" loading="lazy" className="hiw__analysis-img--side" />
                <img src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=120&q=80" alt="" loading="lazy" className="hiw__analysis-img--center" />
                <img src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=120&q=80" alt="" loading="lazy" className="hiw__analysis-img--side" style={{ transitionDelay: '0.15s' }} />
              </div>
              <div className={`hiw__safe-badge ${inView ? 'hiw__safe-badge--visible' : ''}`}>
                <span className="hiw__safe-dot"></span>
                Safe to consume
              </div>
            </div>
            <p className="hiw__card-desc">After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess.</p>
          </div>

          {/* Card 3 — Insights */}
          <div className={`hiw__card ${inView ? 'hiw__card--visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <p className="hiw__card-title">Actionable Insights &amp; Recommendations</p>
            <div className={`hiw__card-visual hiw__card-visual--insights ${inView ? 'hiw__card-visual--visible' : ''}`}>
              <div className="hiw__insights-grid">
                {[
                  'https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&q=80',
                  'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200&q=80',
                  'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&q=80',
                  'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&q=80',
                ].map((src, i) => (
                  <img key={i} src={src} alt="" loading="lazy" style={{ transitionDelay: `${i * 0.08}s` }} />
                ))}
              </div>
            </div>
            <p className="hiw__card-desc">Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family&apos;s health &amp; nutrition.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
