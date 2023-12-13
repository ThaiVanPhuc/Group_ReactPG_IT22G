import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineCloseCircle } from "react-icons/ai"
import { FaEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Homeproduct from './homeproduct';
import './home.css'
import Chatbox from './chatbox';

import "react-multi-carousel/lib/styles.css";


const Home = ({ detail, view, close, setClose, addtocart }) => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlideInterval, setAutoSlideInterval] = useState(null);

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + 4) % 4);
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
    };

    const startAutoSlide = () => {
        setAutoSlideInterval(setInterval(handleNext, 3000));
        sliderRef.current.addEventListener("mouseenter", stopAutoSlide);
        sliderRef.current.addEventListener("mouseleave", startAutoSlide);
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    useEffect(() => {
        const slider = sliderRef.current;
        // Initial setup
        startAutoSlide();

        // Cleanup
        return () => {
            stopAutoSlide();
            slider.current.removeEventListener("mouseenter", stopAutoSlide);
        slider.current.removeEventListener("mouseleave", startAutoSlide);
        };
    }, [currentSlide]);


    return (
        <>
            {
                close ?
                    <div className='products_detail'>
                        <div className='container'>
                            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
                            {
                                detail.map((curElm) => {
                                    return (
                                        <div className='productbox'>
                                            <div className='img_box'>
                                                <img src={curElm.Img} alt={curElm.Title}></img>
                                            </div>
                                            <div className='detail'>
                                                <h4>{curElm.Cat}</h4>
                                                <h2>{curElm.Title}</h2>
                                                <p>A Screen Everyone Will One: Whether your family is streaming or video chatting with friends table A8...</p>
                                                <h3>{curElm.Price}</h3>
                                                <button>Add To Cart</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className='productbox'></div>
                        </div>
                    </div> : null
            }
            <div className='top_banner'>
                <div className='container'>
                    <div className='detail'>
                        <h2> The Best Note Book Collection 2023</h2>
                        <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
                    </div>
                    <div className='img_box'>
                    <img src='./img/product/ipad.png' alt="iPad" />
                    </div>
                </div>
            </div>
            <div className='product_type'>

                {/* slider */}

                <div
                    className='container'
                    ref={sliderRef}
                >
                    <button className='prev-btn' onClick={handlePrev}>&#8249;</button>

                    <div className='box'>
                        <div className='img_box'>
                            <img src='./img/product/tv.png' alt="TV" />
                        </div>
                        <div className='detail'>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='./img/product/watch.png' alt="Watch" />
                        </div>
                        <div className='detail'>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='./img/product/Headphone.png' alt="Headphone" />
                        </div>
                        <div className='detail'>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='./img/product/ipad.png' alt="iPad" />
                        </div>
                        <div className='detail'>
                        </div>
                    </div>

                    <button className='next-btn' onClick={handleNext}>&#8250;</button>
                </div>

                {/* end slider */}
            </div>





            <div className='about'>
                <div className='container'>
                    <div className='box'>
                        <div className='icon'>
                            <FiTruck />
                        </div>
                        <div className='detail'>
                            <h3>Free Shipper</h3>
                            <p> oder above $1000</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <BsCurrencyDollar />
                        </div>
                        <div className='detail'>
                            <h3>Return & refund</h3>
                            <p>Money Black Gaunrenty</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <CiPercent />
                        </div>
                        <div className='detail'>
                            <h3>Member Discount</h3>
                            <p>On every Oder</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <BiHeadphone />
                        </div>
                        <div className='detail'>
                            <h3>Customer Support</h3>
                            <p>Every Time Call Support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product'>
                <h2> Top Product</h2>
                <div className='container'>
                    {
                        Homeproduct.map((curElm) => {
                            return (
                                <div className='box' key={curElm.id}>
                                    <div className='img_box'>
                                        <img src={curElm.Img} alt={curElm.Title}></img>
                                        <div className='icon'>
                                            <li onClick={() => addtocart(curElm)}><CiShoppingCart /></li>
                                            <li onClick={() => view(curElm)}><FaEye /></li>
                                            <li><CiHeart /></li>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <p>{curElm.Cat}</p>
                                        <h3>{curElm.Title}</h3>
                                        <h4>${curElm.Price}</h4>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='banner'>
                <div className='container'>
                    <div className='detail'>
                        <h4>LATEST TECHNOLOGY ADDED</h4>
                        <h3>Apple iPad 10.2 9th Gen - 2021</h3>
                        <Link to='/product' className='link'>Shop Now  <BsArrowRight /> </Link>
                    </div>
                    <div className='img_box'>
                        <img src='./img/product/ipad.png'></img>
                    </div>
                </div>
                <Chatbox />
            </div>
        </>
    )
}

export default Home