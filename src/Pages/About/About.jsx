const About = () => {
	return (
		<div>
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="w-[60rem] flex justify-center">
						<div className="card   h-[40rem] m-10 glass">
							<figure>
								<img
									src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
									alt="car!"
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title">Name</h2>
								<p>How to park your car at your garage?</p>
								<div className="card-actions justify-end">
									<button className="btn btn-warning btn-outline ">
										Edit now!
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
