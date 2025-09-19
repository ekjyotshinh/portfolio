import "./SectionContainer.css";

function SectionContainer({ id, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="section-inner">{children}</div>
    </section>
  );
}

export default SectionContainer;
