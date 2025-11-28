export interface Tool {

  id: string
  slug: string
  name: string
  category: string
  description: string
  pricing: string
  logo: string
  website: string
  rating: number
  tags: string[]
  popularity?: number
}
