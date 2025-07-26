function SkillList({ skills, darkMode }) {
  const listStyle = {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: darkMode ? '#2a2a2a' : '#f9f9f9',
    color: darkMode ? '#eee' : '#333',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={listStyle}>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} style={{ padding: '4px 0' }}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillList;