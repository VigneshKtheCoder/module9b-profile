function UserProfile({ name, bio, image, darkMode }) {
  const containerStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '24px',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: darkMode ? '#1f1f1f' : '#fff',
    color: darkMode ? '#f1f1f1' : '#222',
    transition: 'all 0.3s ease',
  };

  const imageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #ccc',
    marginBottom: '16px',
  };

  const nameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const bioStyle = {
    fontSize: '16px',
    color: darkMode ? '#bbb' : '#555',
  };

  return (
    <div style={containerStyle}>
      <img src={image} alt={`${name}'s profile`} style={imageStyle} />
      <h1 style={nameStyle}>{name}</h1>
      <p style={bioStyle}>{bio}</p>
    </div>
  );
}

export default UserProfile;