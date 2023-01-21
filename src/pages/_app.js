import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const showHeader = router.pathname === "/admin" ? false : true;

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        {showHeader && <Navbar />}
        <Component {...pageProps} />
        {showHeader && <Footer />}
      </Provider>
    </ChakraProvider>
  );
}
