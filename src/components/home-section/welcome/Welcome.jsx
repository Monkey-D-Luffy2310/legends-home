import HomeSection from '../HomeSection';
import Button from '../../button/Button';
import './welcome.scss';
import { bg1, champAshe, champAhri, champGaren, distortion } from '../../../assets/images';
import hoverEffect from 'hover-effect';
import { useEffect } from 'react';

const Welcome = (props) => {
  useEffect(() => {
    const champImgs = [champAshe, champAhri, champGaren];
    let animates = [];
    champImgs.forEach((currentImg, index) => {
      const nextImg = champImgs[(index + 1) % champImgs.length];
      const animation = new hoverEffect({
        parent: document.querySelector('.welcome-animate'),
        intensity: 0.5,
        image1: currentImg,
        image2: nextImg,
        displacementImage: distortion,
        hover: false
      });
      animates.push(animation);
    });
    let current = 0;
    function animation() {
      if (!document.hidden) {
        animates[current].next();
      }
      setTimeout(() => {
        const canvas = document.querySelectorAll('.welcome-animate canvas');
        document.querySelector('.welcome-animate').appendChild(canvas[0]);
        animates[current].previous();
      }, 3000);
      current = (current + 1) % animates.length;
    }
    setInterval(animation, 3000);
  }, [])

  return (
    <HomeSection 
      className={`welcome ${props.isActive ? 'active' : ''}`}
      classSectionContent="welcome-content overlay"
      bgImage={bg1}
    >
      <div className="welcome-left relative">
        <div className="title">
          <span>Welcome To</span>
          <h2 className="main-color">Summoner's Rift</h2>
        </div>
        <p className="desc mt-4">Team up with friends and test your skills in 5v5 MOBA combat. All the high-skill competition you crave, designed especially for mobile and console with revamped controls and streamlined matches.Explore the living universe of Runeterra through lore, comics, games, and more. Then dive into the community of gamers, cosplayers, musicians, and content creators who are waiting for you to join them.</p>
        <div className=" button mt-4">
          <Button className="btn-main">Play now</Button>
          <Button className="btn-second">Get started</Button>
        </div>
      </div>
      <div className="welcome-right relative">
        <div className="welcome-animate">
        </div>
      </div>
    </HomeSection>
  );
}

export default Welcome;
