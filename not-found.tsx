import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Zap, Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated Icon */}
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-secondary/10 rounded-full flex items-center justify-center mx-auto animate-pulse">
              <Zap className="w-16 h-16 text-secondary" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-destructive rounded-full flex items-center justify-center">
              <span className="text-destructive-foreground text-xs font-bold">!</span>
            </div>
          </div>

          {/* Error Code */}
          <h1 className="text-8xl md:text-9xl font-bold text-foreground/10 mb-4">404</h1>

          {/* Message */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 -mt-12">Power Disconnected!</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Looks like this circuit is open. The page you&apos;re looking for doesn&apos;t exist or has been moved to a
            different location.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2" asChild>
              <Link href="/">
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
              <Link href="/#contact">
                <Search className="w-5 h-5" />
                Contact Support
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm mb-4">Here are some helpful links:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#about"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                <ArrowLeft className="w-3 h-3" />
                About Us
              </Link>
              <Link
                href="/projects"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                <ArrowLeft className="w-3 h-3" />
                Projects
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                <ArrowLeft className="w-3 h-3" />
                Services
              </Link>
              <Link
                href="/milestones"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                <ArrowLeft className="w-3 h-3" />
                Milestones
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
