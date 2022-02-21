import './credit.scss';
import { bgVideo } from '../../../assets/videos';
import { useRef, useEffect } from 'react';
import Button from '../../button/Button';

const Credit = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div className="credit">
      <video className="overlay" ref={videoRef} src={bgVideo} loop></video>
      <div className="content">
        <div className="title">
          <span>Start Your</span>
          <h2 className="main-color">Legends</h2>
        </div>
        <div className=" button mt-4">
          <Button className="btn-main">Play now</Button>
          <Button className="btn-second">Get started</Button>
        </div>
      </div>
    </div>
  );
}

export default Credit;
