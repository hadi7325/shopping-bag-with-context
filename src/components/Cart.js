import React,{useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import formatCurrency from '../util'
import { DataContext } from "./Context"
import { FaTimes } from 'react-icons/fa'
function Cart() {
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart
    const increase = value.increase
    const decrease = value.decrease
    const removeItem = value.removeItem
   const [total,setTotal] = useState(0)
  
     useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev,item) => {
                return prev + item.price * item.count;
            },0)
            setTotal(res)
        }
        
        getTotal()
     },[cart])   
 

    if(cart.length === 0){
        return <h1 style={{textAlign : "center",paddingTop : "100px"}}>سبد خرید شما خالی است !</h1>
    }
  return (
    <>
    {
        cart.map(product => (
            <div className='details cart' key={product._id}>
                <div className='img-container' style={{backgroundImage:`url(${product.images[0]})`}}>
                    
                </div>
                <div className='box-details'>
                    <h2>{product.title}</h2>
                    <h3>{formatCurrency(product.price)}</h3>
                    <div className='colors'>
                        {
                            product && product.colors.map((color,index) => (
                                <button key={index} style={{backgroundColor : color}} type=""></button>
                            ))
                        }
                    </div>
                    <p>{product.description}</p>
                    <p>{product.content}</p>
                    <div className='amount'>
                        <button onClick={() => increase(product._id)} className='count' type="">+</button>
                          <span>{product.count}</span>
                        <button onClick={() => decrease(product._id)} className='count' type="">-</button>
                    </div>
                   
                    <div className='delete' onClick={() => removeItem(product._id)}><FaTimes/></div>

                </div>
            </div>
        ))
    }
    <div className='total'>
        <Link to="/"></Link>
        <h3>پرداخت : {formatCurrency(total)}</h3>
    </div>
    </>
  )
}

export default Cart