import './card.styles.css';
export const Card = ({ monster }) => {
  return (
    <div className='card-container'>
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt='Monster'
      />
      <h1>{monster.name}</h1>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
