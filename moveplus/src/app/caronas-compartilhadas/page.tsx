"use client";

import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import { useState } from "react";

const caronas = [
  { origem: "Centro", destino: "Paulista", motorista: "João" },
  { origem: "Vila Mariana", destino: "Sé", motorista: "Maria" },
];

export default function CaronasCompartilhadasPage() {
  const [search, setSearch] = useState("");
  const [filteredCaronas, setFilteredCaronas] = useState(caronas);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    if (value === "") {
      setFilteredCaronas(caronas);
    } else {
      const filtered = caronas.filter(
        (carona) =>
          carona.origem.toLowerCase().includes(value) ||
          carona.destino.toLowerCase().includes(value) ||
          carona.motorista.toLowerCase().includes(value)
      );
      setFilteredCaronas(filtered);
    }
  };

  const handleOfferRide = () => {
    alert("Funcionalidade de oferecer carona em breve!");
  };

  return (
    <Container sx={{ padding: 4, backgroundColor: "#f5f9f5" }}>
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
          Caronas Compartilhadas
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#4c4c4c",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Encontre uma carona próxima ou ofereça um trajeto para ajudar a
          reduzir emissões de CO₂ e promover a sustentabilidade.
        </Typography>
      </Box>

      {/* Search Section */}
      <Box
        sx={{
          marginBottom: 4,
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <TextField
          label="Buscar por origem, destino ou motorista"
          variant="outlined"
          value={search}
          onChange={handleSearch}
          fullWidth
          sx={{
            maxWidth: "600px",
            backgroundColor: "#ffffff",
          }}
        />
      </Box>

      {/* Ride List */}
      <Typography variant="h5" sx={{ marginBottom: 2, color: "#3c6e47" }}>
        Caronas Disponíveis
      </Typography>
      {filteredCaronas.length > 0 ? (
        <List
          sx={{
            marginBottom: 4,
            backgroundColor: "#ffffff",
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {filteredCaronas.map((carona, index) => (
            <ListItem
              key={index}
              sx={{
                borderBottom: "1px solid #e0e0e0",
                "&:last-child": {
                  borderBottom: "none",
                },
              }}
            >
              <ListItemText
                primary={`De ${carona.origem} para ${carona.destino}`}
                secondary={`Motorista: ${carona.motorista}`}
                primaryTypographyProps={{
                  fontWeight: "bold",
                  color: "#3c6e47",
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3c6e47",
                  color: "#ffffff",
                  "&:hover": { backgroundColor: "#2a4f34" },
                }}
              >
                Participar
              </Button>
            </ListItem>
          ))}
        </List>
      ) : (
        <Card
          sx={{
            padding: 2,
            backgroundColor: "#ffffff",
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent>
            <Typography variant="body1" sx={{ color: "#4c4c4c" }}>
              Nenhuma carona encontrada para sua busca.
            </Typography>
          </CardContent>
        </Card>
      )}

      {/* Offer a Ride */}
      <Box
        sx={{
          textAlign: "center",
          marginTop: 4,
          padding: 4,
          backgroundColor: "#3c6e47",
          color: "#ffffff",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Quer ajudar mais pessoas?
        </Typography>
        <Typography variant="body1" paragraph>
          Ofereça sua própria carona e contribua para um futuro mais
          sustentável.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffffff",
            color: "#3c6e47",
            "&:hover": { backgroundColor: "#e8f5e9" },
          }}
          onClick={handleOfferRide}
        >
          Oferecer uma Carona
        </Button>
      </Box>
    </Container>
  );
}
