import ShoppingCart from './ShoppingCart';
import { useState } from 'react';
import data from './data';
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';



function Products() {
    const [addedProducts, setAddedProducts] = useState(() => {
        return localStorage.getItem('addedProduct') ? JSON.parse(localStorage.getItem('addedProduct')) : [];
    });
    const [username , setUsername] = useState(() => {
        return localStorage.getItem('username');
    })
    const [product, setProduct] = useState(data);
    const [newData, setNewData] = useState(data);
    const [price, setPrice] = useState([]);
    const [Color, setColor] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all-categories');
    const [selectedPrice, setSelectedPrice] = useState('all-prices');
    const [selectedColor, setSelectedColor] = useState('all-colors');
    
    // ================================================ FILTER DATA ==================================================
    const filterData = (company) => {
        const updateData = data.filter(item => {
            return item.company === company;
        })
        
        if(company == 'all'){
            setProduct(data);
        }
        else{
            setProduct(updateData);
            setNewData(updateData);
            setPrice(updateData);
            setColor(updateData);
            setSelectedCategory('all-categories');
            setSelectedPrice('all-prices');
            setSelectedColor('all-colors');
        }

        const categories = document.querySelectorAll('.cat');
        categories.forEach(e => {
            if(e.textContent == company){
                e.classList.add('active');
                document.querySelector('.all-cat').classList.remove('active');
            }
            else{
                e.classList.remove('active');
            }
        })
        
    }
 // ================================================ FILTER BY CATERGORY ==================================================
 const filterCat = (cat) => {
    const getCat = product.filter(e => e.category === cat);    
    
    setNewData(getCat);
    setPrice(getCat);
    setColor(getCat);
    setSelectedCategory(cat);
}

 // ================================================ FILTER BY PRICE ==================================================
const filterPrice = (minPrice, maxPrice) => {
    const getPrice = price.filter(e => e.newPrice >= minPrice && e.newPrice <= maxPrice);
    setNewData(getPrice);
    setColor(getPrice);
    setSelectedPrice(`${minPrice}-${maxPrice}`);
}

 // ================================================ FILTER BY COLOR ==================================================
const filterColor = (color) => {
    const getColor = Color.filter(e => e.color === color)        
    setNewData(getColor);
    setSelectedColor(color)
}

     


   
    

   

    const AllProduct = () => {
        document.querySelector('.all-cat').classList.add('active');
        const categories = document.querySelectorAll('.cat');
        categories.forEach(e => e.classList.remove('active'))
    }

    
    let getProducts = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : data;
    const addToCart = (id) => {
     
            let filterAddedProduct = addedProducts.find(e => e.id == id)
            console.log(filterAddedProduct);
            
           
          
        
            if(!filterAddedProduct){
                const filterProducts = getProducts.find(p => p.id === id);
                let updateProducts = [...addedProducts,filterProducts];
                setAddedProducts(updateProducts);
                localStorage.setItem('addedProduct',JSON.stringify(updateProducts));
            }
            else
            {
                alert('This Product is in Cart');
            }
                
            
   }
 

   

    
    
  return (
    <div>
    {/* =============================================== HEADER SECTION =============================================== */}
        <Header products={addedProducts} setAddedProducts={setAddedProducts} setSearch={setSearch}/>
     {/* ================================================ SIDEBAR SECTION ================================================ */}
        <SideBar data={data} product={product} price={price} Color={Color} selectedCategory={selectedCategory} setNewData={setNewData} selectedColor={selectedColor} selectedPrice={selectedPrice} setSelectedCategory={setSelectedCategory}  setSelectedColor={setSelectedColor} setSelectedPrice={setSelectedPrice} filterCat={filterCat} filterColor={filterColor} filterPrice={filterPrice} />
    {/* ===================================================== PRODUCTS SECTIONS ============================================= */}
        <div  className='lg:mt-20 lg:flex lg:flex-col lg:justify-end lg:items-end lg: w-[100%] lg:z-30'>
        <div className='ml-5 flex flex-col gap-2 w-[75%] py-3'>
            <h3 className='text-2xl lg:text-xl font-extrabold'>Recommended</h3>
            <div className='flex flex-row gap-3'>
                <span className='all-cat active w-fit flex justify-center items-center py-1 lg:cursor-pointer px-5 lg:border-2 text-xs lg:font-semibold lg:rounded-sm' onClick={() => {filterData('all');setNewData(data); AllProduct()}}>All</span>
                <span className='cat w-fit flex justify-center items-center py-0 cursor-pointer px-2 border-2 text-xs font-semibold rounded-sm' onClick={() => filterData("Nike")}>Nike</span>
                <span className='cat w-fit flex justify-center items-center py-0 cursor-pointer px-2 border-2 text-xs font-semibold rounded-sm' onClick={() => filterData("Adidas")}>Adidas</span>
                <span className='cat w-fit flex justify-center items-center py-0 cursor-pointer px-2 border-2 text-xs font-semibold rounded-sm' onClick={() => filterData("Puma")}>Puma</span>
                <span className='cat w-fit flex justify-center items-center py-0 cursor-pointer px-2 border-2 text-xs font-semibold rounded-sm' onClick={() => filterData("Vans")}>Vans</span>

            </div>
        </div>
        <div className="w-[100%] lg:w-[75%] grid grid-cols-1 place-items-center lg:grid-cols-4  gap-3">
            {newData.filter(p => {
                return search.toLowerCase() === '' ? p : p.title.toLowerCase().includes(search.toLocaleLowerCase());
            }).map(product => (
            <div className="flex flex-col gap-2 border border-solid border-gray-700 px-3 lg:px-2 py-7 lg:py-4 w-[90%] lg:w-[100%] cursor-pointer hover:scale-[1.1]" key={product.id}>
                <div className="flex justify-center">
                    <img className="w-[12em] lg:w-[6em] h-[6em] object-contain" src={product.img} alt="" />
                </div>
                <div>
                    <h4 className="text-xl lg:text-sm font-bold mt-5">{product.title}</h4>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <div className="text-lg lg:text-sm flex text-orange-600">
                        {product.star}
                        {product.star}
                        {product.star}
                        {product.star}
                        {product.star}
                    </div>
                    <div>
                        <h5 className="text-lg lg:text-sm font-semibold">{product.reviews}</h5>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between">
                    <h4 className="text-xl lg:text-sm font-semibold"><del>{product.prevPrice}</del> ${product.newPrice}</h4>
                  {!username ? <Link to='signin'>
                  <i className="ri-shopping-bag-4-fill text-xl lg:text-base" onClick={() => addToCart(product.id)}></i>
                  </Link> 
                  : <i className="ri-shopping-bag-4-fill text-xl" onClick={() => addToCart(product.id)}></i>} 
                    
                </div>
               </div>
            ))}
            
        </div>
    </div>
    </div>
  )
}

export default Products;