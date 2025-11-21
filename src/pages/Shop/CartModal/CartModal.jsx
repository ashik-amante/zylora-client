import React from 'react';
import { RxCross1 } from "react-icons/rx";
import OrderSummery from '../Order summery/OrderSummery';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../../redux/features/carts/cartSlice';

const CartModal = ({ products, isOpen, onClose }) => {
    const dispatch = useDispatch()
    const handleQuantity = (type,id)=>{
        const payload = {type, id}
        dispatch(updateQuantity(payload))
    }
    const handleRemove = (id)=>{
       
        dispatch(removeFromCart({id}))
    }
    return (
        <div className={`fixed z-1000 inset-0 bg-black bg-opacity-70 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            style={{ transition: "opacity 300ms" }}
        >
            <div className={` fixed right-0 top-0 md:w-1/3 w-full bg-white h-full overflow-y-auto transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ transition: 'transform 300ms cubic-bezier(0.25,0.46, 0.45,0.94' }}
            >
                <div className='p-4 mt-4 flex justify-between mb-4'>
                    <h1 className='text-2xl font-semibold'>Your cart</h1>
                    <button
                        onClick={onClose}
                        className='bg-black text-white p-1 rounded px-3 '
                    >
                        <RxCross1 />
                    </button>
                </div>
                <div>
                    {
                        products.length === 0 ? <div className='text-xl font-semibold px-4 text-pink-600'>Your cart is empty</div>
                            : <>
                                {
                                    products.map((product, index) => (
                                        <div className='flex flex-col md:flex-row md:items-center md:justify-between shadow-md md:p-5 p-2 mb-4' key={product.id}>
                                            <div className='flex items-center gap-2'>
                                                <span className=' ml-1 px-2 bg-pink-600 rounded-full text-white'>{index + 1} </span>
                                                <img className='w-10 object-cover' src={product.image} alt="" />
                                                <div>
                                                    <h5 className='text-lg font-semibold'>{product.name}</h5>
                                                    <p>{Number(product.price).toFixed(2)} $</p>
                                                </div>
                                                <div className='flex flex-row justify-center items-center'>
                                                    <button 
                                                    onClick={()=>handleQuantity('decrement', product.id)}
                                                    className='size-5 flex items-center justify-center px-1.5 py-1 rounded-full bg-gray-200 hover:bg-pink-600 hover:text-white  '>-</button>

                                                    <span className='px-2 text-center mx-1'>{product.quantity}</span>
                                                    <button
                                                     onClick={()=>handleQuantity('increment', product.id)}
                                                    className='size-5 flex items-center justify-center px-1.5 py-1 rounded-full bg-gray-200 hover:bg-pink-600 hover:text-white '>+</button>
                                                    <button 
                                                    onClick={()=> handleRemove(product.id)}
                                                    className='text-red-600 ml-4 hover:bg-pink-600 hover:text-white px-2 rounded-lg py-1'>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </>
                    }
                </div>
                {/* cart details   */}
                <div>
                    {/* calculation */}
                    {
                        products.length > 0 && (
                            <OrderSummery></OrderSummery>
                        )
                    }
                </div>
                

            </div>
        </div>
    );
};

export default CartModal;