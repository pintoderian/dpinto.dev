import { Header } from "@/components/header";
import HomeLayout from "@/components/layouts/home";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HomeLayout>
      <div className="sticky top-6 z-30 -mx-px">
        <Header />
      </div>
      {children}
    </HomeLayout>
  );
}
