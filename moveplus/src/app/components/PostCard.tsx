import { Card, CardContent, Typography, Button } from "@mui/material";

export default function PostCard({ titulo, resumo, link }: { titulo: string; resumo: string; link: string }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{titulo}</Typography>
        <Typography variant="body2" color="text.secondary" paragraph>{resumo}</Typography>
        <Button href={link} variant="contained" color="primary">Leia Mais</Button>
      </CardContent>
    </Card>
  );
}
