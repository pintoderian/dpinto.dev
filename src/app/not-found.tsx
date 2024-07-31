import { Header } from "@/components/header";
import HomeLayout from "@/components/layouts/home";
import { classnames } from "@/lib/classnames";
import { OOF_GRAD } from "@/lib/constants";

export default function NotFound() {
  return (
    <HomeLayout>
      <div className="sticky top-6 z-30 -mx-px">
        <Header />
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1
            className={classnames(
              "mb-4 text-7xl font-medium lg:text-9xl",
              OOF_GRAD
            )}
          >
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl">
            Página no encontrada.
          </p>
          <p className="mb-4 text-lg font-light">
            Lo sentimos, no podemos encontrar esa página. Encontrarás mucho para
            explorar en la página de inicio.
          </p>
        </div>
      </div>
    </HomeLayout>
  );
}
