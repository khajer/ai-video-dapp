'use client'

import { SideBar } from '@/components/dashboard/side-bar'
import { UploadFile } from '@/components/dashboard/upload-file'
import { PromptVdo } from '@/components/assets/prompt-vdo'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'

export default function Page() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { id: 0, label: 'Prompt Generate' },
    { id: 1, label: 'Upload Manual File' },
  ]
  const tabContents = [
    <div key={0}>
      <PromptVdo />
    </div>,
    <div key={1}>
      <UploadFile />
    </div>,
  ]
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

        <div>
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 font-bold text-m focus:outline-none ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 '
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Active Tab Content */}
          <div className="">{tabContents[activeTab]}</div>
          {/*
           */}
        </div>
      </main>
    </div>
  )
}
