const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  import { Link } from 'react-router-dom';

  const Nav = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  };
  return (
    <div>Nav</div>
  )
};

export default Nav;
