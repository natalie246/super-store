import React from 'react';
import './Nav.css';

const Nav = ({ updateCategory, category }) => {
    return (
        <div className={'nav'}>
            <ul className={'flex'}>
                <li
                    className={'navLi'}
                    onClick={e => {
                        updateCategory('vacation');
                    }}
                    style={{
                        textDecoration:
                            category === 'vacation' ? 'underline' : '',
                    }}
                >
                    Vacation
                </li>
                <li
                    className={'navLi'}
                    onClick={e => updateCategory('cruise')}
                    style={{
                        textDecoration:
                            category === 'cruise' ? 'underline' : '',
                    }}
                >
                    Cruise
                </li>
                <li
                    className={'navLi'}
                    onClick={e => updateCategory('luxury')}
                    style={{
                        textDecoration:
                            category === 'luxury' ? 'underline' : '',
                    }}
                >
                    Luxury Trips
                </li>
            </ul>
        </div>
    );
};

export default Nav;
