import styles from "./Cards.module.css";

const CardsGrid = ({ title, cards }) => {
  return (
    <div className={styles["contenedor"]}>
      <h1 className={styles["title"]}>Mis trabajos</h1>
      <div className={styles["grid"]}>
        {Array.isArray(cards) && cards.map((card, index) => (
          <div className={styles["card"]} key={index}>
            <h2 className={styles["card-title"]}>{card.title}</h2>
            <img src={card.image} alt={card.title} className={styles["card-image"]} />
            <p className={styles["card-description"]}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;


