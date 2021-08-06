import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Backdrop from "./BackdropSection"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const burgerToggle = () => setIsOpen(!isOpen)
  const [scrolled, setScrolled] = useState(false)

  let navClasses = "nav-links"
  let navItemClasses = "nav-link-item"
  let burgerClass = "burger"
let backdropClass = "backdrop"
  if (isOpen) {
    navClasses = "nav-links nav-active"
    navItemClasses = "nav-link-item-active"
    burgerClass = "burger toggle"
    backdropClass = "backdrop backdrop-active"
  }

  if (scrolled) {
    navItemClasses += " nav-item-active"
  }


  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground)
  }

  return (
    <header>
      <nav className={scrolled ? "navbar active" : "navbar"}>
        <div className="nav-belt">
          <div>
            <h4>
              <Link className="logo" to="/">
                <span className="logo-title">FEMMA</span>
                <span
                  style={scrolled ? { color: "black" } : null}
                  className="pronounce"
                >
                  /fem-em-&#257;/
                </span>
              </Link>
            </h4>
          </div>
          <ul className={navClasses} onClick={() => setIsOpen(false)}>
            <li className={navItemClasses}>
              <a
                href="#about"
                style={scrolled ? { color: "black" } : { color: "white" }}
              >
                About
              </a>
            </li>
            <li className={navItemClasses}>
              <a href="#contact" style={scrolled ? { color: "black" } : null}>
                Contact
              </a>
            </li>
            {console.log(isOpen)}
            <li className={`${navItemClasses} nav-item-bold`}>
              <a href="#contact">Join the Club</a>
            </li>
          </ul>
          <div className={burgerClass} onClick={burgerToggle}>
            <div
              className="burger-line-1"
              style={scrolled ? { backgroundColor: "black" } : null}
            ></div>
            <div
              className="burger-line-2"
              style={scrolled ? { backgroundColor: "black" } : null}
            ></div>
            <div
              className="burger-line-3"
              style={scrolled ? { backgroundColor: "black" } : null}
            ></div>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
