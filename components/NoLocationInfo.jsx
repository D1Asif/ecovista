import React from 'react'
import Card from './Card'
import Link from 'next/link'

export default function NoLocationInfo({location}) {
  return (
    <Card>
        <div className='ml-3'>
            <p className='text-xl mt-5'>No info found for {location}</p>
            <Link href="/">
                <button className='px-2 py-1 rounded-md bg-blue-700 text-lg mt-2'>Go to home</button>
            </Link>
        </div>
    </Card>
  )
}
