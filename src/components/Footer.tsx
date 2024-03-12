import { NAV_LINKS } from "@/constants/NAV_LINKS";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center text-white bg-neutral-900">
      <div className="min-w-[100vw] container px-6 pt-6 text-center">
        {/* Social Icons */}
        <div className="w-full mb-6 text-center">
          {/* Instagram link */}
          <a
            href="/"
            type="button"
            aria-label="instagram link"
            className="m-1 leading-normal text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded-full h-9 w-9 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-full mx-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/*  Github  */}
          {/* <a
            href="#!"
            type="button"
            className="m-1 leading-normal text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded-full h-9 w-9 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-full mx-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a> */}
        </div>

        <div>
          <form action="">
            <div className="grid items-center justify-center gap-4 gird-cols-1 md:grid-cols-3">
              <div className="md:mb-6 md:ml-auto">
                <p>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="relative md:mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
                <label
                  htmlFor="exampleFormControlInput1"
                  className="pointer-events-none bg-neutral-900 h-fit absolute left-3 top-[0.3rem] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1] text-neutral-200 transition-all duration-200 ease-out peer-focus:-translate-y-[1.1rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200 peer-data-[te-input-state-active]:-translate-y-[1.1rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                >
                  Email address
                </label>
              </div>

              <div className="mb-6 md:mr-auto">
                <button
                  type="submit"
                  className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="mb-6">
          <p>
            For any queries, feel free to email us at{" "}
            <strong>zaiviattire@gmail.com </strong>
          </p>
        </div>

        <div className="md:px-[20%] grid sm:grid-cols-2">
          <div className="mb-6 text-center">
            <p className="mb-2.5 font-bold text-lg uppercase">Useful links</p>

            <ul className="mb-0 list-none">
              {NAV_LINKS.slice(0, 3).map((nav) => (
                <li key={nav.id}>
                  <Link href={nav.href} className="text-white">
                    {nav.displayName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <p className="mb-2.5 font-bold uppercase">Links</p>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!" className="text-white">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="w-full p-4 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &#xa9; 2023 Copyright &#x3a;
        <a className="text-white" href="https://tw-elements.com/">
          ZAIVI ATTIRE
        </a>
      </div>
    </footer>
  );
};

export default Footer;
