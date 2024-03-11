import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Next.js Tutorial - Codevolution",
    template: "%s | Codevolution",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "red" }}>
          <p>Header</p>
        </header>

        {children}

        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
