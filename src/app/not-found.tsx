import Link from "next/link";
import { Frown, Home } from "lucide-react";

export default function NotFound() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
			<div className="text-center text-white px-4">
				<h1 className="text-9xl font-bold mb-4">404</h1>
				<Frown className="mx-auto w-24 h-24 mb-4" />
				<h2 className="text-4xl font-semibold mb-4">Oops! Page not found</h2>
				<p className="text-xl mb-8">
					The page you are looking for might have been removed, had its name
					changed, or is temporarily unavailable.
				</p>
				<Link
					href="/"
					className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50 transition duration-150 ease-in-out"
				>
					<Home className="mr-2 h-5 w-5" />
					Go back home
				</Link>
			</div>
		</div>
	);
}
