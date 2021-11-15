import { BrowserRouter, Route, Routes } from "react-router-dom";
import { React, Component } from "react";
import Nav from "./Nav";
import Shop from "./shopContent";
import Cart from "./Cart";

class RouterSwitch extends Component {
  constructor(props) {
    super(props);
    this.adding = this.adding.bind(this);
    this.showCart = this.showCart.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.allClear = this.allClear.bind(this);

    this.state = {
      cartList: [],
      total: 0,
    };
  }

  showCart = () => {
    const cart = document.querySelector(".cart");
    if (cart.classList[1] == "off") {
      cart.style.transform = `translateX(0px)`;
      cart.classList.remove("off");
      cart.classList.add("on");
    } else {
      cart.style.transform = `translateX(400px)`;
      cart.classList.remove("on");
      cart.classList.add("off");
    }
  };

  isPresent(arr, id) {
    if (!arr.length) {
      return -1;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  adding(name, price, id, image) {
    let tempArr = this.state.cartList;
    let result = this.isPresent(this.state.cartList, id);
    if (result != -1) {
      tempArr[result].quantity++;
      this.setState({
        cartList: tempArr,
        total: this.state.total + price,
      });
    } else {
      const newItem = {
        id: id,
        title: name,
        price: price,
        image: image,
        quantity: 1,
      };

      this.setState({
        cartList: this.state.cartList.concat(newItem),
        total: this.state.total + price,
      });
    }
  }

  increase(e) {
    let id = Number(e.target.classList[0].slice(8));
    let tempArr = this.state.cartList;
    let index = this.isPresent(tempArr, id);
    tempArr[index].quantity = Number(tempArr[index].quantity) + 1;
    this.setState({
      cartList: tempArr,
      total: Number(this.state.total + tempArr[index].price),
    });
  }
  decrease(e) {
    let id = Number(e.target.classList[0].slice(8));
    let tempArr = this.state.cartList;
    let index = this.isPresent(tempArr, id);
    let price = this.state.total;
    if (tempArr[index].quantity <= 1) {
      price = price - tempArr[index].price;
      tempArr.splice(index, 1);
    } else {
      tempArr[index].quantity = Number(tempArr[index].quantity) - 1;
      price = price - tempArr[index].price;
    }
    this.setState({
      cartList: tempArr,
      total: price,
    });
  }

  allClear() {
    this.setState({
      total: 0,
      cartList: [],
    });
    alert("Thanks for Shopping");
  }

  render() {
    return (
      <BrowserRouter>
        <Nav showCart={this.showCart} list={this.state} />
        <Cart
          list={this.state}
          total={this.state.total}
          increase={this.increase}
          decrease={this.decrease}
          clear={this.allClear}
        />
        <Shop adding={this.adding} />
        {/* 
        <Routes>

        </Routes> */}
      </BrowserRouter>
    );
  }
}

export default RouterSwitch;
