import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: '1.6' }}>
      <header style={{ borderBottom: '1px solid #eaeaea', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <h1 style={{ margin: 0, fontSize: '2rem' }}>☁️ Deploying to Brimble</h1>
        <p style={{ margin: '0.5rem 0 0', color: '#666' }}>A Developer's Perspective</p>
      </header>

      <main>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>The Experience</h2>
          <p>
            Deploying to Brimble was incredibly fast and frictionless. I loved the seamless GitHub integration and how quickly the build process started. It's clear the platform is built with developer experience in mind.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Friction Points & Bugs</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Log Visibility:</strong> When my first build failed due to a missing environment variable, the error was buried deep within the raw output. Having a dedicated "Error Summary" panel would be a huge time-saver.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>UI Navigation:</strong> Sometimes navigating between deployment details and the main dashboard requires an extra click or two. Breadcrumbs would greatly improve spatial awareness.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>What I'd Change</h2>
          <p>
            If I could change one thing, I'd introduce immediate pre-flight checks before the build pipeline fully engages. Catching missing `.env` variables or invalid build commands before provisioning the container would tighten the feedback loop significantly.
          </p>
        </section>

        <div style={{ padding: '1rem', background: '#f5f5f5', borderRadius: '8px', borderLeft: '4px solid #333' }}>
          <strong>Conclusion:</strong> Brimble's core loop is exceptionally solid. With a few minor UX tweaks regarding build visibility, it will easily rival Vercel in ease-of-use.
        </div>
      </main>

      <footer style={{ marginTop: '3rem', fontSize: '0.875rem', color: '#888', textAlign: 'center' }}>
        Built for the Brimble Fullstack Engineer Take-Home
      </footer>
    </div>
  );
}

export default App;
