import { Container, Typography, Grid, Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ padding: 2, backgroundColor: "#f5f9f5" }}>
      {/* Cabeçalho */}
      <Box
        sx={{
          textAlign: "center",
          paddingY: 4,
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
          marginBottom: 4,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#3c6e47" }}>
          Move Plus+
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#4c4c4c" }}>
          Soluções Sustentáveis de Mobilidade
        </Typography>
      </Box>

      {/* Seção Hero */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#e8f5e9",
          padding: 4,
          borderRadius: 2,
          marginBottom: 6,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ maxWidth: "50%" }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "#3c6e47" }}>
            Mobilidade Sustentável
          </Typography>
          <Typography variant="h6" sx={{ marginY: 2, color: "#4c4c4c" }}>
            Explore soluções mais limpas e inteligentes para a mobilidade urbana.
          </Typography>
          <Link href="/solucoes" passHref>
            <Button variant="contained" color="primary" size="large" sx={{ backgroundColor: "#3c6e47" }}>
              Saiba Mais
            </Button>
          </Link>
        </Box>
        <Image
          src="/assets/electric-car.png"
          alt="Carro Elétrico"
          width={500}
          height={300}
          style={{ borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
        />
      </Box>

      {/* Seção de Soluções */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 4,
          color: "#3c6e47",
        }}
      >
        Soluções em Destaque
      </Typography>
      <Grid container spacing={4}>
        {/* Solução 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              textAlign: "center",
              padding: 2,
              backgroundColor: "#ffffff",
              borderRadius: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              src="/assets/electric-mobility.jpg.webp"
              alt="Veículos Elétricos Compartilhados"
              width={150}
              height={100}
              style={{ borderRadius: "8px", marginBottom: 16 }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#3c6e47" }}>
              Veículos Elétricos Compartilhados
            </Typography>
            <Typography variant="body2" sx={{ marginY: 2, color: "#4c4c4c" }}>
              Transporte ecológico disponível sob demanda.
            </Typography>
            <Link href="/mobilidade-eletrica" passHref>
              <Button variant="outlined" sx={{ borderColor: "#3c6e47", color: "#3c6e47" }}>
                Saiba Mais
              </Button>
            </Link>
          </Box>
        </Grid>

        {/* Solução 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              textAlign: "center",
              padding: 2,
              backgroundColor: "#ffffff",
              borderRadius: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              src="/assets/charging-stations.jpg"
              alt="Estações de Recarga"
              width={150}
              height={100}
              style={{ borderRadius: "8px", marginBottom: 16 }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#3c6e47" }}>
              Estações de Recarga
            </Typography>
            <Typography variant="body2" sx={{ marginY: 2, color: "#4c4c4c" }}>
              Infraestrutura alimentada por energia limpa.
            </Typography>
            <Link href="/infraestrutura-recarga" passHref>
              <Button variant="outlined" sx={{ borderColor: "#3c6e47", color: "#3c6e47" }}>
                Saiba Mais
              </Button>
            </Link>
          </Box>
        </Grid>

        {/* Solução 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              textAlign: "center",
              padding: 2,
              backgroundColor: "#ffffff",
              borderRadius: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              src="/assets/route-planning.jpg"
              alt="Planejamento de Rotas"
              width={150}
              height={100}
              style={{ borderRadius: "8px", marginBottom: 16 }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#3c6e47" }}>
              Planejamento de Rotas
            </Typography>
            <Typography variant="body2" sx={{ marginY: 2, color: "#4c4c4c" }}>
              Otimize viagens com ferramentas inteligentes.
            </Typography>
            <Link href="/planejamento-rota" passHref>
              <Button variant="outlined" sx={{ borderColor: "#3c6e47", color: "#3c6e47" }}>
                Saiba Mais
              </Button>
            </Link>
          </Box>
        </Grid>

        {/* Solução 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              textAlign: "center",
              padding: 2,
              backgroundColor: "#ffffff",
              borderRadius: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
  src="/assets/sustainable-dashboard.jpg"
  alt="Painel de Controle Sustentável"
  width={150}
  height={100}
  style={{ borderRadius: "8px", marginBottom: 16 }}
/>

            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#3c6e47" }}>
  Painel de Controle Sustentável
</Typography>
<Typography variant="body2" sx={{ marginY: 2, color: "#4c4c4c" }}>
  Um painel inteligente para monitorar e otimizar sua contribuição para a sustentabilidade.
</Typography>
            <Link href="/PainelSustentavel" passHref>
              <Button variant="outlined" sx={{ borderColor: "#3c6e47", color: "#3c6e47" }}>
                Saiba Mais
              </Button>
            </Link>
          </Box>
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
        <Typography variant="h4" gutterBottom>
          Junte-se ao Futuro da Mobilidade
        </Typography>
        <Typography variant="body1" paragraph>
          Faça parte do movimento por um sistema de transporte urbano mais limpo e inteligente.
        </Typography>
        <Link href="/contato" passHref>
          <Button variant="contained" color="secondary" size="large">
            Entre em Contato
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
