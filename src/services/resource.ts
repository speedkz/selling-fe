import { useQuery, type UseQueryReturnType } from '@tanstack/vue-query'
import $axios from './axiosInstance'

type Resource = 'categories' | 'products' | 'users'

const resourceService = <T>(resource: Resource) => ({
  getList: (): UseQueryReturnType<T[], unknown> => {
    const getList = async (): Promise<T[]> => (await $axios.get<T[]>(resource)).data
    const result = useQuery({
      queryKey: [`getList${resource}`],
      queryFn: getList
    })
    return result
  },
  getOne: (id: string): UseQueryReturnType<T, unknown> => {
    const getOne = async (): Promise<T> => (await $axios.get<T>(`${resource}/${id}`)).data
    const result = useQuery({
      queryKey: [`getOne${resource}`],
      queryFn: getOne
    })
    return result
  },
  saveOne: (id: string, payload: T) => {
    return $axios.put<T[]>(`${resource}/${id}`, payload)
  },
  createOne: (payload: T) => {
    return $axios.post<T[]>(`${resource}`, payload)
  }
})

export default resourceService
