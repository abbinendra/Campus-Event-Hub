import React, { useState } from "react";
import "./CreateEvent.css";
import { useNavigate } from "react-router-dom";
import { mockEvents } from "../assets/mock";

export default function CreateEvent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    max_participants: "",
    location: "",
    start_date: "",
    end_date: "",
    requirements: "",
    tags: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      id: String(mockEvents.length + 1),
      title: formData.title,
      description: formData.description,
      category: formData.category,
      max_participants: parseInt(formData.max_participants),
      location: formData.location,
      start_date: formData.start_date,
      end_date: formData.end_date,
      requirements: formData.requirements,
      tags: formData.tags.split(",").map(t => t.trim()),
      registered: 0,
      image:
        formData.image ||
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
    };

    mockEvents.push(newEvent);
    navigate("/college-dashboard");
  };

  return (
    <div className="ce-page">
      {/* top back button */}
      <button className="ce-back" onClick={() => navigate("/college-dashboard")}>
        Back to Dashboard
      </button>

      <div className="ce-container">
        <h1 className="ce-title">Create New Event</h1>
        <p className="ce-subtitle">
          Fill in the details to create an exciting event for students
        </p>

        <form className="ce-form" onSubmit={handleSubmit}>
          {/* TITLE */}
          <div className="ce-field">
            <label>Event Title *</label>
            <input
              type="text"
              name="title"
              placeholder="e.g., Inter-College Hackathon 2024"
              required
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          {/* DESCRIPTION */}
          <div className="ce-field">
            <label>Event Description *</label>
            <textarea
              name="description"
              rows="4"
              required
              placeholder="Provide a detailed description of your event..."
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* CATEGORY + MAX PARTICIPANTS */}
          <div className="ce-row">
            <div className="ce-field">
              <label>Category *</label>
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select event category</option>
                <option value="hackathon">Hackathon</option>
                <option value="cultural">Cultural</option>
                <option value="sports">Sports</option>
                <option value="workshop">Workshop</option>
                <option value="competition">Competition</option>
              </select>
            </div>

            <div className="ce-field">
              <label>Max Participants *</label>
              <input
                type="number"
                name="max_participants"
                placeholder="e.g., 200"
                required
                value={formData.max_participants}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* LOCATION */}
          <div className="ce-field">
            <label>Event Location *</label>
            <input
              type="text"
              name="location"
              placeholder="e.g., Tech Innovation Center, Building A"
              required
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          {/* START + END DATE */}
          <div className="ce-row">
            <div className="ce-field">
              <label>Start Date & Time *</label>
              <input
                type="datetime-local"
                name="start_date"
                required
                value={formData.start_date}
                onChange={handleChange}
              />
            </div>
            <div className="ce-field">
              <label>End Date & Time *</label>
              <input
                type="datetime-local"
                name="end_date"
                required
                value={formData.end_date}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* REQUIREMENTS */}
          <div className="ce-field">
            <label>Requirements *</label>
            <input
              type="text"
              name="requirements"
              placeholder="e.g., Laptop, Student ID, Team of 2-4 members"
              required
              value={formData.requirements}
              onChange={handleChange}
            />
          </div>

          {/* TAGS */}
          <div className="ce-field">
            <label>Tags (comma separated) *</label>
            <input
              type="text"
              name="tags"
              placeholder="e.g., Technology, Competition, Team Event"
              required
              value={formData.tags}
              onChange={handleChange}
            />
          </div>

          {/* IMAGE URL */}
          <div className="ce-field">
            <label>Image URL (optional)</label>
            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={handleChange}
            />
            <p className="ce-hint">Leave empty to use default image</p>
          </div>

          {/* BUTTONS */}
          <div className="ce-buttons">
            <button type="submit" className="ce-submit">
              Create Event
            </button>
            <button
              type="button"
              className="ce-cancel"
              onClick={() => navigate("/college-dashboard")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}