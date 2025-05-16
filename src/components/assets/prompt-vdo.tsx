'use client'

export function PromptVdo() {
  const handleSubmit = () => {}
  return (
    <div>
      <div className="max-w-md  ">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              // value={formData.title}
              // onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Product name"
              required
            />
          </div>
          {/* Title Input */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Price *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              // value={formData.title}
              // onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="price"
              required
            />
          </div>
          {/* Description Input */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              // value={formData.description}
              // onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Product details..."
            />
          </div>
          <h1 className="text-xl font-bold mb-4">Prompt Generate</h1>
          <textarea
            id="prompt"
            name="prompt"
            // value={formData.description}
            // onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="prompt"
          />
          <div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Generate</button>
          </div>
        </form>
      </div>
    </div>
  )
}
