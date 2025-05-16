'use client'

import { SideBar } from '@/components/dashboard/side-bar'
import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { id: 0, label: 'Assets' },
    { id: 1, label: 'History' },
  ]

  const tabContents = [
    <div key={0}>
      <div className="pt-4">
        <div className=" mx-auto  shadow-sm  overflow-hidden">
          <div className="grid grid-cols-[20%_30%_20%_30%]  p-3 font-semibold text-gray-300">
            <div></div>
            <div>Title</div>
            <div>Price</div>
            <div>Datetime</div>
          </div>
          <div className="divide-y divide-gray-600">
            <Link href="/explore/4">
              <div className="grid grid-cols-[20%_30%_20%_30%] p-3 hover:bg-gray-700">
                <div>
                  <img src="https://picsum.photos/100/50?random=4" alt="Sample 1" className="rounded"></img>
                </div>
                <div className="text-blue-600">Bearish</div>
                <div>0.9320 SOL</div>
                <div className="text-gray-500">2024-05-01 10:30</div>
              </div>
            </Link>
            <Link href="/explore/4">
              <div className="grid grid-cols-[20%_30%_20%_30%] p-3 hover:bg-gray-700">
                <div>
                  <img src="https://picsum.photos/100/50?random=0" alt="Sample 1" className="rounded"></img>
                </div>
                <div className="text-blue-600">Paradox</div>
                <div>0.003 SOL</div>
                <div className="text-gray-500">2024-11-15 10:30</div>
              </div>
            </Link>
            <Link href="/explore/4">
              <div className="grid grid-cols-[20%_30%_20%_30%] p-3 hover:bg-gray-700">
                <div>
                  <img src="https://picsum.photos/100/50?random=1" alt="Sample 1" className="rounded"></img>
                </div>
                <div className="text-blue-600">CMAC1</div>
                <div>0.005 SOL</div>
                <div className="text-gray-500">2025-05-16 10:30</div>
              </div>
            </Link>
            <Link href="/explore/4">
              <div className="grid grid-cols-[20%_30%_20%_30%] p-3 hover:bg-gray-700">
                <div>
                  <img src="https://picsum.photos/100/50?random=2" alt="Sample 1" className="rounded"></img>
                </div>
                <div className="text-blue-600">Botto-2024</div>
                <div>0.001 SOL</div>
                <div className="text-gray-500">2024-07-30 10:30</div>
              </div>
            </Link>
            <Link href="/explore/4">
              <div className="grid grid-cols-[20%_30%_20%_30%] p-3 hover:bg-gray-700">
                <div>
                  <img src="https://picsum.photos/100/50" alt="Sample 1" className="rounded"></img>
                </div>
                <div className="text-blue-600">Kenchiro</div>
                <div>0.23205 SOL</div>
                <div className="text-gray-500">2024-05-01 10:30</div>
              </div>
            </Link>
            <Link href="/explore/4">
              <div className="grid grid-cols-[20%_30%_20%_30%] p-3 hover:bg-gray-700">
                <div>
                  <img src="https://picsum.photos/100/50" alt="Sample 1" className="rounded"></img>
                </div>
                <div className="text-blue-600">SuperBall</div>
                <div>0.149 SOL</div>
                <div className="text-gray-500">2024-05-01 10:30</div>
              </div>
            </Link>
            <Link href="/explore/4">
              <div className="grid grid-cols-[20%_30%_20%_30%] p-3 hover:bg-gray-700">
                <div>
                  <img src="https://picsum.photos/100/50?random=3" alt="Sample 1" className="rounded"></img>
                </div>
                <div className="text-blue-600">Bullish</div>
                <div>0.332 SOL</div>
                <div className="text-gray-500">2024-05-01 10:30</div>
              </div>
            </Link>
            <Link href="/explore/4">
              <div className="grid grid-cols-[20%_30%_20%_30%] p-3 hover:bg-gray-700">
                <div>
                  <img src="https://picsum.photos/100/50?random=6" alt="Sample 1" className="rounded"></img>
                </div>
                <div className="text-blue-600">Bearish</div>
                <div>0.0254 SOL</div>
                <div className="text-gray-500">2024-05-01 10:30</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>,
    <div key={1}>
      <div className="pt-4">
        <div className=" mx-auto  shadow-sm  overflow-hidden">
          <div className="grid grid-cols-[50%_20%_30%]  p-3 font-semibold text-gray-300">
            <div>Title</div>
            <div>Price</div>
            <div>Datetime</div>
          </div>

          <div className="divide-y divide-gray-600">
            <div className="grid grid-cols-[50%_20%_30%] p-3 hover:bg-gray-700">
              <div className="text-blue-600">CMAC1</div>
              <div>0.005 SOL</div>
              <div className="text-gray-500">2025-05-16 10:30</div>
            </div>
            <div className="grid grid-cols-[50%_20%_30%] p-3 hover:bg-gray-700">
              <div className="text-blue-600">Paradox</div>
              <div>0.003 SOL</div>
              <div className="text-gray-500">2024-11-15 10:30</div>
            </div>
            <div className="grid grid-cols-[50%_20%_30%] p-3 hover:bg-gray-700">
              <div className="text-blue-600">Botto-2024</div>
              <div>0.001 SOL</div>
              <div className="text-gray-500">2024-07-30 10:30</div>
            </div>
            <div className="grid grid-cols-[50%_20%_30%] p-3 hover:bg-gray-700">
              <div className="text-blue-600">Bearish</div>
              <div>0.0005 SOL</div>
              <div className="text-gray-500">2024-05-01 10:30</div>
            </div>
          </div>
        </div>
      </div>
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
        <div className="" id="head-title">
          <div className="pb-5 font-bold text-2xl">Estimated Balance</div>
          <div className="pb-5 font-bold text-4xl">4.472053 SOL</div>
        </div>
        <div className=" mx-auto ">
          {/* Tab Headers */}
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
        </div>
      </main>
    </div>
  )
}
