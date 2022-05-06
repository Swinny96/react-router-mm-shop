import React from "react"

const SubNavLink = props => (
  /*eslint-disable*/
  <li className={"Sublink-Li" + " " + props.state}>
    <a href="/" className={"Sublink" + " " + props.linkstate}>
      <span className="No-Icon"></span>
      <span className="Sublink-Text">{props.linkname}</span>
    </a>
  </li>
)

export default SubNavLink
