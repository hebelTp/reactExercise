import React from 'react';
import PropsTypes from 'prop-types';

const Icon = props => (<i className={`fas fa-${props.name}`}></i>);

Icon.propTypes = {
  name: PropsTypes.string,
};

export default Icon;
