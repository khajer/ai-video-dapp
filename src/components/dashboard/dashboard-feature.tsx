'use client'

import { SideBar } from './side-bar'
import { UploadFile } from './upload-file'

export function DashboardFeature() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <SideBar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-4 overflow-auto bg-gray-800">
        <div>
          <UploadFile />
        </div>
      </main>
    </div>
  )
}
