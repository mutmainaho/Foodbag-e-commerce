import React, {useEffect, useState}from "react";
import './Cart.css';
import image1 from '../..Images/image1.svg';
import image2 from '../..Images/image2.svg';
import image3 from '../..Images/image3.svg';
import scooter from '../..Images/scooter 1.svg';


const data = [
  {
      id: 1,
      name: 'KFC - King Bucket',
      quantity: 2,
      price: 5000,
      imageSrc: Image4
  },
  {
      id: 2,
      name: 'Refuel Max',
      quantity: 1,
      price: 1200,
      imageSrc: Image3
  },
  {
      id: 3,
      name: 'Refuel Max',
      quantity: 1,
      price: 1200,
      imageSrc: Image1
  }
]
   const cart = ()=>{
     const [cart, setcart] =useState(data)
     const [delivery] = useState(1200)
     const [total,setTotal] = useState(0)


     useEffect(() => {
      let total = 0
      cart.forEach(item => {
          const price = item.price
          const quantity = item.quantity
          const totalPrice = price * quantity
          total += totalPrice
      })
      setTotal(total)
  }, [cart])

  const increaseQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity++;
    setCart(newCart);
}

   const decreseQuantity = (index) => {
  const newCart = [...cart];
  if (newCart[index].quantity > 1) {
    newCart[index].quantity--;
    setCart(newCart);
} 
   }
return false;
const removeItem = (id) => {
  const newCart = [...cart].filter(item => item.id !== id )
  setCart(newCart)



    return (
      <div className="cart">
        <p><span className='disabled'>Home <i className='fa fa-angle-right' /> </span>Cart</p>
            <h2>Cart</h2>
            {cart.map((cartItem, index) => {
                let totalPrice = cartItem.price * cartItem.quantity
                return (
                    <div className='cartItem-row' key={index}>
                        <i className="fa fa-times remove-icon icon" onClick={() => removeItem(cartItem.id)}/>
                        <div className='cartItem'>
                            <div className='cartItem-info'>
                                <img src={cartItem.imageSrc} alt='product-img' />
                                <div>
                                    <h3>{cartItem.name}</h3>
                                    <p className='quantity-block'>
                                        <i className="fa fa-plus-square-o icon" 
                                        aria-hidden="true" 
                                        onClick={() => increaseQuantity(index)}
                                        />
                                        <span className='quantity'>{cartItem.quantity}</span>
                                        <i className="fa fa-minus-square-o icon" 
                                        aria-hidden="true" 
                                        onClick={() => decreaseQuantity(index)}
                                        />
                                    </p>
                                </div>
                            </div>
                            <p className='price'>#{totalPrice}</p>
                        </div>
                    </div>
                )
            })}

            <section className='delivery-total'>
                <div className='cartItem'>
                    <div className='cartItem-info'>
                        <img src={Scooter} alt='product-img' />
                        <h3 className='ml'>Delivery fee</h3>
                    </div>
                    <p className='price'>#{deliveryPrice}</p>
                </div>

                <div className='total'>
                    <p>Total</p>
                    <p>{total + deliveryPrice}</p>
                </div>
            </section>


            <div className='checkout-div'>
                <button>Checkout</button>
            </div>
      </div>
    );

   }
  }

  export default cart;
  