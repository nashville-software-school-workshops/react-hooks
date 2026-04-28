import { useReducer } from 'react';
import './App.css';

// Action type constants
const CART_ACTIONS = {
  ADD_ITEM: 'add-item',
  REMOVE_ITEM: 'remove-item',
  UPDATE_QUANTITY: 'update-quantity',
  APPLY_DISCOUNT: 'apply-discount',
  CLEAR_CART: 'clear-cart'
};

// Initial state
const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  discount: 0
};

// Reducer function
function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const { product } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Product already exists in cart, increase quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + product.price
        };
      } else {
        // Add new product to cart
        return {
          ...state,
          items: [...state.items, { ...product, quantity: 1 }],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + product.price
        };
      }
    }
    
    case CART_ACTIONS.REMOVE_ITEM: {
      const { productId } = action.payload;
      const itemToRemove = state.items.find(item => item.id === productId);
      
      if (!itemToRemove) return state;
      
      return {
        ...state,
        items: state.items.filter(item => item.id !== productId),
        totalItems: state.totalItems - itemToRemove.quantity,
        totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity)
      };
    }
    
    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        // If quantity is 0 or negative, remove the item
        return cartReducer(state, {
          type: CART_ACTIONS.REMOVE_ITEM,
          payload: { productId }
        });
      }
      
      const itemIndex = state.items.findIndex(item => item.id === productId);
      if (itemIndex === -1) return state;
      
      const item = state.items[itemIndex];
      const quantityDifference = quantity - item.quantity;
      
      const updatedItems = [...state.items];
      updatedItems[itemIndex] = { ...item, quantity };
      
      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + quantityDifference,
        totalPrice: state.totalPrice + (item.price * quantityDifference)
      };
    }
    
    case CART_ACTIONS.APPLY_DISCOUNT: {
      const { discountPercent } = action.payload;
      const discount = (state.totalPrice * discountPercent) / 100;
      
      return {
        ...state,
        discount
      };
    }
    
    case CART_ACTIONS.CLEAR_CART:
      return initialState;
    
    default:
      return state;
  }
}

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  
  // Sample products
  const products = [
    { id: 1, name: 'Headphones', price: 99.99 },
    { id: 2, name: 'Keyboard', price: 49.99 },
    { id: 3, name: 'Mouse', price: 29.99 }
  ];

  return (
    <div>
      <h1>Shopping Cart</h1>
      
      <div className="products">
        <h2>Products</h2>
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => dispatch({
              type: CART_ACTIONS.ADD_ITEM,
              payload: { product }
            })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul>
              {cart.items.map(item => (
                <li key={item.id}>
                  <span>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</span>
                  <div>
                    <button onClick={() => dispatch({
                      type: CART_ACTIONS.UPDATE_QUANTITY,
                      payload: { productId: item.id, quantity: item.quantity - 1 }
                    })}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch({
                      type: CART_ACTIONS.UPDATE_QUANTITY,
                      payload: { productId: item.id, quantity: item.quantity + 1 }
                    })}>
                      +
                    </button>
                    <button onClick={() => dispatch({
                      type: CART_ACTIONS.REMOVE_ITEM,
                      payload: { productId: item.id }
                    })}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="cart-summary">
              <p>Total Items: {cart.totalItems}</p>
              <p>Subtotal: ${cart.totalPrice.toFixed(2)}</p>
              {cart.discount > 0 && (
                <p>Discount: -${cart.discount.toFixed(2)}</p>
              )}
              <p>Total: ${(cart.totalPrice - cart.discount).toFixed(2)}</p>
              
              <button onClick={() => dispatch({
                type: CART_ACTIONS.APPLY_DISCOUNT,
                payload: { discountPercent: 10 }
              })}>
                Apply 10% Discount
              </button>
              
              <button onClick={() => dispatch({
                type: CART_ACTIONS.CLEAR_CART
              })}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}