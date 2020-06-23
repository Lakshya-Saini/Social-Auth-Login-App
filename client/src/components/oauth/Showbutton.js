import React from "react";

const Showbutton = (props) => {
  const { provider, disabled, onClick } = props;

  return (
    <React.Fragment>
      {disabled === true ? (
        <button
          onClick={onClick}
          className={`${provider} disabled btn btn-primary shadow-none`}
        >
          <i className={`fab fa-${provider}`}></i> Login with {provider}
        </button>
      ) : (
        <button
          onClick={onClick}
          className={`${provider} btn btn-primary shadow-none`}
        >
          <i className={`fab fa-${provider}`}></i> Login with {provider}
        </button>
      )}
    </React.Fragment>
  );
};

export default Showbutton;
