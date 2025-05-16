'use client'

import { SideBar } from '@/components/dashboard/side-bar'
import { UploadFile } from '@/components/dashboard/upload-file'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function Page() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <SideBar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-4 overflow-auto bg-gray-800">
        <Link href="/assets" className="font-bold flex">
          <div>
            <ChevronLeft />
          </div>
          <div>Back</div>
        </Link>

        <UploadFile />
      </main>
    </div>
  )
}
