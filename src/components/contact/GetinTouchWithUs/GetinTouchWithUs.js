import "../../../App.css";
import business from "../../../assets/GetinTouchWithUs/business.svg";
import contact from "../../../assets/GetinTouchWithUs/contact.svg";
import office from "../../../assets/GetinTouchWithUs/office.svg";

export default function GetinTouchWithUs() {
  return (
    <div className="font-mono md:w-[50%] md:p-10 p-10 md:gap-0 gap-4 flex flex-col justify-between">
      <div className="flex md:flex-col flex-col md:justify-start">
        <div className="flex flex-row">
          <p className="md:text-[30px] text-[25px] font-bold">Get in Touch</p>
          <p className="md:text-[30px] text-[25px] text-[#8AA6AA] ml-2 md:ml-2.5"> With Us</p>
        </div>
        <p className="w-[80%] text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="w-full flex flex-col md:gap-6 gap-10 md:mb-10">
        <div className="md:gap-0 gap-6 w-full flex md:flex-row flex-col md:justify-start justify-center md:place-items-start">
          {/* office */}
          <div className="md:w-[50%] w-[70%] ">
            <div className="flex flex-row gap-2">
              <img src={office} alt="office" className=""></img>
              <p className="md:text-[26px] text-[#8AA6AA]">Office</p>
            </div>
            <p className="md:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* open hours */}
          <div className="md:w-[50%] w-[70%] ">
            <div className="flex flex-row gap-2">
              <img src={business} alt="office" className=""></img>
              <p className="md:text-[26px] text-[#8AA6AA]">Open Hours</p>
            </div>
            <p className="md:text-[14px]">Monday - Friday</p>
            <p className="md:text-[14px]">9AM - 6 PM</p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col">
          {/* contact */}
          <div className="md:w-[50%] w-[70%] ">
            <div className="flex flex-row gap-2">
              <img src={contact} alt="office" className=""></img>
              <p className="md:text-[26px] text-[#8AA6AA]">Contact</p>
            </div>
            <p className="md:text-[14px]">+91 676 787 68 78</p>
            <p className="md:text-[14px]">+91 676 787 68 78</p>
          </div>

          {/* email */}
          <div className="md:w-[50%] w-[70%] ">
            <div className="flex flex-row gap-2">
              <img src={contact} alt="office" className=""></img>
              <p className="md:text-[26px] text-[#8AA6AA]">Email</p>
            </div>
            <p className="md:text-[14px]">+services@microfab.com</p>
            <p className="md:text-[14px]">sales@microfab.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
