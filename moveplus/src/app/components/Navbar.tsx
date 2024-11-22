"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#f5f9f5", 
        boxShadow: "none",
        paddingY: 1, 
        borderBottom: "2px solid #d1d5db", 
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingX: 2, 
        }}
      >
        {/* Logotipo ajustado e alinhado */}
        <Box sx={{ flexGrow: 0, textAlign: "left" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#3c6e47", 
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginLeft: "10px", 
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
            gap: 3, 
            alignItems: "center", 
          }}
        >
          {[
            { label: "Início", href: "/" },
            { label: "Soluções", href: "/solucoes" },
            { label: "Blog", href: "/blog" },
            { label: "Quem Somos", href: "/QuemSomos" }, 
            { label: "Integrantes", href: "/integrantes" },
            { label: "Contato", href: "/contato" },
          ].map((link, index) => (
            <Link href={link.href} passHref key={index}>
              <Typography
                variant="button"
                sx={{
                  color: "#3c6e47", 
                  textDecoration: "none",
                  fontWeight: "bold",
                  "&:hover": { color: "#256640" }, 
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
