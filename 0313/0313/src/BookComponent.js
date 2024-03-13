const BookComponent = (props) => {
  const { title, author, price, type } = props;
  return (
    <div className="bg">
      <h1>이번주 베스트 셀러</h1>
      <img src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791158511906.jpg"></img>
      <div className="title">{title}</div>
      <div>{author}</div>
      <div>{price}</div>
      <div>{type}</div>
    </div>
  );
};
export default BookComponent;

// import logo from "./logo.svg";

// function Book({title, author, price, type}) { // {book}
//const {title, author, price, type} = book;
//   return(
//     <div>
//       <div>이번주 베스트 셀러</div>
//       <img src={logo} alt='logo' />
//       <div>{title}</div>
//       <div>저자:{author}</div>
//       <div>판매가: {price}</div>
//       <div>구분: {type}</div>
//     </div>
//   )
// }
// export default Book;
