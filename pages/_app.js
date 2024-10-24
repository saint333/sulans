import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";

export default function App({ Component, pageProps }) {
  return (
    <PrimeReactProvider value={{ripple: true}}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </PrimeReactProvider>
  );
}
