import React, {Suspense} from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const ApplicationContent = React.lazy(()=>import ('./ApplicationContent'));


function Application() {
    
	return (
		<div>
			<Header />
			<Navbar applicationSelected />
			<Suspense fallback={
				<div className='d-flex justify-content-center'>
					<div className='text-muted' style={{fontSize: '17px'}}>
              Loading...
					</div>
				</div>
			}>
				<div>
					<ApplicationContent />
					<Footer />
				</div>
			</Suspense>
		</div>
	);
}

export default Application;
