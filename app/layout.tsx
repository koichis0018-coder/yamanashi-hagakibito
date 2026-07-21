import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "山梨はがきびとの集い｜一枚のはがきから、ご縁がはじまる",
  description:
    "はがきを書き、人とのご縁を育てる『はがきびと』。山梨で開かれる集いと、はがきのある生き方をご紹介します。",
  other: {
    "codex-preview": "development",
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
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
