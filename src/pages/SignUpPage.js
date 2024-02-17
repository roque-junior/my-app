import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    // Verificar se a senha e a confirmação de senha coincidem
    if (password !== confirmPassword) {
      setError('As senhas não coincidem. Por favor, tente novamente.');
      return;
    }

    try {
      // Enviar os dados para o backend
      const response = await fetch('URL_DO_SEU_BACKEND/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Se o cadastro for bem-sucedido, redirecione-o para a página de login
        navigate('/');
      } else {
        const data = await response.json();
        setError(data.message); // Exibir mensagem de erro retornada pelo backend
      }
    } catch (error) {
      console.error('Erro ao processar cadastro:', error);
      setError('Ocorreu um erro ao processar o cadastro. Por favor, tente novamente.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {/* Formulário de cadastro */}
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
      <div>
        <label>Confirmação de Senha:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {/* Mensagem de erro */}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {/* Botão para criar conta */}
      <button onClick={handleSignUp}>Sign Up</button>
      {/* Link para a página de login */}
      <p>Já tem uma conta? <Link to="/">Faça login aqui</Link>.</p>
    </div>
  );
};

export default SignUpPage;
