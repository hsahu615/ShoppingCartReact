import { React, Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = this.props.list.cartList;
    return (
      <div className="cart off">
        <div className="cart-items">
          {items.map(function (item) {
            if (items.length) {
              return (
                <div className="cart-item">
                  <img id="itemImg" src={item.image}></img>
                  <p className="cart-item-title">{item.title}</p>
                  <div className="price-quantity">
                    <p>{item.price + "$"}</p>
                    <div className="quantities">
                      <button
                        onClick={this.props.decrease}
                        className={"quantity" + item.id}
                      >
                        -
                      </button>
                      <p id="quantity">{item.quantity}</p>
                      <button
                        onClick={this.props.increase}
                        className={"quantity" + item.id}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          }, this)}
        </div>
        <div className="total">
          <h3>Total: {Number(this.props.total).toFixed(2) + "$"}</h3>
          <button onClick={this.props.clear} id="checkout">
            Checkout
          </button>
        </div>
      </div>
    );
  }
}

export default Cart;
