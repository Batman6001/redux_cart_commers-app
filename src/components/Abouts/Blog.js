import React from 'react'
import './indexabout.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Blog = () => {
    return (
        <>
            <div class="breadcrumbs">
                <a href="/" class="breadcrumbs__link">Home</a>

                <span class="breadcrumbs__current">Flatheads Blog</span>
            </div>
            <div class="blog-template__content">

                <h1 class="blog-template__heading">
                    Flatheads Blog
                </h1>
            </div>

            <div class="cart-container">
                <div class="cart-item">
                    <img src="//www.flatheads.in/cdn/shop/articles/Softknit_banner_1024x417.jpg?v=1649170770" alt="5" />
                    <p className='cart-item-content1'> 5 reasons why you should try these super comfortable loafers</p>
                    <p className='cart-item-content2'>April 05, 2022</p>
                    <p className='cart-item-content3'>Perhaps the most versatile footwear option available to men and women, the loafer is simply an addition you should make to your footwear collection. And we couldn’t think of writing this</p>
                    <u> <h6>CONTINUE READING</h6></u>
                </div>
                <div class="cart-item">
                    <img src="//www.flatheads.in/cdn/shop/articles/Bamboo_banner_1024x417.jpg?v=1648621963" alt="Here" />
                    <p className='cart-item-content1'>Here’s why you MUST add bamboo shoes to your wardrobe!</p>
                    <p className='cart-item-content2'>March 30, 2022</p>
                    <p className='cart-item-content3'>As time rolls on and the world around us changes, it becomes important to change with it. With increasingly conscious consumers, come conscious brands making products that not only</p>
                    <u> <h6>CONTINUE READING</h6></u>
                </div>
                <div class="cart-item">
                    <img src="//www.flatheads.in/cdn/shop/articles/Linen_Hero_banner_1024x417.jpg?v=1646905909" alt="Here" />
                    <p className='cart-item-content1'>A first look at India’s first Linen Sneakers</p>
                    <p className='cart-item-content2'>March 10, 2022</p>
                    <p className='cart-item-content3'>Did you know that there was a period in time when linen clothing was only available to the creme de la creme of society? It was a luxury fabric that not everyone was fortunate enough to</p>
                    <u> <h6>CONTINUE READING</h6></u>
                </div>
                
            </div >

            

            {/* <div className="blog_main">
                <p>Home > <span>Flatheads Blog</span></p>
                <p className='flatheads_p'>Flatheads Blog</p>
            </div> */}
        </>
    )
}

export default Blog
