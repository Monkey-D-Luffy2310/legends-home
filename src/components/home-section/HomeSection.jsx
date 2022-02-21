import Section, {SectionContent} from '../section/Section';

const HomeSection = props => {
  return (
    <Section className={props.className}>
      <SectionContent 
        classSectionContent={props.classSectionContent}
        bgImage={props.bgImage}
      >
        {props.children}
      </SectionContent>
    </Section>
  );
}

export default HomeSection;
