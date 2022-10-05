// class Square extends React.Component {
//   render() {
//     return (
//       <button 
//       className="square" 
//       onClick={() => this.props.onClick() }>
//         {this.props.value}
//       </button>
//     );
//   }
// }
/* Above Class is equivalent to the Square function below, making simpler to write*/
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;