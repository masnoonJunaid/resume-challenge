import React from 'react'
import styled from 'styled-components'

function Home(){
  return (
    <HomeStyle>
    <div className="horizontal-block-1">
      <div className="left-art-1">
      <article>
        <h1 className="name-h1">Masnoon Junaid</h1>
        <p className="des-1">Computer Science and Engineering Graduate</p>
      </article>
      <article>
        <h4 className="blue-title">EDUCATION</h4>
        <h3>Aliah University—<i>B.Tech</i></h3>
        <p>2017 - 2021</p>
        <p>Computer Science And Engineering</p>
      </article>
      <article>
        <h3>PNR Higher Secondary—<i>Intermediate Science</i></h3>
        <p>Intermediate science with physics chemistry and mathematics</p>
        <p>Passing year - 2016</p>
        <p>Result - 60.6%</p>
      </article>
      <article>
        <h3>High School Minapur —<i>Matriculation</i></h3>
        <p>Passing Year - 2014</p>
        <p>Result - 74.4% </p>
      </article>
      <article>
        <h4 className="blue-title">CERTIFICATIONS</h4>
        <h3>Certification Name:<i>Front End Web Developer Nanodegree</i></h3>
        <p>Certification Authority:Udacity</p>
        <h3>Certification Name: <i>Server-side Development with NodeJS, Express and MongoDB</i></h3>
        <p>Certification Authority: Coursera</p>
      </article>
      <article>
        <h4 className="blue-title">PROFILES</h4>
        <h3>Likedin— <a href="https://www.linkedin.com/in/masnoon-junaid/">in/masnoon-junaid/</a></h3>
        <h3>Portfolio— <a href="https://masnoonjunaid.com/">@masnoonjunaid</a></h3>
        <h3>Hackerearth— <a href="https://www.hackerearth.com/@masnoon">masnoon@hackerearth</a></h3>
        <h3>Github— <a href="https://github.com/masnoonJunaid">masnoonJunaid@github</a></h3>
      </article>
      </div>
      <div className="right-art-1">
        <article>
          <p><b>+91 9798971823</b></p>
          <p><b>masnoon20@gmail.com</b></p>
        </article>
        <article>
          <h4 className="blue-title">SKILLS</h4>
          <p><b>Languages:</b>JavaScript,HTML,CSS,C++</p>
          <p><b>Tools & Frameworks: </b>reactjs,express,mongoDB,git,github,NPM,SASS,Nodejs etc.</p>
        </article>
        <article>
          <h4 className="blue-title">PROJECTS</h4>
          <p><b>Recipe App</b> - a react app fetches and displays based onuser input <a href="https://github.com/masnoonJunaid/recipe">[github]</a></p>
          <p><b>Responsive-test-2.0 - </b>0- Sample responsive UI for smallscreen, tab,and desktop<a href="https://github.com/masnoonJunaid/Responsive-test-2.0">[github]</a></p>
          <p><b>Udacity memory game - </b> Based on browser event an interactive web game.<a href="https://github.com/masnoonJunaid/udacity-memorygame">[github]</a></p>
          <p><b>MyReads Book Tracking - </b>React application categorises books based on reader progress, fetches data and displays in categories.[github]<a href="https://github.com/masnoonJunaid/MyReads-book-tracking">[github]</a></p>
        </article>
        <article>
          <h4 className="blue-title">Languages</h4>
          <p>English,Hindi,Urdu</p>
        </article>
      </div>
      </div>
    </HomeStyle>
  )
}

const HomeStyle = styled.div`

*{
  width:80%;
  margin-top:4%;
}

.horizontal-block-1{
  display:flex;
  margin-left:20%;
}
.left-art-1{
  width:100%;
  text-align:left;
}
.right-art-1{
  width:100%;
  text-align:left;
}

.blue-title{
  color:blue;
}

h1{
  font-size:270%;
}



`

export default Home
