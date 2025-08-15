import "./globals.css";

export const metadata = {
  title: "Satyam Maurya – Developer/DevOps Portfolio",
  description: "Modern full-stack + devops portfolio with 3D & animations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="selection:bg-white selection:text-black">{children}</body>
    </html>
  );
}
