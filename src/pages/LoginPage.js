import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulando a lógica de verificação de login
    if (email === 'usuario@example.com' && password === '123456') {
      // Se o login for bem-sucedido, redirecione-o para a página desejada
      navigate('/dashboard');
    } else {
      // Caso contrário, exiba uma mensagem de erro
      setError('Email ou senha incorretos. Por favor, tente novamente.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {/* Formulário de login */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/* Mensagem de erro */}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {/* Botão para fazer o login */}
      <button onClick={handleLogin}>Login</button>
      {/* Link para a página de cadastro */}
      <p>Não tem uma conta? <Link to="/signup">Crie uma aqui</Link>.</p>
    </div>
  );
};

export default LoginPage;
