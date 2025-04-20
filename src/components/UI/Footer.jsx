import footerContact from "../../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((currentData, index) => {
          const { icon, title, details } = currentData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2025, All Right Reserved
              </p>
              <p>Made with ❤️ by Aryan</p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink
                    to="/"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/aryan-bhendarkar-4335b3313"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Social
                  </a>
                </li>
                <li>
                  <NavLink
                    to="https://github.com/Aryan-Bhendarkar/World_Atlas"
                    target="_blank"
                  >
                    Repo
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
