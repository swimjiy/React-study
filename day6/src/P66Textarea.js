import React, { Component } from "react";

class P66Textarea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: `We are learning react various Form.`,
            password: "-"
        };
    }

    handleChange = e => {
        console.log("onChange event: ", e.target.value);
        this.setState({
            description: e.target.value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        console.log("onChange event: ", e.target.value);
        alert(JSON.stringify(this.state));
    };

    handlePwdChange = e => {
        console.log("pwdChange: ", e.target.value);
        this.setState({
            password: e.target.value
        });
    };

    handlePwdInput = e => {
        console.log("handlePwdInput: ", e.target.value);
    };

    render() {
        return (
            <div>
                <h4>P66Textarea.js textarea form</h4>
                {/* textatea, password 폼 처리 */}
                <form onSubmit={this.handleFormSubmit}>
                    디폴트밸류에 State 값 연결한 경우
                    <br />
                    <textarea
                        name="description"
                        defaultValue={this.state.description}
                        onChange={this.handleChange}
                    />
                    <br />
                    디폴트밸류에 넣은경우
                    <br />
                    <input
                        type="password"
                        defaultValue="123456"
                        onChange={this.handlePwdChange}
                    />
                    <br />
                    온인풋사용한경우
                    <br />
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handlePwdChange}
                        onInput={this.handlePwdInput}
                    />
                    <br />
                    <button className="btn btn-default" type="submit">
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default P66Textarea;