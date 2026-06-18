import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://laurentnajman.org"),
  title: {
    default: "Laurent Najman",
    template: "%s | Laurent Najman",
  },
  description:
    "Laurent Najman, professor in the Mathematics Department at Khalifa University, on leave from ESIEE Paris and Université Gustave Eiffel. Research in discrete mathematical morphology, graph-based image analysis, topology, and optimization.",
  openGraph: {
    title: "Laurent Najman",
    description:
      "Professor in the Mathematics Department at Khalifa University, on leave from ESIEE Paris and Université Gustave Eiffel. Research in discrete mathematical morphology, graph-based image analysis, topology, and optimization.",
    url: "https://laurentnajman.org",
    siteName: "Laurent Najman",
    images: [
      {
        url: "/laurent-najman-portrait.jpeg",
        width: 1423,
        height: 1600,
        alt: "Laurent Najman",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
