import React, { Component } from 'react';

// 메뉴 컴포넌트 적용
class P81Menu extends Component {
    render() {
        let menus = [
            "Home",
            "react-study",
            "js-study",
            "contact us"
        ]
        return (
            <div>
                {
                    menus.map( v => {
                        return (
                            <div>
                                <Link label={v}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default P81Menu;

class Link extends Component {
    render() {
        let url = "/" + this.props.label
        return (
            <div>
                <a href={url}>{this.props.label}</a>
            </div>
        )
    }
}