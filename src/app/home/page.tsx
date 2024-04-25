import Link from 'next/link'
import React from 'react'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Welcome to Shoaebk portfolio</h1>
        <Link href="/home/dashboard">Dashboard</Link>      
  </main>
  )
}
