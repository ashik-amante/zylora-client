import { useState } from "react";
import {
    RiMenu3Line,
    RiCloseLine,
    RiSearchLine,
    RiShoppingCartLine,
    RiUserLine,
} from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci"
import { Link, NavLink } from "react-router";
import { useSelector } from "react-redux";
import CartModal from "../pages/Shop/CartModal/CartModal";
;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const products = useSelector((state)=> state.cart.products)

    const handleToggle = ()=>{
        setIsCartOpen(!isCartOpen)
    }
  

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "Pages", path: "/pages" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-16">
                {/* Left - Links (Desktop) */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `transition-colors duration-200 ${isActive
                                    ? "text-pink-600 font-semibold"
                                    : "text-gray-700 hover:text-pink-600"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Center - Logo */}
                <div className="text-2xl font-bold tracking-wider">
                    <span className="text-black">Zylora</span>
                    <span className="text-pink-600">.</span>
                </div>

                {/* Right - Icons */}
                <div className="flex items-center space-x-4">
                    <Link to={'/search'} className="text-gray-700 hover:text-pink-600">
                        <RiSearchLine size={20} />
                    </Link >

                    <button 
                    onClick={handleToggle}
                    className="relative">
                        <RiShoppingCartLine
                            size={22}
                            className="text-gray-700 hover:text-pink-600"
                        />
                        <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-1.5">
                            {products.length}
                        </span>
                    </button>

                    <button className="text-gray-700 hover:text-pink-600">
                        <Link to='/login'>
                            <RiUserLine size={22} />
                        </Link>

                    </button>
                    {/* cart toggle */}
                    {
                        isCartOpen && <CartModal products={products} isOpen={isCartOpen} onClose={handleToggle}></CartModal>
                    }

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-gray-700 hover:text-pink-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <RiCloseLine size={22} /> :<CiMenuBurger size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 right-4 bg-white border border-gray-100 shadow-lg rounded-lg md:hidden w-40">
                    <ul className="flex flex-col text-center py-3">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `block py-2 ${isActive
                                            ? "text-pink-600 font-semibold"
                                            : "text-gray-700 hover:text-pink-600"
                                        }`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
