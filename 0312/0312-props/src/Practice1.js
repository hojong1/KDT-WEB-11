import React from "react";
import PropTypes from "prop-types";

export default function Practice1(props) {
  return (
    <div>
      <h1>
        {props.children} {props.name}
      </h1>
      <p>
        성함 : {props.name} 나이 : {props.age} 성별 : {props.gender}
      </p>
      <br />
    </div>
  );
}

Practice1.defaultProps = {
  name: "코딩온",
};
Practice1.propTypes = {
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
};
