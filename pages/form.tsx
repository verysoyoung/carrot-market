import { FieldErrors, useForm } from 'react-hook-form'

interface LoginProps {
  username: string
  email: string
  password: string
}
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>()
  const onValid = (data: LoginProps) => {
    console.log(data, 'data')
  }
  const onInValid = (errors: FieldErrors) => {
    console.log(errors, 'errors')
  }
  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <input
        {...register('username', {
          required: 'Username id required',
          minLength: {
            message: 'The Username should be longer than 5 chars.',
            value: 5,
          },
        })}
        type="text"
        placeholder="User Name"
      />
      {errors.username?.message}
      <input
        {...register('email', {
          required: 'Email id required',
          validate: {
            notGamil: mail =>
              !mail.includes('@gmail.com') || 'Gmail is not allowed',
          },
        })}
        type="email"
        placeholder="Email"
        className={`${Boolean(errors.email?.message) ? 'border-red-500' : ''}`}
      />
      {errors.email?.message}
      <input
        {...register('password', { required: 'Password id required' })}
        type="password"
        placeholder="Passward"
      />
      {errors.password?.message}
      <input type="submit" value="Create Account" />
    </form>
  )
}
