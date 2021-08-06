import React from 'react';
import Button from "./Button";
import CallToAction from './CallToAction';

const ValueProp = props => {

  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <CallToAction />
        </div>
      </div>
    </section>
  )
};

export default ValueProp;
