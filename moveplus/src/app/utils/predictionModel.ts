export function calcularEconomia(km: number) {
    const co2PorKm = 0.25; // 0.25 kg de CO₂ por km
    const economiaPorKm = 0.6; // R$ 0,60 por km
    return {
      co2Evitado: km * co2PorKm,
      economia: km * economiaPorKm,
    };
  }
  