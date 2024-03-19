import React from 'react';
import './Card.css';
import catImage from './images/cat.jpeg';
export default function Card() {
  return (
   <>
   
    <div className='card-grid'>
        <div className='card'>
            <img src={catImage}/>
            <h1>Card title</h1>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>

        <div className='card'>
            <img src={catImage}/>
            <h1>Card title</h1>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>

        <div className='card'>
            <img src={catImage}/>
            <h1>Card title</h1>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className='card'>
            <img src={catImage}/>
            <h1>Card title</h1>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className='card'>
            <img src={catImage}/>
            <h1>Card title</h1>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className='card'>
            <img src={catImage}/>
            <h1>Card title</h1>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className='card'>
            <img src={catImage}/>
            <h1>Card title</h1>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>

    </div>
   
   </> 
   
  ) 
}
