import { getPostNames, getPostData } from "@/lib/blog_functions";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

/**
 * return all possible blogId values in an array like [{blogId: 'first_blog'}, {blogId: 'second_blog'}]
 */
export async function generateStaticParams() {
	const blogPosts = getPostNames();
	return blogPosts.map((post) => ({
		blogId: post,
	}));
}

type BlogPageProps = {
	params: { blogId: string };
};

export async function generateMetadata({
	params,
}: BlogPageProps): Promise<Metadata> {
	//Load the blog post metadata using blog_functions.ts
	const metadata = await getPostData(params.blogId);
	if (metadata) {
		return {
			title: metadata.title,
			description: metadata.description,
		};
	}
	return {}; //Default return.
}

export default async function BlogPage({ params }: BlogPageProps) {
	const BlogMarkdown = dynamic(
		() => import("@/blog/" + params.blogId + ".mdx"),
	);

	return (
		<div className="container mx-auto p-4">
			<div>
				<Link
					prefetch={false}
					href={"/blog"}
					className="text-sm font-medium p-2 rounded-md hover:bg-slate-200 dark:hover:bg-zinc-600">
					&larr; All Blogs
				</Link>
			</div>
			<article className="prose w-full mt-4 dark:prose-invert">
				<BlogMarkdown />
			</article>
		</div>
	);
}
