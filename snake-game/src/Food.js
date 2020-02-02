import React from 'react';
import styled from 'styled-components';

const SnakeFood = styled.div`
  position: absolute;
  width: 2%;
  height: 2%;
  background-color: red;
  border: 1px solid white;
  z-index: 1;
`;

function Food(props) {
  const style = {
    left: `${props.dot[0]}%`,
    top: `${props.dot[1]}%`
  };

  return <SnakeFood style={style} />;
}

export default Food;
