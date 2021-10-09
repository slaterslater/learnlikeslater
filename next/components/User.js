// components/User.js

import { GET_CURRENT_USER } from "../lib/apollo-client"

const User = () => {
  return 'USER'
}

export default User

export const useUser = () => {
  const {data, loading, error } = useQuery(GET_CURRENT_USER)

  // return {
  //   user: data?.authenticatedItem,
  //   isLoading: !error && !data,
  //   isError: error
  // }
  return { user: data?.authenticatedItem }
}