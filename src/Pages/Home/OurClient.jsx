const OurClient = () => {
	return (
		<div>
			<div className="bg-slate-600 h-60  p-10 ">
				<div className=" pt-10 pl-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center gap-0 bg-slate-50  ">
					<div className="p-10">
						<h1 className="text-5xl font-semibold text-amber-400 py-10">
							Our Clients
						</h1>
						<p className="text-lg font-light text-slate-700">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
							maxime ipsam. Ex, animi. Ipsa harum ea eaque voluptate sed
							exercitationem animi facere explicabo, ipsum corrupti eius
							repellat iste consequuntur nihil odio ab debitis expedita officiis
							mollitia recusandae quia provident? Dolorum!
						</p>
					</div>
					<img
						src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241262.jpg?size=626&ext=jpg"
						alt="client"
						className="w-fit h-fit object-cover left-0"
					/>
				</div>
			</div>
		</div>
	);
};

export default OurClient;
