import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './cart.css';

const Cart = ({ cart, setCart }) => {
    // Tăng số lượng
    const incqty = (product) => {
        const exsit = cart.find((x) => x.id === product.id);
        setCart(
            cart.map((curElm) =>
                curElm.id === product.id ? { ...exsit, qty: exsit.qty + 1 } : curElm
            )
        );
    };

    // Giảm số lượng
    const decqty = (product) => {
        const exsit = cart.find((x) => x.id === product.id);
        setCart(
            cart.map((curElm) =>
                curElm.id === product.id ? { ...exsit, qty: exsit.qty - 1 } : curElm
            )
        );
    };

    // Xóa sản phẩm khỏi giỏ hàng
    const removeproduct = (product) => {
        const exsit = cart.find((x) => x.id === product.id);
        if (exsit.qty > 0) {
            setCart(cart.filter((x) => x.id !== product.id));
        }
    };

    // Tính tổng giá
    const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0);

    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
    });

    const handlePayment = () => {
        setShowPaymentModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handlePayOnDelivery = () => {
        if (
            userInfo.name === '' ||
            userInfo.address === '' ||
            userInfo.phone === '' ||
            userInfo.email === '' ||
            !isValidPhone(userInfo.phone) ||
            !isValidEmail(userInfo.email)
        ) {
            console.log('Thông tin không hợp lệ. Vui lòng kiểm tra lại.');
            return;
        }

        setShowPaymentModal(false);
        setCart([]);
    };

    const isValidPhone = (phone) => {
        return /^\d{10}$/.test(phone) && phone.startsWith('0');
    };

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    return (
        <>
            <div className='cartcontainer'>
                {cart.length === 0 && (
                    <div className='emptycart'>
                        <h2 className='empty'>Giỏ hàng trống</h2>
                        <Link to='/product' className='emptycartbtn'>
                            Mua sắm ngay
                        </Link>
                    </div>
                )}
            </div>
            <div className='content'>
                {cart.map((curElm) => (
                    <div className='cart_item' key={curElm.id}>
                        <div className='img_box'>
                            <img src={curElm.Img} alt={curElm.Title}></img>
                        </div>
                        <div className='extra-content'>
                            <h2 className='totalprice'>Tổng: $ {Totalprice}</h2>
                            <button className='checkout' onClick={handlePayment}>
                                Thanh Toán
                            </button>
                        </div>
                        <div className='detail'>
                            <div className='detail'>
                                <h4>{curElm.Cat}</h4>
                                <h3>{curElm.Title}</h3>
                                <p>Giá: {curElm.Price}</p>
                                <div className='qty'>
                                    <button className='incqty' onClick={() => incqty(curElm)}>
                                        +
                                    </button>
                                    <input type='text' value={curElm.qty}></input>
                                    <button className='decqty' onClick={() => decqty(curElm)}>
                                        -
                                    </button>
                                </div>
                                <h4 className='subtotal'>Tạm Tính: ${curElm.Price * curElm.qty}</h4>
                            </div>
                            <div className='close'>
                                <button onClick={() => removeproduct(curElm)}>
                                    <AiOutlineClose />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showPaymentModal && (
                <div className='payment-box'>
                    <h2>Đặt Hàng</h2>
                    <div className='pay-on-delivery-info'>
                        <label htmlFor='name'>Tên:</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={userInfo.name}
                            onChange={handleInputChange}
                        ></input>
                        <br />
                        <br />
                        <label htmlFor='address'>Địa chỉ:</label>
                        <input
                            type='text'
                            id='address'
                            name='address'
                            value={userInfo.address}
                            onChange={handleInputChange}
                        ></input>
                        <br />
                        <br />
                        <label htmlFor='phone'>Số điện thoại:</label>
                        <input
                            type='tel'
                            id='phone'
                            name='phone'
                            value={userInfo.phone}
                            onChange={handleInputChange}
                        ></input>
                        <br />
                        <br />
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={userInfo.email}
                            onChange={handleInputChange}
                        ></input>
                        <br />
                        <br />
                        <button id='payOnDelivery' onClick={handlePayOnDelivery}>
                            <Link to='/product' className='emptycartbtn'>
                                Đặt Hàng Ngay
                            </Link>
                        </button>
                        <button id='goBack' onClick={() => setShowPaymentModal(false)}>
                            Quay lại
                        </button>
                        <p id='paymentStatus' style={{ display: 'none' }}></p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
