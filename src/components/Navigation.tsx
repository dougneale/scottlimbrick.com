import config from "../lib/config";

export default function Navigation() {
  const links = config.navigation_links
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
        {links.map(link => (
          <li
            className="inline float-none relative mr-12"
            // style="list-style: outside none none;"
          >
            <a
              href={link.url}
              className="inline-block not-italic leading-10 text-gray-700 no-underline normal-case cursor-pointer hover:text-black"
              // style="list-style: outside none none;"
              >{link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
  );
}
