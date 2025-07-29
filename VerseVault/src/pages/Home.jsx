import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const featuredPoems = [
    {
      id: 1,
      title: "Whispers of Dawn",
      author: "Vinit Mehra",
      preview: "Golden light creeps through morning mist, Painting shadows on dew-kissed leaves...",
      category: "Nature"
    },
    {
      id: 2,
      title: "Digital Dreams",
      author: "Praniti Rao",
      preview: "In circuits of silicon and light, We dance between zeros and ones...",
      category: "Modern"
    },
    {
      id: 3,
      title: "Letters Never Sent",
      author: "Aakshi Meera",
      preview: "Dear you, I write these words in midnight's embrace, When silence speaks louder than...",
      category: "Love"
    }
  ];

  const testimonials = [
    {
      quote: "VerseVault gave my words wings. This community understands the power of poetry.",
      author: "Naman Metha",
      role: "Poet & Teacher"
    },
    {
      quote: "Every poem here tells a story. It's like discovering hidden treasures daily.",
      author: "Reeba Mahi",
      role: "Literature Student"
    },
    {
      quote: "Finally, a place where poets can truly connect and share their craft.",
      author: "Kuba David",
      role: "Published Author"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-background-image"></div>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="verse">Verse</span>
              <span className="vault">Vault</span>
            </h1>
            <p className="hero-subtitle">
              A home for words that speak from the soul
            </p>
            <p className="hero-description">
              Discover beautiful poetry, share your own verses, and connect with a community of word lovers.
            </p>
            <div className="hero-buttons">
              <Link to="/poems" className="btn btn-primary">
                Read Poems
              </Link>
              <Link to="/submit" className="btn btn-secondary">
                Submit Yours
              </Link>
              <Link to="/login" className="btn btn-outline">
                Join the Vault
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-indicator">
            <span>Scroll to explore</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </section>

      {/* Featured Poems Section */}
      <section className="featured-poems">
        <div className="container">
          <h2 className="section-title">Featured Poems</h2>
          <p className="section-subtitle">Discover verses that have touched hearts and minds</p>
          
          <div className="poems-grid">
            {featuredPoems.map((poem) => (
              <div key={poem.id} className="poem-card">
                <div className="poem-category">{poem.category}</div>
                <h3 className="poem-title">{poem.title}</h3>
                <p className="poem-author">by {poem.author}</p>
                <p className="poem-preview">{poem.preview}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Your journey with poetry starts here</p>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon">
                <svg width="40" height="40" viewBox="0 0 24 24">
                  <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 18V6h18v12H3z" fill="currentColor"/>
                  <path d="M9 8h6v2H9V8zm0 4h6v2H9v-2z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Browse Poetry</h3>
              <p>Explore our curated collection of poems from talented writers around the world. Filter by mood, theme, or style.</p>
            </div>
            
            <div className="step-card">
              <div className="step-icon">
                <svg width="40" height="40" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Submit Your Work</h3>
              <p>Share your original poetry with our community. Get feedback, connect with readers, and let your voice be heard.</p>
            </div>
            
            <div className="step-card">
              <div className="step-icon">
                <svg width="40" height="40" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Join the Community</h3>
              <p>Create your account to save favorites, follow poets, and participate in our vibrant literary community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Community Says</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="testimonial-text">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Share Your Voice?</h2>
            <p>Join thousands of poets and poetry lovers in our growing community</p>
            <div className="cta-buttons">
              <Link to="/submit" className="btn btn-primary">Start Writing</Link>
              <Link to="/poems" className="btn btn-outline-light">Explore Poems</Link>
            </div>
          </div>
        </div>
      </section>
    </div>   
  );
}