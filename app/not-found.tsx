import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a192f] px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-emerald-400 mb-4 font-calibre">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl text-lightestslate mb-4 font-calibre font-semibold">
          Page Not Found
        </h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto text-lg">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="px-6 py-3 border border-emerald-400/90 text-emerald-300 hover:bg-emerald-100/10 hover:border-emerald-500 transition-all duration-300 rounded-md">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
