import React from "react";
import { useNavigate } from "react-router-dom";
import './CollegeDashboard.css'
import { mockEvents } from "../assets/mock";
export default function CollegeDashboard() {
  const [activeTab, setActiveTab] = React.useState("dashboard");
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
    <div className="dashboard-wrapper">

      {/* TOP NAVBAR */}
      <div className="top-navbar">
        <div className="brand">CampusEventHub</div>

        <div className="nav-links">
          <a
            className={activeTab === "dashboard" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </a>
          <a
            className={activeTab === "events" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveTab("events")}
          >
            All Events
          </a>
          <a
            className={activeTab === "create" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveTab("create")}
          >
            Create Event
          </a>
          <a
            className={activeTab === "manage" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveTab("manage")}
          >
            Manage Participants
          </a>
        </div>

        <div className="user-box">
          <span>{localStorage.getItem("userEmail") || "User"}</span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="page-container">
        
        <h1 className="page-title">Admin Dashboard</h1>
        <p className="page-sub">Welcome back, Admin ! Here's your event overview. </p>

        {/* ACTION BUTTONS */}
        <div className="action-buttons">
          <button
            className="purple-btn"
          >
            + Create New Event
          </button>
          <button className="gray-btn"> Manage Participants</button>
          <button className="gray-btn"> View All Events</button>
        </div>

        {/* STAT CARDS */}
        <div className="stats-grid">
          <div className="stat-card">
            <p className="stat-label">Active Events -</p>
            <p className="stat-number">3</p>
          </div>

          <div className="stat-card">
            <p className="stat-label">Total Registrations -</p>
            <p className="stat-number">2</p>
          </div>

          <div className="stat-card">
            <p className="stat-label">Approved -</p>
            <p className="stat-number">1</p>
          </div>

          <div className="stat-card">
            <p className="stat-label">Pending Approval -</p>
            <p className="stat-number">1</p>
          </div>

          <div className="stat-card">
            <p className="stat-label">Completed Events -</p>
            <p className="stat-number">0</p>
          </div>

          <div className="stat-card">
            <p className="stat-label">Total Events -</p>
            <p className="stat-number">6</p>
          </div>
        </div>

      {/* UPCOMING EVENTS */}
        <div className="upcoming-events-title">Upcoming Events</div>
        <div
          className="view-all-btn purple-btn"
          onClick={() => navigate("events")}
        >
          View All →
        </div>

        <div className="upcoming-events-container">
          {mockEvents.slice(0, 6).map((event) => (
            <div className="event-item" key={event.id}>
              <div className="event-item-split">

                <div className="event-item-image">
                  <img
                    src={event.banner || event.image}
                    alt={event.title}
                    className="event-img"
                  />
                  <span className="event-status-badge">Upcoming</span>
                </div>

                <div className="event-item-info">
                  <div className="float-right"><span className="event-category-badge">{event.category}</span></div>

                  <span className="event-item-title">{event.title}</span>

                  <div className="event-item-meta">
                    <p className="event-date-text">{event.date}</p>
                    <p className="event-location-text">{event.location}</p>
                    <p className="event-capacity-text">{event.registered} {event.capacity}</p>
                  </div>
                  <div className="event-actions-row">
                    <button
                      className="event-details-btn"
                      onClick={() => navigate(`/event-details/${event.id}`)}
                    >
                      View Details
                    </button>
                    <button className="event-manage-btn">Manage</button>
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