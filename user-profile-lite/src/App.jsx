import { useState } from 'react';
import UserProfile from './UserProfile';
import SkillList from './Skilllist';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const person = {
    name: "Jordan Lee",
    bio: "UX designer who loves turning complex problems into beautiful experiences.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
  };

  const skills = ["Figma", "React", "Design Systems", "HTML/CSS", "Accessibility"];

  return (
    <div style={{ backgroundColor: darkMode ? "#121212" : "#eee", minHeight: "100vh", paddingBottom: "40px" }}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          margin: '20px auto',
          display: 'block',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: darkMode ? "#f5f5f5" : "#333",
          color: darkMode ? "#000" : "#fff",
        }}
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <UserProfile name={person.name} bio={person.bio} image={person.image} darkMode={darkMode} />
      <SkillList skills={skills} darkMode={darkMode} />
    </div>
  );
}

export default App;