import Footer from "@/components/Footer";
import ServerError from "@/components/ServerError";
import Navbar from "@/components/navbar/Navbar";
import AppState from "@/context/AppState";
import fetchCategories from "@/libs/FetchCategories";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Toaster } from "react-hot-toast";

// Font
const raleway = Raleway({ subsets: ["latin"] });

// Metadata
export const metadata: Metadata = {
  title: "Zaivi Attire",
  description:
    "Elevate your style with Zaivi Attire's premium collection. Discover timeless elegance in chic dresses and sophisticated suits. Redefine your wardrobe with luxury fashion. Shop now.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await fetchCategories();

  if (categories === null || categories === undefined) {
    return <ServerError />;
  }
  return (
    <html lang="en">
      <body className={`${raleway.className} SCROLL_BAR`}>
        <AppState>
          <Toaster
            position="top-center"
            containerStyle={{ fontWeight: 500 }}
            toastOptions={{
              style: {
                backgroundColor: "#171717",
                color: "#ffffff",
              },
            }}
          />
          <Navbar navbarLinks={categories} />
          <main>{children}</main>
          <Footer />
        </AppState>
      </body>
    </html>
  );
}
