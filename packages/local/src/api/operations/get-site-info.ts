import { OperationContext } from '@vercel/commerce/api/operations'
import { Category } from '@vercel/commerce/types/site'
import { LocalConfig } from '../index'

export type GetSiteInfoResult<
  T extends { categories: any[]; brands: any[] } = {
    categories: Category[]
    brands: any[]
  }
> = T

export default function getSiteInfoOperation({}: OperationContext<any>) {
  function getSiteInfo({
    query,
    variables,
    config: cfg,
  }: {
    query?: string
    variables?: any
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<GetSiteInfoResult> {
    return Promise.resolve({
      categories: [
        {
          id: 'nuovi-arrii',
          name: 'Nuovi-Arrivi',
          slug: 'nuovi-arrivi',
          path: '/nuovi arrivi',
        },
        {
          id: 'featured',
          name: 'Featured',
          slug: 'featured',
          path: '/featured',
        },
      ],
      brands: [],
    })
  }

  return getSiteInfo
}
