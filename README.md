This is a starter template for static next.js blog projects. Clone the repository and start your own blog today!

## Features

-   Minimal design and code so you can build your own designs.
-   Next.js 14 App router
-   File based content management
-   MDX for markdown rendering and plugin support.
-   Customizable metadata for each blog post. Can be expanded

## Adding a new blog post

Create a new .mdx file in `/blog` directory or copy an existing mdx file there to get started.

Export an object named metadata as seen below in the example

```ts title="first_blog.mdx"
export const metadata = {
	title: "My first blog post",
	description: "An awesome blog post about important stuff",
	date: new Date('2023-12-24'),
	author: 'donis.dev'
};

### My first Blog Post

Duis adipisicing ad pariatur cupidatat consequat pariatur reprehenderit proident culpa.
...
```

All blog posts will be listed in the `<blogurl>/blog` route automatically. This process takes place at build time when you run `next build`.

## Further Reading

This is part of a guide I created as a blog post that can be read [here](https://donis.dev/blog/post/markdown_blog)
