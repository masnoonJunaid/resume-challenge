import React from 'react'
import styled from 'styled-components'

function Footer(){
  return (
    <FooStyle>
      <table>
        <tr>
          <td>lorem epsum 1</td>
          <td>lorem epsum 2</td>
          <td>loren epsum 3</td>
        </tr>
        <tr>
          <td>lorem epsum 1</td>
          <td>lorem epsum 2</td>
          <td>loren epsum 3</td>
        </tr>
        <tr>
          <td>lorem epsum 1</td>
          <td>lorem epsum 2</td>
          <td>loren epsum 3</td>
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
