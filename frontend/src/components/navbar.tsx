import Link from "next/link"
import { BiHome, BiSearchAlt2 } from "react-icons/bi"
import { BsPersonFill } from 'react-icons/bs'
export default function NavBar() {
	return (
		<div className="navbar-container">
			<div className="navbar-left">
				<Link className="navbar-linker" href='/'>
					<p className="navbar-name">Hmm. Good Question</p>
				</Link>
				<Link className="navbar-linker-home" href='/'>
					<p className="navbar-home-text">Home</p>
				</Link>
				<Link className="navbar-linker-home-mobile" href='/'>
					<BiHome color="#fff" size={20}/>
				</Link>
				<Link className="navbar-linker-home-mobile" style={{marginLeft: '10px'}} href='/'>
					<BiSearchAlt2 color="#fff" size={20}/>
				</Link>
				<input className="navbar-search" placeholder="Search in Hmm. Good Question."/>
			</div>
			<div className="navbar-right">
				<Link className="navbar-linker-login" href='/'>
					<p className="navbar-home-text">Login</p>
				</Link>
				<Link className="navbar-linker-signup" href='/'>
					<p className="navbar-home-text">Signup</p>
				</Link>
				<Link className="navbar-linker-home-mobile" style={{marginLeft: '10px'}} href='/'>
					<BsPersonFill color="#fff" size={20}/>
				</Link>
			</div>
		</div>
	);
}
