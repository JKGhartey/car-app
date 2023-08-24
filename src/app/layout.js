import "./globals.css";
import { Inter } from "next/font/google";

import { SearchContextProvider } from "./context/search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EilteAuto Rentals - Your Ultimate Car Rental Destination",
  description:
    "Explore CarWheels Rentals for a diverse fleet of premium cars available for rent. Enjoy easy booking, flexible rental periods, and exceptional customer support.",
};

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SearchContextProvider>
  );
}
