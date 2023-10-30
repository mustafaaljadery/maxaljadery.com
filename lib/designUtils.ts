import matter from "gray-matter";
import { join } from "path";
import fs from "fs";

type Items = {
  [key: string]: string;
};

type Post = {
  data: {
    [key: string]: string;
  };
  content: string;
};

type Page = {
  data: {
    [key: string]: string;
  };
  content: string;
};

const POSTS_PATH = join(process.cwd(), "_design");

function getPostsFilePaths(): string[] {
  return fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path));
}

export function getPost(slug: string): Post {
  const fullPath = join(POSTS_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);
  return { data, content };
}

export function getPostItems(filePath: string, fields: string[] = []): Items {
  const slug = filePath.replace(/\.mdx?$/, "");
  const { data, content } = getPost(slug);
  const items: Items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllPosts(fields: string[]): Items[] {
  const filePaths = getPostsFilePaths();
  const posts = filePaths
    .map((filePath) => getPostItems(filePath, fields))
    .sort((post1, post2) => (post1.date < post2.date ? 1 : -1));
  return posts;
}

const PAGES_PATH = join(process.cwd(), "_pages");

function getPagesFilePaths(): string[] {
  return fs.readdirSync(PAGES_PATH).filter((path) => /\.mdx?$/.test(path));
}

export function getPageItems(filePath: string, fields: string[] = []): Items {
  const slug = filePath.replace(/\.mdx?$/, "");
  const { data, content } = getPage(slug);

  const items: Items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

export function getPage(slug: string): Page {
  const fullPath = join(PAGES_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);
  return { data, content };
}

export function getAllPages(fields: string[]): Items[] {
  const filePaths = getPagesFilePaths();
  const posts = filePaths
    .map((filePath) => getPageItems(filePath, fields))
    .sort((page1, page2) => (page1.date < page2.date ? 1 : -1));
  return posts;
}
