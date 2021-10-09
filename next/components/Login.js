// components/Login.js

const Login = () => {

  const loginUser = async event => {
    event.preventDefault()
    console.log('LOGIN')
  }

  return (
    <form onSubmit={loginUser}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" autoComplete="email" required />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" required />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login