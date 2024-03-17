export interface TechCardItem {
  id: number
  image: string
  label: string
  type: TechCardCategory
}

export type TechCardCategory = 'Framework' | 'Library' | 'CSS' | 'Tools' | 'Version Control' | 'Language' | 'Database'
