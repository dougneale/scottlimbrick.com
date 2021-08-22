export default function Navigation() {
  return (
    <div id="topNav" className="float-left m-0 w-full text-center">
    <nav
      className="inline float-none relative bottom-0 mt-0 -mr-12 font-sans text-xl not-italic font-normal normal-case"
    >
      <ul
        data-content-field="navigation"
        className="inline float-none p-0 m-0 text-base not-italic leading-7"
        // style="list-style: none none;"
      >
        <li
          className="inline float-none relative mr-12"
          // style="list-style: outside none none;"
        >
          <a
            href="/"
            className="inline-block not-italic leading-10 text-gray-700 no-underline normal-case cursor-pointer hover:text-black"
            // style="list-style: outside none none;"
            >about</a
          >
        </li>

        <li
          className="inline float-none relative mr-12"
          // style="list-style: outside none none;"
        >
          <a
            className="inline-block not-italic leading-10 text-gray-700 no-underline normal-case cursor-pointer hover:text-black"
            // style="list-style: outside none none;"
            >writing</a
          >
          <div
            className="overflow-hidden absolute mt-0 h-0 bg-white opacity-100"
            // style="top: 100%; left: -22.5px; list-style: outside none none;"
          >
            <ul
              className="block float-none overflow-hidden py-3 px-0 m-0 not-italic"
              // style="list-style: none none;"
            >
              <li
                className="block float-none relative m-0 w-full text-left"
                // style="list-style: outside none none;"
              >
                <a
                  href="/writing"
                  className="block py-1 px-6 not-italic text-gray-700 no-underline normal-case cursor-pointer whitespace-no-wrap hover:text-black"
                  // style="line-height: normal; list-style: outside none none;"
                  >fiction</a
                >
              </li>

              <li
                className="block float-none relative m-0 w-full text-left"
                // style="list-style: outside none none;"
              >
                <a
                  href="/nonfiction"
                  className="block py-1 px-6 not-italic text-gray-700 no-underline normal-case cursor-pointer whitespace-no-wrap hover:text-black"
                  // style="line-height: normal; list-style: outside none none;"
                  >non-fiction</a
                >
              </li>
            </ul>
          </div>
        </li>

        <li
          className="inline float-none relative mr-12"
          // style="list-style: outside none none;"
        >
          <a
            href="/videos"
            className="inline-block not-italic leading-10 no-underline normal-case cursor-pointer hover:text-black"
            // style="list-style: outside none none;"
            >videos</a
          >
        </li>

        <li
          className="inline float-none relative mr-12"
          // style="list-style: outside none none;"
        >
          <a
            href="/contact"
            className="inline-block not-italic leading-10 text-gray-700 no-underline normal-case cursor-pointer hover:text-black"
            // style="list-style: outside none none;"
            >contact</a
          >
        </li>
      </ul>
    </nav>
  </div>
  );
}
