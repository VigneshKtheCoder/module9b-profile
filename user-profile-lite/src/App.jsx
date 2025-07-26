import { useState } from 'react';
import UserProfile from './UserProfile';
import SkillList from './Skilllist';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const person = {
    name: "Vignesh Kalyanasundaram",
    bio: "Hi, my name is Vignesh and I pursuit my interest in coding! I know a plethora of coding languages such as Java, Python, JavaScript and somewhat knowledge of C++. I am a full stack Web Developer and I can also create some apps!",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAsQMBIgACEQEDEQH/xAAbAAEAAgIDAAAAAAAAAAAAAAAABQYEBwECA//EADcQAAICAQICBgcHBAMAAAAAAAABAgMEBREGIRIxQVFhgRQicZGhsdETI0JicpLhMrLB8DNzg//EABcBAQEBAQAAAAAAAAAAAAAAAAACAQP/xAAZEQEBAQEBAQAAAAAAAAAAAAAAARECMRL/2gAMAwEAAhEDEQA/ANmAA6OQAAAAAABvZc+XtAHhl5uLhw6WVfXUuzpS5vyK3rnFGzlj6Y1y5Sua/t+pVrLJ22Oy2cpzl1yk92ypGau13FmnVvatW2/pjt8zyjxdht88fIX7fqUsG/LNbCxuIdMyGorIVcn2Wro/HqJVNNbrmvDtNUbGfpurZmnTXo9m9e/OqfOL+gvLdbIBH6Pq1GqUOdXq2xXr1Prj/HiSBDQAAAAAAAAAAAAAAAAAACqcXaxKMnp2NLZ7ffSX9vu6yx6hkxw8K/Jkt/soOSXe+z4ms7bJXWytsblObbbfeyuWWugALSAAAAAPbEyrcPKhkY8ujZB+/wAH4Gx9Mzq9Rw68ivl0l60X1xfajWRYuDM11Z08STfQuW8fCS/jf3E2Ni6gIEKAAAAAAAAAAAAAAAAQPGdjhpCgn/yWxi/i/wDBRi68bxb06iS6o3bv9rKUdOfE0ABrAAAAAAMrTLXTqONYnt0bY/MxT1xYuWVRFdbsiviZRtLv9oCBzWAAAAAAAAAAAAAAAAi+JcZ5WjZEYreVaVi28Ob+G5rxc0bXa36zXGuadLTM+dPP7GXrUy7493kVyyo8AFpAAAAAAk+G8b0rWcePXGD+0l4JfzsRj9xd+ENOli4ksq6O1t/NJ9aj2e/rJrYsCABCgAAAAAAAAAAAAAAAAwtX02nU8R02bRmudc9v6ZGaANY5+FfgZLoyYdGXY+yXimY3tNoZuHj5tLpyqlZB9/WvYVbP4Rtg3LBuVkeyux7NefaXKnFYBnXaPqVL2nhXPxjHpfI8o6fnSe0cLJf/AIy+husxjDkk2yXxeG9Tva6VSpi+21pfDmWLS+GcXDcbcifpFqe63W0V5dvmNbiI4b0CeTZDMzY9HHi941yXOx/T5l1SS6guoEVUAAYAAAAAAAAAAAAAAAAAAAAeR1nZGuO85RivzPYDscmJLUsGL2lmY6fc7EFqWDJ7LNx2/wDsQGWcHWFtdi+7nGX6XudgAAAAAAAAAAAAAAAAAAAAHlk5FOLRK/IsUK49bYHqyF1PiXCwW64b5Fy/DB8l7WV3WuIb9Q3rocqcfq6KfrTXi/8ABCLl1FTlmpjM4k1LIbjXaseHZGrr/d1kVZbbbJyttnOT63KW7OgKxJ5DZdwBo7QnOt71zlB98Xs/gSuFxHqWK1vd9tBfhtW/x6yIBmQXrTOKMPLlGrI3x7X1dJ7xfn2eZOpppNc0zVBL6Lr2TpjUJN3Y2/OtvnH9P+7E3lutgAx8HMozseN+NPpQfvT7mjIJUAAAAAAAAAAAcnAA6X3149M7rpqFcF0pSfYjXutatbqmQpNdGiHKutvs734kjxfqfpGR6BTL7ql7z8Zd3l8yudrZfMZaAApIAAAAAAAAAAM7SdTu0vKVtT6UJcp1v8S+vibDxMqrLxq8iiXSrmuXf7DVxO8K6o8LLeNbLbHvaXPqjLsZPUbKvZwcnBCgAAAAAAAAwtZzVgadfkfiUdoL8z5IzSrcc3tQxcddrc35cl8zYKlJuUnKTbbe7b7WcAHRAAAAAAAAAAAAAAAADYnDue9Q0yuc5b21+pZ7VtzJMpPBWV9lqM8d/wBN8N9vzR/jcuxzqpQAGNAAAAAApPG0m9Uqj2KlNe9gFc+lV4AFoAAAAAAAAAAAAAAAAZ2hTlXrOE4vZu6K8nyZskA51UAAY0AAH//Z",
  };

  const skills = ["JavaScript", "React", "Python", "HTML/CSS", "Java", "Web and App Development", "Flutter"];

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