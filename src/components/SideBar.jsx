import { useState } from "react";
function SideBar({data, product, price, Color, setNewData, filterCat, filterColor, filterPrice, setSelectedCategory, setSelectedPrice,setSelectedColor, selectedCategory, selectedColor, selectedPrice}) {
    // const [selectedCategory, setSelectedCategory] = useState('all-categories');
    // const [selectedPrice, setSelectedPrice] = useState('all-prices');
    // const [selectedColor, setSelectedColor] = useState('all-colors');
    const [open,setOpen] = useState(false);
    
   
  return (
    
    <div className="w-[100%] top-[4em] bg-white pb-5">

    <div className="ml-4 mt-[5em] w-[8em] flex justify-center items-center gap-2 py-1 font-semibold bg-black text-white rounded-full lg:hidden z-0"
    onClick={() => setOpen(!open)}>
        <i className="ri-equalizer-line"></i>
        <p>Filter</p>
    </div>
    <div className={open ? 'pl-5 flex flex-col gap-8 w-[100%] h-screen  lg:flex-row lg:w-[20%] lg:h-fit fixed lg:top-0 lg:shadow-2xl lg:pl-4 lg:pb-3 bg-white' : 'hidden lg:flex lg:flex-col lg:gap-0 lg:flex-row lg:w-[20%] lg:h-fit lg:fixed lg:top-0 lg:shadow-2xl lg:pl-4 lg:pb-3 z-0'}>      
            <div className=' flex flex-col gap-2 lg:gap-0 pt-3'>
                <h3 className='text-2xl lg:text-lg font-bold'>Category</h3>
                <div className='flex gap-2 iems-center'>
                    <input checked={selectedCategory === 'all-categories'} className='accent-black w-4 lg:w-3' type="radio" name="shoes" id="all-categories" value="all-categories"  onChange={() => {setNewData(product); setSelectedCategory('all-categories')}}/>
                    <label className='text-xl lg:text-base font-semibold' htmlFor="all-categories">All</label>
                </div>

                <div className='flex gap-2 iems-center'>
                    <input checked={selectedCategory === 'sneakers'} className='accent-black w-4 lg:w-3' type="radio" name="shoes" id="sneakers" value="sneakers"  onChange={() => filterCat('sneakers')}/>                    
                    <label className='text-xl lg:text-base font-semibold' htmlFor="sneakers">Sneakers</label>
                </div>

                <div className='flex gap-2 iems-center'>
                    <input checked={selectedCategory === 'flats'} className='accent-black w-4 lg:w-3' type="radio" name="shoes" id="flats" value="flats" onChange={() => filterCat('flats')}/>
                    <label className='text-xl lg:text-base font-semibold' htmlFor="flats">Flats</label>
                </div>

                <div className='flex gap-2 iems-center'>
                    <input checked={selectedCategory === 'sandals'} className='accent-black w-4 lg:w-3' type="radio" name="shoes" id="sandals" value="sandals" onChange={() => filterCat('sandals')}/>
                    <label className='text-xl lg:text-base font-semibold' htmlFor="sandals">Sandals</label>
                </div>
            </div>

            <div className='lg:flex lg:flex-col gap-2 lg:gap-0 lg:pt-3 '>
                <h3 className='text-2xl lg:text-lg font-bold'>Price</h3>
                <div className='flex gap-2 iems-center'>
                    <input checked={selectedPrice === 'all-prices'} className='accent-black w-4 lg:w-3' type="radio" name="price" id="all-prices" value="all-prices" onChange={() => {setNewData(price); setSelectedPrice('all-prices')}} />
                    <label className='text-xl lg:text-base font-semibold' htmlFor="all-prices">All</label>
                </div>

                <div className='flex gap-2 iems-center'>
                    <input checked={selectedPrice === '0-50'} className='accent-black w-4 lg:w-3' type="radio" name="price" id="0-50" value="0-50" onChange={() => filterPrice(0,50)} />
                    <label className='text-xl lg:text-base font-semibold' htmlFor="0-50">$0 - 50</label>
                </div>

                <div className='flex gap-2 iems-center'>
                    <input checked={selectedPrice === '50-100'} className='accent-black w-4 lg:w-3' type="radio" name="price" id="50-100" value="50-100" onChange={() => filterPrice(50,100)}/>
                    <label className='text-xl lg:text-base font-semibold' htmlFor="50-100">$50 - 100</label>
                </div>


                <div className='flex gap-2 iems-center'>
                    <input checked={selectedPrice === '100-150'} className='accent-black w-4 lg:w-3' type="radio" name="price" id="100-150" value="100-150" onChange={() => filterPrice(100,150)} />
                    <label className='text-xl lg:text-base font-semibold' htmlFor="100-150">$100 - 150</label>
                </div>

                <div className='flex gap-2 iems-center'>
                    <input checked={selectedPrice === '200-1000'} className='accent-black w-4 lg:w-3' type="radio" name="price" id="over150" value="over150" onChange={() => filterPrice(200,1000)}/>
                    <label className='text-xl lg:text-base font-semibold' htmlFor="over150">Over $150</label>
                </div>
            </div>

            <div className='lg:flex lg:flex-col gap-5 lg:gap-0 lg:pt-3 '>
                <h3 className='text-2xl lg:text-lg font-bold'>Colors</h3>
                <div className='lg:flex lg:gap-2 lg:iems-center'>
                    <input checked={selectedPrice === 'all-colors'} className='hidden' type="radio" name="color" id="all-colors" value="all-colors"  onChange={() => {setNewData(Color); setSelectedColor('all-colors')}}/>
                    <label className='flex items-center gap-2' htmlFor="all-colors">
                        <span className='w-5 h-5 lg:w-4 lg:h-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg lg:cursor-pointer' ></span>
                        <h3 className='text-xl lg:text-base font-semibold'>All</h3>
                    </label>
                </div>

                <div className='flex gap-2 iems-center'>
                    <input checked={selectedColor === 'black'} className='hidden' type="radio" name="color" id="black" value="black"  onChange={() => filterColor('black')}/>
                    <label className='flex items-center gap-2' htmlFor="black">
                        <span className='w-5 h-5 lg:w-4 lg:h-4 rounded-full bg-black lg:shadow-lg lg:cursor-pointer'></span>
                        <h3 className='text-xl lg:text-base font-semibold'>Black</h3>
                    </label>
                </div>

                <div className='flex gap-2 iems-center'>
                    <input checked={selectedColor === 'blue'} className='hidden' type="radio" name="color" id="blue" value="blue"  onChange={() => filterColor('blue')}/>
                    <label className='flex items-center gap-2' htmlFor="blue">
                        <span className='w-5 h-5 lg:w-4 lg:h-4 rounded-full bg-blue-700 lg:shadow-lg lg:cursor-pointer'></span>
                        <h3 className='text-xl lg:text-base font-semibold'>Blue</h3>
                    </label>
                </div>

                <div className='flex gap-2 iems-center'>
                    <input checked={selectedColor === 'red'} className='hidden' type="radio" name="color" id="red" value="red" onChange={() => filterColor('red')}/>
                    <label className='flex items-center gap-2' htmlFor="red">
                        <span className='w-5 h-5 lg:w-4 lg:h-4 rounded-full bg-red-600 lg:shadow-lg lg:cursor-pointer' ></span>
                        <h3 className='text-xl lg:text-base font-semibold'>Red</h3>
                    </label>
                </div>
                
                <div className='flex gap-2 iems-center'>
                    <input checked={selectedColor === 'green'} className='hidden' type="radio" name="color" id="green" value="green" onChange={() => filterColor('green')}/>
                    <label className='flex items-center gap-2' htmlFor="green">
                        <span className='w-5 h-5 lg:w-4 lg:h-4 rounded-full bg-green-600 lg:shadow-lg lg:cursor-pointer'></span>
                        <h3 className='text-xl lg:text-base font-semibold'>Green</h3>
                    </label>
                </div>

                <div className='flex gap-2 iems-center'>
                    <input checked={selectedColor === 'white'} className='hidden' type="radio" name="color" id="white" value="white" onChange={() => filterColor('white')}/>
                    <label className='flex items-center gap-2' htmlFor="white">
                        <span className='w-5 h-5 lg:w-4 lg:h-4 rounded-full bg-white lg:shadow-lg lg:cursor-pointer border-2 border-solid border-black' ></span>
                        <h3 className='text-xl lg:text-base font-semibold'>White</h3>
                    </label>
                </div>

                
            </div>

    </div>
    </div>
  )
}

export default SideBar