export const Product = (props) => {
    const { product } = props;
   
    const { thumbnail, title, description, price, stock } = product;
   
    return (
      <div>
        <img src={images} alt="some text" />
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <p>{stock}</p>
      </div>
    );
  };