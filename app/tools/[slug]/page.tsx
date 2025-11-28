import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getToolBySlug } from '@/lib/data'
import Image from 'next/image'
import { Star, Users, Zap, Download, Eye, Calendar, Award } from 'lucide-react'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tool = getToolBySlug(slug)

  if (!tool) {
    return {
      title: 'Tool Not Found | AI Tools Directory',
      description: 'The requested AI tool could not be found.'
    }
  }

  return {
    title: `${tool.name} - ${tool.category} AI Tool | AI Tools Directory`,
    description: `${tool.description}. ${tool.pricing} pricing. Rated ${tool.rating}/5 by users.`,
    keywords: `${tool.name}, ${tool.category}, AI tools, ${tool.pricing.toLowerCase()}, ${tool.tags?.join(', ') || ''}`,
    
    openGraph: {
      title: `${tool.name} - AI Tools Directory`,
      description: tool.description,
      url: `https://your-vercel-domain.vercel.app/tools/${slug}`,  // Replace with your domain
      siteName: 'AI Tools Directory',
      images: [
        {
          url: tool.logo,
          width: 1200,
          height: 630,
          alt: `${tool.name} - ${tool.category} AI Tool`
        }
      ],
      locale: 'en_US',
      type: 'website'
    },
    
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} - ${tool.category}`,
      description: tool.description,
      images: [tool.logo],
      creator: '@yourhandle'  // Optional
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    
    alternates: {
      canonical: `https://your-vercel-domain.vercel.app/tools/${slug}`  // Replace with your domain
    }
  }
}

// ← ADD THIS: Static generation for all tool pages
export async function generateStaticParams() {
  const tools = await import('@/lib/data').then(mod => mod.getAllTools())
  return tools.map((tool) => ({
    slug: tool.slug
  }))
}







