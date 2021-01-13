import React, {Component,useState} from 'react';
import Button from 'react-bootstrap/Button';
import {ButtonGroup} from 'react-bootstrap';
import {ToggleButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "../newHabit.css"





 function newHabit() {
  const [checked, setChecked] = useState(true);
  const [radioValue, setRadioValue] = useState("1");
  const [description, setDescription] = useState("");

state = {
  description: "",
  radioValue: "",
  checked:false
}

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }
  updateInput = (e) => {
    const description = e.target.value;
    this.setState({ description: description });
  };
 
  const radios = [
    { name: 'Mon', value: '1' ,select: true},
    { name: 'Tues', value: '2' },
    { name: 'Wed', value: '3' },
    { name: 'Thur', value: '4'},
    { name: 'Fri', value: '5'},
    { name: 'Sat', value: '6'},
    { name: 'Sun', value : '7'}

  ];
  

  return (
    <>
    
      <div className ="apple">
      <div className = "container">
        <div className = "child"> 
        <form onSubmit={handleSubmit} >
        <h1>Hello</h1>
        <div className = "textbox">
     <textarea  onChange={this.updateInput}
            value={this.state.description}>add description</textarea>
     </div> 

    
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
      </form>
      </div>
      </div>
      </div>
    
    </>
  );
  // render(<Habit/>);
}




// class newHabit extends Component {
//     render() {
//         return (
//             <>
//         <div className = "root">
//         <h1>Hello, {this.props.name}</h1>;
        
//         <div className = "box">
//             <img src = "https://www.solidbackgrounds.com/images/3600x3600/3600x3600-lavender-purple-solid-color-background.jpg" width = "500" height = "500"/>
//         </div>
//         <form>
//         <label for="description">Habit</label><br/>
//   <input type="textarea" id="description" name="description" placeholder="description"/> 
 
//         </form>
        
//         {/* <form onSubmit={this.formSubmit}>
    //     <div className="radio">
    //       <label>
    //         <input
    //           type="radio"
    //           value="Monday"
    //           checked={this.state.selectedOption === "Monday"}
    //           onChange={this.onValueChange}
    //         />
    //         Mon
    //       </label>
    //     </div>
    //     <div className="radio">
    //       <label>
    //         <input
    //           type="radio"
    //           value="Tuesday"
    //           checked={this.state.selectedOption === "Tuesday"}
    //           onChange={this.onValueChange}
    //         />
    //         Tues
    //       </label>
    //     </div>
    //     <div className="radio">
    //       <label>
    //         <input
    //           type="radio"
    //           value="Wednesday"
    //           checked={this.state.selectedOption === "Wednesday"}
    //           onChange={this.onValueChange}
    //         />
    //         Wed
    //       </label>
    //     </div>
    //     <div className="radio">
    //       <label>
    //         <input
    //           type="radio"
    //           value="Thursday"
    //           checked={this.state.selectedOption === "Thursday"}
    //           onChange={this.onValueChange}
    //         />
    //         Thurs
    //       </label>
    //     </div>
    //     <div className="radio">
    //       <label>
    //         <input
    //           type="radio"
    //           value="Friyay"
    //           checked={this.state.selectedOption === "Friyay"}
    //           onChange={this.onValueChange}
    //         />
    //         Fri
    //       </label>
    //     </div>
    //     <div className="radio">
    //       <label>
    //         <input
    //           type="radio"
    //           value="Saturday"
    //           checked={this.state.selectedOption === "Saturday"}
    //           onChange={this.onValueChange}
    //         />
    //         Sat
    //       </label>
    //     </div>
    //     <div className="radio">
    //       <label>
    //         <input
    //           type="radio"
    //           value="Sunday"
    //           checked={this.state.selectedOption === "Sunday"}
    //           onChange={this.onValueChange}
    //         />
    //         Sun
    //       </label>
    //     </div>
    //     <input type="submit" value="Submit">lets goo</input>

    //     </form>
    //     </div> */}
    //     </>
    //     );
    //   }
    // }
    
    
export default newHabit;
