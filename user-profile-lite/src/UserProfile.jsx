function UserProfile() {
  const name = "Vignesh Kalyanasundaram";
  const bio = "Hi, my name is Vignesh and I am a full stack web developer with knowledge in 3 languages like java, python, and javascript.";
  const image = "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face";

  const cardStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  };

  const imageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #ccc',
    marginBottom: '16px'
  };

  const nameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '8px'
  };

  const bioStyle = {
    fontSize: '16px',
    color: '#666'
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <h1 style={nameStyle}>{name}</h1>
      <p style={bioStyle}>{bio}</p>
    </div>
  );
}

export default UserProfile;