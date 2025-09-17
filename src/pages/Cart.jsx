import React from "react";

const Cart = ({ cart, changeQuantity }) => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <label className="cart__book">Book</label>
                <label className="cart__quantity">Quantity</label>
                <label className="cart__total">Price</label>
              </div>
              <div className="cart__body">
                {cart.map((book) => {
                  return (
                    <div className="cart__item">
                      <div className="cart__book">
                        <img
                          src={book.url}
                          alt=""
                          className="cart__book--img"
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title" htmlFor="">
                            {book.title}
                          </span>
                          <span className="cart__book--price" htmlFor="">
                            ${(book.salePrice || book.originalPrice).toFixed(2)}
                          </span>
                          <button className="cart__book--remove">Remove</button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                          value={book.quantity}
                          onChange={(event)=> changeQuantity(book, event.target.value)}
                        />
                      </div>
                      <div className="cart__total">$10.00</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="total">
              <div className="total__item total__sub-total">
                <label htmlFor="">Subtotal</label>
                <label htmlFor="">$9.00</label>
              </div>
              <div className="total__item total__tax">
                <label htmlFor="">Tax</label>
                <label htmlFor="">$1.00</label>
              </div>
              <div className="total__item total__price">
                <label htmlFor="">Total</label>
                <label htmlFor="">$10.00</label>
              </div>
              <button
                className="btn btn__checkout no-cursor"
                onClick={() => alert(`Haven't gotten around to doing this :(`)}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
