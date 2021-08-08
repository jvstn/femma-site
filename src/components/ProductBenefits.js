import React from "react"
import Button from "./Button"

const ProductBenefits = props => {
  return (
    <section className="product-benefits">
      <div className="product-benefits-group" id="about">
        <div
          className="product-benefit-1-image"
          data-sal="slide-right"
          data-sal-easing="ease"
          style={{ "--sal-duration": ".9s", "--sal-delay": ".2s" }}
        ></div>
        <div
          className="product-benefit-tagline"
          data-sal="slide-left"
          data-sal-easing="ease"
          style={{ "--sal-duration": ".8s", "--sal-delay": "1s" }}
        >
          <h1>About us</h1>
          <p>
            We are a group of close friends inspired by the power of using MMA
            to transform the lives of women around the world. Caitlin, a former
            professional ballerina, has seen firsthand the health benefits from
            her own athletic training and wants to bring those same benefits to
            MMA training Adrienne, a previous founder with a successful exit,
            brings her experience and passion into the fitness MMA space.
          </p>
        </div>
      </div>
      <div id="contact" className="product-benefit-contact">
        <form
          name="Waitlist"
          netlify-honeypot="bot-field"
          method="POST"
          data-netlify="true"
        >
          <h1>Join The Club</h1>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="Waitlist" />
          <input type="email" name="email" />
          <Button className="join" label="Join the Club" />
        </form>
      </div>
    </section>
  )
}

export default ProductBenefits
