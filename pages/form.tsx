import { useState } from 'react'

export default function Form() {
  const [userName, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event
    setUsername(value)
  }
  const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event
    setEmail(value)
  }
  const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event
    setPassword(value)
  }
  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        value={userName}
        onChange={onUsernameChange}
        type="text"
        placeholder="User Name"
        required
      />
      <input
        value={email}
        onChange={onEmailChange}
        type="email"
        placeholder="Email"
        required
      />
      <input
        value={password}
        onChange={onPasswordChange}
        type="password"
        placeholder="Passward"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  )
}
