import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";

const veiculos = [
  {
    nome: "Carro Elétrico",
    imagem: "/assets/electric-car.jpg",
    descricao: "Ideal para trajetos longos e confortáveis.",
    vantagens: [
      "Baixa emissão de carbono.",
      "Alta eficiência energética.",
      "Conforto e tecnologia de ponta.",
    ],
  },
  {
    nome: "Scooter Elétrica",
    imagem: "/assets/scooter.jpg",
    descricao: "Compacta e perfeita para curtas distâncias.",
    vantagens: [
      "Fácil de estacionar.",
      "Manutenção econômica.",
      "Perfeita para deslocamentos urbanos rápidos.",
    ],
  },
  {
    nome: "Bicicleta Elétrica",
    imagem: "/assets/electric-bike.jpg",
    descricao: "Perfeita para um passeio tranquilo e ecológico.",
    vantagens: [
      "Zero emissões durante o uso.",
      "Excelente para exercícios leves.",
      "Autonomia ideal para passeios e deslocamentos curtos.",
    ],
  },
];

export default function MobilidadeEletricaPage() {
  return (
    <Container sx={{ padding: 4 }}>
      {/* Cabeçalho */}
      <Box
        sx={{
          textAlign: "center",
          paddingY: 4,
          marginBottom: 4,
          backgroundColor: "#e8f5e9",
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 1,
            color: "#3c6e47",
          }}
        >
          Mobilidade Elétrica
        </Typography>
        <Typography
          paragraph
          sx={{ color: "#4c4c4c", maxWidth: "600px", margin: "0 auto" }}
        >
          Explore nossa frota de veículos elétricos, projetados para oferecer
          conforto, sustentabilidade e eficiência em seus trajetos diários.
        </Typography>
      </Box>

      {/* Seção de Veículos */}
      <Grid container spacing={4}>
        {veiculos.map((veiculo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={veiculo.imagem}
                alt={veiculo.nome}
                sx={{
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 1,
                    color: "#3c6e47",
                  }}
                >
                  {veiculo.nome}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#4c4c4c", marginBottom: 2 }}
                >
                  {veiculo.descricao}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#4c4c4c",
                    textAlign: "left",
                    marginTop: 2,
                    fontWeight: "bold",
                  }}
                >
                  Vantagens:
                </Typography>
                <ul style={{ color: "#4c4c4c", textAlign: "left" }}>
                  {veiculo.vantagens.map((vantagem, i) => (
                    <li key={i}>{vantagem}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
