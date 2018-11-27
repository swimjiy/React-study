import React, { Component } from 'react';


class VideoSearch extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            term: '소녀시대' 
        }
    }
    
    onHandleChange = (e) => {
        this.setState({
            term: e.target.value
        })
    }

    ocHandleSubmit = (e) => {
        e.preventDefault()
        this.props.onCreate(this.state);
    }

    render() {
        return (
            <form onSubmit={this.ocHandleSubmit}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={this.state.term} onChange={this.onHandleChange}/>
                    <div className="input-group-append">
                        <button className="btn btn-danger" type="submit">Search</button>
                    </div>
                </div>
            </form>
        )
    }

    
}

export default VideoSearch;