import React, {Component,useState} from 'react';
import Button from 'react-bootstrap/Button';
import {ButtonGroup} from 'react-bootstrap';
import {ToggleButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./newHabit.css"

function newHabit() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("7");

  const radios = [
    { name: 'Mon', value: '1' },
    { name: 'Tues', value: '2' },
    { name: 'Wed', value: '3' },
    { name: 'Thur', value: '4'},
    { name: 'Fri', value: '5'},
    { name: 'Sat', value: '6'},
    { name: 'Sun', value : '7'}

  ];

  return (
   
    
      <div className ="apple">
      <div className = "container">
        <div className = "child"> 
        <form>
        <h1>Hello</h1>
        <div className = "textbox">
     <textarea>add description</textarea>
     </div> 
     </form>
    
      <ButtonGroup toggle>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <br/>
      <button type = "submit">Submit</button>
      </div>
      </div>
      </div>
    
  );
  // render(<Habit/>);
}





    
    
export default newHabit;
