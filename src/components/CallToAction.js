import React from 'react';
import Button from "./Button";

const CallToAction = props => {

  return (
    <section
      className="cta"
      data-sal="slide-up"
      data-sal-delay="1000"
      data-sal-easing="ease"
      style={{"--sal-duration": "1s"}}
    >
      <div className="definition">
        <h2>
          FEM M A<span className="pronounce">/fem-em-&#257;/</span>
        </h2>
        <p>
          Using Mixed Martial Arts to promote wellness and unity to
          empowered women across the world.
        </p>
      </div>
      <div class="waitlist-group">
        <form netlify>
          <input type="email" name="email" />
          <Button label="Join the Club" />
        </form>
      </div>
    </section>
  )
};

export default CallToAction;
