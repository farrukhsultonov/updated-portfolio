import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" />
      </div>
    </nav>
  )
}

export default Navbar
