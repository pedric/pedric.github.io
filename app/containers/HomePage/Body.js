import React from 'react'
import CirclePortrait from './CirclePortrait'
import Works from 'data/Works.js'
import CategoryLink from 'components/CategoryLink'

function Body() {

  const styles = {
    'padding': '20px 20px 200px 20px'
  }

  const headingStyles = {
    'fontSize': '50px'
  }

  let links = [];

  for(let i=0;i<Works.length;i++){
    if(Works[i].categories){
      for(let j=0;j<Works[i].categories.length;j++){
        if(!links.find(element => element === Works[i].categories[j])) {
          links.push(Works[i].categories[j])
        }
      }
    }
  }

  const mappedLinks = links.map( item =>
    <CategoryLink key={item} target={'tags/'+item} name={item} />
  )

  // <p>I also work with art, graphic design, UX-design, illustration and video.</p>

  return(
    <div style={styles}>
      <h1 style={headingStyles}>Hello. I’m Fredrik (<CirclePortrait />),<br/>I build user interfaces.</h1>
      <p>I also <CategoryLink key='work-inline-link' target='/work' name='work' /> with{mappedLinks}</p>
      <p>My tools are HTML, CSS, JavaScript, React, PHP, Adobe CC, Git, Pencil and paper.</p>
      <p>Say hello using <a href="mailto:hello.fredrik.larsson@gmail.com">hello.fredrik.larsson@gmail.com</a></p>
    </div>
  )
}

export default Body
