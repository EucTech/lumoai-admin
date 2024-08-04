"use client";
import { Suspense, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { fetchLogin } from "@/store/actions/authActions";
import { RootState, AppDispatch } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_SUCCESS } from "@/store/actions/actionTypes";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import ForgotPasswordModal from "@/components/Auth/ForgotPasswordModal";
import Image from "next/image";
import { FaRegEyeSlash } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [Loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.auth);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    // try {
    //   const formData = new FormData(e.currentTarget);

    //   const payload = {
    //     email: formData.get("email") as string,
    //     password: formData.get("password") as string,
    //   };

    //   localStorage.setItem("email", payload.email);
    //   const response = await dispatch(fetchLogin(payload));

    //   if (response.type === LOGIN_SUCCESS) {
        // check if the login is or it needs to redirect to
        // setLoading(false);
        // localStorage.removeItem("email");
        // const redirectPath = searchParams.get("from") || "/dashboard";
        // console.log("Redirecting to", redirectPath);
        // router.push(redirectPath);
        router.push("/dashboard");
    //   }
    // } catch (error: any) {
    //   setLoading(false);
    //   console.error("An error occurred:", error.message);
    // }
  };

  return (
    <div className=" relative w-full h-screen flex flex-col items-center justify-center gap-40">
      <Image
        width={1000}
        height={1000}
        src="/hero-img1-dark.svg"
        alt="hero background image"
        aria-hidden="true"
        className=" absolute w-[65%] left-[-30px] top-[-13px] -z-10"
      />

      <Image
        width={1000}
        height={1000}
        src="/hero-img2.svg"
        alt="hero background image"
        aria-hidden="true"
        className=" absolute  w-[65%] left-[-30px] top-[-13px] -z-10"
      />

      <Image
        width={1000}
        height={1000}
        src="/hero-img3.svg"
        className=" absolute  w-[65%] left-[-30px] top-[-13px] -z-10"
        alt="hero background image"
        aria-hidden="true"
      />

      <div className=" w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] flex flex-col p-2 bg-[#fff] py-[50px] px-[30px] sm:px-[100px] rounded-lg">
        <h1 className="text-[#000] text-2xl font-semibold">Welcome Back 🥰</h1>
        <p className="pt-1 pb-10 text-[#000]">Login to your account</p>

        <div className="w-[100%] border-none">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <label htmlFor="email" className="text-[#000] text-sm">
                  Email Address
                </label>
              </div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full pl-4 pt-[11px] pb-[11px] bg-primary text-[#fff] text-[16px] outline-none rounded-lg"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <label htmlFor="password" className="text-[#000] text-sm">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password"
                  required
                  className="w-full pl-4 pt-[11px] pb-[11px] text-[#fff] text-[16px] bg-primary rounded-lg"
                />
                {showPassword ? (
                  <MdOutlineRemoveRedEye
                    onClick={toggleShowPassword}
                    className="absolute top-4 right-4 cursor-pointer"
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={toggleShowPassword}
                    className="absolute top-4 right-4 cursor-pointer"
                  />
                )}
              </div>
              <p
                onClick={() => setOpenModal(true)}
                className="text-right pt-2 cursor-pointer text-[14px] text-[#E89578]"
              >
                Forgot Password?
              </p>
            </div>
            <button
              className="text-white bg-[#E89578] rounded-lg p-3 mt-8 hover:bg-opacity-90 active:scale-95"
              type="submit"
              // disabled={Loading}
            >
              {Loading ? "Loading..." : "Log In"}
            </button>
          </form>
          <p className="mt-3 text-sm text-center text-[#666666]">
            Don&apos;t have an account?{" "}
            <Link href="/" className="text-[#E89578]">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <ForgotPasswordModal
        isOpen={openModal === true}
        onRequestClose={() => setOpenModal(false)}
      />
    </div>
  );
};

// const PageWithSuspense = () => (
//   <Suspense fallback={<div>Loading...</div>}>
//     <Page />
//   </Suspense>
// );

export default Login;
