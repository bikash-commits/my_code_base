import React from 'react'
import '../home.css'
import Product from '../components/product'

function Home(){
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
            id="12435467"
            productName="The new Alexa at your commands"
            productPrice={59}
            productImgUrl={require('../components/photos/photo-1.jpeg')}
            rating={5}
            />

          <Product
            id="12435462"
            productName="The new trend setter Apple Watch (Gen-6)"
            productPrice={10}
            productImgUrl={require('../components/photos/photo-2.jpeg')}
            rating={5}
            />
        </div>
        <div className="home__row">
          <Product
            id="12435464"
            productName="DSLR Camera with 30x zoom"
            productPrice={100}
            productImgUrl={require('../components/photos/photo-3.jpeg')}
            rating={4}
          />
          <Product
            id="12435436"
            productName="The black mamba (Guitar)"
            productPrice={700}
            productImgUrl={require('../components/photos/photo-4.jpeg')}
            rating={3}
          />
          <Product
            id="24435464"
            productName="jordon White nike shoes"
            productPrice={1200}
            productImgUrl={require('../components/photos/photo-5.jpg')}
            rating={3}
          />
      </div>
      <div className="home__row">
        <Product
          id="52435464"
          productName="Play Station 5 Powered by Sony"
          productPrice={1200}
          productImgUrl={require('../components/photos/photo-6.jpeg')}
          rating={3}
        />
      </div>
    </div>
  </div>
  )
}

export default Home;
