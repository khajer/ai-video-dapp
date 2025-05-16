'use client'
import Link from 'next/link'
const items = [
  { name: 'Explore', icon: 'explore', path: '/explore' },
  { name: 'Assets', icon: 'assets', path: '/assets' },
]
export function SideBar() {
  return (
    <div>
      <nav className="flex flex-col gap-2 list-none">
        {items.map(({ name, path }) => (
          <li key={name}>
            <Link className={`hover:text-neutral-500 dark:hover:text-white `} href={path}>
              {name}
            </Link>
          </li>
        ))}
      </nav>
    </div>
  )
}
