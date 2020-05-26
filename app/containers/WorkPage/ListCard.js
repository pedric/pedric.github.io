import React from 'react'
import CategoryLink from 'components/CategoryLink'
import Thumbnail from './Thumbnail.js'
import arrow from './arrow.svg'

class ListCard extends React.Component {

  constructor(){
    super()
    this.state = {}
  }

  render(){
    const wrapperStyles = {
      // moved to global-styles to make it responsive
      // 'flexBasis': '16.6667%',
      // 'maxWidth': '16.6667%',
      // 'minWidth': '160px',
      // 'padding': '20px'
    }

    const anchorStyles = {
      'textDecoration': 'none'
    }

    const textWrapperStyles = {
      'position': 'relative'
    }

    const iconStyles = {
      'position': 'absolute',
      'top': '0',
      'right': '0',
      'width': '30px',
      'padding': '4px',
      'transition': 'all 50ms ease-in-out'
    }

    const headingStyles = {
      'margin': '10px 0 0 0',
      'maxWidth': '70%',
      'fontSize': '16px',
      'lineHeight': '19px',
      'color': '#000',
    }

    const descriptionStyles = {
      'display': 'none',
      'color': '#000',
      'margin': '10px 0px 0px 0px',
      'lineHeight': '17px',
      'fontSize': '14px',
      'fontWeight': '100'
    }

    const categoryWrappertyles = {
      'paddingTop': '4px'
    }

    const categories = this.props.categories.map(item =>
      <CategoryLink key={item} name={item} target={window.location.origin+'/tags/'+item} />
    )

    function toggleDescription(e){
      let textContainer = e.target.nextSibling.firstChild.nextSibling
      let arrow = e.target
      if(textContainer.style.display == 'none') {
        textContainer.style.display = 'block'
        arrow.style.transform = 'rotate(180deg)'
      } else {
        textContainer.style.display = 'none'
        arrow.style.transform = 'rotate(0deg)'
      }

    }

    return(
      <div className="listcard" style={wrapperStyles}>
        <a href={this.props.target}>
          <Thumbnail src={this.props.thumbnail} alt={this.props.title} type={this.props.type} />
        </a>
        <div style={textWrapperStyles}>
          <img style={iconStyles} src={arrow} alt='#' onClick={toggleDescription} />
          <a style={anchorStyles} href={this.props.target}>
            <h2 style={headingStyles}>{this.props.title}</h2>
            <p style={descriptionStyles}>{this.props.description}</p>
          </a>
          <div style={categoryWrappertyles}>{categories}</div>
        </div>
      </div>
    )
  }
}

export default ListCard
