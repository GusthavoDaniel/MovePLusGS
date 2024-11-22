"use client";

import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import SavingsIcon from "@mui/icons-material/Savings";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

export default function MicrogridsPage() {
  return (
    <Container sx={{ padding: 4, backgroundColor: "#f5f9f5" }}>
      {/* Cabeçalho */}
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
          Microgrids e Energia Limpa
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#4c4c4c",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Soluções inovadoras para distribuição eficiente de energia renovável,
          reduzindo custos e promovendo a sustentabilidade.
        </Typography>
      </Box>

      {/* Conteúdo Principal */}
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
        <Box sx={{ maxWidth: "50%" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#3c6e47", marginBottom: 2 }}
          >
            O Futuro da Energia Sustentável
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#4c4c4c", marginBottom: 2 }}
          >
            Os microgrids do Move Plus+ permitem uma distribuição eficiente de
            energia renovável, reduzindo custos e aumentando a sustentabilidade.
          </Typography>
        </Box>
        <Box
          sx={{
            fontSize: "8rem",
            color: "#3c6e47",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ElectricBoltIcon fontSize="inherit" />
        </Box>
      </Box>

      {/* Vantagens */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 4,
          color: "#3c6e47",
        }}
      >
        Vantagens dos Microgrids
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              padding: 2,
            }}
          >
            <Box
              sx={{
                fontSize: "4rem",
                color: "#3c6e47",
                marginBottom: 2,
              }}
            >
              <BoltIcon fontSize="inherit" />
            </Box>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#3c6e47" }}
              >
                Independência Energética
              </Typography>
              <Typography variant="body2" sx={{ color: "#4c4c4c" }}>
                Permita que sua comunidade ou empresa opere independentemente da
                rede elétrica tradicional.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              padding: 2,
            }}
          >
            <Box
              sx={{
                fontSize: "4rem",
                color: "#3c6e47",
                marginBottom: 2,
              }}
            >
              <SolarPowerIcon fontSize="inherit" />
            </Box>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#3c6e47" }}
              >
                Uso de Fontes Renováveis
              </Typography>
              <Typography variant="body2" sx={{ color: "#4c4c4c" }}>
                Maximize o uso de energia solar, eólica e outras fontes
                sustentáveis.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              padding: 2,
            }}
          >
            <Box
              sx={{
                fontSize: "4rem",
                color: "#3c6e47",
                marginBottom: 2,
              }}
            >
              <SavingsIcon fontSize="inherit" />
            </Box>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#3c6e47" }}
              >
                Redução de Custos
              </Typography>
              <Typography variant="body2" sx={{ color: "#4c4c4c" }}>
                Diminua seus gastos com energia por meio de estratégias
                eficientes de microgrid.
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
          Pronto para Transformar sua Energia?
        </Typography>
        <Typography variant="body1" paragraph>
          Descubra como os microgrids do Move Plus+ podem revolucionar a forma
          como você utiliza energia.
        </Typography>
        <button
          style={{
            backgroundColor: "#ffffff",
            color: "#3c6e47",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => alert("Contato enviado!")}
        >
          Entre em Contato
        </button>
      </Box>
    </Container>
  );
}
