import React, {Component} from 'react';

class Create extends Component {
    render() {
        return (
            <>
        
        <h1>Hello, {this.props.name}</h1>;
        
        <div className = "box">
            <img src = "https://www.solidbackgrounds.com/images/3600x3600/3600x3600-lavender-purple-solid-color-background.jpg" width = "500" height = "500"/>
        </div>
        <form>
        <label for="description">Habit</label><br/>
  <input type="textarea" id="description" name="description" placeholder="description"/> 
 
        </form>
        
        <form onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Monday"
              checked={this.state.selectedOption === "Monday"}
              onChange={this.onValueChange}
            />
            Mon
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Tuesday"
              checked={this.state.selectedOption === "Tuesday"}
              onChange={this.onValueChange}
            />
            Tues
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Wednesday"
              checked={this.state.selectedOption === "Wednesday"}
              onChange={this.onValueChange}
            />
            Wed
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Thursday"
              checked={this.state.selectedOption === "Thursday"}
              onChange={this.onValueChange}
            />
            Thurs
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Friyay"
              checked={this.state.selectedOption === "Friyay"}
              onChange={this.onValueChange}
            />
            Fri
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Saturday"
              checked={this.state.selectedOption === "Saturday"}
              onChange={this.onValueChange}
            />
            Sat
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Sunday"
              checked={this.state.selectedOption === "Sunday"}
              onChange={this.onValueChange}
            />
            Sun
          </label>
        </div>
        <input type="submit" value="Submit">lets goo</input>

        </form>
        </>
        );
      }
    }
    
    
    export default Create;