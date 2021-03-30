import React from 'react';
import ShopMen from './../../assets/shopMens.jpg'
import ShopWomen from './../../assets/shopWomens.jpg'

const Directory = () => {
    return (
        <div className='directory'>
           <div className="wrap">
               <div className='item' style={{background : `url(${ShopWomen})`}}>
               </div>
               <div className='item' style={{background : `url(${ShopMen})`}}>
               </div>
           </div>

        </div>
    )
}

export default Directory