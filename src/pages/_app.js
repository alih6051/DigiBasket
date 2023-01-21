import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </Provider>
    </ChakraProvider>
  );
}
