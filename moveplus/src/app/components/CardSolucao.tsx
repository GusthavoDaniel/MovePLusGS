import { Card, CardContent, Typography } from "@mui/material";

export default function CardSolucao({ titulo, descricao }: { titulo: string; descricao: string }) {
  return (
    <Card sx={{ minHeight: 200 }}>
      <CardContent>
        <Typography variant="h6">{titulo}</Typography>
        <Typography variant="body2" color="text.secondary">{descricao}</Typography>
      </CardContent>
    </Card>
  );
}
