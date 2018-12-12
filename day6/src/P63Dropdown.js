import React, { Component } from 'react';

class P63Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "coconut",
            flavor2: ["coconut", "lime"]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleChange2(event) {
        this.setState({ flavor2: event.target.value })
    }

    handleSubmit(event) {
        alert(
            "Your favorite flavor is : " + this.state.value + " " + this.state.flavor2
        );
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h5>P63 Drop down list</h5>
                    <label>
                        Pick your favorite flavor : 
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <h5>P63 Drop down list</h5>
                    <label>
                        Pick your favorite flavor 2 : 
                        <select 
                            value={this.state.flavor2}
                            multiple={true} 
                            onChange={this.handleChange2}
                        >
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default P63Dropdown;