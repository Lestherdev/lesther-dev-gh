import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="#">Lester</a>
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;