"use client";

import { Container, Box, Typography, TextField, Button, Link } from "@mui/material";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Login bem-sucedido!");
        console.log("Token recebido:", data.token);
        
      } else {
        alert("Erro no login. Verifique suas credenciais.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao conectar ao servidor.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 8 }}>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: 4,
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Título da página */}
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold", marginBottom: 3, color: "#3c6e47" }}>
          Login
        </Typography>

        {/* Campo de Email */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Campo de Senha */}
        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Botão de Login */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#3c6e47",
            color: "#ffffff",
            marginTop: 3,
            "&:hover": {
              backgroundColor: "#256640",
            },
          }}
          onClick={handleLogin}
        >
          Entrar
        </Button>

        {/* Link para Registro */}
        <Typography align="center" sx={{ marginTop: 3, color: "#4c4c4c" }}>
          Não tem uma conta?{" "}
          <Link href="/register" sx={{ color: "#3c6e47", fontWeight: "bold", textDecoration: "none" }}>
            Cadastre-se aqui
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
