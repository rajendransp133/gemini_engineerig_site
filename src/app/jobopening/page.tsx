"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import SubHeading from "../ui/SubHeading";
import { MdOutlineEngineering, MdOutlineAccessTime } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { PiGraduationCapBold } from "react-icons/pi";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";

const JobOpeningPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    currentLocation: "",
    experience: "",
    note: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "fullName":
        if (value && !/^[a-zA-Z\s'-]+$/.test(value)) {
          return "Name should only contain letters";
        }
        if (value && value.length < 2) {
          return "Name must be at least 2 characters";
        }
        break;
      case "phone":
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
    }
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const sanitizedValue = value.replace(/[^0-9+\-\s()]/g, "");
      setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
      const error = validateField(name, sanitizedValue);
      setErrors((prev) => ({ ...prev, [name]: error }));
      return;
    }

    if (name === "fullName") {
      const sanitizedValue = value.replace(/[^a-zA-Z\s'-]/g, "");
      setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
      const error = validateField(name, sanitizedValue);
      setErrors((prev) => ({ ...prev, [name]: error }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);

    const newErrors: Record<string, string> = {};
    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) newErrors[name] = error;
    });

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.currentLocation.trim())
      newErrors.currentLocation = "Location is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/geminienggworks@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            current_location: formData.currentLocation,
            experience: formData.experience || "Fresher / Not specified",
            note: formData.note || "No additional note",
            _subject: `Job Application - Site Engineer: ${formData.fullName}`,
          }),
        }
      );

      if (response.ok) {
        setIsSuccess(true);
        setHasSubmitted(false);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          currentLocation: "",
          experience: "",
          note: "",
        });
        setTimeout(() => setIsSuccess(false), 6000);
      } else {
        setErrors({ submit: "Failed to send application. Please try again." });
      }
    } catch {
      setErrors({ submit: "Failed to send application. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const jobDetails = [
    {
      icon: MdOutlineEngineering,
      title: "Position",
      content: "Site Engineer",
    },
    {
      icon: PiGraduationCapBold,
      title: "Qualification",
      content: "Bachelor's Degree in Civil Engineering (B.E. / B.Tech)",
    },
    {
      icon: MdOutlineAccessTime,
      title: "Experience",
      content: "Freshers welcome — prior site experience is a plus",
    },
    {
      icon: FiMapPin,
      title: "Location",
      content: "Pudukkottai, Tamil Nadu",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col gap-6">
        <Navbar />

        {/* Hero Banner Section */}
        <section
          className="relative h-[280px] md:h-[320px] overflow-hidden"
          aria-label="Job Opening"
        >
          <Image
            src="/stack4.webp"
            alt="Job Opening at Gemini Engineering Works - Site Engineer Position"
            fill
            className=""
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#343f52]/90 to-[#343f52]/70" />

          <div className="absolute top-0 right-0 w-96 h-96 bg-[#eba10e]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#eba10e]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide">
              Job <span className="text-[#eba10e] italic">Opening</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl roboto-font">
              Be part of Gemini Engineering Works
            </p>

            <div className="flex items-center gap-2 mt-6 text-white/60 text-sm">
              <a href="/" className="hover:text-[#eba10e] transition-colors">
                Home
              </a>
              <span>/</span>
              <span className="text-[#eba10e] roboto-font">Job Opening</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="flex-1 py-16 lg:py-20 -mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Application Form */}
              <div className="lg:col-span-3 bg-white rounded-2xl overflow-hidden border border-gray-200">
                <div className="p-8 border-b border-gray-100 flex flex-col items-start justify-start">
                  <SubHeading
                    src="/images/civil_hat.webp"
                    alt="Construction Hat"
                    width={45}
                    height={45}
                    leftText="Apply Now"
                    rightText=""
                    noWrap={true}
                  />
                  <p className="text-gray-500 text-sm roboto-font -mt-2">
                    Fill in your details — we&apos;ll reach out to you directly
                  </p>
                </div>

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
                        className={`peer w-full px-5 py-4 bg-gray-50 border-2 rounded-xl text-[#343f52] placeholder-transparent focus:outline-none focus:bg-white transition-all duration-300 roboto-font ${
                          errors.fullName
                            ? "border-red-400 focus:border-red-500"
                            : "border-gray-200 focus:border-[#eba10e]"
                        }`}
                        placeholder="Full Name"
                      />
                      <label
                        className={`absolute left-5 top-4 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 pointer-events-none roboto-font ${
                          errors.fullName
                            ? "text-red-400 peer-focus:text-red-500"
                            : "text-gray-400 peer-focus:text-[#eba10e]"
                        }`}
                      >
                        Full Name *
                      </label>
                      {hasSubmitted && errors.fullName && (
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
                        required
                        className={`peer w-full px-5 py-4 bg-gray-50 border-2 rounded-xl text-[#343f52] placeholder-transparent focus:outline-none focus:bg-white transition-all duration-300 roboto-font ${
                          errors.phone
                            ? "border-red-400 focus:border-red-500"
                            : "border-gray-200 focus:border-[#eba10e]"
                        }`}
                        placeholder="Phone"
                      />
                      <label
                        className={`absolute left-5 top-4 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 pointer-events-none roboto-font ${
                          errors.phone
                            ? "text-red-400 peer-focus:text-red-500"
                            : "text-gray-400 peer-focus:text-[#eba10e]"
                        }`}
                      >
                        Phone Number *
                      </label>
                      {hasSubmitted && errors.phone && (
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
                        className={`peer w-full px-5 py-4 bg-gray-50 border-2 rounded-xl text-[#343f52] placeholder-transparent focus:outline-none focus:bg-white transition-all duration-300 roboto-font ${
                          errors.email
                            ? "border-red-400 focus:border-red-500"
                            : "border-gray-200 focus:border-[#eba10e]"
                        }`}
                        placeholder="Email"
                      />
                      <label
                        className={`absolute left-5 top-4 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 pointer-events-none roboto-font ${
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

                    {/* Current Location */}
                    <div className="relative group">
                      <input
                        type="text"
                        name="currentLocation"
                        value={formData.currentLocation}
                        onChange={handleChange}
                        required
                        className={`peer w-full px-5 py-4 bg-gray-50 border-2 rounded-xl text-[#343f52] placeholder-transparent focus:outline-none focus:bg-white transition-all duration-300 roboto-font ${
                          errors.currentLocation
                            ? "border-red-400 focus:border-red-500"
                            : "border-gray-200 focus:border-[#eba10e]"
                        }`}
                        placeholder="Current Location"
                      />
                      <label
                        className={`absolute left-5 top-4 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 pointer-events-none roboto-font ${
                          errors.currentLocation
                            ? "text-red-400 peer-focus:text-red-500"
                            : "text-gray-400 peer-focus:text-[#eba10e]"
                        }`}
                      >
                        Current Location *
                      </label>
                      {hasSubmitted && errors.currentLocation && (
                        <p className="text-red-500 text-xs mt-1 ml-1">
                          {errors.currentLocation}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Years of Experience */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="peer w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-[#343f52] placeholder-transparent focus:outline-none focus:bg-white focus:border-[#eba10e] transition-all duration-300 roboto-font"
                      placeholder="Years of Experience"
                    />
                    <label className="absolute left-5 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#eba10e] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 pointer-events-none roboto-font">
                      Years of Experience (optional)
                    </label>
                  </div>

                  {/* Note / Anything else */}
                  <div className="relative group">
                    <textarea
                      name="note"
                      value={formData.note}
                      onChange={handleChange}
                      rows={5}
                      className="peer w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-[#343f52] placeholder-transparent focus:outline-none focus:bg-white focus:border-[#eba10e] transition-all duration-300 resize-none roboto-font"
                      placeholder="Anything else you'd like us to know"
                    />
                    <label className="absolute left-5 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#eba10e] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 pointer-events-none roboto-font">
                      Anything else you&apos;d like us to know (optional)
                    </label>
                  </div>

                  {/* Success Message */}
                  {isSuccess && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-3">
                      <BsCheckCircleFill className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-medium roboto-font">
                        Application sent! We&apos;ll call you soon.
                      </p>
                    </div>
                  )}

                  {/* Submit Error */}
                  {errors.submit && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-3">
                      <BsXCircleFill className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-medium roboto-font">
                        {errors.submit}
                      </p>
                    </div>
                  )}

                  {/* Validation summary */}
                  {hasSubmitted &&
                    Object.keys(errors).filter(
                      (key) => key !== "submit" && errors[key]
                    ).length > 0 && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <BsXCircleFill className="w-5 h-5 flex-shrink-0" />
                          <p className="text-sm font-semibold roboto-font">
                            Please fix the following errors:
                          </p>
                        </div>
                        <ul className="list-disc list-inside space-y-1 ml-8">
                          {errors.fullName && (
                            <li className="text-sm roboto-font">
                              {errors.fullName}
                            </li>
                          )}
                          {errors.phone && (
                            <li className="text-sm roboto-font">
                              {errors.phone}
                            </li>
                          )}
                          {errors.email && (
                            <li className="text-sm roboto-font">
                              {errors.email}
                            </li>
                          )}
                          {errors.currentLocation && (
                            <li className="text-sm roboto-font">
                              {errors.currentLocation}
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                    <p className="text-gray-400 text-sm roboto-font">
                      * Required fields
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed roboto-font"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </div>
                </form>
              </div>

              {/* Job Details - Right Side */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 h-full">
                  {/* Job details header */}
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-[#343f52]">
                      Position Details
                    </h3>
                    <p className="text-gray-500 text-sm roboto-font mt-1">
                      What we&apos;re looking for
                    </p>
                  </div>

                  {/* Job detail items */}
                  <div className="p-6 space-y-6">
                    {jobDetails.map((detail, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#eba10e] to-[#f5c04a] flex items-center justify-center flex-shrink-0">
                          <detail.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 pt-1">
                          <h4 className="text-base font-bold text-[#343f52] mb-1">
                            {detail.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed roboto-font">
                            {detail.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="px-6">
                    <div className="border-t border-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Animated Truck */}
        <div className="relative mt-16 h-24 w-full">
          <div className="absolute -bottom-8 left-0 animate-truck-move">
            <Image
              src="/images/vehicle-3.svg"
              alt="JCB Truck"
              width={150}
              height={58}
              className="object-contain -scale-x-100"
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default JobOpeningPage;
