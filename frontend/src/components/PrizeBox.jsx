import PropTypes from 'prop-types';

function PrizeBox({ prize }) {
  const { name, image, description, link } = prize;

  return (
    <div className="prize-box">
      <a href={link} rel="noreferrer" target="_blank" className="in-box">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

PrizeBox.propTypes = {
  prize: PropTypes.object.isRequired,
};

export default PrizeBox;