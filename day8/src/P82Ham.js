import React, { Component } from 'react';
import CheeseburgerMenu from "cheeseburger-menu";
import HamburgerMenu from "react-hamburger-menu";
import './MenuContents.css'

class P82Ham extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }
    openMenu() {
        this.setState({menuOpen: true})
    }
    closeMenu() {
        this.setState({menuOpen: false})
    }
    render() {
        return (
            <div>
                <CheeseburgerMenu
                    isOpen={this.state.menuOpen}
                    closeCallback={this.closeMenu.bind(this)}
                >
                <MenuContent closeCallback={this.closeMenu.bind(this)}/>
                </CheeseburgerMenu>
                <HamburgerMenu
                    isOpen={this.state.menuOpen}
                    menuClicked={this.openMenu.bind(this)}
                    width={50}
                    height={60}
                    strokeWidth={3}
                    rotate={0}
                    color="blue"
                    borderRadius={5}
                    animationDuration={0.5}
                />
            </div>
        );
    }
}

export default P82Ham;


class MenuContent extends Component {
    render() {
        const items = [];
        for(let i=1; i<=5; i++) {
            items.push(i)
        }
        return (
            <div className="menu">
            {
                items.map(i => {
                    return (
                        <div className="menu-item" key={i}>
                            <a href=""
                                onClick={this.props.closeCallback}
                                target="_blank"
                                >
                                메뉴 {i}
                            </a>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}