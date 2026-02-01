import './Container.css';

const Container = ({ children, className = '' }) => {
  const classes = `container ${className}`.trim();
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Container;