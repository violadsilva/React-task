import { MoreHorizontal, Search, SlidersHorizontal, UserPlus } from "lucide-react";

export default function StudentTable({ students, search, setSearch, statusFilter, setStatusFilter, onAddStudent }) {
  return (
    <section className="panel students-panel">
      <div className="panel-heading">
        <div><h2>Recent students</h2><p>Keep track of your students and their progress.</p></div>
        <button className="primary-button small-button" onClick={onAddStudent}><UserPlus size={16} /> Add student</button>
      </div>
      <div className="table-toolbar">
        <label className="table-search"><Search size={16} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search students..." /></label>
        <label className="filter-select"><SlidersHorizontal size={16} /><select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} aria-label="Filter by status"><option value="All">All statuses</option><option>Active</option><option>Pending</option><option>Inactive</option></select></label>
      </div>
      <div className="table-scroll">
        <table>
          <thead><tr><th>STUDENT</th><th>COURSE</th><th>JOINED DATE</th><th>STATUS</th><th></th></tr></thead>
          <tbody>
            {students.length ? students.map(student => (
              <tr key={student.id}>
                <td><div className="student-cell"><div className={`avatar avatar-${student.color}`}>{student.initials}</div><div><strong>{student.name}</strong><span>{student.email}</span></div></div></td>
                <td>{student.course}</td><td>{student.joined}</td>
                <td><span className={`status status-${student.status.toLowerCase()}`}><i />{student.status}</span></td>
                <td><button className="icon-button row-menu" aria-label={`More options for ${student.name}`} onClick={() => alert(`${student.name}\\n${student.course}\\n${student.status}`)}><MoreHorizontal size={19} /></button></td>
              </tr>
            )) : <tr><td colSpan="5" className="empty-state">No students found. Try another search or filter.</td></tr>}
          </tbody>
        </table>
      </div>
      <div className="table-footer"><span>Showing <strong>{students.length}</strong> students</span><span className="page-indicator">Page 1 of 1</span></div>
    </section>
  );
}