"use client";

import { useState } from "react";
import { Container, Typography, Button, RadioGroup, FormControlLabel, Radio, Box } from "@mui/material";

const perguntas = [
  { pergunta: "Você utiliza transporte público com frequência?", opcoes: ["Sim", "Não", "Às vezes"] },
  { pergunta: "Você evita veículos movidos a combustíveis fósseis?", opcoes: ["Sempre", "Raramente", "Nunca"] },
  { pergunta: "Você participa de caronas ou mobilidade compartilhada?", opcoes: ["Frequentemente", "Raramente", "Nunca"] },
];

export default function AvaliacaoSustentavelPage() {
  const [respostas, setRespostas] = useState<string[]>([]);
  const [resultado, setResultado] = useState<string | null>(null);

  const handleChange = (index: number, value: string) => {
    const novasRespostas = [...respostas];
    novasRespostas[index] = value;
    setRespostas(novasRespostas);
  };

  const calcularPerfil = () => {
    const score = respostas.filter((r) => ["Sim", "Sempre", "Frequentemente"].includes(r)).length;
    if (score === 3) setResultado("Parabéns! Seu perfil é altamente sustentável.");
    else if (score === 2) setResultado("Bom trabalho! Mas ainda há espaço para melhorias.");
    else setResultado("Você pode melhorar suas práticas sustentáveis.");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Avaliação do Perfil Sustentável</Typography>
      {perguntas.map((item, index) => (
        <Box key={index} my={3}>
          <Typography>{item.pergunta}</Typography>
          <RadioGroup onChange={(e) => handleChange(index, e.target.value)}>
            {item.opcoes.map((opcao, i) => (
              <FormControlLabel key={i} value={opcao} control={<Radio />} label={opcao} />
            ))}
          </RadioGroup>
        </Box>
      ))}
      <Button variant="contained" color="primary" onClick={calcularPerfil}>
        Calcular Perfil
      </Button>
      {resultado && (
        <Typography mt={4} variant="h6">
          {resultado}
        </Typography>
      )}
    </Container>
  );
}
