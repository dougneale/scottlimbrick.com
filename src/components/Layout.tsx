import Head from "next/head";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="p-5 tracking-wider leading-8 text-black">
      <div id="headerWrapper" className="static leading-8 z-20">
        <header id="header" className="relative pb-2 text-black clearfix">
          <div
            id="logo"
            data-content-field="site-title"
            className="mr-0 mb-2 w-full text-center"
          >
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
      <main>{children}</main>
    
    </div>
  );
}
