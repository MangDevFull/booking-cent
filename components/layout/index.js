import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <div style={{background:"rgb(248,249,250)"}} className="pt-3">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}