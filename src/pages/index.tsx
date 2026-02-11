import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const kapitel = [
  { nr: '1', title: 'Sprachliche Mittel & Stilistik', desc: 'Rhetorische Mittel erkennen und analysieren', link: '/docs/sprachliche-mittel/', color: '#4f46e5', gradient: 'linear-gradient(135deg, #4f46e5, #6366f1)' },
  { nr: '2', title: 'Textanalyse Epik', desc: 'Erzähltechnik, Figurenanalyse, Zeitgestaltung', link: '/docs/epik/', color: '#7c3aed', gradient: 'linear-gradient(135deg, #7c3aed, #8b5cf6)' },
  { nr: '3', title: 'Textanalyse Lyrik', desc: 'Metrum, Reimschema, Bildsprache', link: '/docs/lyrik/', color: '#db2777', gradient: 'linear-gradient(135deg, #db2777, #ec4899)' },
  { nr: '4', title: 'Textanalyse Dramatik', desc: 'Dramentheorie, Dialoganalyse', link: '/docs/dramatik/', color: '#d97706', gradient: 'linear-gradient(135deg, #d97706, #f59e0b)' },
  { nr: '5', title: 'Literaturepochen', desc: 'Von Aufklärung bis Gegenwart', link: '/docs/epochen/', color: '#4338ca', gradient: 'linear-gradient(135deg, #4338ca, #6366f1)' },
  { nr: '6', title: 'Kommunikation & Sprache', desc: 'Kommunikationsmodelle und Sprachreflexion', link: '/docs/kommunikation/', color: '#0d9488', gradient: 'linear-gradient(135deg, #0d9488, #14b8a6)' },
  { nr: '7', title: 'Erörterung & Schreiben', desc: 'Argumentation und Textproduktion', link: '/docs/schreiben/', color: '#059669', gradient: 'linear-gradient(135deg, #059669, #10b981)' },
  { nr: '8', title: 'Werkvergleich & Motivanalyse', desc: 'Vergleichende Analyse und Motive', link: '/docs/werkvergleich/', color: '#dc2626', gradient: 'linear-gradient(135deg, #dc2626, #ef4444)' },
];

