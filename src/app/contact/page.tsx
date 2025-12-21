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
  const [isSuccess, setIsSuccess] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "fullName":
        // Only allow letters, spaces, and common name characters
        if (value && !/^[a-zA-Z\s'-]+$/.test(value)) {
          return "Name should only contain letters";
        }
        if (value && value.length < 2) {
          return "Name must be at least 2 characters";
        }
        break;
      case "phone":
        // Only allow numbers, +, -, spaces, and parentheses
        if (value && !/^[0-9+\-\s()]+$/.test(value)) {
          return "Phone number should only contain numbers";
        }
        if (value && value.replace(/[^0-9]/g, "").length < 10) {
          return "Phone number must be at least 10 digits";
        }
        break;
      case "email":
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please enter a valid email address";
        }
        break;
      case "subject":
        if (value && value.length < 3) {
          return "Subject must be at least 3 characters";
        }
        break;
      case "message":
        if (value && value.length < 10) {
          return "Message must be at least 10 characters";
        }
        break;
    }
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // For phone field, strip out any non-allowed characters immediately
    if (name === "phone") {
      const sanitizedValue = value.replace(/[^0-9+\-\s()]/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: sanitizedValue,
      }));
      const error = validateField(name, sanitizedValue);
      setErrors((prev) => ({ ...prev, [name]: error }));
      return;
    }

    // For fullName, strip out numbers and special characters
    if (name === "fullName") {
      const sanitizedValue = value.replace(/[^a-zA-Z\s'-]/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: sanitizedValue,
      }));
      const error = validateField(name, sanitizedValue);
      setErrors((prev) => ({ ...prev, [name]: error }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields before submission
    const newErrors: Record<string, string> = {};
    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) {
        newErrors[name] = error;
      }
    });

    // Check required fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
    // Hide success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
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
                      className={`peer w-full px-5 py-4 bg-gray-50 border-2 rounded-xl text-[#343f52] placeholder-transparent focus:outline-none focus:bg-white transition-all duration-300 ${
                        errors.fullName
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-[#eba10e]"
                      }`}
                      placeholder="Full Name"
                    />
                    <label
                      className={`absolute left-5 top-4 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 pointer-events-none ${
                        errors.fullName
                          ? "text-red-400 peer-focus:text-red-500"
                          : "text-gray-400 peer-focus:text-[#eba10e]"
                      }`}
                    >
                      Full Name *
                    </label>
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1 ml-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`peer w-full px-5 py-4 bg-gray-50 border-2 rounded-xl text-[#343f52] placeholder-transparent focus:outline-none focus:bg-white transition-all duration-300 ${
                        errors.phone
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-[#eba10e]"
                      }`}
                      placeholder="Phone"
                    />
                    <label
                      className={`absolute left-5 top-4 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 pointer-events-none ${
                        errors.phone
                          ? "text-red-400 peer-focus:text-red-500"
                          : "text-gray-400 peer-focus:text-[#eba10e]"
                      }`}
                    >
                      Phone Number
                    </label>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 ml-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`peer w-full px-5 py-4 bg-gray-50 border-2 rounded-xl text-[#343f52] placeholder-transparent focus:outline-none focus:bg-white transition-all duration-300 ${
                        errors.email
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-[#eba10e]"
                      }`}
                      placeholder="Email"
                    />
                    <label
                      className={`absolute left-5 top-4 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 pointer-events-none ${
                        errors.email
                          ? "text-red-400 peer-focus:text-red-500"
                          : "text-gray-400 peer-focus:text-[#eba10e]"
                      }`}
                    >
                      Email Address *
                    </label>
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 ml-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`peer w-full px-5 py-4 bg-gray-50 border-2 rounded-xl text-[#343f52] placeholder-transparent focus:outline-none focus:bg-white transition-all duration-300 ${
                        errors.subject
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-[#eba10e]"
                      }`}
                      placeholder="Subject"
                    />
                    <label
                      className={`absolute left-5 top-4 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 pointer-events-none ${
                        errors.subject
                          ? "text-red-400 peer-focus:text-red-500"
                          : "text-gray-400 peer-focus:text-[#eba10e]"
                      }`}
                    >
                      Subject *
                    </label>
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1 ml-1">
                        {errors.subject}
                      </p>
                    )}
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
                    className={`peer w-full px-5 py-4 bg-gray-50 border-2 rounded-xl text-[#343f52] placeholder-transparent focus:outline-none focus:bg-white transition-all duration-300 resize-none ${
                      errors.message
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-200 focus:border-[#eba10e]"
                    }`}
                    placeholder="Message"
                  />
                  <label
                    className={`absolute left-5 top-4 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 pointer-events-none ${
                      errors.message
                        ? "text-red-400 peer-focus:text-red-500"
                        : "text-gray-400 peer-focus:text-[#eba10e]"
                    }`}
                  >
                    Your Message *
                  </label>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1 ml-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Success Message */}
                {isSuccess && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-3">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm font-medium">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}

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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d78.7853814!3d10.4763535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa83888347f56d%3A0xe2b955cc24a956e9!2sGemini%20Engineering%20works!5e0!3m2!1sen!2sin!4v1703145600000!5m2!1sen!2sin"
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
            src="/images/vehicle-1.svg"
            alt="JCB Truck"
            width={150}
            height={58}
            className="object-contain -scale-x-100"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
