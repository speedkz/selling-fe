import type { ICategory } from './category'

export interface IProduct {
  id: string
  name: string
  description: string
  material: string
  price: string
  category: ICategory
}
