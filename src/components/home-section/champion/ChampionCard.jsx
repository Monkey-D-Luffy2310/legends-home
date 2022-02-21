import { useRef } from 'react';
import './champion-card.scss';

const ChampionCard = props => {
  const item = props.item;
  const cardRef = useRef(null);

  function onClick() {
    const img = cardRef.current.querySelector('img');
    const rect = img.getBoundingClientRect();

    const node = img.cloneNode(true);
    
    node.style.height = rect.height + 'px';
    node.style.width = rect.width + 'px';
    node.style.position = 'fixed';
    node.style.left = rect.left + 'px';
    node.style.top = rect.top + 'px';
    node.style.transition = 'all 1s';
    node.style.height = rect.height + 'px';
    node.style.zIndex = '10000';

    node.id = 'champion-card-' + props.id;

    setTimeout(() => {
      node.style.left = 0;
      node.style.top = 0;
      node.style.width = 'auto';
      node.style.height = '100%';
    }, 200);

    document.querySelector('body').appendChild(node);

    const detailElement = document.querySelector(`.champion-detail-${props.id}`);
    detailElement.classList.add('active');

    const closeIcon = document.querySelector(`.champion-detail-${props.id} .close-icon`);
    const imgCard = document.querySelector(`#champion-card-${props.id}`);
    closeIcon.addEventListener('click', function() {
      detailElement.classList.remove('active');
      imgCard.style.opacity = 0;
      setTimeout(() => {
        imgCard.remove();
      }, 1000);
    });    
  }

  return (
    <>
      <div className="champion-card" ref={cardRef} onClick={onClick}>
        <div className="frame">
          <div className="bg bg-image overlay" style={{backgroundImage: `url(${item.bg})`}} />
          <div className="name">{item.name}</div>
        </div>
        <img className="card" src={item.img} alt="" />
      </div>
    </>
  );
}

export default ChampionCard;
