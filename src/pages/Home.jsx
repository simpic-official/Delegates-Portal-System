import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/delegates.json";

function normalizeId(raw) {
  return (raw || "").trim();
}

export default function Home({ basePath }) {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [touched, setTouched] = useState(false);

  const knownIds = useMemo(() => new Set((data.delegates || []).map((d) => d.id)), []);
  const value = normalizeId(id);
  const showError = touched && value.length > 0 && !knownIds.has(value);

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
            <div className="brand-subtitle">Enter your Delegate ID to open your personal page</div>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="panel home-panel">
          <div className="home-kicker">Delegate Access</div>
          <h1 className="home-title">Open your personal delegate page</h1>

          <p className="home-desc">
            Please enter the <b>Delegate ID</b> provided by the SIMPIC team (usually shown on your confirmation message
            or badge/QR). Example format: <span className="mono">SIMPIC-XXXX-001</span>
          </p>

          <form
            className="id-form"
            onSubmit={(e) => {
              e.preventDefault();
              setTouched(true);
              const v = normalizeId(id);
              if (!v) return;
              // Navigate even if unknown; the delegate page will enforce 404.
              navigate(`${basePath}/${encodeURIComponent(v)}`);
            }}
          >
            <label className="field">
              <span className="field-label">Delegate ID</span>
              <input
                className={`input ${showError ? "input-error" : ""}`}
                value={id}
                onChange={(e) => setId(e.target.value)}
                onBlur={() => setTouched(true)}
                placeholder="e.g., SIMPIC-EXAMPLE-001"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
              />
              {showError ? (
                <div className="field-hint error">
                  This ID is not recognized. Please check spelling (hyphens, letters, numbers) or contact staff.
                </div>
              ) : (
                <div className="field-hint">
                  Tip: You can copy-paste the ID exactly as you received it.
                </div>
              )}
            </label>

            <div className="id-actions">
              <button className="btn primary" type="submit" disabled={!value}>
                Open Page
              </button>
              <button
                className="btn ghost"
                type="button"
                onClick={() => {
                  setId("");
                  setTouched(false);
                }}
              >
                Clear
              </button>
            </div>

            <div className="small muted home-footnote">
              If you don’t have an ID yet, please contact the SIMPIC organizing team.
            </div>
          </form>
        </section>
      </main>

      <footer className="footer">
        <span className="muted">© SIMPIC</span>
      </footer>
    </div>
  );
}
