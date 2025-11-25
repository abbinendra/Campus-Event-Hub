import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockEvents } from "../assets/mock";
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = mockEvents.find(e => e.id === id);

  if (!event) {
    return (
      <div className="ed-page">
        <div className="ed-inner">
          <div className="ed-card ed-empty-card">
            <h2>Event not found</h2>
            <button className="ed-back-link" onClick={() => navigate(-1)}>
              ← Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  const start = new Date(event.start_date);
  const end = new Date(event.end_date);

  const dateString = start.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  const startTime = start.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit"
  });

  const endTime = end.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit"
  });

  const progress =
    (event.registered_count / event.max_participants) * 100;

  return (
    <div className="ed-page">
      <div className="ed-inner">
        {/* Top back link */}
        <button className="ed-back-link" onClick={() => navigate(-1)}>
          ← Back to All Events
        </button>

        {/* Hero card */}
        <div className="ed-hero-card">
          <div className="ed-hero-image-wrapper">
            <img
              src={event.image}
              alt={event.title}
              className="ed-hero-image"
            />
            <div className="ed-hero-overlay">
              <span className="ed-hero-badge">{event.category}</span>
              <h1 className="ed-hero-title">{event.title}</h1>
              <div className="ed-hero-meta">
                <span>{dateString}</span>
                <span className="ed-dot">•</span>
                <span>{startTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-column layout */}
        <div className="ed-layout">
          {/* Left column */}
          <div className="ed-main-column">
            <section className="ed-card">
              <h2 className="ed-section-title">About This Event</h2>
              <p className="ed-text">{event.description}</p>
            </section>

            <section className="ed-card">
              <h2 className="ed-section-title">Requirements</h2>
              <p className="ed-text">{event.requirements}</p>
            </section>

            <section className="ed-card">
              <h2 className="ed-section-title">Tags</h2>
              <div className="ed-tags">
                {event.tags.map((tag, index) => (
                  <span key={index} className="ed-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Right column (sidebar) */}
          <aside className="ed-side-column">
            <section className="ed-card">
              <h3 className="ed-subtitle">Location</h3>
              <p className="ed-text-small">{event.location}</p>
            </section>

            <section className="ed-card">
              <h3 className="ed-subtitle">Date &amp; Time</h3>
              <p className="ed-text-small">{dateString}</p>
              <p className="ed-text-small">
                {startTime} – {endTime}
              </p>
            </section>

            <section className="ed-card">
              <h3 className="ed-subtitle">Participants</h3>
              <p className="ed-text-small">
                {event.registered_count} / {event.max_participants} registered
              </p>
              <div className="ed-progress">
                <div
                  className="ed-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;