

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
              <strong>Billing/Quota Bug:</strong> When I linked my new GitHub account, before I even deployed a single app, the system told me to "update my plan" and the billing page erroneously showed that I had already used all 650 free minutes. This is a critical onboarding bug that prevents new users from trying the platform.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>UI Overlap:</strong> During the onboarding flow, the progress pill (e.g., "3/6 completed") overlaps directly with the floating chat/action bubble button on the bottom right of the screen, making the UI look broken and difficult to click.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Stale Timestamps on Project Dashboard:</strong> On the main Project Details page, the recent Deployments list incorrectly shows "1h ago" for every single deployment, regardless of when it actually happened. The real, accurate timestamps only appear after clicking "See all".
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>What I'd Change</h2>
          <p>
            If I could change one thing, I'd prioritize fixing the initial onboarding billing state. For a developer trying out a PaaS for the first time, being blocked by a false "0 minutes remaining" error completely kills momentum. Additionally, cleaning up the z-index constraints on the floating action buttons would keep the onboarding UI feeling as polished as the rest of the platform.
          </p>
        </section>

        <div style={{ padding: '1rem', background: '#f5f5f5', borderRadius: '8px', borderLeft: '4px solid #333' }}>
          <strong>Conclusion:</strong> Brimble's core deployment infrastructure is exceptionally solid. Once those early onboarding bugs are ironed out, it will easily rival Vercel in ease-of-use and initial developer experience.
        </div>
      </main>

      <footer style={{ marginTop: '3rem', fontSize: '0.875rem', color: '#888', textAlign: 'center' }}>
        Built for the Brimble Fullstack Engineer Take-Home
      </footer>
    </div>
  );
}

export default App;
