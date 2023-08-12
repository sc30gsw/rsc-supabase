import React from 'react'

import type { Database } from '../../database.types'

type Blog = Database['public']['Tables']['blogs']['Row']

const fetchBlogs = async () => {
  await new Promise((resolve) => setTimeout(resolve, 6000))
  const res = await fetch(
    `${process.env.URL as string}/rest/v1/blogs?select=*&order=created_at.asc`,
    {
      headers: new Headers({
        apiKey: process.env.API_KEY as string,
      }),
    },
  )

  if (!res.ok) throw new Error('Failed to fetch data in server')

  const blogs: Blog[] = await res.json()

  return blogs
}

const BlogList = async () => {
  const blogs = await fetchBlogs()

  return (
    <div className="p-4">
      <p className="mb-4 pb-3 text-xl font-medium underline underline-offset-4">
        Blogs
      </p>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className="my-1 text-base">
            {blog.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogList
