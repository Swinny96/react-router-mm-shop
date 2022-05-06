import React from "react"
import styled from "styled-components"
import NavLink from "./Navlink"
import SubNavLink from "./Sublink"

const Ul = styled.ul`
  margin: 0px;
  list-style-type: none;
  padding: 0px;

  li {
    display: block;
    width: auto;
    position: relative;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--aqua);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-76%)")};
    top: 0;
    left: 0;
    height: 100vh;
    width: 50%;
    padding-top: 56px;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`

const Navigation = ({ open }) => {
  return (
    <Ul open={open}>
      <NavLink state="" linkstate="" icon="home" linkname="Welcome" link="/" />
           <NavLink
             state=""
             linkstate=""
             icon="dashboard"
             linkname="Overview"
             link="/404"
           />
           <NavLink
             state=""
             linkstate=""
             icon="mobile"
             linkname="Phones"
             link="page-2"
           />
           <NavLink
             state=""
             linkstate=""
             icon="currency-notes-coins"
             linkname="Charges"
             link="404"
           />
           <NavLink
             state=""
             linkstate=""
             icon="landline"
             linkname="Calls"
             link="404"
           />
           <NavLink
             state=""
             linkstate=""
             icon="international"
             linkname="Destinations"
             link="404"
           />
           <div>
             <NavLink
               state="active2"
               linkstate="active-link2"
               icon="file"
               linkname="Reports"
               link="/"
             />
              <ul className="Sublink-Ul">
               <SubNavLink
                 state=""
                 linkstate=""
                 linkname="Billed"
                 link="/"
               />
               <SubNavLink
                 state="active2"
                 linkstate="active-link2"
                 linkname="Recent Usage"
                 link="RecentUsage"
               />
             </ul>
           </div>
           <NavLink
             state=""
             linkstate=""
             icon="tag"
             linkname="Tagging"
             link="404"
           />
           <NavLink
             state=""
             linkstate=""
             icon="user-admin"
             linkname="Admin"
             link="404"
           />
           <NavLink
             state=""
             linkstate=""
             icon="download"
             linkname="Downloads"
             link="404"
           />
           <NavLink
             state=""
             linkstate=""
             icon="time"
             linkname="Real Time"
             link="404"
           />
    </Ul>
  )
}

export default Navigation