import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) setMessage(error.message)
    else setMessage('Usuário criado! Verifique seu email.')
  }

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setMessage(error.message)
    else setMessage('Logado com sucesso!')
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h1>Login / Cadastro</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', padding: '8px', margin: '8px 0' }}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', padding: '8px', margin: '8px 0' }}
      />
      <div>
        <button onClick={handleSignUp} style={{ marginRight: '10px' }}>Cadastrar</button>
        <button onClick={handleSignIn}>Login</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  )
}
