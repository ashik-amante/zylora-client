import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdRemoveShoppingCart } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { clearCart } from '../../../redux/features/carts/cartSlice';

const OrderSummery = () => {
    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    const { tax, taxRate, totalPrice, grandTotal, selectedItems } = useSelector((store) => store.cart)
    return (
        <div className='bg-pink-200 px-5 py-4 rounded mt-4 space-y-3'>
            <h1 className='text-xl font-semibold text-center'> order summmery</h1>

            <p>selected items : {selectedItems}</p>
            <p>Total Price : {totalPrice.toFixed(2)} $</p>
            <p>Tax : ({taxRate * 100}% ) = $ {tax.toFixed(2)}</p>
            <p className='font-bold'>Grand Total : {grandTotal.toFixed(2)}</p>

            <div className=' pb-6 space-y-3'>
                <button
                    onClick={handleClearCart}
                    className='bg-pink-600 px-6 text-white py-1 rounded flex justify-center items-center gap-3'>Clear cart <MdRemoveShoppingCart />
                </button>

                <button
                    className='bg-green-600 px-6 text-white py-1 rounded flex justify-center items-center gap-3'>Procceed checkout <IoBagCheckOutline />
                </button>
            </div>
        </div>
    );
};

export default OrderSummery;