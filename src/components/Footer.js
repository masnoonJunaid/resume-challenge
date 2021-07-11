import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Footer(){
  return (
    <FooStyle>
      <table>
        <tr>
          <td><Link to="/lorem1">lorem epsum 1</Link></td>
          <td><Link to="/lorem2">lorem epsum 2</Link></td>
          <td><Link to="/lorem3">loren epsum 3</Link></td>
        </tr>
        <tr>
          <td><Link to="/lorem1">lorem epsum 1</Link></td>
          <td><Link to="/lorem2">lorem epsum 2</Link></td>
          <td><Link to="/lorem3">loren epsum 3</Link></td>
        </tr>
        <tr>
          <td><Link to="/lorem1">lorem epsum 1</Link></td>
          <td><Link to="/lorem2">lorem epsum 2</Link></td>
          <td><Link to="/lorem3">loren epsum 3</Link></td>
        </tr>
      </table>
      <p>designed by <a href="https://masnoonjunaid.com" rel="noreferrer"target="_blank">me@masnoonjunaid.com</a></p>
    </FooStyle>
  )
}

const FooStyle = styled.footer`
*{
  margin-left:auto;
  margin-right:auto;
  text-align:center;
  padding:0;
}
table{
  width:40%;
}
a{
  text-decoration:none;
}
`


export default Footer;