const features = [
  { title: 'Interaktive Übungen', desc: 'Drag & Drop, Lückentext, Stilmittel-Training, Metrum-Klopfer und vieles mehr', icon: '🎯', bg: 'linear-gradient(135deg, rgba(79,70,229,0.1), rgba(99,102,241,0.05))' },
  { title: 'Visualisierungen', desc: 'Epochen-Zeitstrahl, Figurenkonstellationen, Spannungskurven und Argumentationsmodelle', icon: '📊', bg: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(139,92,246,0.05))' },
  { title: 'Abitur-relevant', desc: 'Alle Inhalte orientieren sich am Kernlehrplan Deutsch Sek II für den Leistungskurs', icon: '🎓', bg: 'linear-gradient(135deg, rgba(5,150,105,0.1), rgba(16,185,129,0.05))' },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="hero-gradient" style={{ color: 'white', padding: '7rem 0 6rem', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle dot pattern overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />
      {/* Subtle glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '300px',
        background: 'radial-gradient(ellipse, rgba(129,140,248,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-block',
          padding: '0.375rem 1.125rem',
          borderRadius: '9999px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.12)',
          fontSize: '0.8125rem',
          fontWeight: 500,
          marginBottom: '1.75rem',
          backdropFilter: 'blur(12px)',
          letterSpacing: '0.03em',
        }}>
          Gymnasium Klasse 12 — Leistungskurs
        </div>
        <Heading as="h1" style={{
          fontSize: '3.5rem',
          marginBottom: '1.25rem',
          fontWeight: 800,
          letterSpacing: '-0.035em',
          lineHeight: 1.08,
        }}>
          {siteConfig.title}
        </Heading>
        <p style={{
          fontSize: '1.1875rem',
          opacity: 0.75,
          marginBottom: '2.75rem',
          maxWidth: '520px',
          marginLeft: 'auto',
          marginRight: 'auto',
          fontWeight: 400,
          lineHeight: 1.6,
        }}>
          {siteConfig.tagline}
        </p>
        <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="pill-button pill-button--primary" to="/docs/intro">
            Zur Lernplattform
          </Link>
          <Link className="pill-button pill-button--ghost" to="/docs/sprachliche-mittel/">
            Kapitel 1 starten
          </Link>
        </div>
      </div>
    </header>
  );
}

function Features() {
  return (
    <section style={{ padding: '4.5rem 0 3.5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div style={{
                width: '3.25rem',
                height: '3.25rem',
                borderRadius: '0.875rem',
                background: f.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.375rem',
                margin: '0 auto 1.125rem',
              }}>
                {f.icon}
              </div>
              <Heading as="h3" style={{ fontSize: '1.0625rem', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                {f.title}
              </Heading>
              <p style={{ fontSize: '0.8125rem', color: 'var(--ifm-color-emphasis-600)', margin: 0, lineHeight: 1.65 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KapitelGrid() {
  return (
    <section style={{ padding: '1.5rem 0 4.5rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <Heading as="h2" style={{ fontSize: '2rem', marginBottom: '0.75rem', letterSpacing: '-0.025em' }}>
            8 Kapitel — interaktiv und abiturrelevant
          </Heading>
          <p style={{
            color: 'var(--ifm-color-emphasis-500)',
            maxWidth: '520px',
            lineHeight: 1.6,
            margin: '0 auto',
            fontSize: '0.9375rem',
          }}>
            Jedes Kapitel enthält Theorie, interaktive Visualisierungen und Übungen mit sofortigem Feedback.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
          {kapitel.map((k) => (
            <Link
              key={k.nr}
              to={k.link}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                className="kapitel-card"
                style={{ borderTop: 'none' }}
              >
                {/* Gradient top border */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: k.gradient,
                  borderRadius: '1rem 1rem 0 0',
                }} />
                {/* Large background chapter number */}
                <div style={{
                  position: 'absolute',
                  top: '-0.25rem',
                  right: '0.75rem',
                  fontSize: '4.5rem',
                  fontWeight: 900,
                  opacity: 0.035,
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}>
                  {k.nr}
                </div>
                <div style={{ position: 'relative' }}>
                  <span style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: k.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.07em',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}>
                    Kapitel {k.nr}
                  </span>
                  <Heading as="h3" style={{ fontSize: '1rem', marginBottom: '0.375rem', lineHeight: 1.35 }}>
                    {k.title}
                  </Heading>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--ifm-color-emphasis-500)', margin: 0, lineHeight: 1.5 }}>
                    {k.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{
      padding: '4.5rem 0',
      background: 'linear-gradient(135deg, var(--ifm-color-emphasis-100), var(--ifm-background-surface-color))',
      textAlign: 'center',
    }}>
      <div className="container">
        <Heading as="h2" style={{ fontSize: '1.75rem', marginBottom: '0.75rem', letterSpacing: '-0.025em' }}>
          Bereit für das Abitur?
        </Heading>
        <p style={{
          color: 'var(--ifm-color-emphasis-500)',
          maxWidth: '460px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '2rem',
          lineHeight: 1.6,
          fontSize: '0.9375rem',
        }}>
          Starte jetzt mit interaktiven Übungen, Visualisierungen und praxisnahen Analysen — alles an einem Ort.
        </p>
        <Link
          className="button button--primary button--lg"
          to="/docs/intro"
          style={{ borderRadius: '9999px', padding: '0.875rem 2.5rem', fontWeight: 600, fontSize: '0.9375rem' }}
        >
          Jetzt loslegen
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Startseite"
      description="Interaktive Lernplattform für den Deutsch-Leistungskurs">
      <HomepageHeader />
      <main>
        <Features />
        <KapitelGrid />
        <CTASection />
      </main>
    </Layout>
  );
}
