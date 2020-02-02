import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types'; 




const Container = props => (
  <div className={styles.component}>
    {props.children}
  </div>
);

Container.protoType = {
  children: PropTypes.node,
};



export default Container;