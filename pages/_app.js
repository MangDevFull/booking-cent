import "../public/assets/scss/app.scss";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  const layout = getLayout(<Component {...pageProps} />);

  return (
    <SessionProvider>
      <Layout>
      {layout}
      </Layout>
      <ToastContainer />
    </SessionProvider>
  );
}
