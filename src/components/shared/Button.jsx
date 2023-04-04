import PropTypes from 'prop-types'

function Button({ children,type,isDisabled, version}) {
  return (
    <button type= {type}  disabled={isDisabled} className = {`btn btn-${version}`}>
       {children}
    </button>
  )
}


Button.defaultProps = {
    version : 'primary',
    type: 'button',
    isDisabled: false
}


Button.propTypes = {
    children: PropTypes.node.isRequired,
    version : PropTypes.string,
    Button : PropTypes.string,
    isDisabled: PropTypes.bool
}
export default Button
