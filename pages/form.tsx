// Less Code
// Better Validation
// Better Errors (set, display, clear)
// Have Control over inputs
// Don't deal with events
// Easier Inputs

import { useForm } from 'react-hook-form'

export default function Form() {
  const { register } = useForm()
  return (
    <form>
      <input
        {...register('username')}
        type="text"
        placeholder="User Name"
        required
      />
      <input {...register('email')} type="email" placeholder="Email" required />
      <input
        {...register('password')}
        type="password"
        placeholder="Passward"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  )
}
