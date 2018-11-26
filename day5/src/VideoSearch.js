import React, { Component } from 'react'

class VideoSearch extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            term: '' 
        }
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" value={this.state.term} onChange={event => this.onInputChange(event.target.value)}/>
                <div className="input-group-append">
                    <button className="btn btn-danger" type="button">Search</button>
                </div>
            </div>
        )
    }

    onInputChange(term) {
        this.setState({ term })
        this.props.onSearch(term);
        // this.props.onSearchTermChange(term);
        // console.log(term)
        // this.setState = ({ term });
        // this.props.onBtnClick(term);
    }
}

export default VideoSearch;