export default async function ToolDetailPage({ params }: Props) {
  const { slug } = await params
  const tool = getToolBySlug(slug)

  if (!tool) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="h-[320px] bg-[radial-gradient(circle_at_top,_#1d4ed8_0,_transparent_60%)] opacity-60" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgx4dGVkOCwgMC40KSIvPgo8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIwLjUiIGZpbGw9InJnYmEoMjksIDc4LCAyMTYsIDAuMykiLz4KPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMC44IiBmaWxsPSJyZ2JhKDEyLCAxMDksIDI1MiwgMC4yKSIvPgo8L3N2Zz4K')] opacity-20 animate-pulse" />
      </div>

      <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        {/* Enhanced back navigation */}
        <div className="mb-8 flex items-center justify-between gap-4 group">
          <Link
            href="/tools"
            className="inline-flex items-center gap-3 text-sm font-medium text-slate-300 hover:text-slate-100 transition-all duration-300 group-hover:translate-x-[-2px] hover:shadow-lg hover:shadow-blue-500/20 bg-slate-900/50 px-3 py-1.5 rounded-xl border border-slate-800/50 backdrop-blur-sm"
          >
            <span className="text-lg group-hover:-translate-x-0.5 transition-transform">←</span>
            All tools
          </Link>
          
        </div>

        {/* Compact hero card */}
        <div className="relative mb-6">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 rounded-2xl blur-lg animate-pulse" />
          <div className="relative rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-slate-900/90 px-6 py-6 md:px-8 md:py-8 shadow-xl shadow-slate-900/50 backdrop-blur-xl">
            
            {/* Compact top row */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              
              {/* Compact logo */}
              <div className="flex-shrink-0 relative group">
                <div className="relative h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-2xl border-2 border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/60 shadow-xl shadow-slate-900/60 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-blue-500/30 group-hover:-rotate-3">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    fill
                    sizes="96px"
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping [animation-duration:3s]" />
                </div>
              </div>

              {/* Compact text content */}
              <div className="flex-1 space-y-4">
                
                {/* Compact badge */}
                <div className="inline-flex items-center gap-2 rounded-xl border border-slate-700/50 bg-gradient-to-r from-slate-900/80 to-slate-800/60 px-4 py-1.5 text-xs backdrop-blur-sm shadow-lg shadow-slate-900/30 hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02]">
                  <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-xs">
                    {tool.category}
                  </span>
                  <div className="w-px h-3 bg-gradient-to-b from-slate-600 to-slate-800" />
                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 font-medium text-xs">
                    {tool.pricing}
                  </span>
                </div>

                {/* Compact title */}
                <h1 className="text-2xl md:text-3xl  font-black tracking-tight bg-gradient-to-r from-slate-100 via-blue-100 to-slate-200 bg-clip-text text-transparent drop-shadow-xl">
                  {tool.name}
                </h1>

                {/* Compact description */}
                <p className="text-sm md:text-base text-slate-200 leading-relaxed max-w-lg">
                  {tool.description}
                </p>

                {/* Compact stats */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <div className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400/15 to-orange-500/10 px-3 py-1.5 text-xs font-semibold text-amber-300 border border-amber-400/30 shadow-lg shadow-amber-500/20 backdrop-blur-sm hover:shadow-amber-400/40 transition-all duration-300 hover:scale-105">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {tool.rating.toFixed(1)}
                  </div>

                  {tool.tags && tool.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {tool.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={tag}
                          className="group relative rounded-full border border-slate-700/50 bg-slate-900/40 px-2.5 py-1 text-[10px] font-medium text-slate-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-slate-600/60 transition-all duration-300 hover:scale-105"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          #{tag}
                          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 scale-0 group-hover:scale-100 origin-center transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Compact CTA */}
                <div className="pt-2">
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 px-6 py-2.5 text-sm font-bold text-white shadow-xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] backdrop-blur-md border border-blue-500/30 overflow-hidden"
                  >
                    <span>Visit website</span>
                    <Zap className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -skew-x-12 absolute left-[-100%] group-hover:left-0 transition-all duration-700" />
                  </a>
                </div>
              </div>
            </div>

            {/* Compact stats grid */}
            <div className="grid gap-3 md:grid-cols-3 mt-8 pt-6 border-t border-slate-800/50">
              <div className="group rounded-xl border border-slate-800/50 bg-gradient-to-b from-slate-900/80 to-slate-800/60 p-4 backdrop-blur-md shadow-xl shadow-slate-900/40 hover:shadow-blue-500/30 hover:-translate-y-1.5 transition-all duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                    <Award className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium tracking-wide">Quality</span>
                </div>
                <div className="text-xl font-black text-slate-100">{tool.rating.toFixed(1)}</div>
              </div>

              <div className="group rounded-xl border border-slate-800/50 bg-gradient-to-b from-emerald-500/10 to-emerald-600/5 p-4 backdrop-blur-md shadow-xl shadow-emerald-500/20 hover:shadow-emerald-400/40 hover:-translate-y-1.5 transition-all duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 bg-emerald-500/20 rounded-xl group-hover:bg-emerald-500/30 transition-colors">
                    <Users className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium tracking-wide">Users</span>
                </div>
                <div className="text-xl font-black bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">5M+</div>
              </div>

              <div className="group rounded-xl border border-slate-800/50 bg-gradient-to-b from-amber-500/10 to-amber-600/5 p-4 backdrop-blur-md shadow-xl shadow-amber-500/20 hover:shadow-amber-400/40 hover:-translate-y-1.5 transition-all duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 bg-amber-500/20 rounded-xl group-hover:bg-amber-500/30 transition-colors">
                    <Star className="w-4 h-4 text-amber-400" />
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium tracking-wide">Reviews</span>
                </div>
                <div className="text-xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">12.3K</div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact features */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-black tracking-tight text-slate-100 mb-6 bg-gradient-to-r from-slate-200 to-slate-100 bg-clip-text text-transparent">
            Why {tool.name}?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Star, title: 'Proven Excellence', desc: 'Trusted by industry leaders.' },
              { icon: Zap, title: 'Lightning Fast', desc: 'Optimized millisecond performance.' },
              { icon: Users, title: 'Enterprise Ready', desc: 'Scales from startups to Fortune 500.' },
              { icon: Calendar, title: 'Regular Updates', desc: 'Monthly feature releases.' }
            ].map(({ icon: Icon, title, desc }, index) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-800/50 bg-slate-900/60 p-5 backdrop-blur-md hover:bg-slate-900/80 hover:border-slate-700/60 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">{title}</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
