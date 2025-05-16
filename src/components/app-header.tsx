'use client'
// import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { WalletButton } from '@/components/solana/solana-provider'
import { CircleUser } from 'lucide-react'
import Image from 'next/image'

export function AppHeader() {
  // const pathname = usePathname()
  const [showMenu, setShowMenu] = useState(false)

  // function isActive(path: string) {
  //   return path === '/' ? pathname === '/' : pathname.startsWith(path)
  // }

  return (
    <header className="relative z-50 px-4 py-2 bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-400">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-baseline gap-4">
          <Link className="text-xl " href="/">
            <div className="flex gap-2">
              <Image
                src="/assets/icon-32x32.png" // Path to your image file (relative to the public directory or an absolute URL)
                alt="" // Alt text for accessibility
                width={32} // Width of the image (required for local images)
                height={32} // Height of the image (required for local images)
              />
              <span className="font-bold">ShotVDO</span>
            </div>
          </Link>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        <div className="hidden md:flex items-center gap-4">
          <WalletButton size="sm" />
          <CircleUser />
        </div>
        {showMenu && (
          <div className="md:hidden fixed inset-x-0 top-[52px] bottom-0 bg-neutral-100/95 dark:bg-neutral-900/95 backdrop-blur-sm">
            <div className="flex flex-col p-4 gap-4 border-t dark:border-neutral-800">
              <div className="flex flex-col gap-4">
                <WalletButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
