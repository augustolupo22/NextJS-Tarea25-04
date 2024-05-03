import styles from "./Hero.module.css";

const Hero = ({ title, description }) => {
  return (
    <section className={styles["container"]}>
      <div className={styles["hero_bkg"]}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Hero;
