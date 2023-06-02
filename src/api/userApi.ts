import type { IUser } from '@/types/user'
import { usersMock } from '@/api/mocks/usersMock'

export default {
  getUsers(): Promise<IUser[]> {
    return Promise.resolve(usersMock)
  },
}
