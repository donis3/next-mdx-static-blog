import Link from "next/link";

export default function Home() {
	return (
		<div className="container mx-auto p-4">
			<h2 className="text-xl font-medium">
				Welcome to Next.js & MDX static blog
			</h2>
			<p className="mt-2 tracking-wide leading-relaxed">
				This is a starter repo for a statically generated next.js blog
				site. Clone the repository and start your own blog today! Visit
				the github repo{" "}
				<Link  prefetch={false}  href={"https://github.com/donis3/next-mdx-static-blog"} className="underline">
					here.
				</Link>
			</p>
			<div className="p-4 rounded-md bg-slate-200 mt-10 dark:bg-zinc-600">
				<code>
					&gt; git clone
					https://github.com/donis3/next-mdx-static-blog.git
					<br />
					&gt; npm install
				</code>
			</div>
		</div>
	);
}
