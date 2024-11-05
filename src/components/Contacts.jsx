import { CONTACT } from "../constants";
import { motion } from "framer-motion"

const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-10 text-center text-4xl">Get in Touch</motion.h2>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
      className="text-center tracking-tighter">
        <a href="https://www.linkedin.com/in/farrukh-sultonov/" target="_blank" className="border-b">{CONTACT.linkedIn}</a>
        <br />
        <br />
        <a href="#" className="border-b">{CONTACT.email}</a>
      </motion.div>
    </div>
  )
}

export default Contacts
