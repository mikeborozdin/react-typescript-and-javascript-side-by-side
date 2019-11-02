import React from 'react';
import PropTypes from 'prop-types';

const AnotherJsComponent = ({ a, b }) => (
  <div>
    Hi, I'm another JavaScript components. And these are my properties:
    a: {a} & b: {b}
  </div>
);

AnotherJsComponent.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.string.isRequired
};

export default AnotherJsComponent;
