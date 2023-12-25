import { getPostsData } from "@/lib/blog_functions";
import Link from "next/link";
import React from "react";

export default async function Blogs() {
	const blogs = await getPostsData();

	//Case: no posts
	if (blogs.length === 0) {
		return (
			<div className="container mx-auto p-4">
				There are no posts yet...
			</div>
		);
	}
	//Display all posts
	return (
		<div className="container mx-auto p-4">
			<p>Here are my latest blog posts. Enjoy</p>

			<ul className="border-t border-dotted mt-4 py-4 flex flex-col gap-4">
				{blogs.map((blog) => {
					return (
						<li key={blog.id}>
							<Link prefetch={false} href={`/blog/${blog.id}`}>
								{blog.title}
								<span className="ml-2 text-xs opacity-50">
									{blog.date.toLocaleDateString()}
								</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
