import SectionContainer from "../Layout/SectionContainer";
import "./About.css";

function About() {
  return (
    <SectionContainer id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="about-text">
          I'm Ekjyot Singh Shinh, a driven Computer Science graduate from
          California State University, Sacramento, where I earned a 3.92 GPA in
          2025. I specialize in full-stack development, parallel programming,
          algorithm design, and building scalable software solutions. With a
          passion for crafting efficient and maintainable applications, I’ve
          contributed to impactful projects across multiple domains. I’m eager
          to apply my skills to create innovative and reliable technology that
          makes a difference.
        </p>
      </div>
    </SectionContainer>
  );
}

export default About;
