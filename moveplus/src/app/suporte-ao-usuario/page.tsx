"use client";

import { Container, Typography, TextField, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const perguntasFrequentes = [
  { pergunta: "Como faço para reservar um veículo?", resposta: "Basta acessar a página de Mobilidade Elétrica e seguir as instruções." },
  { pergunta: "O que é o Move Plus+?", resposta: "É uma plataforma que promove mobilidade sustentável e inovação." },
];

export default function SuporteAoUsuarioPage() {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3, color: "#3c6e47" }}>
        Suporte ao Usuário
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Perguntas Frequentes
      </Typography>
      {perguntasFrequentes.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{faq.pergunta}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.resposta}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Typography variant="h6" sx={{ marginTop: 4, marginBottom: 2 }}>
        Entre em Contato
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nome"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Mensagem"
          value={formData.mensagem}
          onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" type="submit" sx={{ backgroundColor: "#3c6e47", "&:hover": { backgroundColor: "#2a4f34" } }}>
          Enviar
        </Button>
      </form>
    </Container>
  );
}
