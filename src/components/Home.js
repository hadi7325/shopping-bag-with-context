import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='message'>بر روی <Link className='button' to="/products">محصولات</Link> کلیک کنید</div>
  )
}

export default Home