import { Bell, Menu, Search } from "lucide-react";

export default function Navbar({ onMenuClick }) {
  return (
    <header className="topbar">
      <button className="icon-button menu-button" onClick={onMenuClick} aria-label="Open menu"><Menu size={21} /></button>
      <div className="breadcrumb">Pages <span>/</span> <strong>Dashboard</strong></div>
      <div className="topbar-actions">
        <label className="global-search">
          <Search size={17} />
          <input placeholder="Search anything..." aria-label="Search anything" />
          <kbd>⌘ K</kbd>
        </label>
        <button className="icon-button notification-button" aria-label="Notifications"><Bell size={19} /><i /></button>
        <div className="avatar avatar-purple top-avatar">VD</div>
      </div>
    </header>
  );
}