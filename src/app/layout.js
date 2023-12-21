import ClientLayout from "./clientLayout";

export const metadata = {
  title: "Biraj Pantha",
};

export default function RootLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}
