import Head from "next/head";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="tracking-wider py-10 leading-8 text-black">
      <div className="z-20 pb-12">
        <header className=" pb-2 text-black ">
          <div className="mr-0 mb-2 w-full text-center">
            <h1
              className="inline-block m-0 font-sans text-4xl not-italic font-bold tracking-widest leading-5 lowercase"
              data-shrink-original-size="42"
              // style="letter-spacing: 0.0952381em;"
            >
              <a
                href="/"
                className="no-underline lowercase cursor-pointer hover:text-blue-600"
                // style="line-height: 50.4px; letter-spacing: 4px;"
              >
                Scott Limbrick
              </a>
            </h1>
          </div>
          <Navigation />
        </header>
      </div>
      <main className="max-w-4xl m-auto  space-y-10 flex-col pb-8">
        {children}
      </main>
    </div>
  );
}
