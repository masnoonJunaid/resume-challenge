import React,{useState} from 'react'
import styled from 'styled-components';


function Navbar(){
  {{/*useState hook for state management*/}}
  const [skills] = useState([
    {"name":"reactjs","link":"https://reactjs.org/"},
    {"name":"javascript","link":"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
    {"name":"HTML","link":"https://www.w3schools.com/html/"},
    {"name":"CSS","link":"https://www.w3schools.com/css/"},
    {"name":"C++","link":"https://isocpp.org/"},
  ])
  return (
    <NavStyle>
      <nav className="nav-link">
      <h2 className="skl-head">Skills</h2>
      {skills.map(skl=>{
        return<a href={skl.link}><p><b>{skl.name}</b></p></a>
      }
        )}
      </nav>
    </NavStyle>
  )
}

const NavStyle = styled.div`
// *{
//     height: 5vh;
//     position: fixed;
//     margin-left: 8%;
//     width: 100%;
//     float:left;
//     display:flex;
// }
*{
  padding:0;
  margin:0;
  width:100%;
  display:flex;
  flex-wrap:nowrap;
  // position:fixed;
  float:left;
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
  // width:5vw;
  margin:1%;
}
a:hover{
  text-decoration:underline;
  color:lightgrey;
}
p{
  width:100%;
}
h2{
  color:blue;
  margin-left:4%;
}
`

export default Navbar
