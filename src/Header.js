//code for header
import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";


function Header() {
    return (
        <div className="header">

             {/** amazon logo https://scontent-cpt1-1.xx.fbcdn.net/v/t1.0-9/135709535_104725684901974_8352212112308748058_n.png?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFQMRGJzNMd42iTp2FSNBnng5sQGZ8-TnmDmxAZnz5OeTF1P_zwp7CvRdcIqdqkq2tjDCAUOf6PmTwxExm2WhkT&_nc_ohc=fAdCRq8ffIwAX-skUMs&_nc_ht=scontent-cpt1-1.xx&oh=f7404137e14990e7b41ae48ddef3a2e2&oe=6025B080*/}
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            
            {/** search bar */}
            <div className="header_search">
             <input className="header__searchInput" type="text"/>
            
             <SearchIcon className="header__searchIcon"/>

             {/** logo */}
            </div>


            <div className="header_nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>

                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">Orders</span>

                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>

                </div>

                <div className="header__optionBasket">
                    <ShoppingBasketIcon />

                    <span className="header__optionLineTwo header_basketCount">0</span>


                </div>

            </div>
        
        </div>
    )
}

export default Header
