import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-background"></div>
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">
              About <span className="verse-gradient">Verse</span>
              <span className="vault-gradient">Vault</span>
            </h1>
            <p className="about-hero-subtitle">
              A cozy corner of the internet where poetry lovers discover, read,
              and share heartfelt poems
            </p>
            <div className="about-hero-description">
              <p>
                Whether you're a seasoned poet, an aspiring writer, or simply
                someone who finds beauty in carefully chosen words, VerseVault
                welcomes all who love the art of language and the power of
                expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-title">Our Mission</h2>
              <p className="mission-description">
                VerseVault exists to celebrate the timeless art of poetry in our
                digital age. We believe that poetry has the unique power to
                capture the human experience - our joys, sorrows, dreams, and
                deepest thoughts - in ways that transcend boundaries and connect
                us all.
              </p>
              <p className="mission-description">
                Our platform serves as a bridge between writers and readers,
                creating a space where verses can find their audience and hearts
                can find their voice. Every poem shared here is a testament to
                the enduring power of words to heal, inspire, and unite.
              </p>
            </div>
            <div className="mission-visual">
              <div className="quote-container">
                <div className="large-quote">"</div>
                <p className="featured-quote">
                  Poetry is the spontaneous overflow of powerful feelings: it
                  takes its origin from emotion recollected in tranquility.
                </p>
                <span className="quote-author">— William Wordsworth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars-section">
        <div className="container">
          <h2 className="section-title white-title">What We Stand For</h2>
          <div className="pillars-grid">
            <div className="pillar-card">
              <h3>Expression</h3>
              <p>A space for your voice, your thoughts, your truth.</p>
            </div>
            <div className="pillar-card">
              <h3>Belonging</h3>
              <p>Every poet deserves a home where they feel understood.</p>
            </div>
            <div className="pillar-card">
              <h3>Inspiration</h3>
              <p>Read. Feel. Write. Grow with stories that move the soul.</p>
            </div>
            <div className="pillar-card">
              <h3>Freedom</h3>
              <p>No filters. No judgment. Just pure, raw poetry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="audience-section">
        <div className="container">
          <h2 className="section-title">Who Is VerseVault For?</h2>
          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <h3>Aspiring Poets</h3>
              <p>
                Writers looking to share their work, receive feedback, and grow
                their craft in a supportive environment.
              </p>
            </div>

            <div className="audience-card">
              <div className="audience-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3>Poetry Lovers</h3>
              <p>
                Readers who find solace, inspiration, and joy in discovering new
                voices and timeless verses.
              </p>
            </div>

            <div className="audience-card">
              <div className="audience-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 0 5-1 7-2" />
                </svg>
              </div>
              <h3>Students & Educators</h3>
              <p>
                Those studying literature, creative writing, or anyone using
                poetry as a tool for learning and teaching.
              </p>
            </div>

            <div className="audience-card">
              <div className="audience-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3>Creative Souls</h3>
              <p>
                Artists, musicians, and creators who appreciate the intersection
                of words, emotions, and artistic expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="inspiration-section">
        <div className="container">
          <div className="inspiration-content">
            <h2 className="section-title">The Story Behind VerseVault</h2>
            <div className="inspiration-text">
              <p>
                VerseVault was born from a simple belief: that poetry should be
                accessible, shareable, and celebrated. In a world increasingly
                dominated by quick updates and fleeting content, I wanted to
                create a sanctuary for words that deserve to be savored,
                contemplated, and remembered.
              </p>
              <p>
                I noticed that while poetry has always been a fundamental part
                of human expression, many beautiful verses were scattered across
                different platforms or hidden in private journals. VerseVault
                aims to be the bridge that connects these isolated islands of
                creativity into a thriving archipelago of shared human
                experience.
              </p>
              <p>
                Every feature I build, every poem I curate, and every community
                interaction I foster is guided by my core belief: that poetry
                has the power to make us more human, more connected, and more
                alive to the beauty that surrounds us every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-content">
            <h2>Ready to Be Part of Our Story?</h2>
            <p>
              Join our community of poets and poetry lovers. Your voice matters,
              and your words have power.
            </p>
            <div className="about-cta-buttons">
              <Link to="/submit" className="btn btn-primary">
                Share Your Poetry
              </Link>
              <Link to="/poems" className="btn btn-secondary">
                Explore Our Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
