import React from "react";

export default function Practice2(props) {
  return (
    <div>
      <div style={{ color: "red" }}>{props.food}</div>
    </div>
  );
}
Practice2.defaultProps = {
  food: "고기",
};
