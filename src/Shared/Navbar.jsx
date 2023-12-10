import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import useAuthHook from "../Hooks/useAuthHook";

const Navbar = () => {
	const { user, logOut } = useAuthHook();


	const isActive = ({ isActive }) =>
		isActive
			? "text-lg text-red-600 hover:text-sky-600 "
			: "hover:text-sky-600 text-white";

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
							<NavLink to="/" className={isActive}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/media" className={isActive}>
								Media
							</NavLink>
						</li>

						{user && (
							<li>
								<NavLink to="about" className={isActive}>
									About
								</NavLink>
							</li>
						)}

						<li>
							<NavLink to="login" className={isActive}>
								Login
							</NavLink>
						</li>
						<li>
							<NavLink to="register" className={isActive}>
								Register
							</NavLink>
						</li>
					</ul>
				</div>
				<NavLink className="btn btn-ghost text-xl">Social-Media</NavLink>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="btn btn-ghost bg-black shadow-none gap-8 font-light join-horizontal  text-white px-1">
					<li>
						<NavLink to="/" className={isActive}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/media" className={isActive}>
							Media
						</NavLink>
					</li>
					{user && (
						<li>
							<NavLink to="about" className={isActive}>
								About
							</NavLink>
						</li>
					)}
					<li>
						<NavLink to="login" className={isActive}>
							Login
						</NavLink>
					</li>
					<li>
						<NavLink to="register" className={isActive}>
							Register
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				{/* Login condition */}

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
							<NavLink className="justify-between">
								Profile/About
								<span className="badge">New</span>
							</NavLink>
						</li>
						<li>
							<NavLink>Settings</NavLink>
						</li>
						<li onClick={() => logOut()}>
							<NavLink>Logout</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
