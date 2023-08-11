import format from 'date-fns/format/index'
import React from 'react'

import type { Database } from '../../database.types'

type Note = Database['public']['Tables']['notes']['Row']

const fetchNotes = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch(
    `${process.env.URL as string}/rest/v1/notes?select=*`,
    {
      headers: new Headers({ apiKey: process.env.API_KEY as string }),
      cache: 'no-store',
    },
  )

  if (!res.ok) throw new Error('Failed to fetch data in server')

  const notes: Note[] = await res.json()

  return notes
}

const NotesList = async () => {
  const notes = await fetchNotes()
  return (
    <div>
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">
        Notes
      </p>
      <ul className="m-3">
        {notes.map((note) => (
          <li key={note.id}>
            <p>{note.title}</p>
            <p>
              <strong className="mr-3">Created at:</strong>
              {note && format(new Date(note.created_at), 'yyyy-MM-dd HH:mm:ss')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NotesList
