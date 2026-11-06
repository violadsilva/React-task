import { BookOpen, GraduationCap, LayoutDashboard, Settings, Users, X } from "lucide-react";

const links = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Students", icon: Users },
  { label: "Courses", icon: BookOpen },
  { label: "Settings", icon: Settings }
];

export default function Sidebar({ activePage, setActivePage, open, onClose }) {
  return (
    <>
      {open && <button className="sidebar-backdrop" aria-label="Close menu" onClick={onClose} />}
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><GraduationCap size={23} /></div>
          <span>Learn<span className="brand-accent">Space</span></span>
          <button className="icon-button mobile-close" onClick={onClose} aria-label="Close menu"><X size={19} /></button>
        </div>
        <div className="workspace-label">WORKSPACE</div>
        <nav className="nav-links">
          {links.map(({ label, icon: Icon }) => (
            <button key={label} className={`nav-link ${activePage === label ? "active" : ""}`} onClick={() => { setActivePage(label); onClose(); }}>
              <Icon size={19} strokeWidth={1.9} />
              <span>{label}</span>
              {label === "Students" && <span className="nav-count">120</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card">
            <div className="help-icon">✦</div>
            <strong>Need a hand?</strong>
            <p>Visit our help center to learn more.</p>
            <button onClick={() => alert("Help center coming soon!")}>Get help <span>↗</span></button>
          </div>
          <div className="profile-mini">
            <div className="avatar avatar-purple">VD</div>
            <div className="profile-text"><strong>Viola D'silva</strong><span>Administrator</span></div>
            <span className="profile-dots">•••</span>
          </div>
        </div>
      </aside>
    </>
  );
}