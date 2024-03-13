const FoodComponent = (props) => {
  const { food } = props;
  const color = {
    color: "red",
  };
  return (
    <div>
      <h1>
        좋아하는 음식은 <span style={color}>{food}</span>입니다.
      </h1>
    </div>
  );
};
FoodComponent.defaultProps = {
  food: "밥",
};

export default FoodComponent;
