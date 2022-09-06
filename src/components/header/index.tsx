import { Link } from 'react-router-dom';
import './Header.scss';
function Header() {
  return (
    <header>
      <div className="wrapper-brands">
        <h1>Contentful Lab</h1>
        <h2 className="cards-title">//Shoes</h2>
      </div>
      <nav>
        <Link to="/"> Home </Link>
      </nav>
    </header>
  )
}

export default Header