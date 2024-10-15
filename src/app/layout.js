// src/app/layout.js
export const metadata = {
  title: 'Conversor de Moedas',
  description: 'Conversor de Moedas em R$ para Dólar, Euro e Bitcoin',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>{children}</main>
        <footer style={{ textAlign: 'center', padding: '10px' }}>
          <p>&copy; 2024 Meu Conversor de Moedas</p>
        </footer>
      </body>
    </html>
  );
}
