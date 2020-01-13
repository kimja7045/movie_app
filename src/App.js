import React from 'react';
import PropTypes from "prop-types";

// function Food({name,name2,rating}) {
//   // return <h1>Hi~I like {name}</h1>
//   return(
//     <div>
//       <h1>I Like {name}</h1>
//       <h4>{rating}/5.0</h4>
//       <h2>나는 {name2}을 좋아한다</h2>
//     </div>
//   );
// }

// Food.propTypes={
//   name:PropTypes.string.isRequired,
//   name2:PropTypes.string.isRequired,
//   rating:PropTypes.number.isRequired
// };

// const foodLike = [
//   { name: "Kimchi",
//     name2:"김치",
//     rating:5.3
//   }, 
//   { name: "kimbab",
//     name2:"김밥",
//     rating:5.5
//   }
// ];

// function renderfood(dish){
//   //console.log(dish);  
//   return <Food name={dish.name} name2={dish.name2} rating={dish.rating} key={dish.name}/>
// }

// function App() {
//   return (
//     <div>
//       {/* {FoodLike.map((dish) => (
//         <food name={dish.name}
//               key={dish.name}/>
//       ))} */}
//       {/* {foodLike.map(renderfood)} */}
//     </div >
//   );
// }

class App extends React.Component {

  state = {
    count: 0
  }
  plusButton = () => {
    this.setState(current=>({
      count: current.count + 1
    }));
  }

  render() {

    return (
      <div>
        <h1>number is {this.state.count}
          <button onClick={this.plusButton}>+</button>
          <button>-</button>

        </h1>
      </div>
    );
  }
}

export default App;