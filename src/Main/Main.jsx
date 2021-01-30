import React from 'react'
import './Main.css'
import Office from '../img/office.jpg'
import * as Icon from 'react-feather'
export default () => {
    return(
        <>
        <div id='content'>
        <div id="text">
            <h1>Serving you <br></br> since 1989.</h1>
            <p>Acme Outdoors is an outdoor and adventure <br></br> shop located
            in the Boathouse District in <br></br>Oklahoma City.</p>
            <button>Shop Merch</button>
        </div>
        </div>
        <div className="container">
            <div className="explain">
                <div className="text">
                    <h5>WAYS TO SUPPORT</h5>
                    <h1>Support Acme Outdoors</h1>
                </div>
                <div className="cv-19">
                    <p>COVID-19 has forced us to close our retail space, but we need<br></br>
                    support from patrons like yourself now more than ever. Below, we've<br></br>
                    listed the best ways to help us through this season.</p>
                </div>
            </div>
            <div id="more-content">
                <div className="mc-1">
                    <div className='card'>
                    <div className="number"><h1>01</h1></div>
                    <div className="description"><h1>SHOP PRODUCTS</h1></div>
                    <div className="icon"><Icon.Circle size={100} strokeWidth={1.5}></Icon.Circle></div>
                    
                    </div>
                    <p>Our full product line is still available online <br/>
                    here on our site! getting outside and hiking is <br/> 
                    still something you can do. Get your gear now!</p>
                </div>
                <div className="mc-2">
                <div className="card-2">
                    <div className="number"><h1>02</h1></div>
                    <div className="description"><h1>DONATE</h1></div>
                    <div className="icon"><Icon.Triangle size={100} strokeWidth={1.5} ></Icon.Triangle></div>
                    
                    
                </div>
                <p>Since we've changed the way we operate to<br></br>
                online only, and to ensure your safety, not all <br></br>
                our staff is working. Donate to keep them afloat.</p>
                </div>
                
                <div className="mc-3">
                    <div className="card-3">
                    <div className="number"><h1>03</h1></div>
                    <div className="description"><h1>BUY GIFT CARDS</h1></div>
                    <div className="icon"><Icon.Square size={100} strokeWidth={1.5}></Icon.Square></div>
                    
                    
                    
                    </div>
                    <p>Heve all the outdoor gear you need for <br></br>
                    now? Buy a gift card and use it later or share<br></br> 
                    it with friends and family.</p>
                </div>
               
            </div>
        </div>
        <div id="content-2">
            <div className="explain-2">
                <h1>How we're keeping you <br></br> safe during COVID-19</h1>
                <p>As an outdoor shop, we've taken precautionary <br>
                </br>measures to ensure the safety of all our<br></br>
                customers and team members.</p>
                <button>Read Our Statement</button>
            </div>
        </div>
        <div className="explain">
            <div className="text">
                <h5>SHOP PRODUCTS</h5>
                <h1>Open 24/7/365.</h1>
            
            </div>
        </div>
        <div className="products">
            <div className="product-price">
                <div className="content-product">
        
                </div>
                <h3>Orange Tent</h3>
                <div className="style">
                <p>$ 200.00 USD</p>
                </div>
                 <button>Details</button>
            </div>
            <div className="product-price">
                <div className="content-product-2">
                
                </div>
                <h3>Tin Coffe Tumbler</h3>
                <div className="style">
                <p>$ 35.00 USD</p> 
                </div>
                 <button>Details</button>
            </div>
            
            <div className="product-price">
                <div className="content-product-3">
                    <div>SALE</div>
                </div>
                <h3>Orange Tent</h3>
                <div className="style">
                <p>$ 95.00 USD</p> <p className="line-through">$ 145.00 USD</p>
                </div>
                <button>Details</button>
            </div>
            
            </div>
            <div className="button-place">
                <button>View All Products</button>
            </div>
            <div className="use-content">
                <div className="image">
                    
                </div>
            <div className="card-content">
            <div className="text-content">
                   <div>
                   <h1>Shop Local</h1>
                    <p>We know that during COVID-19, a lot of folks<br>
                    </br>around the city and state are feeling uneasy about<br></br>
                    the future - we're not sure what the future holds<br></br>
                    either.</p>
                    <p>That said: we know that we love making sure you <br></br>
                    have the gear you need for your adventures, and<br></br>
                    we're going to keep doing that - with our team - <br></br>
                    untill the city tells us we can´t.</p>
                    <p>But as long as folks like yourself support small <br></br>
                    business aroud the city, then we'll be here --<br></br>
                    every day, making sure your orders arrive on time.</p>
                    <br/>               
                    -------
                    <br/>
                    <h5>Jane & John Doe</h5>
                    <h5>Acme Outdoors</h5>
                   </div>
                    
               </div>
            </div>
            </div>
            
              
           
            
        
        </>
    )
    
}
