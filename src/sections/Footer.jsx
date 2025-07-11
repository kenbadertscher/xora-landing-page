import { socials } from "../constants/index.jsx";

const year = new Date().getFullYear();

const link = (
  <a
    href="https://kenb.dev/"
    className="text-p5 transition-all duration-500 hover:text-p1"
  >
    KenB.dev
  </a>
);

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-col flex-wrap items-center md:items-start justify-center">
            <p className="opacity-70">
              Copyright {year} {link}
            </p>
            <p className="opacity-70">All rights reserved.</p>
          </div>
          <div className="flex items-center justify-center mt-2 md:mt-0">
            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
              Privacy Policy
            </p>
            <p className="text-p5 transition-all duration-500 hover:text-p1">
              Terms of Use
            </p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-6 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
