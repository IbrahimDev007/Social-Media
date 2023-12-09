import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
	return (
		<footer className="footer items-center p-4 bg-neutral text-neutral-content">
			<aside className="items-center grid-flow-col">
				<p>Copyright © 2023 - All right reserved</p>
			</aside>
			<nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
				<a>
					<FaFacebookF className="text-2xl" />
				</a>
				<a>
					<FaYoutube className="text-2xl" />
				</a>
				<a>
					<FaXTwitter className="text-2xl" />
				</a>
			</nav>
		</footer>
	);
};

export default Footer;
