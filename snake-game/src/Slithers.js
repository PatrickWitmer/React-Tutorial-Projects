import React from 'react';
import styled from 'styled-components';

const SlithersStyle = styled.div`
  position: absolute;
  width: 2%;
  height: 2%;
  background-color: cyan;
  border: 1px solid white;
  z-index: 2;
`;

function Slithers(props) {
  return (
    <div>
      {props.snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`
        };
        return <SlithersStyle key={i} style={style} />;
      })}
    </div>
  );
}

export default Slithers;
