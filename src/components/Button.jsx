import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, variant = 'primary', size = 'medium', onClick, className = '', disabled = false }) => {
  const baseClass = 'btn';
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${size} ${className}`.trim();

  return (
    <button 
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'outlineLight']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;