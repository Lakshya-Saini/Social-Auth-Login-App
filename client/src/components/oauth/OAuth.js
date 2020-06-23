import React, { Component } from "react";
import { API_URL } from "../config/keys";
import Showcard from "./Showcard";
import Showbutton from "./Showbutton";
import PropTypes from "prop-types";

class OAuth extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      disabled: false,
    };
  }

  componentDidMount() {
    const { socket, provider } = this.props;

    socket.on(provider, (user) => {
      this.popup.close();
      this.setState({ user });
    });
  }

  checkPopup = () => {
    const check = setInterval(() => {
      const { popup } = this;

      if (!popup || popup.closed || popup.closed === "undefined") {
        clearInterval(check);
        this.setState({ disabled: false });
      }
    }, 1000);
  };

  openPopup = () => {
    const { socket, provider } = this.props;

    const width = 600;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const url = `${API_URL}/${provider}?socketID=${socket.id}`;

    return window.open(
      url,
      "",
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
    );
  };

  startAuth = (e) => {
    if (this.state.disabled === false) {
      e.preventDefault();
      this.popup = this.openPopup();
      this.checkPopup();
      this.setState({ disabled: true });
    }
  };

  closeCard = () => {
    this.setState({ user: {} });
  };

  render() {
    const { name, photo } = this.state.user;
    const { provider } = this.props;
    const { disabled } = this.state;

    return (
      <React.Fragment>
        <div className="row mx-0">
          <div className="col-md-12">
            {name ? (
              <Showcard name={name} photo={photo} onClick={this.closeCard} />
            ) : (
              <Showbutton
                provider={provider}
                disabled={disabled}
                onClick={this.startAuth}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

OAuth.propTypes = {
  provider: PropTypes.string.isRequired,
  socket: PropTypes.object.isRequired,
};

export default OAuth;
