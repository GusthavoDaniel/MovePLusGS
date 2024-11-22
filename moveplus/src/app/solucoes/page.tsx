import { Container, Grid, Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MapIcon from "@mui/icons-material/Map";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import RouteIcon from "@mui/icons-material/Route";
import PublicIcon from "@mui/icons-material/Public";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import PeopleIcon from "@mui/icons-material/People";

const solucoes = [
  {
    titulo: "Impacto Ambiental",
    descricao: "Veja o impacto positivo das soluções do Move Plus+.",
    link: "/impacto-ambiental",
    icone: <PublicIcon sx={{ fontSize: 60, color: "#3c6e47" }} />,
  },
  {
    titulo: "Gamificação e Feedback",
    descricao: "Engaje-se e ganhe recompensas sustentáveis.",
    link: "/gamificacao-feedback",
    icone: <EmojiEventsIcon sx={{ fontSize: 60, color: "#3c6e47" }} />,
  },
  {
    titulo: "Mapa de Estações",
    descricao: "Encontre as estações de recarga mais próximas.",
    link: "/mapa-estacoes",
    icone: <MapIcon sx={{ fontSize: 60, color: "#3c6e47" }} />,
  },
  {
    titulo: "Mobilidade Elétrica",
    descricao: "Descubra nossa frota de veículos elétricos.",
    link: "/mobilidade-eletrica",
    icone: <ElectricCarIcon sx={{ fontSize: 60, color: "#3c6e47" }} />,
  },
  {
    titulo: "Planejamento de Rota",
    descricao: "Otimize seus trajetos com inteligência artificial.",
    link: "/planejamento-rota",
    icone: <RouteIcon sx={{ fontSize: 60, color: "#3c6e47" }} />,
  },
  {
    titulo: "Sustentabilidade",
    descricao: "Nossas parcerias e compromissos ecológicos.",
    link: "/sustentabilidade",
    icone: <BatteryChargingFullIcon sx={{ fontSize: 60, color: "#3c6e47" }} />,
  },
  {
    titulo: "Microgrids",
    descricao: "Explore como utilizamos energia limpa e descentralizada.",
    link: "/microgrids",
    icone: <BatteryChargingFullIcon sx={{ fontSize: 60, color: "#3c6e47" }} />,
  },
  {
    titulo: "Caronas Compartilhadas",
    descricao: "Compartilhe trajetos e reduza emissões.",
    link: "/caronas-compartilhadas",
    icone: <PeopleIcon sx={{ fontSize: 60, color: "#3c6e47" }} />,
  },
];

export default function SolucoesPage() {
  return (
    <Container maxWidth="lg" sx={{ paddingY: 6 }}>
      {/* Título da Página */}
      <Box textAlign="center" sx={{ marginBottom: 4 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#3c6e47", marginBottom: 2 }}
        >
          Conheça Nossas Soluções
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#4c4c4c", maxWidth: "600px", margin: "0 auto" }}
        >
          Exploramos formas inovadoras de transformar a mobilidade urbana,
          promovendo sustentabilidade e eficiência.
        </Typography>
      </Box>

      {/* Lista de Soluções */}
      <Grid container spacing={4}>
        {solucoes.map((solucao, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link href={solucao.link} passHref>
              <Box
                sx={{
                  textAlign: "center",
                  padding: 4,
                  borderRadius: 2,
                  background:
                    "linear-gradient(135deg, #e8f5e9 0%, #ffffff 100%)",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "280px", // Altura fixa para todos os cards
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                  },
                  cursor: "pointer",
                }}
              >
                {/* Ícone da Solução */}
                {solucao.icone}

                {/* Título */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginTop: 2,
                    marginBottom: 1,
                    color: "#3c6e47",
                  }}
                >
                  {solucao.titulo}
                </Typography>

                {/* Descrição */}
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 2, color: "#4c4c4c", lineHeight: 1.6 }}
                >
                  {solucao.descricao}
                </Typography>

                {/* Botão */}
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#3c6e47",
                    color: "#3c6e47",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#3c6e47",
                      color: "#ffffff",
                    },
                  }}
                >
                  Saiba Mais
                </Button>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
