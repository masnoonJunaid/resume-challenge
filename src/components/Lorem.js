import React from 'react';
import styled from 'styled-components'

function Lorem(){
  return (
    <LoremStyle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a risus sed mi placerat pulvinar at a quam. Sed dignissim, dui id finibus egestas, est enim faucibus odio, et maximus augue orci nec orci. Nullam quis urna a dui viverra mattis. Maecenas ac ante vel turpis tristique maximus. Fusce dapibus accumsan mi, non egestas mauris eleifend at. Donec molestie, dolor vel cursus rhoncus, eros erat mollis sem, vel cursus nulla justo non mauris. Etiam eget malesuada purus. Suspendisse turpis tortor, vestibulum ut vulputate sed, auctor eget magna. Integer eu porttitor quam, in pulvinar est. Donec velit diam, rutrum non lorem et, consectetur vehicula magna. Mauris iaculis, neque ut varius posuere, leo leo luctus turpis, in maximus urna tellus non magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris non ultricies enim. Vestibulum lorem quam, sollicitudin eget velit non, bibendum lobortis magna. Ut ut urna est.
      </p>
    </LoremStyle>
  )
}


const LoremStyle = styled.div`
*{

  text-align:justify;
  width:80%;
  height:45vh;
}
p{
  width:60%;
  margin-left:auto;
  margin-right:auto;
  padding:7%;
}


`

export default Lorem
