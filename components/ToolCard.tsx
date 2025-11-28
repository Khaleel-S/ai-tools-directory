'use client'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { Tool } from '@/lib/types'

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link href={`/tools/${tool.slug}`} className="group block">
      <div className="card hover:shadow-xl transition-all duration-300 border rounded-xl p-6 bg-card hover:-translate-y-1">
        <div className="flex items-start space-x-4 mb-4">
          <img 
            src={tool.logo} 
            alt={tool.name}
            className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
              {tool.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {tool.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span>{tool.rating}</span>
            </div>
            <span>•</span>
            <span>{tool.category}</span>
          </div>
          <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
            {tool.pricing}
          </span>
        </div>
      </div>
    </Link>
  )
}
