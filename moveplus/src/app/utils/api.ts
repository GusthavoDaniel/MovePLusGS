export const api = {
    baseUrl: "https://api.moveplus.com",
    getSolucoes: async () => {
      const response = await fetch(`${api.baseUrl}/solucoes`);
      return response.json();
    },
  };
  