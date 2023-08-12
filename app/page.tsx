import React, { Suspense } from 'react'

import NotesList from './components/notes-list'
import Spinner from './components/spinner'
import TimerCounter from './components/timer-counter'

const Page = () => {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World🚀</p>
        <Suspense fallback={<Spinner color="border-green-500" />}>
          <NotesList />
        </Suspense>
        <TimerCounter />
      </div>
    </main>
  )
}

export default Page
