import { montserrat } from "@/font";
import React, { useEffect, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import Modal from "react-modal";
import { RootState, AppDispatch } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchForgotPassword } from "@/store/actions/authActions";
import { FORGOT_PASSWORD_SUCCESS } from "@/store/actions/actionTypes";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";


interface ForgotPasswordModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector(
    (state: RootState) => state.auth
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const payload = {
        email: formData.get("email") as string,
      };

      const response = await dispatch(fetchForgotPassword(payload));
      if (response.type === FORGOT_PASSWORD_SUCCESS) {
        router.push("/reset-password");
        console.log("Email sent successfully");
      }
    } catch (error: any) {
      console.error("An error occurred:", error.message);
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(validateEmail(value));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setIsEmailValid(false);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Forgot Password Modal"
      className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] bg-white rounded-lg p-2 sm:p-5"
      overlayClassName=" fixed top-0 left-0 w-full h-full bg-[#000] z-50"
      ariaHideApp={false}
    >
      <div
        className={`w-full flex flex-col items-center gap-5 px-5 py-10 sm:px-10 ${montserrat.className}`}
      >
        <div className="w-full flex justify-between mb-4 ">
          <h2 className=" sm:text-[18px] text-[#000] font-semibold">
            Forgot your password?
          </h2>
          <button onClick={onRequestClose}>
            <FaRegWindowClose className="text-[#E89578] text-[24px]" />
          </button>
        </div>

        <p className="text-[#000] text-[15px] font-medium">
          Enter your email address in the field below. We will send you an OTP you will use to reset password.
        </p>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-2 w-full">
            <label htmlFor="email" className="text-[#333333] text-sm font-medium">
              Email Address
            </label>
          </div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleEmailChange}
            required
            className="w-full pt-[11px] pl-5 pb-[11px] text-[16px] text-[#000] font-normal bg-transparent border-2 border-[solid] border-[#000] outline-none  rounded-lg"
          />
           <Button
            variant="ghost"
            type="submit"
            disabled={!isEmailValid}
            className=" w-full gap-4 bg-[#000] hover:outline-none outline-none text-[#ffffff] text-[14px] h-12 px-5 rounded-md mt-10"
          >
            {isLoading ? "Submit..." : "Submit"}
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
