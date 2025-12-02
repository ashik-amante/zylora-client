import { useState } from "react";
import {
    RiMenu3Line,
    RiCloseLine,
    RiSearchLine,
    RiShoppingCartLine,
    RiUserLine,
} from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci"
import { Link, NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import CartModal from "../pages/Shop/CartModal/CartModal";
import ave from '../assets/avatar.png'
import { useLogoutUserMutation } from "../redux/features/auth/authApi";
import { logout } from "../redux/features/auth/authSlice";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const products = useSelector((state) => state.cart.products)
    const navigate = useNavigate()

    // show user if login
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const [logoutUser] = useLogoutUserMutation()
    console.log(user);

    // dropdown menu
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const handleDropDownToggle = () => {
        setIsDropDownOpen(!isDropDownOpen)
    }

    // admin dropdown
    const adminDropDown = [
        { label: 'Dashboard', path: '/dashboard/admin' },
        { label: 'Manage Item', path: '/dashboard/manage-products' },
        { label: 'All Orders', path: '/dashboard/manage-orders' },
        { label: 'Add New Post', path: '/dashboard/add-new-post' },
    ]
    // user dropdown
    const userDropDown = [
        { label: 'Dashboard', path: '/dashboard/admin' },
        { label: 'Profile', path: '/dashboard/profile' },
        { label: 'Payment', path: '/dashboard/payments' },
        { label: 'Orders', path: '/dashboard/orders' },
    ]
    const dropdownMenu = user?.role === 'admin' ? [...adminDropDown] : [...userDropDown]

    const handleLogout =async()=>{
        try {
            await logoutUser().unwrap()
            dispatch(logout())
            navigate('/')
        } catch (error) {
            console.log(error,'failded to logout');
        }
    }

    const handleToggle = () => {
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
                        className="relative mr2">
                        <RiShoppingCartLine
                            size={22}
                            className="text-gray-700 hover:text-pink-600"
                        />
                        <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-1.5">
                            {products.length}
                        </span>
                    </button>
                    {/* login */}
                    {/* Avatar + Dropdown */}
                    {
                        user ? (
                            <div className="relative">
                                <img
                                    className="h-8 w-8 rounded-full cursor-pointer "
                                    onClick={handleDropDownToggle}
                                    src={user?.profileImage || ave}
                                    alt="profile"
                                />

                                {/* Dropdown Menu */}
                                {isDropDownOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-50">
                                        <ul className="text-gray-700">
                                            {dropdownMenu.map((item, index) => (
                                                <li key={index}>
                                                    <Link
                                                        to={item.path}
                                                        onClick={() => setIsDropDownOpen(false)}
                                                        className="block px-4 py-2 hover:bg-gray-100 hover:text-pink-600"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                                <button
                                                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                                                    onClick={() => {
                                                        dispatch(logout());
                                                        setIsDropDownOpen(false);
                                                    }}
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button className="text-gray-700 hover:text-pink-600">
                                <Link to="/login">
                                    <RiUserLine size={22} />
                                </Link>
                            </button>
                        )
                    }


                    {/* cart toggle */}
                    {
                        isCartOpen && <CartModal products={products} isOpen={isCartOpen} onClose={handleToggle}></CartModal>
                    }

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-gray-700 hover:text-pink-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <RiCloseLine size={22} /> : <CiMenuBurger size={22} />}
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
