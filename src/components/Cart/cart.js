import react from 'React';
import '../Nav/nav'
import cartItem from './cartitem'




const Cart = () => {
  return(
      <div>
          <Nav className='red'/>
          <CartItems />
      </div>
  )
}

export default Cart;
