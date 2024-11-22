
import "../styles/globals.css"; 
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Move Plus+</title>
        <meta name="description" content="Transformando a mobilidade urbana com soluções sustentáveis." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Navbar no topo */}
        <Navbar />
        {/* Conteúdo principal */}
        <main style={{ minHeight: "80vh", padding: "20px" }}>
          {children}
        </main>
        {/* Footer no final */}
        <Footer />
      </body>
    </html>
  );
}
