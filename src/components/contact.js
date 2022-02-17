import { name, email, phone, address } from '../data/data'

export default function Contact() {
  return (
    <div id="contact">
      <h4>Contact</h4>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{phone}</li>
        <li>{address}</li>
      </ul>
    </div>
  )
}
