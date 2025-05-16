'use client'

import { SideBar } from '@/components/dashboard/side-bar'
import Link from 'next/link'
// Use `<Link />` from `next/link`

import { useState, useRef } from 'react'

export default function Page() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoSrc = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleProgress = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration
      const currentTime = videoRef.current.currentTime
      setProgress((currentTime / duration) * 100)
    }
  }
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = (Number(e.target.value) / 100) * (videoRef.current?.duration || 0)
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime
    }
  }
  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
    }
  }
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <SideBar />
      </aside>
      {/* Main Content */}
      <main className="flex bg-gray-100 overflow-auto bg-gray-800">
        <div className="flex">
          {/* vdeo Content */}
          <div className="flex-1 p-4">
            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full cursor-pointer"
              onClick={togglePlay}
              onTimeUpdate={handleProgress}
              onEnded={() => setIsPlaying(false)}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="w-full h-1.5 mb-3 bg-gray-600 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex items-center p-2">
              <button onClick={togglePlay} className="text-white">
                {isPlaying ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              <button onClick={toggleMute} className="text-white mr-2">
                {isMuted || volume === 0 ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1.5 bg-gray-600 rounded-lg appearance-none cursor-pointer"
              />
              <button onClick={toggleFullscreen} className="text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="p-3">Activities</div>
            <div className="">
              <div className="max-w-4xl mx-auto  shadow-sm rounded-lg overflow-hidden">
                <div className="grid grid-cols-[50%_20%_30%] bg-gray-700 p-3 font-semibold text-gray-300">
                  <div>From</div>
                  <div>Price</div>
                  <div>Datetime</div>
                </div>

                <div className="divide-y divide-gray-200">
                  <div className="grid grid-cols-[50%_20%_30%] p-3 hover:bg-gray-50">
                    <div className="text-blue-600">CMAC1</div>
                    <div>0.005 SOL</div>
                    <div className="text-gray-500">2025-05-16 10:30</div>
                  </div>
                  <div className="grid grid-cols-[50%_20%_30%] p-3 hover:bg-gray-50">
                    <div className="text-blue-600">Paradox</div>
                    <div>0.003 SOL</div>
                    <div className="text-gray-500">2024-11-15 10:30</div>
                  </div>
                  <div className="grid grid-cols-[50%_20%_30%] p-3 hover:bg-gray-50">
                    <div className="text-blue-600">Botto-2024</div>
                    <div>0.001 SOL</div>
                    <div className="text-gray-500">2024-07-30 10:30</div>
                  </div>
                  <div className="grid grid-cols-[50%_20%_30%] p-3 hover:bg-gray-50">
                    <div className="text-blue-600">Bearish</div>
                    <div>0.0005 SOL</div>
                    <div className="text-gray-500">2024-05-01 10:30</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="w-[400px] pt-4">
            <div className="bg-gray-500 p-3 rounded h-60">
              <div className="pb-2">
                <div className="font-bold text-5xl">Title</div>
                <div className="font-bold text-3xl">description</div>
                <div className="font-bold text-3xl">0.005 SOL</div>
                <div className=" text-1xl">current owner</div>
              </div>

              <div>
                <button className="w-full bg-black text-white py-3 px-4 rounded hover:bg-gray-600 transition">
                  BUY
                </button>
              </div>
            </div>
            <div className="pt-4">
              <div className="border-t border-gray-600 my-4"></div>
              <div className=""></div>
              <div className="max-w-6xl mx-auto ">
                <Link href="/explore/4">
                  <div className="flex flex-col md:flex-row gap-8 items-start pb-3">
                    {/* Image Column */}
                    <div className="w-full md:w-1/2 relative aspect-video">
                      <img src="https://picsum.photos/150/100?random=1" alt="Sample 1" className="rounded"></img>
                    </div>
                    {/* Text Column */}
                    <div className="w-full ">
                      <div className="text-1">title</div>
                      <div>0.40 sol</div>
                    </div>
                  </div>
                </Link>
                <Link href="/explore/1">
                  <div className="flex flex-col md:flex-row gap-8 items-start pb-3">
                    {/* Image Column */}
                    <div className="w-full md:w-1/2 relative aspect-video">
                      <img src="https://picsum.photos/150/100?random=2" alt="Sample 1" className="rounded"></img>
                    </div>
                    {/* Text Column */}
                    <div className="w-full ">
                      <div>title</div>
                      <div>0.5 sol</div>
                    </div>
                  </div>
                </Link>
                <Link href="/explore/1">
                  <div className="flex flex-col md:flex-row gap-8 items-start pb-3">
                    {/* Image Column */}
                    <div className="w-full md:w-1/2 relative aspect-video">
                      <img src="https://picsum.photos/150/100?random=3" alt="Sample 1" className="rounded"></img>
                    </div>
                    {/* Text Column */}
                    <div className="w-full ">
                      <div>title</div>
                      <div>0.5 sol</div>
                    </div>
                  </div>
                </Link>
                <Link href="/explore/1">
                  <div className="flex flex-col md:flex-row gap-8 items-start pb-3">
                    {/* Image Column */}
                    <div className="w-full md:w-1/2 relative aspect-video">
                      <img src="https://picsum.photos/150/100?random=4" alt="Sample 1" className="rounded"></img>
                    </div>
                    {/* Text Column */}
                    <div className="w-full ">
                      <div>title</div>
                      <div>0.5 sol</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
