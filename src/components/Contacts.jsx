import { CONTACT } from "../constants";

const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <a href="https://www.linkedin.com/in/farrukh-sultonov/" target="_blank" className="border-b">{CONTACT.linkedIn}</a>
        <br />
        <br />
        <a href="#" className="border-b">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contacts
