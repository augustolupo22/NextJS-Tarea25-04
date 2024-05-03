import styles from "./Navbar.module.css";

const Navbar = ({ menuItems, logo }) => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <img src={"/Images/logo.png"} alt="Logo" className={styles.logoImg} />
      </div>
      <ul className={styles.ul}>
        {menuItems.map((menuItem, index) => (
          <li key={index} className={styles.li}>
            <a href={menuItem.link} className={styles.link}>
              {menuItem.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
