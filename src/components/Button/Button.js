const Button = ({ className, text, action }) => {
  return (
    <button className={className} onClick={action}>
      {text}
    </button>
  );
};

export default Button;
