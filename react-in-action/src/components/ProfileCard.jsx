// Importing the CSS file for styling the profile card
import "../styles/ProfileCard.css";

// Functional component to display a profile card
function ProfileCard() {
  return (
    // Main card container styled using external CSS
    <div className="card">
      
      {/* Profile image with inline styles */}
      <img
        src=""
        alt="My image"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%" // Makes the image circular
        }}
      />

      {/* User name */}
      <h3>Alka Devi</h3>

      {/* Description styled using CSS class */}
      <p className="description">My Profile Card</p>
    </div>
  );
}

// Exporting the component for use in other files
export default ProfileCard;
