import React from 'react';
import PropTypes from 'prop-types';
import './AccordionTitle.style.css'
export default function AccordionTitle ({left, center, right}){
    return (
        <div className='container'>
                <div className='left'>{left}</div>
                <div className="center">{center}</div>
                <div className='right'>{right}</div>
        </div>
    )
}

AccordionTitle.PropTypes={
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