import React from 'react';
import './Button';
import { Link } from 'react-router-dom';

//g
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    //checks for a specified style, if none then default to first in styles array
    const checkButtonSyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    //checks for a specified size, if none then default to first in size array
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

}