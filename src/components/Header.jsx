import React, {useState} from 'react';
import menuIcon from '../assets/menu-icon.png';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
	const [navbarHeight, setNavbarHeight] = useState('0%');
	const [scrollable, setScrollable] = useState(true);

	return (
		<div style={scrollable ? {}:{ position: 'fixed', top: '0', width:'100%'}}>  
			<nav
				style={{ backgroundColor: '#535353', borderBottom:'3px solid black', height: '55px'}}
				className='d-flex justify-content-center align-items-center'
			>
				<div className="container-fluid d-flex justify-content-between align-items-center">
					<div className='navbar-content'>
						<Link className="text-white" to="/">Mircea Ceapa</Link>
					</div>
					<div className='navbar-hide navbar-content'>
						<Link className="text-white" to="/">Home</Link>
						<Link className="text-white" to="/about">About</Link>
						<Link className="text-white" to="/contact">Contact</Link>
					</div>
					<img
						style={{ width: '50px', color: 'white' }}
						className='p-1 m-1 menu-icon' src={menuIcon}
						alt="collapsed-menu-item"
						onClick={() => {
							if (navbarHeight === '0%') {
								setNavbarHeight('100%');
								setScrollable(false);
							} else {
								setNavbarHeight('0%');
								setScrollable(true);
							}
						}}
					/>
				</div>
			</nav>
			<div className='navbar-overlay' style={{height: navbarHeight}}>
				<div className='navbar-overlay-content'>
					<Link to="/" className="router-link-active router-link-exact-active category-active" aria-current="page">Home</Link>
					<Link to="/about" className="">About</Link>
					<Link  to="/contact" className="">Contact</Link>
				</div>
			</div></div>

	);
}

export default Header;