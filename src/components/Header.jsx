import PropTypes from 'prop-types'
import React from 'react'

const Header = ({text,bgColor,
textColor}) => {
    const myStyle =  {
    backgroundColor : bgColor,
    color: textColor,
    }
  return (
    <div>
      <h2 style={myStyle}>{text}</h2>
    </div>
  )
}

Header.propTypes = {

}


Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
}
Header.propTypes ={
    text: PropTypes.string
}
export default Header
