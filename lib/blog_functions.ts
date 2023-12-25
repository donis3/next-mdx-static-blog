import { readdirSync } from "fs";

/**
 * Import an mdx blog post file and return the metadata.
 * @param blogId
 * @returns
 */
export async function getPostData(blogId: string): Promise<{
	id: string;
	title: string;
	description: string;
	date: Date;
	author: string;
}> {
	//Lazy load the mdx file for the project
	try {
		const file = await import("@/blog/" + blogId + ".mdx");

		if (file?.metadata) return file.metadata;
		else {
			throw new Error(`Unable to find metadata in file ${blogId}.mdx`);
		}
	} catch (error: any) {
		console.log(error?.message);
		//Return empty metadata on failure
		return {
			id: "",
			title: "",
			description: "",
			date: new Date(),
			author: "",
		};
	}
}

/**
 * Scan the blog directory and return an array of file names
 * @returns
 */
export function getPostNames(): string[] {
	try {
		//Read the /blog folder at root dir
		const fileList: string[] = readdirSync("./blog/");
		//Return an array of filenames at this dir
		if (fileList.length > 0) {
			return fileList.map((file) => {
				//Remove extension
				return file.substring(0, file.lastIndexOf(".")) || file;
			});
		}
	} catch (error) {}
	return [];
}

/**
 * import each post in blog directory and return their metadata in an array
 * @returns
 */
export async function getPostsData(): Promise<
	{
		id: string;
		title: string;
		description: string;
		date: Date;
		author: string;
	}[]
> {
	try {
		//Read the /blog folder at root dir
		const fileList: string[] = readdirSync("./blog/");

		//Load each file
		if (fileList.length > 0) {
			const result = fileList.map(async (file) => {
				//Remove extension to get blogId
				const filename =
					file.substring(0, file.lastIndexOf(".")) || file;
				//Tro to get metadata
				return { ...(await getPostData(filename)), id: filename };
			});

			return Promise.all(result);
		}
	} catch (error) {}
	return [];
}
