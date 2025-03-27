import { useState } from "react";
import "../styles/settings.css";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme", darkMode);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="settings-container">
      <h1 className="settings-header">Settings</h1>

      {/* Profile Settings */}
      <div className="settings-card">
        <h2>Profile</h2>
        <div className="profile-section">
          {profileImage && <img src={profileImage} alt="Profile Preview" className="profile-preview" />}
          <label className="form-label">Profile Picture</label>
          <input type="file" className="form-control mb-3" onChange={handleProfileImageChange} />
        </div>
        <label className="form-label">Name</label>
        <input type="text" className="form-control mb-2" placeholder="Your Name" />

        <label className="form-label">Email</label>
        <input type="email" className="form-control mb-2" placeholder="Your Email" />

        <button className="btn btn-success">Save Changes</button>
      </div>

      {/* Account Settings */}
      <div className="settings-card">
        <h2>Account</h2>
        <label className="form-label">Change Password</label>
        <input type="password" className="form-control mb-2" placeholder="New Password" />
        <button className="btn btn-warning mb-2">Update Password</button>
        <button className="btn btn-danger">Delete Account</button>
      </div>

      {/* Appearance Settings */}
      <div className="settings-card">
        <h2>Appearance</h2>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <label className="form-check-label">Dark Mode</label>
        </div>
      </div>

      {/* Notifications */}
      <div className="settings-card">
        <h2>Notifications</h2>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" checked={notifications} onChange={toggleNotifications} />
          <label className="form-check-label">Enable Notifications</label>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
