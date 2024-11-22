import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box } from "@mui/material";

const posts = [
  {
    titulo: "5 Dicas de Mobilidade Sustentável",
    resumo: "Pequenas mudanças fazem grande diferença no seu impacto ambiental.",
    link: "/post1",
  },
  {
    titulo: "Como Escolher um Veículo Elétrico?",
    resumo: "Dicas essenciais para fazer a melhor escolha sustentável.",
    link: "/post2",
  },
  {
    titulo: "Impacto das Mudanças Climáticas",
    resumo: "Entenda como podemos agir agora para um futuro mais verde.",
    link: "/post3",
  },
];

export default function BlogPage() {
  return (
    <Container sx={{ paddingY: 4 }}>
      {/* Cabeçalho */}
      <Box
        sx={{
          textAlign: "center",
          paddingY: 4,
          backgroundColor: "#e8f5e9",
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            color: "#3c6e47",
          }}
        >
          Blog Move Plus+
        </Typography>
        <Typography variant="body1" sx={{ color: "#4c4c4c", maxWidth: "600px", margin: "0 auto" }}>
          Dicas, insights e atualizações sobre sustentabilidade e mobilidade. Descubra como criar um impacto positivo no
          mundo.
        </Typography>
      </Box>

      {/* Lista de Posts */}
      <Grid container spacing={4}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                backgroundColor: "#ffffff",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent
                sx={{
                  padding: 3,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 1,
                    color: "#3c6e47",
                  }}
                >
                  {post.titulo}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#4c4c4c",
                    marginBottom: 2,
                    lineHeight: 1.8,
                  }}
                >
                  {post.resumo}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", paddingBottom: 2 }}>
                <Button
                  variant="contained"
                  href={post.link}
                  sx={{
                    backgroundColor: "#3c6e47",
                    "&:hover": { backgroundColor: "#2a4f34" },
                  }}
                >
                  Leia Mais
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
