import { Provider } from "react-redux";
import "../styles/scss/index.scss";
import type { AppProps } from "next/app";
import { store } from "store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
