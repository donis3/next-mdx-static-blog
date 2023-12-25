//Layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Next.js Mdx Static Blog",
	description: "A Next.js 14 & MDX blog starter project.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-white dark:bg-zinc-800 text-black dark:text-white">
				{/* Navbar */}
				<header className="h-16  border-b shadow-sm fixed top-0 left-0 w-full bg-slate-200 dark:bg-zinc-900 dark:border-black">
					<div className="container flex flex-row gap-4 justify-between mx-auto">
						<Link prefetch={false} href={"/"}>
							<h1 className="p-4 text-2xl font-bold">
								📑NextBlog
							</h1>
						</Link>
						<nav className="flex-1 flex flex-wrap p-4 items-end justify-end gap-4 text-lg font-semibold ">
							<Link
								prefetch={false}
								href={"/"}
								className="underline">
								Home
							</Link>
							<Link
								prefetch={false}
								href={"/blog"}
								className="underline">
								Blog
							</Link>
						</nav>
					</div>
				</header>
				{/* Main Content */}
				<main className="mt-16">{children}</main>
			</body>
		</html>
	);
}
