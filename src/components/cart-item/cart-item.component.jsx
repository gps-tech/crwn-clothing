import "./cart-item.style.scss";

function CartItem({ CartItem }) {
  const { name, quantity } = CartItem;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
}

export default CartItem;
