import './trailer.scss';
import HomeSection from '../HomeSection';
import { bg3, trailerImg } from '../../../assets/images';
import { useRef, useEffect } from 'react';

const Trailer = props => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    iframe.style.height = iframe.offsetWidth * 9 /16 + 'px';
  });

  return (
    <HomeSection
      className={`trailer ${props.isActive ? 'active' : ''}`}
      classSectionContent="trailer-content overlay"
      bgImage={bg3}
    >
      <div className="image relative">
        <img src={trailerImg} alt="" />
      </div>
      <div className="content relative">
        <div className="title">
          <span>Compete With</span>
          <h2 className="main-color">Friends</h2>
        </div>
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/TFzkbos0oeo"
            width="90%"
            ref={iframeRef}
          ></iframe>
        </div> 
      </div>
    </HomeSection>
  );
}

export default Trailer;
