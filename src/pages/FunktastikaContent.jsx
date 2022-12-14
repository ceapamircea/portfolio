import React from 'react';
import './FunktastikaContent.css';


function FunktastikaContent() {
	return (
		<div className='container'>
			<div className='row align-items-center justify-content-center pt-2'>
				<img className='col-4 p-0 m-0 m-md-1 p-md-1 image' src='https://i.imgur.com/7BiJJK9.png' alt="Loading" loading={'lazy'} />
				<img className='col-4 p-0 m-0 m-md-1 p-md-1 image' src='https://i.imgur.com/KnoHdRs.png' alt="Loading" loading={'lazy'} />
				<img className='col-4 p-0 m-0 m-md-1 p-md-1 image' src='https://i.imgur.com/DCbU7Yb.png' alt="Loading" loading={'lazy'} />
				<img className='col-4 p-0 m-0 m-md-1 p-md-1 image' src='https://i.imgur.com/jf9Ukrh.png' alt="Loading" loading={'lazy'} />
				<img className='col-4 p-0 m-0 m-md-1 p-md-1 image' src='https://i.imgur.com/4gyZmq0.png' alt="Loading" loading={'lazy'} />
                
				<video controls className='col-4 p-0 m-0 m-md-1 p-md-1 image' poster='https://i.imgur.com/KnoHdRs.png' 
					src='https://i.imgur.com/N2JOyVO.mp4' alt="Loading">
					
				</video>
				<video controls className='col-4 p-0 m-0 m-md-1 p-md-1 image' poster='https://i.imgur.com/jf9Ukrh.png'
					src='https://i.imgur.com/0d85yz1.mp4' alt="Loading" />
				<video controls className='col-4 p-0 m-0 m-md-1 p-md-1 image' poster='https://i.imgur.com/4gyZmq0.png'
					src='https://i.imgur.com/w3X4CbQ.mp4' alt="Loading" />
				<video controls className='col-4 p-0 m-0 m-md-1 p-md-1 image' poster='https://i.imgur.com/DCbU7Yb.png'
					src='https://i.imgur.com/VUcFHZ2.mp4' alt="Loading" />

			</div>

		</div>
	);
}

export default FunktastikaContent;