import './App.css';
import "./index.css";

import CombinationLock from 'combination-lock-react';
import 'combination-lock-react/dist/index.css';
import {Alert} from '@mui/material';
import {AlertTitle} from '@mui/material';

export default function App() {
  return (
    <div className="app">
      <Alert variant="filled" severity="info">
        <AlertTitle><strong>A Combination Lock</strong></AlertTitle>
        Unlock it with a 4-digit code — Give it a try!
      </Alert>
      <CombinationLock
        combination="42817"
        height={100}
        onMatch={() => {
          console.log("Unlock!");
        }}
        openText={"Successfully unlocked!"}
      />
    </div>
  );
}

/*
import { Switch } from '@mui/material';
import React, {Component} from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
    this.myInputRef = React.createRef();
  }

unlock(){
  this.myInputRef.current.setState(prevState => ({ isChecked: !prevState.isChecked }));
}

render() {
  return (
    <div className="app">
     <CombinationLock
     combination='1079'
     height={80}
     onMatch={() => {this.unlock()}}
     openText={'Unlocked!'}
     />

     <Switch defaultChecked ref={this.myInputRef} /> 
    </div>
  );
}
}
*/


/*
const ButtonBase=(props) => {
  const handleClick=() => {
    console.log(props.text);
  };
  return (
    <Button onClick={handleClick}>{props.text}</Button>
  )
}
*/
