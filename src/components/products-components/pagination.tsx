export default function Pagination() {
    return (
      <div className="flex items-center mb-6 justify-between px-6 py-3 border border-gray-300 rounded-md shadow-sm">
        {/* First Button */}
        <button
          className="px-4 py-2 text-gray-400 bg-gray-100 rounded-md cursor-not-allowed text-sm font-medium border border-gray-300"
          disabled
        >
          First
        </button>
  
        {/* Page Numbers */}
        <div className="flex items-center space-x-4">
          <button className="text-blue-500 font-semibold hover:underline text-sm border border-gray-300 px-4 py-2">
            1
          </button>
          <button className="text-blue-500 font-semibold hover:underline text-sm border border-gray-300 px-4 py-2">
            2
          </button>
          <button className="text-blue-500 font-semibold hover:underline text-sm border border-gray-300 px-4 py-2">
            3
          </button>
        </div>
  
        {/* Next Button */}
        <button
          className="px-4 py-2 text-blue-500 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-blue-100 hover:text-blue-600"
        >
          Next
        </button>
      </div>
    );
}
