import React, { Component } from 'react';

class P61Basic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Username: '',
            Userage: 0,
            flavor2: 'Coconut',
            // flavor2: ["Coconut", "Pineapple"]
            selectedOption: 'spring',
            checkboxGroup: {
                node: false,
                react: true,
                express: false,
                mongodb: false
            }
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleChange2 = e => {
        this.setState({
            flavor2: e.target.value
        })
    }
    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        })
        // e나 event 대신 changeEvent 써도 된다. 이건 그냥 취향문제
    }
    handleCheckbox = event => {
        let obj = this.state.checkboxGroup;
        obj[event.target.value] = event.target.checked //true or false
        this.setState({
            checkboxGroup: obj
        })
    }
    handleSubmit = e => {
        alert(
            // "You submitted: " +
            // this.state.Username +
            // " / " +
            // this.state.Userage +
            // " / " +
            // this.state.flavor2 +
            // " / " +
            // this.state.selectedOption +
            // " / " +
            // this.state.checkboxGroup
            JSON.stringify(this.state)
        )
        e.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>P61Basic</h4>

                    {/* 텍스트 폼 처리 */}
                    <label for="Username">Name : </label>
                    <input 
                        type="text" 
                        id="Username"
                        name="Username"
                        placeholder="-"
                        value={this.state.Username}
                        onChange={this.handleChange}
                    />
                    <br/><br/>
                    <label for="Userage">Age : </label>
                    <input 
                        type="text" 
                        id="Userage"
                        name="Userage"
                        value={this.state.Userage}
                        onChange={this.handleChange}
                    />
                    <br/><br/>

                    {/* 체크박스 폼 처리 */}
                    <label for="Userfavor">Pick your favorite fruit!</label>
                    <select 
                        id="Userfavor"
                        value={this.state.value} 
                        onChange={this.handleChange2}
                        // multiple={true} 하면 flaver2 값을 여러개로 사용가능
                    >
                        <option value="Coconut">Coconut</option>
                        <option value="Apple">Apple</option>
                        <option value="Grape">Grape</option>
                        <option value="Pineapple">Pineapple</option>
                    </select>
                    <br/><br/>

                    {/* 라디오 폼 처리 */}
                    <label for="Userfavor">Pick your favorite season</label>
                    <div>
                        <label>
                        <input
                            type="radio"
                            name="Userseason"
                            value="spring"
                            checked={this.state.selectedOption === "spring"}
                            onChange={this.handleOptionChange}
                        />
                        Spring
                        </label>
                        <label>
                        <input
                            type="radio"
                            name="Userseason"
                            value="summer"
                            checked={this.state.selectedOption === "summer"}
                            onChange={this.handleOptionChange}
                        />
                        Summer
                        </label>
                        <label>
                        <input
                            type="radio"
                            name="Userseason"
                            value="fall"
                            checked={this.state.selectedOption === "fall"}
                            onChange={this.handleOptionChange}
                        />
                        Fall
                        </label>
                        <label>
                        <input
                            type="radio"
                            name="Userseason"
                            value="winter"
                            checked={this.state.selectedOption === "winter"}
                            onChange={this.handleOptionChange}
                        />
                        Winter
                        </label>
                    </div>
                    <br/><br/>

                    {/* 체크박스 폼 다중 처리 */}
                    <label>
                        <input
                            type="checkbox"
                            name="checkboxGroup"
                            value="node"
                            checked={this.state.checkboxGroup["node"]}
                            onChange={this.handleCheckbox}
                        />
                        Node
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="checkboxGroup"
                            value="react"
                            checked={this.state.checkboxGroup["react"]}
                            onChange={this.handleCheckbox}
                        />
                        React
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="checkboxGroup"
                            value="express"
                            checked={this.state.checkboxGroup.express}
                            onChange={this.handleCheckbox}
                        />
                        Express
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="checkboxGroup"
                            value="mongodb"
                            checked={this.state.checkboxGroup["mongodb"]}
                            onChange={this.handleCheckbox}
                        />
                        MongoDB
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default P61Basic;