import React from 'react';
import propTypes from 'prop-types'

// propTypes를 사용해서 문자열을 string 타입만 받도록 검사 
const P73Person = (props) => {
    return (
        <div>
            {/* 클래스로 받아오면 this.props. rsc로 받아오면 props.  */}
            <h1>{props.firstName} {props.lastName}</h1>
            {props.conuntry
                ? <p>국적 : {props.conuntry}</p>
                : null
            }
        </div>
    );
};

P73Person.propTypes = {
    firstName : propTypes.string, //문자열
    lastName : propTypes.string.isRequired, //필수입력
    conuntry : propTypes.string
}

export default P73Person;