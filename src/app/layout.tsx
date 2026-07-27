import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://hablago.example"),
  title: { default: "Habla Go — Español para la vida real", template: "%s | Habla Go" },
  description: "Aprende español conversando con profesores colombianos y una comunidad cercana.",
  openGraph: {
    title: "Habla Go — Español para la vida real",
    description: "Clases humanas, cultura viva y una ruta hecha para que hables con confianza.",
    type: "website",
    locale: "es",
    alternateLocale: ["pt_BR", "en_US"],
  },
  twitter: { card: "summary_large_image", title: "Habla Go — Español para la vida real" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
