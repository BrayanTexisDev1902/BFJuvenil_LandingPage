import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "BF Juvenil",
  description:
    "Pagina oficial del Ballet Folklorico Juvenil de la Ciudad de Puebla",
  icons: {
    icon: "/LogoBFJ.jpg",
    shortcut: "/LogoBFJ.jpg",
    apple: "/LogoBFJ.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${raleway.variable} antialiased`}>{children}</body>
    </html>
  );
}
