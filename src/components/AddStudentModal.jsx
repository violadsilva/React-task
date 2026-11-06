import { useState } from "react";
import { X } from "lucide-react";

export default function AddStudentModal({ onClose, onAdd }) {
  const [form, setForm] = useState({ name: "", email: "", course: "React Development", status: "Active" });
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError("Please enter the student's name and email.");
      return;
    }
    onAdd(form);
  }

  return (
    <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
      <form className="modal" onSubmit={handleSubmit}>
        <div className="modal-heading"><div><h2>Add a student</h2><p>Enter the details for your new student.</p></div><button type="button" className="icon-button" onClick={onClose} aria-label="Close"><X size={20} /></button></div>
        <label>Full name<input autoFocus value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Alex Morgan" /></label>
        <label>Email address<input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="alex@email.com" /></label>
        <label>Course<select value={form.course} onChange={e => setForm({ ...form, course: e.target.value })}><option>React Development</option><option>JavaScript Basics</option><option>Python Programming</option><option>HTML & CSS</option><option>UI/UX Design</option></select></label>
        <label>Status<select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}><option>Active</option><option>Pending</option><option>Inactive</option></select></label>
        {error && <p className="form-error">{error}</p>}
        <div className="modal-actions"><button type="button" className="secondary-button" onClick={onClose}>Cancel</button><button className="primary-button" type="submit">Add student</button></div>
      </form>
    </div>
  );
}