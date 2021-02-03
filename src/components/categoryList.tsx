import React, { Component } from "react";

interface Props {
  selected: string;
  categories: string[];
  selectCategories: (category: string) => void;
}

export class CategoryList extends Component<Props> {
  render() {
    return (
      <div>
        {["Wszystkie", ...this.props.categories].map((c) => {
          let btnClass = this.props.selected === c ? "btn-primary" : "btn-secondary";
          return (
            <button
              key={c}
              className={`btn btn-block ${btnClass}`}
              onClick={() => this.props.selectCategories(c)}
            >
              {c}
            </button>
          );
        })}
      </div>
    );
  }
}
