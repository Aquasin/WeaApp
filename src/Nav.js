import { Link } from "react-router-dom";
import "./index.css";

function Nav() {
	const navStyle = {
		textDecoration: "none",
		color: "#f1f1f1",
		size: "2rem",
	};

	return (
		<nav>
			<Link style={navStyle} to="/">
				<h2>Home</h2>
			</Link>
			<ul className="nav-links">
				<Link style={navStyle} to="/weather">
					<li>Weather</li>
				</Link>
				<Link style={navStyle} to="/forecast">
					<li>Forecast</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
