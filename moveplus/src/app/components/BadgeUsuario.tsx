import { Chip } from "@mui/material";

export default function BadgeUsuario({ nome, pontos }: { nome: string; pontos: number }) {
  return <Chip label={`${nome} - ${pontos} Pontos`} color="primary" />;
}
