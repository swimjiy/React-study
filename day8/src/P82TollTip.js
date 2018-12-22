import React, { Component } from 'react';
import ReactDOM from "react-dom";

class P82TollTip extends Component {
    constructor(props) {
        super(props)
        this.state = {opacity: false}
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        const tooltipNode = ReactDOM.findDOMNode(this);
        this.setState({
            opacity: !this.state.opacity,
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft
        });
    }
    render() {
        const style = {
            zIndex: this.state.opacity ? 1000 : -1000,
            opacity: +this.state.opacity,  //불린타잎 이항연산자 false면 0, true 1 로 표시
            top: (this.state.top || 0) + 20,
            left: (this.state.left || 0) - 30
        };
        return (
            <div style={{ display: "inline" }}>
                <span
                    style={{ color: "blue" }}
                    onMouseEnter={this.toggle}
                    onMouseOut={this.toggle}
                >
                    {this.props.children}

                </span>

                <div className="tooltip bottom" style={style} role="tooltip">
                    <div className="tooltip-arrow" />
                    <div className="tooltip-inner">{this.props.text}</div>
                </div>
            </div>
        );
    }
}

export default P82TollTip;