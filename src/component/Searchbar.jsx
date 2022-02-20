import React from "react";
import { Link } from "react-router-dom";

class Searchbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value}); // get the value from input when it change
    }
    handleSubmit(event) {
      event.preventDefault(event);
    }

    render() {
      return (
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <input className="text" type="text" value={this.state.value} placeholder="Search by name" onChange={this.handleChange} size="50"/>
            <Link className="icon" to={"/pokemon/"+this.state.value.toLowerCase()}>🔎</Link>
          </form>
        </div>
      );
    }
  }

  export default Searchbar;