import { useState } from 'react';
import api from '../lib/axios';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await api.get("/sanctum/csrf-cookie");

    await api.post("/login", {
      email,
      password,
    });

    const response = await api.get("/api/user");
    console.log(response.data);
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleLogin();
    }}
    >
      <label htmlFor="email">メールアドレス</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">パスワード</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">ログイン</button>

    </form>
  )
}

export default LoginPage;
