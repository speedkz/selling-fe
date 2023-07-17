import $axios from './axiosInstance'

const authService = {
  verifyEmail: async (email: string): Promise<boolean> => {
    return await $axios.post('email', { email })
  }
}

export default authService
