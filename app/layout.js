import './globals.css';

export const metadata = {
  title: 'Calculadora de Orçamento de Obra',
  description:
    'Estimativa rápida do custo de construção ou remodelação em Portugal, com base em valores de referência do mercado.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
