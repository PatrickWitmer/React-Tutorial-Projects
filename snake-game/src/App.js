import React from 'react';
import './App.css';
import styled from 'styled-components';

const SnakeContainer = styled.div`
  width: 100vw;
  height: 100hw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  width: 500px;
  height: 500px;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
`;

const GridItem = styled.div`
  outline: 1px solid green;
  width: 50px;
  height: 50px;
`;

class App extends React.Component {
  
  // Initiate state
  this.state = {
    rows: 10,
    cols: 10,
    grid: [],
  };
const grid = [];
  for (let row = 0; row < this.state.rows; row++) {
    for (let col = 0; col < this.state.cols; col++) {
      grid.push({
        row,
        col,
      })
    }
  }
  this.setState({ grid: grid })
render () {
    const gridItems = this.state.grid.map((grid) => {
      return <div 
        key={grid.row.toString() + '-' + grid.col.toString()} 
        className="grid-item" ></div>
    })
    return (
      <div className="snake-container">
        <div className="grid">{gridItems}</div>
      </div>
    )
  }
}

// class App extends React.Component {
//   // Initiate state
//   constructor(props) {
//     super(props);
//     this.state = {
//       rows: 10,
//       cols: 10,
//       grid: []
//     };
//     const grid = [];
//     for (let row = 0; row < this.state.rows; row++) {
//       for (let col = 0; col < this.state.cols; col++) {
//         grid.push({
//           row,
//           col
//         });
//       }
//     }
//     this.setState({ grid: grid });
//   }

//   render() {
//     const gridItems = this.state.grid.map(grid => {
//       return <GridItem key={grid.row.toString() + '-' + grid.col.toString()} />;
//     });
//     return (
//       <SnakeContainer>
//         <Grid>{gridItems}</Grid>
//       </SnakeContainer>
//     );
//   }
// }

export default App;
