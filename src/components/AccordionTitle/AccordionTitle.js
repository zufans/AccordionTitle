import React from 'react';
//import PropTypes from 'prop-types'; // ES6
import './AccordionTitle.style.css'
export function AccordionTitle ({left, center, right}){
    return (
        <div className='container'>
                <div className='left'>{left}</div>
                <div className="center">{center}</div>
                <div className='right'>{right}</div>
        </div>
    )
}
/*
AccordionTitle.propTypes={
    left:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
    center:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]), 
    right:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
}
*/