import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14" src={logo} alt="logo" />
      </div>
      
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/farrukh-sultonov/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/farrukhsultonov" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://drive.google.com/file/d/19i5VhcGBoB8fWz9it5eWksFGho9QCnDR/view?usp=sharing"
          download="Farrukh_Sultonov_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-lg gap-1  hover:text-blue-300"
        >
          <FaDownload />
          <span>Resume</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
