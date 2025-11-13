export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="text-center space-y-6">
        <div className="inline-block">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-600 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
