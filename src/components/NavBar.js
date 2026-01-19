import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user, logout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="logo">
          <h2>TVM Academy</h2>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/courses" className="nav-item">Courses</Link>
          {!user && <Link to="/enquiry" className="nav-item">Enquiry</Link>}
          {user ? (
            <>
              {user.role === 'admin' && (
                <>
                  <Link to="/dashboard" className="nav-item">🏢 Operations Center</Link>
                  <Link to="/manage-courses" className="nav-item">📚 Course Management</Link>
                  <Link to="/view-enquiries" className="nav-item">🔄 Enquiry Workflow</Link>
                  <Link to="/reports" className="nav-item">📊 Reports & Analytics</Link>
                </>
              )}
              {user.role === 'user' && (
                <Link to="/my-courses" className="nav-item">My Courses</Link>
              )}
              <span className="user-info">Welcome, {user.name}</span>
              <button className="btn btn-outline" onClick={logout} style={{ marginLeft: '8px' }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-item">Login</Link>
              <Link to="/register" className="nav-item btn btn-primary" style={{ marginLeft: '8px', padding: '8px 16px' }}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
