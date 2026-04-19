import "../styles/globals.css";

export const metadata = {
  title: "AI Travel Planner Pro - Find Your Perfect Trip",
  description: "Discover personalized travel destinations with AI-powered recommendations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}