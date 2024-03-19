import React from 'react';
import './FlexBox.css';

export default function FlexBox() {
  return (
    <div className='container'>
        <div className='flexbox-item flexbox-item-1'>
            <h2>First flexbox item</h2>
            <p>This is flexbox item 1</p>
        </div>
        <div className='flexbox-item flexbox-item-2'>
            <h2>Second flexbox item</h2>
            <p>This is flexbox item 2</p>
        </div>
        <div className='flexbox-item flexbox-item-3'>
            <h2>Third flexbox item</h2>
            <p>This is flexbox item 3</p>
            <a>Link</a>
            <ul>
                <li>apple</li>
                <li>banana</li>
            </ul>
        </div>

        <div className='flexbox-item flexbox-item-2'>
            <h2>Second flexbox item</h2>
            <p>This is flexbox item 2</p>
        </div>

        <div className='flexbox-item flexbox-item-1'>
            <h2>First flexbox item</h2>
            <p>This is flexbox item 1</p>
        </div>

        <div className='flexbox-item flexbox-item-1'>
            <h2>First flexbox item</h2>
            <p>This is flexbox item 1</p>
        </div>

        <div className='flexbox-item flexbox-item-1'>
            <h2>First flexbox item</h2>
            <p>This is flexbox item 1</p>
        </div>
    </div>
  )
}
