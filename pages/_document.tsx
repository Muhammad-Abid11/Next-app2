import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />{/* it render over "index.tsx" page */}
      </body>
    </Html>
  );
}
