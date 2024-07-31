import React, { useState } from "react";
import aboutHeader from "../assets/images/header/header04.jpg";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import FooterHome from "../components/FooterHome";
import WordPullUp from "@/components/magicui/word-pull-up";
import NumberTicker from "@/components/magicui/number-ticker";

function AboutPage() {
  const notifyError = () => {
    toast.error("Failed to send email", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const notifySuccess = () => {
    toast.success("Email sent successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8888/contact",
        formData
      );
      console.log(response.data);
      notifySuccess();
    } catch (error) {
      console.error(error);
      notifyError();
    }
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div className="bg-texture">
      <div className="relative flex flex-col items-center">
        <img
          className="object-cover object-top  w-full h-[25rem] relative "
          src={aboutHeader}
          alt="header-image"
        />
        <WordPullUp
          className="header-text absolute top-[10rem]  text-black text-center text-[4rem] font-[700]"
          words="ABOUT  US"
        />
      </div>
      <div className="flex flex-row justify-center my-[2rem] ">
        <div className="px-[3rem]  py-[3rem] border-x-[1px] text-center">
        <p className="whitespace-pre-wrap text-[3rem] font-medium tracking-tighter text-GreenButton dark:text-white md:text-[1.25rem]">
      THB <NumberTicker value={46} />M
    </p>
          <p className="text-gray-400 md:text-[.8rem]">TOTAL LENT</p>
        </div>
        <div className="px-[3rem] py-[3rem] border-r-[1px] text-center"
        >
          <p className="whitespace-pre-wrap text-[3rem] font-medium tracking-tighter text-GreenButton dark:text-white md:text-[1.25rem]">
      THB <NumberTicker value={202} />K
    </p>
          <p className="text-gray-400 md:text-[.8rem]">LOANS FUNDED</p>
        </div>
        <div className="px-[3rem] py-[3rem] border-r-[1px] text-center">
        <p className="whitespace-pre-wrap text-[3rem] font-medium tracking-tighter text-GreenButton dark:text-white md:text-[1.25rem]">
       <NumberTicker value={56} />K
    </p>
          <p className="text-gray-400 md:text-[.8rem]">PEOPLE REACHED</p>
        </div>
        <div className="px-[3rem] py-[3rem] border-r-[1px] text-center">
        <p className="whitespace-pre-wrap text-[3rem] font-medium tracking-tighter text-GreenButton dark:text-white md:text-[1.25rem]">
       <NumberTicker value={46} />
    </p>
          <p className="text-gray-400 md:text-[.8rem]">PROVINCES</p>
        </div>
      </div>

      <p className="indent-5 px-[5rem] pt-[2rem] text-[1.25rem]">
        Over 74 million people in Thailand do not have a bank account and cannot
        access essential financial services. O2O is an international non-profit
        organization established in 2024 in Thailand with a mission to expand
        financial access to help underserved communities thrive.
      </p>

      <p className="indent-5 px-[5rem] pt-[1rem] text-[1.25rem]">
        We achieve this by crowdfunding to provide loans and unlock capital for
        the underprivileged, improving the quality and cost of financial
        services, and addressing barriers to financial access globally. Through
        the work of O2O, students can pay for their education, women can start
        businesses, farmers can invest in equipment, and families can cover
        essential medical expenses.
      </p>
      <p className="indent-5 px-[5rem] pt-[1rem] text-[1.25rem]">
        By lending just 25 baht on O2O, you can be part of the solution and
        truly make a difference in the lives of others. 100% of every baht you
        lend on O2O goes directly to funding loans.
      </p>
      <p className="indent-5 px-[5rem] pt-[1rem] text-[1.25rem]">
        In Thailand, there are many communities and groups of people who still
        cannot access quality financial services. O2O has worked with local
        partners to provide financial assistance through microloans to those in
        need. For example, rural entrepreneurs can use loans to expand their
        businesses and generate additional income for their families. Students
        can use loans to pay for tuition and continue their education.
        Additionally, farmers can use loans to improve agriculture and increase
        productivity.
      </p>
      <p className="px-[5rem] pt-[1rem] pb-[2rem] text-[1.25rem]">
        The support from O2O gives people in Thailand the opportunity to
        sustainably improve their lives and communities.
      </p>
      <div className="flex flex-col justify-center items-center p-[2rem] ">
        <div className="border-[2px] border-GreenFooter rounded-[20px] w-[25rem] p-[2rem]  ">
          <h2 className="text-2xl font-bold mb-4 text-center text-GreenFooter">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[1rem] ">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-GreenFooter text-white py-2 px-4 rounded-md hover:opacity-50 focus:outline-none focus:ring-green-200 focus:ring-2 focus:ring-offset-2 "
              >
                Submit
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
      <FooterHome />
    </div>
  );
}

export default AboutPage;
