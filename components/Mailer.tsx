import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
//import kwesforms from 'kwesforms';
const kwesforms = require('kwesforms');

export default function Mailer() {
	useEffect(() => {
		kwesforms.init();
	}, []);

	return (
		<div className="text-center">
			<form
				//mode="test"
				id="email_address"
				className="kwes-form "
				action="https://kwesforms.com/api/foreign/forms/cxe8Zdpzjd4EPBrL6vHu"
			>
				{/*<label htmlFor="email_address">Your Email</label>*/}
				<input
					type="email"
					name="email_address"
					placeholder="Subscribe to our mailing list"
					className="border border-mayaz bg-transparent py-3 px-4 w-[300px] lg:w-[400px] placeholder:text-mayaz"
				/>

				<button type="submit">
					<div className="-ml-8">
						<Image
							src="/temp/Splash/Vector.svg"
							width={21}
							height={14}
							alt="submit arrow button"
							className="cursor-pointer w-[21px] h-[14px]"
						/>
					</div>
				</button>
			</form>
		</div>
	);
}
