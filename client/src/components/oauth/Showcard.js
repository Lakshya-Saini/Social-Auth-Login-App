import React from "react";

const Showcard = (props) => {
  const { name, photo, onClick } = props;
  return (
    <div className="card">
      <div className="card-body text-center">
        <img src={photo} alt={name} />
        <button
          type="button"
          className="btn shadow-none close"
          onClick={onClick}
        >
          <i className="fas fa-times-circle"></i>
        </button>
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default Showcard;
