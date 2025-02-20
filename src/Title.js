import {React} from 'react';

export default function Title(props) {
  return (
    <div>
      <h1 style={{ backgroundColor: 'blueviolet', borderBottom: '5px solid' }}>
        {props.mainTitle}
      </h1>
    </div>
  );
}
