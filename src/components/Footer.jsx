import React from 'react';

function Footer() {
	return (
		<div 
			className='text-white d-flex justify-content-center align-items-center mt-2'
			style={{ height: '27px', backgroundColor: 'black', borderTop: '3px solid black' }}
		> 
			<div className='mb-1' style={{ fontSize: '11px', fontFamily: 'Futura PT'  }}>
        All images copyright &copy; Mircea Ceapa 2023
			</div>
		</div>
	);
}

export default Footer;