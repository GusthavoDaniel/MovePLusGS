"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#f5f9f5", // Cor clara de fundo
        boxShadow: "none",
        paddingY: 1, // Ajusta a altura do cabeçalho
        borderBottom: "2px solid #d1d5db", // Linha sutil no rodapé do cabeçalho
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingX: 2, // Espaçamento horizontal
        }}
      >
        {/* Logotipo ajustado e alinhado */}
        <Box sx={{ flexGrow: 0, textAlign: "left" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#3c6e47", // Cor verde escuro
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginLeft: "10px", // Ajuste da posição horizontal
            }}
          >
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              Move Plus+
            </Link>
          </Typography>
        </Box>

        {/* Links de Navegação */}
        <Box
          sx={{
            display: "flex",
            gap: 3, // Espaçamento entre links
            alignItems: "center", // Alinha os links verticalmente
          }}
        >
          {[
            { label: "Início", href: "/" },
            { label: "Soluções", href: "/solucoes" },
            { label: "Blog", href: "/blog" },
            { label: "Quem Somos", href: "/QuemSomos" }, // Novo link adicionado
            { label: "Integrantes", href: "/integrantes" },
            { label: "Contato", href: "/contato" },
          ].map((link, index) => (
            <Link href={link.href} passHref key={index}>
              <Typography
                variant="button"
                sx={{
                  color: "#3c6e47", // Verde
                  textDecoration: "none",
                  fontWeight: "bold",
                  "&:hover": { color: "#256640" }, // Verde mais escuro no hover
                }}
              >
                {link.label}
              </Typography>
            </Link>
          ))}
        </Box>

        {/* Botão Destacado */}
        <Box sx={{ marginLeft: 2 }}>
          <Link href="/login" passHref>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3c6e47",
                color: "#ffffff",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": { backgroundColor: "#256640" },
              }}
            >
              Entrar
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
