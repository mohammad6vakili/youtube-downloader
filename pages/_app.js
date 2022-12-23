import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "../styles/style.css";
import "../styles/hovers.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class" enableSystem={false}>
      <NextNProgress color="#ef4444" height={5} />
      <div dir="rtl" className="overflow-hidden select-none">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
