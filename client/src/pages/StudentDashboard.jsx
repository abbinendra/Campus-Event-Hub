import React from "react";
import { useNavigate } from "react-router-dom";
import './StudentDashboard.css'
import { mockEvents } from "../assets/mock";
export default function StudentDashboard() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/", { replace: true });
    }
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div id="dashboard-wrapper">

      {/* TOP NAVBAR */}
      <div id="top-navbar">
        <div id="brand">CampusEventHub</div>

        <div id="nav-links">
          <a id="nav-active">
            Dashboard
          </a>

          <a>
            All Events
          </a>
        </div>

        <div id="user-box">
          <span>{localStorage.getItem("userEmail") || "User"}</span>
          <button id="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div id="page-container">
        
        <h1 id="page-title">Student Dashboard</h1>
        <p id="page-sub">Welcome back! Here are your events. </p>

        {/* STAT CARDS */}
        <div id="stats-grid">
          <div id="stat-card">
            <p id="stat-label">Active Events</p>
            <p id="stat-number">3</p>
          </div>

          <div id="stat-card">
            <p id="stat-label">Total Registrations</p>
            <p id="stat-number">2</p>
          </div>

          <div id="stat-card">
            <p id="stat-label">Approved In</p>
            <p id="stat-number">1</p>
          </div>

          <div id="stat-card">
            <p id="stat-label">Pending Approval</p>
            <p id="stat-number">1</p>
          </div>

          <div id="stat-card">
            <p id="stat-label">Completed Events</p>
            <p id="stat-number">0</p>
          </div>

          <div id="stat-card">
            <p id="stat-label">Total Events</p>
            <p id="stat-number">6</p>
          </div>
        </div>

      {/* UPCOMING EVENTS */}
        <div id="upcoming-events-title">Upcoming Events</div>
        <div
          id="view-all-btn"
          onClick={() => navigate("events")}
        >
          View All →
        </div>

        <div id="upcoming-events-container">
          {mockEvents.slice(0, 6).map((event) => (
            <div id="event-item" key={event.id}>
              <div id="event-item-split">

                <div id="event-item-image">
                  <img
                    src={event.banner || event.image}
                    alt={event.title}
                    id="event-img"
                  />
                  <span id="event-status-badge">Upcoming</span>
                </div>

                <div id="event-item-info">
                  <div id="float-right">
                    <span id="event-category-badge">{event.category}</span>
                    <button
                      id="event-details-btn"
                      onClick={() => navigate(`/event-details/${event.id}`)}
                    >
                      View Details
                    </button>
                  </div>

                  <span id="event-item-title">{event.title}</span>

                  <div id="event-item-meta">
                    <p id="event-date-text">{event.date}</p>
                    <p id="event-location-text">{event.location}</p>
                    <p id="event-capacity-text">{event.registered} {event.capacity}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}