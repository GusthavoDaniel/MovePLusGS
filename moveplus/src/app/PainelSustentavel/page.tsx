"use client";

import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import Link from "next/link";

export default function PainelSustentavelPage() {
  const handleDownloadReport = () => {
    alert("Relatório baixado com sucesso!");
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 4, backgroundColor: "#f5f9f5" }}>
      {/* Header */}
      <Box
        sx={{
          textAlign: "center",
          paddingY: 4,
          backgroundColor: "#e8f5e9",
          borderRadius: 2,
          marginBottom: 4,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#3c6e47" }}>
          Painel de Controle Sustentável
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#4c4c4c" }}>
          Gerencie sua mobilidade e monitore sua contribuição para a
          sustentabilidade.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#3c6e47", marginTop: 2 }}
          onClick={() => alert("Simulando login no painel...")}
        >
          Entrar no Painel
        </Button>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: 4,
          borderRadius: 2,
          marginBottom: 6,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ maxWidth: "50%", marginBottom: { xs: 3, md: 0 } }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#3c6e47", marginBottom: 2 }}
          >
            Monitore e Gerencie em Tempo Real
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#4c4c4c", marginBottom: 2 }}
          >
            Acompanhe o consumo de energia, emissões evitadas e desempenho das
            suas atividades de mobilidade.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: "#3c6e47",
              color: "#3c6e47",
              "&:hover": { backgroundColor: "#e8f5e9" },
            }}
            onClick={handleDownloadReport}
          >
            Baixar Relatório
          </Button>
        </Box>
        <img
          src="/assets/dashboard.jpg"
          alt="Painel de Controle"
          style={{
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "500px",
          }}
        />
      </Box>

      {/* Features Section */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 4,
          color: "#3c6e47",
        }}
      >
        Funcionalidades do Painel
      </Typography>
      <Grid container spacing={4}>
        {/* Feature 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <CardMedia
              component="img"
              height="140"
              image="/assets/energy-tracking.jpg"
              alt="Monitoramento de Energia"
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#3c6e47" }}
              >
                Monitoramento de Energia
              </Typography>
              <Typography>
                Acompanhe o consumo de energia e otimize o uso dos seus
                veículos elétricos.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Feature 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <CardMedia
              component="img"
              height="140"
              image="/assets/emission-tracker.jpg"
              alt="Rastreamento de Emissões"
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#3c6e47" }}
              >
                Rastreamento de Emissões
              </Typography>
              <Typography>
                Veja quanto CO2 você deixou de emitir utilizando soluções
                sustentáveis.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Feature 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <CardMedia
              component="img"
              height="140"
              image="/assets/gamification.jpg"
              alt="Sistema de Recompensas"
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#3c6e47" }}
              >
                Sistema de Recompensas
              </Typography>
              <Typography>
                Ganhe pontos por cada quilômetro sustentável e troque por
                benefícios.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <Box
        sx={{
          textAlign: "center",
          padding: 4,
          backgroundColor: "#3c6e47",
          color: "#ffffff",
          borderRadius: 2,
          marginTop: 6,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Pronto para Gerenciar Sua Mobilidade Sustentável?
        </Typography>
        <Typography variant="body1" paragraph>
          Descubra como o Painel de Controle Sustentável pode ajudar você a
          liderar o futuro da mobilidade ecológica.
        </Typography>
        <Link href="/sobre-painel" passHref>
          <Button
            variant="contained"
            size="large"
            sx={{ backgroundColor: "#ffffff", color: "#3c6e47" }}
          >
            Saiba Mais
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
