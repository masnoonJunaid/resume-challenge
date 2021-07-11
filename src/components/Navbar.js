import React,{useState} from 'react'
import styled from 'styled-components';


function Navbar(){
  const [skills, setSkills] = useState([
    {"name":"reactjs","link":"https://reactjs.org/"},
    {"name":"javascript","link":"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
    {"name":"HTML","link":"https://www.w3schools.com/html/"},
    {"name":"CSS","link":"https://www.w3schools.com/css/"},
    {"name":"C++","link":"https://isocpp.org/"},
  ])
  return (
    <NavStyle>
    <h2 className="skl-head">Skills</h2>
      <nav className="nav-link">
      {skills.map(skl=>{
        return<a href={skl.link}>
          <p>{skl.name}</p>
        </a>
      }
        )}
      </nav>
    </NavStyle>
  )
}

const NavStyle = styled.div`
*{
  padding:0;
  margin:0;
  width:100%;
  display:flex;
  flex-wrap:nowrap;
  height:5vh;
  box-shadow: 0 3 0 0;
}

.nav-link{
  margin-left:auto;
  margin-right:auto;
  text-align:center;

}

a{
  text-decoration:none;
  width:5vw;
  margin:1%;
}
a:hover{
  background-color:blue;
}
`

export default Navbar
