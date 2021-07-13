import React from 'react';
import Button from "./Button";

const CallToAction = props => {

  return (
    <section className="cta">
      <h1>FemMA</h1>
      <p>The most fun way to get fit</p>
      <div class="waitlist-group">
        <form netlify>
          <input type="email" name="email" />
        </form>
        <Button label="Join the Club" />
      </div>
    </section>
  )
};

export default CallToAction;
