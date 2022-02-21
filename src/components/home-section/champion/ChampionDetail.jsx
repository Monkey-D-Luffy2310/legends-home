import './champion-detail.scss';
import { useRef, useEffect } from 'react';

import { closeIcon } from '../../../assets/images';

const ChampionDetail = props => {
  const item = props.item;
  const frameRef = useRef(null);

  useEffect(() => {
    const iframe = frameRef.current;
    iframe.style.height = iframe.offsetWidth * 9 /16 + 'px'; 
  }, []);

  return (
    <div className={`champion-detail bg-image overlay champion-detail-${props.id}`} style={{backgroundImage: `url(${item.bgLarge})`}}>
      <div className="champion-detail-content">
        <div className="nickName">{item.nickName}</div>
        <h2 className='name main-color'>{item.name}</h2>
        Role: <span className="role second-color">{item.role}</span>
        <br/>
        Difficulty: <span className="diff second-color">{item.difficulty}</span>
        <p className='desc'>{item.description}</p>
        <div className="spotlight">Champion spotlight</div>
        <div className="video">
          <iframe src={`https://www.youtube.com/embed/${item.video}`} frameBorder="0" width="60%" ref={frameRef}></iframe>
        </div>
      </div>
      <div className="close-icon">
        <img src={closeIcon} alt="" />
      </div>
    </div>
  );
}

export default ChampionDetail;
