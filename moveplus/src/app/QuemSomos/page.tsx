"use client";

import { Container, Typography, Box, Grid, Button } from "@mui/material";
import Link from "next/link";

export default function QuemSomosPage() {
  return (
    <Container maxWidth="lg" sx={{ paddingY: 6 }}>
      {/* Cabeçalho */}
      <Box sx={{ textAlign: "center", marginBottom: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#3c6e47" }}>
          Quem Somos
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2, color: "#4c4c4c" }}>
          Nossa missão é transformar a mobilidade urbana com soluções inteligentes e sustentáveis.
        </Typography>
      </Box>

      {/* Seção: Nossa Missão */}
      <Box sx={{ marginBottom: 6 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: 2, color: "#3c6e47" }}
        >
          Nossa Missão
        </Typography>
        <Typography variant="body1" sx={{ color: "#4c4c4c", lineHeight: 1.8 }}>
          A Move Plus+ foi criada com o objetivo de trazer inovação, sustentabilidade e eficiência ao
          setor de mobilidade urbana. Sabemos que os desafios de transporte nas cidades modernas
          exigem mais do que soluções tradicionais – é necessário pensar no impacto ambiental,
          na economia de recursos e na qualidade de vida das pessoas.
        </Typography>
      </Box>

      {/* Seção: O que Oferecemos */}
      <Box sx={{ marginBottom: 6 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: 2, color: "#3c6e47" }}
        >
          O que Oferecemos
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundColor: "#e8f5e9",
                padding: 4,
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#3c6e47", marginBottom: 2 }}
              >
                Mobilidade Elétrica
              </Typography>
              <Typography variant="body2" sx={{ color: "#4c4c4c" }}>
                Nossa frota de veículos elétricos compartilhados é uma solução ecológica para o
                transporte diário, reduzindo emissões de carbono e promovendo eficiência energética.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundColor: "#e8f5e9",
                padding: 4,
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#3c6e47", marginBottom: 2 }}
              >
                Infraestrutura de Recarga
              </Typography>
              <Typography variant="body2" sx={{ color: "#4c4c4c" }}>
                Criamos uma rede de estações de recarga, alimentadas por fontes renováveis,
                estrategicamente posicionadas para atender às demandas de mobilidade elétrica.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundColor: "#e8f5e9",
                padding: 4,
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#3c6e47", marginBottom: 2 }}
              >
                Planejamento de Rotas
              </Typography>
              <Typography variant="body2" sx={{ color: "#4c4c4c" }}>
                Com inteligência artificial, ajudamos a planejar trajetos otimizados, economizando
                tempo e energia, tanto para indivíduos quanto para frotas comerciais.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Seção: Nossos Compromissos */}
      <Box sx={{ marginBottom: 6 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: 2, color: "#3c6e47" }}
        >
          Nossos Compromissos
        </Typography>
        <Typography variant="body1" sx={{ color: "#4c4c4c", lineHeight: 1.8 }}>
          O compromisso da Move Plus+ vai além de oferecer soluções práticas e acessíveis. Estamos
          empenhados em:
        </Typography>
        <Box component="ul" sx={{ color: "#4c4c4c", lineHeight: 1.8, paddingLeft: 2 }}>
          <li>Reduzir emissões de carbono e o impacto ambiental do transporte urbano.</li>
          <li>Promover a inclusão social com opções acessíveis e ecológicas.</li>
          <li>Fomentar parcerias estratégicas para expandir nossa infraestrutura e impacto.</li>
        </Box>
      </Box>

      {/* Seção: Contato */}
      <Box
        sx={{
          textAlign: "center",
          padding: 4,
          backgroundColor: "#3c6e47",
          color: "#ffffff",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Pronto para Transformar o Futuro?
        </Typography>
        <Typography variant="body1" paragraph>
          Junte-se a nós nessa jornada por um futuro mais sustentável e eficiente.
        </Typography>
        <Link href="/contato" passHref>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffffff",
              color: "#3c6e47",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#e8f5e9" },
            }}
          >
            Entre em Contato
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
