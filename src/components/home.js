import React from 'react'
import '../home.css'
import Product from '../components/product'

function Home() {
  return (
    <div className="home">
      <div className ="home__container">
        <img 
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42864220_.jpg"
          alt=""
          />
         
        <div className="home__row">
          <Product
            productName="Noise HeadPhones"
            productPrice="59"
            productImgUrl="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            rating={5}
            />

          <Product
            productName="T-shirt (M)"
            productPrice="10"
            productImgUrl="data:image/jpeg;base64,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"
            rating={5}
            />
        </div>
        <div className="home__row">
          <Product
            productName="Nike shoe Red (Version)"
            productPrice="100"
            productImgUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            rating={4}
          />
          <Product
            productName="Apple Watch"
            productPrice="700"
            productImgUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            rating={3}
          />
          <Product
            productName="LED LG 4K"
            productPrice="1200"
            productImgUrl="https://rukminim1.flixcart.com/image/416/416/kae95e80/television/f/6/y/realme-tv-32-original-imafrz79pweqeafh.jpeg?q=70"
            rating={3}
          />
      </div>
      <div className="home__row">
        <Product
          productName="LED LG 4K"
          productPrice="1200"
          productImgUrl="https://rukminim1.flixcart.com/image/416/416/kae95e80/television/f/6/y/realme-tv-32-original-imafrz79pweqeafh.jpeg?q=70"
          rating={3}
        />
      </div>
    </div>
  </div>
  )
}

export default Home;
