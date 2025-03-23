import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "kwztr",
  description: "transliterates south asian languages",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body> {children} </body>
    </html>
  );
}
