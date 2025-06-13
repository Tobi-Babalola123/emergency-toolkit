import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <header className="bg-white border-b border-gray-200">
        <div className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Skeleton className="h-8 w-40" />
              <div className="flex items-center space-x-6">
                <Skeleton className="h-8 w-24" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="hidden md:flex items-center">
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </header>

      {/* Breadcrumb Skeleton */}
      <div className="bg-gray-50 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-4 w-60" />
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <section className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-10 w-3/4 bg-gray-700 mb-4" />
          <Skeleton className="h-6 w-1/2 bg-gray-700" />
        </div>
      </section>

      {/* Main Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="md:col-span-2">
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-6" />

            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-8" />

            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-6" />

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-2" />
              </div>
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>

            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-6" />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Skeleton className="h-64 rounded-lg" />
              <Skeleton className="h-64 rounded-lg" />
              <Skeleton className="h-64 rounded-lg" />
              <Skeleton className="h-64 rounded-lg" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <Skeleton className="h-64 rounded-lg mb-6" />
            <Skeleton className="h-48 rounded-lg mb-6" />
            <Skeleton className="h-48 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <Skeleton className="h-4 w-3/4 bg-gray-700" />
          </div>
          <Skeleton className="h-px w-full bg-gray-700 mb-6" />
          <Skeleton className="h-4 w-1/2 bg-gray-700 mb-2" />
          <Skeleton className="h-4 w-1/4 bg-gray-700" />
        </div>
      </footer>
    </div>
  )
}
