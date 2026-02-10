import React from "react";

function formatDate(isoDate) {
  if (!isoDate) return "-";
  const d = new Date(isoDate);
  if (Number.isNaN(d.getTime())) return isoDate;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
}

export default function DelegateCard({ delegate }) {
  const p = delegate.profile || {};
  const s = delegate.stay || {};
  const e = delegate.excursion || {};

  const initial = String(p.nickname || p.fullName || "D")
    .trim()
    .slice(0, 1)
    .toUpperCase();

  return (
    <section className="card">
      <div className="card-head">
        <div className="avatar" aria-hidden="true">
          <div className="avatar-inner">{initial}</div>
        </div>
        <div className="card-head-text">
          <h2 className="name">{p.fullName || "Unknown Delegate"}</h2>
          <div className="meta">
            <span className="pill neon">{p.nickname ? `“${p.nickname}”` : "No nickname"}</span>
            <span className="pill">{p.country || "Unknown country"}</span>
            <span className="pill">{p.university || "Unknown university"}</span>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="block">
          <div className="block-title">Profile</div>
          <div className="rows">
            <Row label="Full name" value={p.fullName} />
            <Row label="Nickname" value={p.nickname} />
            <Row label="University" value={p.university} />
            <Row label="Country" value={p.country} />
            <Row label="Birthday" value={formatDate(p.birthday)} />
            <Row label="Package" value={p.package} />
          </div>
        </div>

        <div className="block">
          <div className="block-title">Stay</div>
          <div className="rows">
            <Row label="Hotel" value={s.hotel} />
            <Row label="Check-in" value={formatDate(s.checkIn)} />
            <Row label="Check-out" value={formatDate(s.checkOut)} />
          </div>
        </div>

        <div className="block full">
          <div className="block-title">Excursion</div>
          <div className="rows">
            <Row label="Route" value={e.routeName} />
            <div className="row">
              <div className="label">Stops</div>
              <div className="value">
                {Array.isArray(e.stops) && e.stops.length > 0 ? (
                  <ul className="list">
                    {e.stops.map((stop, idx) => (
                      <li key={idx}>{stop}</li>
                    ))}
                  </ul>
                ) : (
                  <span className="muted">-</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-foot">
        <div className="muted small">Delegate ID</div>
        <div className="mono id">{delegate.id}</div>
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="row">
      <div className="label">{label}</div>
      <div className="value">{value ? value : <span className="muted">-</span>}</div>
    </div>
  );
}
