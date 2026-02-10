import React, { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import data from "../data/delegates.json";
import DelegateCard from "../components/DelegateCard.jsx";

function findDelegateById(id) {
  return (data.delegates || []).find((d) => d.id === id) || null;
}

export default function DelegatePage({ basePath }) {
  const { id } = useParams();

  const delegate = useMemo(() => findDelegateById(id), [id]);

  // Only allow pages that exist in JSON
  if (!delegate) return <Navigate to="/404" replace />;

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            <span className="mark-dot" />
            <span className="mark-line" />
          </div>
          <div>
            <div className="brand-title">Delegate Profile</div>
            <div className="brand-subtitle">Verified via JSON ID</div>
          </div>
        </div>

        <nav className="topbar-actions">
          <Link className="btn ghost" to="/">Home</Link>
          <button
            className="btn primary"
            onClick={async () => {
              const url = window.location.href;
              try {
                await navigator.clipboard.writeText(url);
                alert("Link copied!");
              } catch {
                prompt("Copy this link:", url);
              }
            }}
            title="Copy link"
          >
            Copy Link
          </button>
        </nav>
      </header>

      <main className="container">
        <DelegateCard delegate={delegate} />
      </main>

      <footer className="footer">
        <span className="muted">Confidential — share only with intended recipient</span>
      </footer>
    </div>
  );
}
