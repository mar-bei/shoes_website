import { useEffect, useState } from "react"; 
function ShoppingCart({product, setAddedProducts}) {

    const [sum , setSum] = useState(() => {
        return product.map(e => {
            let i = 0;
            return   i += e.newPrice;
        })
    });


    useEffect(() => {
        localStorage.setItem('addedProduct', JSON.stringify(product));

        let total = 0;
        let index = 0;
        while (index < product.length) {
            total += product[index].newPrice;
            index++;
        }
        setSum(total);
    }, [product]);



    const addQty = (id) => {
        setAddedProducts((prod) => {
            return prod.map(p => {
                if (p.id === id) {
                    const updatedQty = p.qty + 1;
                    const updatedPrice = p.newPrice / p.qty * updatedQty; // Correct total price calculation
                    return { ...p, qty: updatedQty, newPrice: updatedPrice};
                }
                
              return p;
            });
        });
    };

        

    let decreaseQty = (id) => {
        setAddedProducts((product) => {
            return product.map(p => {
            if(p.id === id){
                const updatedQty = p.qty - 1;
                const updatedPrice = p.newPrice / p.qty * updatedQty; 
                return {...p, qty: updatedQty, newPrice: updatedPrice};   
            }
            return p;
        }).filter(p => p.qty > 0);
        });
    }   



    const deleteProduct = (id) => {
        setAddedProducts((product) => {
            return product.filter(p => p.id !== id);  
        })        
    }

  return (
    <div className='w-[100%] h-[90vh] lg:w-[75%] lg:h-[88vh] fixed mt-1 right-0 bg-white border-2 border-solid border-black rounded-xl shadow-2xl z-50'>
    {product.map(p => (
        <div className="flex items-center justify-around font-semibold z-50" key={p.id}>
        <div>
            <img className="w-[4em] h-[4em] object-contain"  src={p.img} alt="" />
        </div>
        <div>
            <h4 className="text-sm">{p.title}</h4>
        </div>
        <div className="flex items-center gap-2">
            <i className="ri-subtract-fill cursor-pointer text-xs" onClick={() => decreaseQty(p.id)}></i>
            <h4 className="text-base">{p.qty}</h4>
            <i className="ri-add-fill cursor-pointer text-xs" onClick={() => addQty(p.id)}></i>
        </div>
        <div>
            <h4 className="text-sm">${p.newPrice}</h4>
        </div>
        <div>
            <i className="ri-delete-bin-6-line cursor-pointer text-xs" onClick={() => deleteProduct(p.id)}></i>
        </div>
    </div>
    ))}


    <div className="w-[100%] absolute bottom-2 flex px-5 gap-2">
        <button className="w-[50%] py-2 text-sm bg-black text-white font-semibold cursor-pointer rounded-full">Total: ${sum}</button>
        <button className="w-[50%] py-2 text-sm bg-black text-white font-semibold cursor-pointer rounded-full">Checkout</button>
    </div>
    
        
    </div>
  )
}

export default ShoppingCart