import { useState } from 'react';
import { FaAddressBook, FaAddressCard, FaFacebook } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { PiPhone } from 'react-icons/pi';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, email, phone, message } = formData;

  const botToken = '8348425501:AAF30FKAAwPl4cDR5qyLWPeTQ8vpDtrLBck'; // from BotFather
  const chatId = '1384205752';     // your personal ID from getUpdates

  const text = `
📬 *New Contact Submission:*
👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
💬 *Message:* ${message}
`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'Markdown'
      })
    });

    if (res.ok) {
      alert("✅ Sent to your Telegram!");
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      alert("❌ Failed to send. Try again.");
    }
  } catch (error) {
    console.error("Telegram error:", error);
    alert("❌ An error occurred.");
  }
};


  return (
    <section id="contact" className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
  {/* Contact Info */}
  <div className="space-y-4 text-gray-300">
    <h2 className="text-3xl font-bold text-white">Contact</h2>
    
     <div className="flex items-center space-x-4  rounded-lg shadow-md">
      <div className="p-3 rounded-full bg-emerald-400 text-white">
        <FiMail className="h-6 w-6" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-400 uppercase">Email</h4>
        <a href="" className="text-white hover:underline">
          hornbunlong0@gmail.com
        </a>
      </div>
    </div>
    <div className="flex items-center space-x-4 rounded-lg shadow-md">
      <div className="p-3 rounded-full bg-emerald-400 text-white">
        <GoLocation className="h-6 w-6" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-400 uppercase">Address</h4>
        <a href="https://www.google.com/maps/place/Sangkat+Chrouy+Changva,+Phnom+Penh/@11.5880092,104.9348243,18z/data=!4m6!3m5!1s0x3109515624694997:0xcd384ba7322549ed!8m2!3d11.5925082!4d104.9330448!16s%2Fg%2F1q5blqdyz?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D" className="text-white hover:underline">
          Toul Kork , Phnom Penh
        </a>
      </div>
    </div>
    <div className="flex items-center space-x-4 rounded-lg shadow-md">
      <div className="p-3 rounded-full bg-emerald-400 text-white">
        <PiPhone className="h-6 w-6" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-400 uppercase">Phone</h4>
        <a href="" className="text-white hover:underline">
          096 4634 614
        </a>
      </div>
    </div>
  </div>

  {/* Contact Form */}
  <form onSubmit={handleSubmit} className="space-y-4">
    <input id='name' name='name' rows="4" value={formData.name} onChange={handleChange} type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-800 text-white" />
    <input id='email' name='email' rows="4" value={formData.email} onChange={handleChange} type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-800 text-white" />
    <input id='phone' name='phone' rows="4" value={formData.phone} onChange={handleChange} type="text" placeholder="Phone" className="w-full p-3 rounded bg-gray-800 text-white" />
    <textarea id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange} placeholder="Message"  className="w-full p-3 rounded bg-gray-800 text-white"></textarea>
    <button type="submit" className="px-6 py-2 bg-emerald-400 hover:bg-emerald-600 text-white rounded">
      Send Message
    </button>
  </form>
</section>

  );
}