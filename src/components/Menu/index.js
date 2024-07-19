import './index.scss'
import LogoS from '../../assets/images/nickcircle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
// import {
//   faHome,
//   faListCheck,
//   faEnvelope,
// } from '@fortawesome/free-solid-svg-icons'

import React, { useState, useEffect, useRef } from 'react'

const Menu = () => {
  const [open, setOpen] = useState(false)

  let menuRef = useRef()

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false)
        console.log(menuRef.current)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <div className="menu-container" ref={menuRef}>
      <div
        className=" menu-trigger"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <img src={LogoS} alt="logo" />
      </div>
      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <h3>
          Nicholas Channg
          <br />
          <span>Computer Science Student</span>
        </h3>
        <ul className="menu-items">
          {/* <DropdownItem img = {faHome} text = {"Home"} 
          to = '/'/>
          <DropdownItem img = {faListCheck} text = {"Experience"} 
          href="/experience"/>
          <DropdownItem img = {faEnvelope} text = {"Contact Me"} 
          href="/contact"/> */}
          <DropdownItem
            img={faLinkedin}
            text={'LinkedIn'}
            href="https://www.linkedin.com/in/nicholaschanng/"
            target="_blank"
            rel="noreferrer"
          />
          <DropdownItem
            img={faGithub}
            text={'GitHub'}
            href="https://github.com/NicholasChanng/"
            target="_blank"
            rel="noreferrer"
          />
          <DropdownItem
            img={faFolderOpen}
            text={'Resume'}
            href="https://docs.google.com/document/d/16CVvyqrcSoxm_TymApA0ifMq28jLlMgsrhmYsqQ2ukU/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          />
        </ul>
      </div>
    </div>
  )
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <FontAwesomeIcon
        icon={props.img}
        color="#4d4d4e"
        className="anchor-icon"
      />
      <a href={props.href} target={props.target} rel={props.rel}>
        {props.text}
      </a>
    </li>
  )
}

export default Menu
