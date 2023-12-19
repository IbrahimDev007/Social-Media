import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import useAuthHook from "../Hooks/useAuthHook";
import { BsBox, BsPersonDashFill, BsPersonHeart } from "react-icons/bs";
import {
	SiGnuprivacyguard,
	SiHomeassistant,
	SiMediafire,
} from "react-icons/si";
import { FaBookOpen } from "react-icons/fa";

const Navbar = () => {
	const { user, logOut } = useAuthHook();

	const isActive = ({ isActive }) =>
		isActive
			? " flex gap-2 items-center  text-amber-300 hover:text-sky-600 "
			: "flex gap-2  items-center hover:text-sky-600 text-white";

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
								<SiHomeassistant className="text-blue-600 text-lg " />
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/media" className={isActive}>
								<SiMediafire />
								Media
							</NavLink>
						</li>
						<li>
							{!user && (
								<NavLink to="/register" className={isActive}>
									<SiGnuprivacyguard
										className="text-blue-600 text-lg
								"
									/>
									Register
								</NavLink>
							)}
						</li>
						{user && (
							<>
								<li>
									<NavLink to="about" className={isActive}>
										<FaBookOpen
											className="text-blue-600 text-lg
								"
										/>
										About
									</NavLink>
								</li>
								<li>
									<NavLink to="post" className={isActive}>
										<BsBox
											className="text-blue-600 text-lg
								"
										/>
										My Post
									</NavLink>
								</li>
							</>
						)}
					</ul>
				</div>
				<NavLink to="/" className="btn btn-ghost hover:text-cyan-500 text-xl">
					<img src="/Social.png" className="object-cover  w-10 h-10" />
					Social-Media
				</NavLink>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="btn btn-ghost bg-black shadow-none gap-8 font-light join-horizontal  text-white px-1">
					<li>
						<NavLink to="/" className={isActive}>
							<SiHomeassistant className="text-lg text-blue-600" />
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/media" className={isActive}>
							<SiMediafire className="text-blue-600 text-lg" />
							Media
						</NavLink>
					</li>
					<li>
						{!user && (
							<NavLink to="/register" className={isActive}>
								<SiGnuprivacyguard
									className="text-blue-600 text-lg
								"
								/>
								Register
							</NavLink>
						)}
					</li>
					{user && (
						<>
							<li>
								<NavLink to="about" className={isActive}>
									<FaBookOpen
										className="text-blue-600 text-lg
								"
									/>
									About
								</NavLink>
							</li>
							<li>
								<NavLink to="post" className={isActive}>
									<BsBox
										className="text-blue-600 text-lg
								"
									/>
									My Post
								</NavLink>
							</li>
						</>
					)}
				</ul>
			</div>
			<div className="navbar-end">
				{/* Login condition */}

				{(user && (
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
							</div>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-white"
						>
							<li>
								<NavLink to="about" className={isActive}>
									<FaBookOpen
										className="text-blue-600 text-lg
								"
									/>
									About
								</NavLink>
							</li>
							<li onClick={() => logOut()} className={isActive}>
								<NavLink>
									<BsPersonDashFill className=" text-lg text-red-600" />
									Logout
								</NavLink>
							</li>
						</ul>
					</div>
				)) || (
					<ul>
						<li>
							<NavLink to="login" className={isActive}>
								Login
								<BsPersonHeart className="text-lg text-red-600" />
							</NavLink>
						</li>
					</ul>
				)}
			</div>
		</div>
	);
};

export default Navbar;
