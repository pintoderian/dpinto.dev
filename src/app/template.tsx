import { Fragment } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Header />
      <main className="px-4">{children}</main>
      <Footer />
    </Fragment>
  );
}
