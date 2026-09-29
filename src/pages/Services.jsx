import React from 'react';
import Seo from '../components/Seo';
import ServiceCard from '../components/ServiceCard';

/**
 * Services Page Component
 * Detailed catalog of services and step-by-step workflow guide.
 */
export default function Services({ setCurrentPage }) {
  const allServices = [
    {
      icon: '🌐',
      title: 'Web Application Development',
      description: 'Custom React & Vite web applications built with clean code and high performance.',
      features: ['React 18 + Vite', '100% Mobile Responsive', 'Fast Page Load Speeds']
    },
    {
      icon: '🎨',
      title: 'UI/UX & Web Design',
      description: 'Modern, clean user interfaces with great typography, layout spacing, and visual hierarchy.',
      features: ['Custom Vanilla CSS', 'Accessible Elements', 'Intuitive Navigation']
    },
    {
      icon: '🔍',
      title: 'SEO & Search Indexing',
      description: 'Complete SEO setup to get your site ready for Google Search Console indexing.',
      features: ['sitemap.xml setup', 'robots.txt configuration', 'Meta tags & OpenGraph']
    },
    {
      icon: '☁️',
      title: 'Vercel Deployment Setup',
      description: 'Seamless continuous deployment integration with GitHub and Vercel hosting.',
      features: ['Free custom subdomains', 'Automated build pipeline', 'Global CDN delivery']
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Audit and speed up web applications to score top marks on Google Lighthouse.',
      features: ['Optimized assets', 'Fast rendering', 'Clean code structure']
    },
    {
      icon: '🛠️',
      title: 'Maintenance & Support',
      description: 'Ongoing site updates, bug fixes, and code maintenance for long-term peace of mind.',
      features: ['Regular updates', 'Security checks', 'Feature expansion']
    }
  ];

  const workflowSteps = [
    { step: '01', title: 'Discovery', desc: 'Understanding your goals, requirements, and target audience.' },
    { step: '02', title: 'Design', desc: 'Crafting clean wireframes, typography, and responsive layouts.' },
    { step: '03', title: 'Development', desc: 'Building with React, Vite, and semantic HTML & CSS.' },
    { step: '04', title: 'Launch & Indexing', desc: 'Deploying on Vercel & submitting sitemap to Google Search Console.' }
  ];

  return (
    <>
      <Seo 
        title="Services - Web Development, SEO & Deployment" 
        description="Explore the services offered by YOUR_WEBSITE_NAME: Web Development, UI/UX Design, SEO Optimization, and Vercel deployment." 
      />

      <section className="section" style={{ paddingTop: '60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="badge">What We Offer</span>
            <h1 className="section-title">Our Professional Services</h1>
            <p className="section-subtitle">
              Comprehensive web solutions tailored for modern businesses and modern web deployment.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid" style={{ marginBottom: '96px' }}>
            {allServices.map((service, idx) => (
              <ServiceCard 
                key={idx} 
                {...service} 
                onSelect={() => setCurrentPage('contact')} 
              />
            ))}
          </div>

          {/* Workflow Section */}
          <div style={{ backgroundColor: 'white', padding: '60px 40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle" style={{ marginBottom: '48px' }}>
              A straightforward step-by-step process to bring your project from concept to live deployment.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
              {workflowSteps.map((item, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-light)', marginBottom: '12px' }}>
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
