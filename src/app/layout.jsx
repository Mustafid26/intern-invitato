import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider"

export const metadata = {
  title: "The Wedding of Tiffany & Jared by Invitato",
  description: "Kaisalana",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body style={{ fontFamily: "Butler Light, serif" }}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
