import React, { Component } from 'react';

// 1. defaultValue 설정
class P71Basic extends Component {
    render() {
        return (
            <div>
                <span>안녕하세요 {this.props.userName}</span>
            </div>
        );
    }
}

export default P71Basic;

// 디폴트값 설정방법 1
P71Basic.defaultProps = {
    userName : '초기값'
}

export class P72Button extends Component {
    // 디폴트값 설정방법 2
    static defaultProps = {
        buttonLabel : '안녕'
    }
    render() {
        return (
            <div>
                <button>{this.props.buttonLabel}</button>
            </div>
        )
    }
}