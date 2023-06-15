import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";

export function Navbar() {
	return (
		<nav className="navbar rounded-box justify-between bg-base-100">
			<div>
				<Link
					href="/"
					className="btn-ghost btn hidden text-xl normal-case sm:inline-flex">
					Hmm. Good question
				</Link>
				<button className="btn-outline btn-square join-item btn sm:hidden">
					<IconSearch size={20} />
				</button>
			</div>
			<div className="hidden sm:block">
				<div className="join">
					<button className="btn-outline join-item btn-square btn">
						<IconSearch size={20} />
					</button>
					<input
						className="input-bordered input-secondary input join-item"
						placeholder="Search"
					/>
				</div>
			</div>
			<div className="flex gap-4">
				{/* No login */}
				<div className="join">
					<Link
						href="/login"
						className="btn-accent btn-outline join-item btn">
						Login
					</Link>
					<Link
						href="/signup"
						className="btn-outline join-item btn">
						Signup
					</Link>
				</div>
				{/* login */}
				{/* <button className="btn-outline btn-square btn">
					<IconUser size={20} />
				</button> */}
			</div>
		</nav>
	);
}
