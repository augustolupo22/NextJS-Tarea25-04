import Styles from "./NavbarContainer.css";

/*const Navbar = (props) => {
  const { title, menu } = props;
  return (
    <header className={Styles.container}>
      <h1>{title}</h1>
      <nav>
        <ul>
          {menu.map((menuItem, index) => (
            <li key={index}>
              <a href={menuItem.link}>{menuItem}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
*/

const Navbar = ({ menuItems }) => {
  return (
    <nav className={Styles.navbarContainer}>
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <a href={menuItem.link}>{menuItem.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;