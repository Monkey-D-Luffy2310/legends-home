import './section.scss';

const Section = props => {
  return (
    <section className={`section ${props.className}`}>
      {props.children}
    </section>
  );
}

export const SectionContent = props => {
  const bgImage = props.bgImage ? 
  {
    backgroundImage: `url(${props.bgImage})`
  } : {};

  return (
    <div 
      className={`section-content ${props.classSectionContent}`}
      style={bgImage}
    >
      {props.children}
    </div>
  );
}

export default Section;
