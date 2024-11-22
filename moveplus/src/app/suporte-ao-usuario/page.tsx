import { Container, Typography, TextField, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const perguntasFrequentes = [
  { pergunta: "Como faço para reservar um veículo?", resposta: "Basta acessar a página de Mobilidade Elétrica e seguir as instruções." },
  { pergunta: "Como acumulo pontos na gamificação?", resposta: "Use nossos serviços sustentáveis para ganhar pontos automaticamente." },
  { pergunta: "Onde posso encontrar as estações de recarga?", resposta: "Consulte o Mapa de Estações na página de Soluções." },
];

export default function SuportePage() {
  const [mensagem, setMensagem] = useState("");

  const enviarMensagem = () => {
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setMensagem("");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Suporte ao Usuário</Typography>
      <Typography variant="h6" gutterBottom>Perguntas Frequentes</Typography>
      {perguntasFrequentes.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{item.pergunta}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.resposta}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Typography variant="h6" gutterBottom>Entre em Contato</Typography>
      <TextField
        label="Mensagem"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={enviarMensagem}>
        Enviar Mensagem
      </Button>
    </Container>
  );
}
