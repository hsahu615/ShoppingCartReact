import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { React, Component } from "react";
import "./App.css";
class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="Logo">
          <h1>MyShop</h1>
        </div>
        <div className="navigation">
          <a href="#">Shop</a>
          <a href="#">
            <div onClick={this.props.showCart} className="cartDiv">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="countItem">
                {this.props.list.cartList.length}
              </span>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Nav;
