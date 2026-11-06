export default function StatCard({ title, value, change, note, icon: Icon, tone }) {
  return (
    <article className="stat-card">
      <div className="stat-card-top">
        <span>{title}</span>
        <div className={`stat-icon ${tone}`}><Icon size={20} /></div>
      </div>
      <div className="stat-value">{value}</div>
      <div className="stat-foot">
        <span className="change-pill">↗ {change}</span>
        <span>{note}</span>
      </div>
    </article>
  );
}