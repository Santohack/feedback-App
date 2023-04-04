import PropTypes from "prop-types";

function Card({ children, reverse }) {
  return (
    // <div className={`card ${reverse && 'reverse'}`}>
    //  {children}
    // </div>
    <div
      className="card"
      style={{
        backgroundColor: reverse ? " #000000" : " #ffffff",
        color: reverse ? " #ffffff" : "#000000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.prototypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
