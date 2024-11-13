import 'remixicon/fonts/remixicon.css';
import { useState } from 'react';
import ShoppingCart from './ShoppingCart';
function Header({products, setAddedProducts, setSearch}) {
  const [open,setOpen] = useState(false);

  let openCart = () => {
    if(products.length < 1){
        setOpen(false);
    }
    else{
        setOpen(!open);
    }
  
  }
  return (
    <div className='fixed top-0 lg:flex lg:flex-row lg: w-[100%] lg:justify-end lg:z-50 bg-white'>
            <div className='py-4 pl-2 lg:pl-0 lg:flex lg:flex-col lg:fixed lg:bg-white lg:w-[75%] lg:justify-end gap-0 lg:gap-1 '>
                <div className='flex w-[100%] flex-row justify-between pr-2 lg:gap-16'>
                    <input className='w-[70%] py-2 text-sm lg:w-[50%] lg:py-2 lg:text-xs font-semibold border-2 border-solid border-black px-5 lg:bg-white outline-none rounded-full' type="search" placeholder="Enter your search shoes" 
                    onChange={(e) => setSearch(e.target.value)}/>
                    <div className='flex gap-3 lg:gap-2 lg:text-lg'>
                        <div className='relative'>
                            <i className="ri-shopping-cart-2-line lg:cursor-pointer text-3xl lg:text-xl" onClick={() => openCart()}></i>
                            <span className='w-5 h-5 lg:w-4 lg:h-4 absolute top-0 -right-1 flex justify-center items-center text-white font-semibold p-2 bg-red-600 rounded-full text-sm lg:text-xs'>{products.length}</span>
                        </div>
                        <i className="ri-user-line lg:cursor-pointer text-3xl lg:text-xl"></i>
                    </div>
                </div>

                <div className='lg:w-[75%]'>
                {open ? <ShoppingCart product={products} setAddedProducts={setAddedProducts}/> : '' }
                </div>
             </div>
     </div>
  )
}

export default Header