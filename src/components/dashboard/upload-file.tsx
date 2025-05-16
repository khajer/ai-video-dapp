'use client'
const items = [
  { name: 'Explore', icon: 'explore', path: '/explore' },
  { name: 'Assets', icon: 'assets', path: '/assets' },
]
export function UploadFile() {
  return (
    <div>
      <div className="max-w-md  ">
        <h1 className="text-xl font-bold mb-4">Upload Video to IPFS</h1>
        <p className="text-red-500 mb-4">Please connect your Phantom wallet</p>
        <input type="file" accept="video/mp4" />
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Upload</button>

        <div className="mt-6">
          <p className="text-green-600">Upload successful!</p>

          <video src="https://ipfs.io/ipfs/your_ipfs_hash_here" controls className="mt-2 w-full" />

          <p className="text-sm break-all mt-2">IPFS URL: https://ipfs.io/ipfs/your_ipfs_hash_here</p>
        </div>
      </div>
    </div>
  )
}
