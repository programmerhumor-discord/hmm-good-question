import Link from "next/link";

export function Navbar() {
	return (
		<nav className="navbar rounded-box bg-base-100">
			<div className="navbar-start hidden md:flex">
				<Link
					href="/"
					className="btn-ghost btn text-xl normal-case">
					Hmm. Good Question
				</Link>
			</div>
			<div className="navbar-end join">
				<Link href="/login" className="btn-accent join-item btn">Login</Link>
				<Link href="/signup" className="join-item btn">Signup</Link>
			</div>
		</nav>
	);
}
