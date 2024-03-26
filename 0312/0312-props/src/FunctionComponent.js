import PropTypes from "prop-types";
export default function FunctionComponent({ name, time, children }) {
  //   const { name } = props; // 이걸 넣은 순간 props.name > name

  //파라미터에도 props 대신 {name}을 넣고 name으로 사용할 수 있다.
  return (
    <div>
      {/* <h1>Hi {props.name}</h1> */}
      <h1>Hi {name}</h1>
      {/* <h1>Hi {props.time}</h1> */}
      <h1>Hi {time}</h1>
      <div>{children}</div>
    </div>
  );
}

FunctionComponent.defaultProps = {
  // name: "홍길동",
};
FunctionComponent.propTypes = {
  // isRequired 는 default 없을 때 작동
  name: PropTypes.string.isRequired,
  time: PropTypes.number,
};
