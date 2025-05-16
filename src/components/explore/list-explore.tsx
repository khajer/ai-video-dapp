'use client'
import Link from 'next/link'
import mockData from './mockData'

export function ListExplore() {
  return (
    <div className="mx-auto max-w-6xl ">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
        {mockData.map((item) => (
          <Link
            key={item.id}
            href={`/explore/${item.id}`}
            className="relative aspect-square overflow-hidden rounded-md transition-transform hover:scale-105"
          >
            <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center gap-5 bg-black/30 opacity-0 transition-opacity hover:opacity-100">
              <span className="flex items-center font-bold text-white">❤️ {Math.floor(Math.random() * 1000)}</span>
              <span className="flex items-center font-bold text-white">💬 {Math.floor(Math.random() * 100)}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
