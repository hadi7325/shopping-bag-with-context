import React,{useContext, useRef, useState} from 'react'
import formatCurrency from '../util'
import { DataContext } from "./Context"
import {useParams} from "react-router-dom"
function Details() {
    const value = useContext(DataContext)
    const [products, setProducts] = value.products
    const {id} = useParams()
    const [index,setIndex] = useState(0)
    const imgDiv = useRef()
    const addCart = value.addCart;


    const Drtails = products.filter((product , index) => {
        return product._id === id
    })
   
    const handleMouseMove = e => {
        const {left, top, width, height} = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100;
        const y = (e.pageY - top) / height * 100;
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%` 
     }

  return (
    <>
    {
        Drtails.map(product => (
            <div className='details' key={product._id}>
                <div className='img-container'
                 style={{backgroundImage: + `url(${product.images[index]})`}}
                 onMouseMove={handleMouseMove}
                 ref={imgDiv}
                 >
                    
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
                    <p>{products.description}</p>
                    <p>{product.content}</p>
                    <div className='thumb'>
                        {
                            product.images.map((img,index) => (
                                <img onClick={() => setIndex(index)} src={img} alt="" key={index} />
                            ))
                        }
                    </div>
                    <button className='cart' type=""  onClick={()=> addCart(product._id)} >افزودن به سبد خرید</button>
                </div>
            </div>
        ))
    }
    </>
  )
}

export default Details