import React, { Component } from "react";
import { Order } from "../data/entites";

interface Props {
  orders: Order;
}

export class Header extends Component<Props> {
  render() {
    let count = this.props.orders.productCount;
    return (
      <div className="p-1 bg-secondary text-white text-right">
        {count === 0
          ? "brak produktów"
          : `liczba produktów ${count} , ${this.props.orders.total.toFixed(2)} zł`}
        <button className="btn btn-sm btn-primary m-1">Złóż zamówienie</button>
      </div>
    );
  }
}
