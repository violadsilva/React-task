import { useMemo, useState } from "react";
import { Activity, ArrowDownRight, ArrowUpRight, BookOpen, CalendarDays, GraduationCap, Users } from "lucide-react";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import StatCard from "./components/StatCard.jsx";
import StudentTable from "./components/StudentTable.jsx";
import AddStudentModal from "./components/AddStudentModal.jsx";
import { initialStudents } from "./data/students.js";
import "./App.css";

function Dashboard() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const activeCount = students.filter(student => student.status === "Active").length;
  const filteredStudents = useMemo(() => students.filter(student => {
    const matchesSearch = `${student.name} ${student.email} ${student.course}`.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || student.status === statusFilter;
    return matchesSearch && matchesStatus;
  }), [students, search, statusFilter]);

  function addStudent(form) {
    const nameParts = form.name.trim().split(/\\s+/);
    const initials = nameParts.slice(0, 2).map(part => part[0]).join("").toUpperCase();
    const colors = ["purple", "pink", "blue", "orange", "green", "cyan"];
    setStudents(current => [{ ...form, id: Date.now(), name: form.name.trim(), initials, color: colors[current.length % colors.length], joined: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) }, ...current]);
    setShowModal(false);
  }

  return (
    <main className="main-content">
      <div className="welcome-row"><div><div className="eyebrow">FRIDAY, NOVEMBER 6, 2026</div><h1>Good afternoon, Viola <span>✦</span></h1><p>Here's what's happening with your learning community today.</p></div><button className="date-button"><CalendarDays size={17} /> This month</button></div>
      <div className="section-title"><div><h2>Overview</h2><p>A quick snapshot of your student community.</p></div><span className="live-label"><i /> Updated just now</span></div>
      <div className="stats-grid">
        <StatCard title="Total students" value={students.length + 114} change="+12.8%" note="vs. last month" icon={Users} tone="tone-purple" />
        <StatCard title="Active students" value={activeCount + 72} change="+8.2%" note="vs. last month" icon={GraduationCap} tone="tone-green" />
        <StatCard title="Total courses" value="08" change="+2 new" note="this month" icon={BookOpen} tone="tone-orange" />
        <StatCard title="Avg. attendance" value="85.4%" change="2.4%" note="vs. last month" icon={Activity} tone="tone-blue" />
      </div>
      <div className="content-grid">
        <section className="panel attendance-panel">
          <div className="panel-heading"><div><h2>Learning activity</h2><p>Student engagement over the last 7 days</p></div><span className="mini-badge">This week</span></div>
          <div className="chart-summary"><div><strong>85.4%</strong><span><ArrowUpRight size={14} /> 5.2%</span></div><small>Average attendance</small></div>
          <div className="chart" role="img" aria-label="Bar chart showing learning activity from Monday to Sunday">
            {[42, 65, 52, 82, 61, 93, 73].map((height, index) => <div className="chart-column" key={index}><div className={`bar ${index === 5 ? "bar-highlight" : ""}`} style={{ height: `${height}%` }} /><span>{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}</span></div>)}
          </div>
        </section>
        <section className="panel course-panel">
          <div className="panel-heading"><div><h2>Popular courses</h2><p>Most enrolled this month</p></div><button className="text-button" onClick={() => alert("Course list coming soon!")}>View all</button></div>
          <div className="course-list">
            <div className="course-item"><div className="course-icon course-purple"><BookOpen size={18} /></div><div className="course-info"><strong>React Development</strong><span>48 students enrolled</span><div className="progress-track"><div style={{ width: "82%" }} /></div></div><b>82%</b></div>
            <div className="course-item"><div className="course-icon course-orange">JS</div><div className="course-info"><strong>JavaScript Basics</strong><span>36 students enrolled</span><div className="progress-track"><div style={{ width: "68%" }} /></div></div><b>68%</b></div>
            <div className="course-item"><div className="course-icon course-blue">Py</div><div className="course-info"><strong>Python Programming</strong><span>24 students enrolled</span><div className="progress-track"><div style={{ width: "54%" }} /></div></div><b>54%</b></div>
          </div>
        </section>
      </div>
      <StudentTable students={filteredStudents} search={search} setSearch={setSearch} statusFilter={statusFilter} setStatusFilter={setStatusFilter} onAddStudent={() => setShowModal(true)} />
      {showModal && <AddStudentModal onClose={() => setShowModal(false)} onAdd={addStudent} />}
      <footer className="footer">© 2026 LearnSpace. Made for better learning. <span>Help center&nbsp; · &nbsp;Privacy</span></footer>
    </main>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} setActivePage={setActivePage} open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="page-area">
        <Navbar onMenuClick={() => setMenuOpen(true)} />
        {activePage === "Dashboard" ? <Dashboard /> : (
          <main className="main-content simple-page"><div className="eyebrow">WORKSPACE</div><h1>{activePage}</h1><p>This section is ready for your next feature. Start by creating a reusable component for {activePage.toLowerCase()}.</p><button className="primary-button" onClick={() => setActivePage("Dashboard")}>Back to dashboard</button></main>
        )}
      </div>
    </div>
  );
}