import React from 'react';

function ApplicationContent() {
	return (
		<div className='container'>
			<div className='row align-items-center justify-content-center pt-2'>
				<img
					className='col-6 p-0 m-0 m-md-1 p-md-1'
					style={{ width: '1000px' }}
					src='https://i.imgur.com/n2wODIB.jpeg'
					alt="Loading"
					loading={'lazy'}
				/>
				<img
					className='col-6 p-0 m-0 m-md-1 p-md-1'
					style={{ width: '500px' }}
					src='https://i.imgur.com/HyFecVK.jpeg'
					alt="Loading"
					loading={'lazy'}
				/>
				<img
					className='col-6 p-0 m-0 m-md-1 p-md-1'
					style={{ width: '500px' }}
					src='https://i.imgur.com/cPtxFfD.jpeg'
					alt="Loading"
					loading={'lazy'}
				/>
            
				<img
					className='col-6 p-0 m-0 m-md-1 p-md-1'
					style={{ width: '500px' }}
					src='https://i.imgur.com/pn7U9pD.jpeg'
					alt="Loading"
					loading={'lazy'}
				/>
            
				<img
					className='col-6 p-0 m-0 m-md-1 p-md-1'
					style={{ width: '500px' }}
					src='https://i.imgur.com/HyFecVK.jpeg'
					alt="Loading"
					loading={'lazy'}
				/>
				<video
					controls
					className='col-6 p-0 m-0 m-md-1 p-md-1'
					style={{ width: '500px' }}
					src='https://i.imgur.com/NzFeSvD.mp4'
					alt="Loading"
				/>
				<video
					controls
					className='col-6 p-0 m-0 m-md-1 p-md-1'
					style={{ width: '500px' }}
					src='https://i.imgur.com/TaEGVdt.mp4'
					alt="Loading"
				/>
				<video
					controls
					className='col-6 p-0 m-0 m-md-1 p-md-1'
					style={{ width: '500px' }}
					src='https://i.imgur.com/Lavi20M.mp4'
					alt="Loading"
					poster='https://i.imgur.com/BoruBbX.png'
				/>
				<video
					controls
					className='col-6 p-0 m-0 m-md-1 p-md-1'
					style={{ width: '500px' }}
					src='https://i.imgur.com/8lCglm9.mp4'
					alt="Loading"
					poster='https://i.imgur.com/ri2Zumf.png'
				/>
			</div>
		</div>
	);
}

export default ApplicationContent;