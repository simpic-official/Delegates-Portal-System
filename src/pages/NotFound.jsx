import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            <span className="mark-dot" />
            <span className="mark-line" />
          </div>
          <div>
            <div className="brand-title">SIMPIC Delegate Portal</div>
            <div className="brand-subtitle">Invalid path or ID</div>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="panel center">
          <div className="error-code">404</div>
          <h1>Page not found</h1>
          <p className="muted">
            The ID is not in the SIMPIC database, or the URL is incorrect.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" to="/">Go Home</Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span className="muted">© SIMPIC</span>
      </footer>
    </div>
  );
}
