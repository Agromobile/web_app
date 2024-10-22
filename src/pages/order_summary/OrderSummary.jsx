import './order_summary.scss';
import { Link } from 'react-router-dom';
import { PiTrashThin } from 'react-icons/pi';
import { TfiPlus, TfiMinus } from 'react-icons/tfi';
import { FaCheckCircle } from 'react-icons/fa';
import { IoChevronForward } from 'react-icons/io5';
// import Proptypes from 'prop-types';

// function Carousel({ items }) {
//   return (
//     <div>
//       <div className="header">
//         <span>Recommended for you</span>
//       </div>
//       <div className="product-carousel">
//         {items.map((product) => (
//           <div
//             key={product.id}
//             className="product-card"
//           >
//             {product.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// Carousel.propTypes = {
//   items: Proptypes.array.isRequired,
// };

export default function OrderSummary() {
  //FIXME: For Development Purposes. Will be removed when we begin fetching data from the API
  const cartItems = [
    {
      id: 1,
      name: 'Cosmic Crisp Apple',
      price: 4000,
      quantity: 1,
      imageURL: 'https://pngfre.com/wp-content/uploads/apple-53.png',
    },
    {
      id: 2,
      name: 'Crispier Apple',
      price: 4000,
      quantity: 1,
      imageURL: 'https://pngfre.com/wp-content/uploads/apple-53.png',
    },
  ];

  // const recommendedProducts = [
  //   {
  //     id: 1,
  //     name: 'Apples 1',
  //     currentPrice: 30000,
  //     previousPrice: 40000,
  //     imageURL: 'https://pngfre.com/wp-content/uploads/apple-53.png',
  //   },
  //   {
  //     id: 2,
  //     name: 'Apples 2',
  //     currentPrice: 30000,
  //     previousPrice: 40000,
  //     imageURL: 'https://pngfre.com/wp-content/uploads/apple-53.png',
  //   },
  //   {
  //     id: 3,
  //     name: 'Apples 3',
  //     currentPrice: 30000,
  //     previousPrice: 40000,
  //     imageURL: 'https://pngfre.com/wp-content/uploads/apple-53.png',
  //   },
  //   {
  //     id: 4,
  //     name: 'Apples 4',
  //     currentPrice: 30000,
  //     previousPrice: 40000,
  //     imageURL: 'https://pngfre.com/wp-content/uploads/apple-53.png',
  //   },
  //   {
  //     id: 5,
  //     name: 'Apples 5',
  //     currentPrice: 30000,
  //     previousPrice: 40000,
  //     imageURL: 'https://pngfre.com/wp-content/uploads/apple-53.png',
  //   },
  //   {
  //     id: 6,
  //     name: 'Apples 6',
  //     currentPrice: 30000,
  //     previousPrice: 40000,
  //     imageURL: 'https://pngfre.com/wp-content/uploads/apple-53.png',
  //   },
  //   {
  //     id: 7,
  //     name: 'Apples 7',
  //     currentPrice: 30000,
  //     previousPrice: 40000,
  //     imageURL: 'https://pngfre.com/wp-content/uploads/apple-53.png',
  //   },
  //   {
  //     id: 8,
  //     name: 'Apples 8',
  //     currentPrice: 30000,
  //     previousPrice: 40000,
  //     imageURL: 'https://pngfre.com/wp-content/uploads/apple-53.png',
  //   },
  //   {
  //     id: 9,
  //     name: 'Apples 9',
  //     currentPrice: 30000,
  //     previousPrice: 40000,
  //     imageURL: 'https://pngfre.com/wp-content/uploads/apple-53.png',
  //   },
  //   {
  //     id: 10,
  //     name: 'Apples 10',
  //     currentPrice: 30000,
  //     previousPrice: 40000,
  //     imageURL: 'https://pngfre.com/wp-content/uploads/apple-53.png',
  //   },
  // ];

  return (
    <main className="summary-page">
      <header className="discount-header">
        <span>
          <strong>Get 10% OFF</strong> your first order!
        </span>
      </header>
      <section className="summary">
        {/* Cart Summary Section */}
        <article>
          <div className="continue-shopping">
            <Link to="#">Continue Shopping</Link>
          </div>
          <div className="cart-contents">
            <h3>Your Cart Summary (2)</h3>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="content card"
              >
                <img
                  src={item.imageURL}
                  alt="Image of food item"
                  className="image"
                />
                <div className="details">
                  <span className="item-name">{item.name}</span>
                  <div>
                    <span className="item-price">₦{item.price}</span>
                    <button className="delete-item">
                      <PiTrashThin />
                    </button>
                    <div className="quantity-field">
                      <TfiMinus className="controls" />
                      <span>{item.quantity}</span>
                      <TfiPlus className="controls active" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="content card">
              <div className="image" />
              <div className="details">
                <span className="item-name">Delivery Fees</span>
                <div>
                  <span className="item-price">₦1000</span>
                </div>
              </div>
            </div>
            {/* Total Amount */}
            <div className="total-field">
              <div className="details">
                <span>Total</span>
                <span>₦8000</span>
              </div>
            </div>
          </div>
        </article>

        {/* Additional Delivery Information */}
        <aside>
          {/* Customer Address */}
          <div className="info-field">
            <div className="header">
              <div>
                <FaCheckCircle className="check" />
                <span>1. Customer Address</span>
              </div>
              <button>
                Edit <IoChevronForward />
              </button>
            </div>
            <span className="mainText">Prince Ngumoha</span>
            <span className="subText">
              No. 38 Sapele street, Barnawa Kaduna | Kaduna state |
              +2347089699162
            </span>
          </div>

          {/* Delivery Details */}
          <div className="info-field">
            <div className="header">
              <div>
                <FaCheckCircle className="check" />
                <span>2. Delivery Details</span>
              </div>
              <button>
                Edit <IoChevronForward />
              </button>
            </div>
            <span className="mainText">Door Delivery</span>
            <span className="subText">
              Delivery is between <em>September 20</em> and{' '}
              <em>September 24</em>
            </span>
          </div>

          {/* Payment Method */}
          <div className="info-field">
            <div className="header">
              <div>
                <FaCheckCircle className="check" />
                <span>3. Payment Method</span>
              </div>
              {/* <button>
                Edit <IoChevronForward />
              </button> */}
            </div>
            <span className="mainText">
              Pay with Cards, Bank Transfers or USSD
            </span>
          </div>

          {/* Confirm Order */}
          <div className="confirm-order">
            <button>Confirm order</button>
            <span className="terms">
              By proceeding, you are automatically agreeing to Agromobile&#39;s
              terms and conditions
            </span>
          </div>
        </aside>

        {/* Related Products Carousel */}
        {/* <div className="related-products">
          <Carousel items={recommendedProducts} />
        </div> */}
      </section>
    </main>
  );
}
