import React, { Component } from 'react';
import Product from './Product';
import "./Home.css";

function Home() {
        return (
            <div className="home">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_SVA._CB667240774_.jpg" alt="" />

                {/* Product id, title, price, rating, images */}
                <div className="home__row">
                <Product
                id="123451"
                title="Deals starting now | Electronics Day"
                price={399}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"
                />

                <Product
                id="123452"
                title="Best Seller of the Day"
                price={599}
                rating={5}
                image="https://m.media-amazon.com/images/I/41mQtYQUzmL.jpg"
                />
                </div>

                <div className="home__row">
                <Product
                id="123453"
                title="Experience hands-free entertainment"
                price={49}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61%2BH0rsBOKL._SL1000_.jpg"
                />

                <Product
                id="123454"
                title="Apple Watch Series 5"
                price={299}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61puvr%2BoEBL._AC_SL1500_.jpg"
                />

                <Product
                id="123455"
                title="New Apple iPhone 12 Pro Max (256GB)"
                price={999}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71XXJC7V8tL._SL1500_.jpg"
                />
                </div>

                <div className="home__row">
                <Product
                id="123456"
                title="Bay Bay Summer"
                price={699}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61vern5TkcL._SL1500_.jpg"
                />
                </div>

                <div className="home__row">
                <Product
                id="123457"
                title="AmazonBasics 564 L Side-by-Side Door Refrigerator (Silver Steel Finish) "
                price={600}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71DuofqGR8L._SL1500_.jpg"
                />

                <Product
                id="123457"
                title="Samsung 594 L Frost Free Side-by-Side Refrigerator(RF50K5910DP/TL, Refined Bronze, Convertible, Inverter Compressor)"
                price={1200}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71j61yn8FpL._SL1500_.jpg"
                />
                </div>
                {/* Product */}

            </div>
        );
}

export default Home
