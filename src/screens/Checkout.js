import { useSelector } from "react-redux";

import CheckoutForm from "../components/Checkout/CheckoutForm";
import "./Checkout.css";

const Checkout = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <section className="checkout__section">
      {cartItems.length < 1 ? (
        <div>Something get wrong</div>
      ) : (
        <div>
          <h1>Shipping Address</h1>
          <CheckoutForm onConfirm={props.onConfirm} />
        </div>
      )}

      <div className="cart__item__div">
        {cartItems.map((item) => (
          <div className="item_subdiv" key={item.id}>
            <div className="item_description">
              <img src={item.image} alt={item.title} />
              <h1>{item.title}</h1>
              <h3>${item.price}</h3>

              <span className="item__total">
                Total Price:
                <br />
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {`${item.quantity} * $${item.price} = $${item.totalPrice}`}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Checkout;
