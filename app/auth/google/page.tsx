'use client';

// import { useSocialAuthenticateMutation } from '@/redux/features/authApiSlice';
// import { useSocialAuth } from '@/hooks';
// import { Spinner } from '@/components/common';
// import { Suspense } from 'react';

// export default function Page() {
// 	const [googleAuthenticate] = useSocialAuthenticateMutation();
// 	useSocialAuth(googleAuthenticate, 'google-oauth2');

// 	return (
// 		<Suspense fallback={null}>
// 			<div className='my-8'>
// 					<Spinner lg />
// 			</div>
// 		</Suspense>
// 	);
// }


import { Spinner } from '@/components/common';


export default function Page() {

	return (
		<div className='my-8'>
				<Spinner lg />
		</div>
	);
}