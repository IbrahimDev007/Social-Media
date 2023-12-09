import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div className="navbar  bg-black text-base-100  ">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<CiMenuFries className=" text-white text-2xl" />
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
					>
						<li>
							<Link>Home</Link>
						</li>
						<li>
							<Link>Media</Link>
						</li>
						<li>
							<Link>About</Link>
						</li>
					</ul>
				</div>
				<Link className="btn btn-ghost text-xl">daisyUI</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link>Home</Link>
					</li>
					<li>
						<Link>Media</Link>
					</li>
					<li>
						<Link>About</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
							/>
						</div>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
					>
						<li>
							<Link className="justify-between">
								Profile
								<span className="badge">New</span>
							</Link>
						</li>
						<li>
							<Link>Settings</Link>
						</li>
						<li>
							<Link>Logout</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
