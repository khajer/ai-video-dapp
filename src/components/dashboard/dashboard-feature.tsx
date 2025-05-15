'use client'
import Link from 'next/link'
const items = [
  { id: 1, name: 'name 1', image: '1.jpg' },
  { id: 3, name: 'name 2', image: '2.jpg' },
  { id: 3, name: 'name 3', image: '3.png' },
  { id: 4, name: 'name 4', image: '4.png' },
]
export function DashboardFeature() {
  return (
    <div>
      <nav className="flex flex-col gap-2">
        {items.map(({ id, name, image }) => (
          <li key={id}>
            <Link className={`hover:text-neutral-500 dark:hover:text-white `} href={name}>
              {name}
              {image}
            </Link>
          </li>
        ))}
      </nav>
    </div>
  )
}
