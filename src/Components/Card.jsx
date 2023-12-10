const Card = () => {
	return (
		<div>
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure>
					<img
						src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
						alt="Shoes"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">title</h2>
					<p>Desc</p>
					<div className="card-actions justify-between ">
						<button
							className="btn btn-error btn-outline btn-sm
                            "
						>
							Like{" "}
						</button>
						<button
							className="btn btn-info btn-outline btn-sm
                            "
						>
							Details{" "}
						</button>
						<div className="collapse bg-base-200">
							<input type="checkbox" className="peer" />
							<div className="collapse-title bg-info text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
								Click me to show/hide content
							</div>
							<div className="collapse-content bg-info text-primary-content peer-checked:bg-info peer-checked:text-secondary-content">
								<p>hello</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
