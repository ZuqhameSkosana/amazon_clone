import React from 'react'
import "./Home.css";
import Product from "./Product";



function Home() {
    return (
        <div className="home">
             
             <div className="home__container">
                 <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg"
                  alt="Amozon Pictures"/>
                 


             <div className="home__row">
                 <Product title="Sir Darlington grey hoodie, limited edition." price={499.99} image="https://scontent-cpt1-1.xx.fbcdn.net/v/t1.0-9/136935823_107912617916614_3815530501974010042_n.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeFY9ibq78zHkzWXsKRL-pEKYJK9MWYZPylgkr0xZhk_KU8gm1B3cc70_mJTNRLuUwZUw0La003pnLD_8y2buq0y&_nc_ohc=KXY84IdDL6sAX_rn12V&_nc_ht=scontent-cpt1-1.xx&oh=64773e22af6fd2b24dcd38a8a9f2ca17&oe=602644B6"  rating={5}  />
                
                 <Product title="Sir Darlington grey hoodie, limited edition." price={499.99} image="https://scontent-cpt1-1.xx.fbcdn.net/v/t1.0-9/136935823_107912617916614_3815530501974010042_n.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeFY9ibq78zHkzWXsKRL-pEKYJK9MWYZPylgkr0xZhk_KU8gm1B3cc70_mJTNRLuUwZUw0La003pnLD_8y2buq0y&_nc_ohc=KXY84IdDL6sAX_rn12V&_nc_ht=scontent-cpt1-1.xx&oh=64773e22af6fd2b24dcd38a8a9f2ca17&oe=602644B6"  rating={5}  />

                 
                 {/**product */}
             </div>

             <div className="home__row">
             <Product title="Sir Darlington Red Cap" price={450.00} image="https://scontent-cpt1-1.xx.fbcdn.net/v/t1.0-9/135911691_105095638198312_157177552550792396_n.jpg?_nc_cat=105&ccb=2&_nc_sid=9267fe&_nc_eui2=AeES0wr8z__dXyRvFA3MF1vkXA2jR4hLiwtcDaNHiEuLC58tkUx2sh9d-UtR1Z_c-uTXjuQthXLAqNIgxiRiUWdt&_nc_ohc=M9JvkYjm84YAX8LFpT2&_nc_ht=scontent-cpt1-1.xx&oh=aa2b5e05aceee4fcb87d30652b02707d&oe=6024564E"  rating={3}  />
             <Product title="Sir Darlington Red Cap" price={450.00} image="https://scontent-cpt1-1.xx.fbcdn.net/v/t1.0-9/135911691_105095638198312_157177552550792396_n.jpg?_nc_cat=105&ccb=2&_nc_sid=9267fe&_nc_eui2=AeES0wr8z__dXyRvFA3MF1vkXA2jR4hLiwtcDaNHiEuLC58tkUx2sh9d-UtR1Z_c-uTXjuQthXLAqNIgxiRiUWdt&_nc_ohc=M9JvkYjm84YAX8LFpT2&_nc_ht=scontent-cpt1-1.xx&oh=aa2b5e05aceee4fcb87d30652b02707d&oe=6024564E"  rating={4}  />
             <Product title="Sir Darlington Red Cap" price={450.00} image="https://scontent-cpt1-1.xx.fbcdn.net/v/t1.0-9/135911691_105095638198312_157177552550792396_n.jpg?_nc_cat=105&ccb=2&_nc_sid=9267fe&_nc_eui2=AeES0wr8z__dXyRvFA3MF1vkXA2jR4hLiwtcDaNHiEuLC58tkUx2sh9d-UtR1Z_c-uTXjuQthXLAqNIgxiRiUWdt&_nc_ohc=M9JvkYjm84YAX8LFpT2&_nc_ht=scontent-cpt1-1.xx&oh=aa2b5e05aceee4fcb87d30652b02707d&oe=6024564E"  rating={5}  />


                
                 {/**product */}
                 {/**product */}
                 {/**product */}
             </div>

             
             <div className="home__row">
             <Product title="Sir Darlington White Tshirt" price={250.00} image="https://scontent-cpt1-1.xx.fbcdn.net/v/t1.0-9/137508748_108796454494897_3624648320394188380_o.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeFiMiR84CN9g11fbJn73MAJsRDqrH4yxmKxEOqsfjLGYounxUhcgrAUhzgV88wW3yivWWeaNUxFMlQJO4UPlHyV&_nc_ohc=hOTwduYskBoAX_wq0bb&_nc_ht=scontent-cpt1-1.xx&oh=d56243b6ac2b89b482e8e62783bb42df&oe=6024A80E"  rating={4}  />

                 {/**product */}
              
             </div>

             </div>
        
        
        
        </div>
    )
}

export default Home
