import React from 'react';
import PropTypes from 'prop-types';
import './AccordionTitle.style.css'
export default function AccordionTitle ({left, center, right}){
    return (
        <div class='container'>
                <div class='left'>{left}</div>
                <div class="center">{center}</div>
                <div class='right'>{right}</div>
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