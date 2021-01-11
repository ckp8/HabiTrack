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
  <input type="text" id="description" name="description" placeholder="description"/> 
  <input type="submit" value="Submit"></input>
        </form>
        </>
        );
      }
    }
