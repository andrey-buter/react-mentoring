import PropTypes from 'prop-types';
import React from 'react';

const Image = (props: { src: string }) => <img src={props.src} alt=''/>;

Image.propTypes = {
	src: PropTypes.string
};

export default Image;
