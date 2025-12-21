"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: IoLocationOutline,
      title: "Visit Us",
      content:
        "SFNO. 27/6F2 Ganesh Nagar, Sathiyamangalam, Kuluthur TK Vellanur, Pudukkottai - 622501",
      link: null,
    },
    {
      icon: MdOutlineEmail,
      title: "Email Us",
      content: "asmanikandan@gmail.com",
      link: "mailto:asmanikandan@gmail.com",
    },
    {
      icon: FiPhoneCall,
      title: "Call Us",
      content: "+91 94432 11374",
      link: "tel:+919443211374",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />

      {/* Hero Banner Section */}
      <section className="relative h-[280px] md:h-[320px] overflow-hidden">
        <Image
          src="/images/breadcrumbs-bg.webp"
          alt="Contact Us Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#343f52]/90 to-[#343f52]/70" />

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#eba10e]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#eba10e]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide">
            Contact <span className="text-[#eba10e] italic">Us</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl">
            ​Planting the Seeds of Light
          </p>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mt-6 text-white/60 text-sm">
            <a href="/" className="hover:text-[#eba10e] transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-[#eba10e]">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16 lg:py-20 -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Form and Contact Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl overflow-hidden border border-gray-200">
              {/* Form Header */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src="/images/civil_hat.webp"
                    alt="Construction Hat"
                    width={45}
                    height={45}
                    className="object-contain"
                  />
                  <h2 className="text-xl md:text-2xl font-bold">
                    <span className="text-[#343f52]">Let&apos;s Power </span>
                    <span className="text-[#eba10e] italic">
                      Your Infrastructure{" "}
                    </span>
                    <span className="text-[#343f52]">Together</span>
                  </h2>
                </div>
                <p className="text-gray-500 text-sm">
                  Have a project in mind? Send us a message and our team will
                  get back to you shortly
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-8 lg:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="peer w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-[#343f52] placeholder-transparent focus:outline-none focus:border-[#eba10e] focus:bg-white transition-all duration-300"
                      placeholder="Full Name"
                    />
                    <label className="absolute left-5 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#eba10e] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 pointer-events-none">
                      Full Name *
                    </label>
                  </div>

                  {/* Phone */}
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="peer w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-[#343f52] placeholder-transparent focus:outline-none focus:border-[#eba10e] focus:bg-white transition-all duration-300"
                      placeholder="Phone"
                    />
                    <label className="absolute left-5 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#eba10e] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 pointer-events-none">
                      Phone Number
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="peer w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-[#343f52] placeholder-transparent focus:outline-none focus:border-[#eba10e] focus:bg-white transition-all duration-300"
                      placeholder="Email"
                    />
                    <label className="absolute left-5 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#eba10e] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 pointer-events-none">
                      Email Address *
                    </label>
                  </div>

                  {/* Subject */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="peer w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-[#343f52] placeholder-transparent focus:outline-none focus:border-[#eba10e] focus:bg-white transition-all duration-300"
                      placeholder="Subject"
                    />
                    <label className="absolute left-5 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#eba10e] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 pointer-events-none">
                      Subject *
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="peer w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-[#343f52] placeholder-transparent focus:outline-none focus:border-[#eba10e] focus:bg-white transition-all duration-300 resize-none"
                    placeholder="Message"
                  />
                  <label className="absolute left-5 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#eba10e] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 pointer-events-none">
                    Your Message *
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                  <p className="text-gray-400 text-sm">* Required fields</p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info Section - Right Side */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 h-full">
                {/* Header */}

                {/* Contact Info Items */}
                <div className="p-6 space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#eba10e] to-[#f5c04a] flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 pt-1">
                        <h4 className="text-base font-bold text-[#343f52] mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 text-sm leading-relaxed"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="px-6">
                  <div className="border-t border-gray-200" />
                </div>

                {/* Map */}
                <div className="p-6 pt-4">
                  <h4 className="text-base font-bold text-[#343f52] mb-3 flex items-center gap-2">
                    <IoLocationOutline className="w-5 h-5 text-[#eba10e]" />
                    Find Us On Map
                  </h4>
                  <div className="h-[200px] rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d78.8!3d10.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI0JzAwLjAiTiA3OMKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Gemini Engineering Works Location - Pudukkottai"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Animated JCB Truck */}
      <div className="relative h-24 w-full overflow-hidden ">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        <div className="absolute bottom-0 left-0 animate-truck-move">
          <Image
            src="/images/vehicle-2.svg"
            alt="JCB Truck"
            width={150}
            height={58}
            className="object-contain"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
