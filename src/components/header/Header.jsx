import './header.scss';
import { logo } from '../../assets/images'

const Header = () => {
  return (
    <div className="header">
      <div className="header-inner container">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <ul className="header-nav">
          <li><a href="#">Overview</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Champions</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
