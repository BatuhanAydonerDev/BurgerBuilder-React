import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

class Modal extends Component {
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modelClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default React.memo(Modal);
