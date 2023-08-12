import React from 'react'

import type { Database } from '../../database.types'
import Counter from './counter'

type News = Database['public']['Tables']['news']['Row']

const fetchNewses = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch(
    `${process.env.URL as string}/rest/v1/news?select=*&order=created_at.asc`,
    {
      headers: new Headers({
        apiKey: process.env.API_KEY as string,
      }),
    },
  )

  if (!res.ok) throw new Error('Failed to fetch data in server')

  const newses: News[] = await res.json()

  return newses
}

const NewsList = async () => {
  const newses = await fetchNewses()

  return (
    <div className="m-1 border border-blue-500 p-4">
      <Counter />
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">
        News
      </p>
      <ul className="m-3">
        {newses.map((news) => (
          <li key={news.id}>
            <p>{news.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewsList
