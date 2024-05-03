

const CardsGrid = ({ cards }) => {
  return (
    <div className="cards-grid">
      {Array.isArray(cards) && cards.map((card, index) => (
        <cards key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsGrid;