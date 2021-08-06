import React from 'react';

const Button = ({ label }) => (
  <input type="submit" className="button" value={label} />
);

export default Button;