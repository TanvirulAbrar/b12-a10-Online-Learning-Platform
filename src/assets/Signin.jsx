import React, { useContext, useState } from "react";
import { useNavigate, NavLink } from "react-router";
import { toast } from "react-toastify";
import { Eye, EyeOff, CheckCircle, School } from "lucide-react";
import AuthContext from "../context/AuthContext";
import useTheme from "../hooks/useTheme";

const Signin = () => {
  const { theme } = useTheme(); 
  const { creatUser, updateUser, signinWthGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [eye, setEye] = useState(false);
  const [isOk, setIsOk] = useState("");

  const isDark = theme === "dark";

  const handelValid = (e) => {
    const isValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(e.target.value);
    setIsOk(
      isValid
        ? ""
        : "Must contain at least 1 uppercase, 1 lowercase letter and be 6 characters long"
    );
  };

  const handleGoogleSignUp = (e) => {
    e.preventDefault();
    signinWthGoogle()
      .then(() => {
        toast.success("Registration successful!");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Google sign-up failed");
      });
  };

  const handelRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const photo = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    const isValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
    if (!isValid) return;

    creatUser(email, password)
      .then(() => {
        updateUser({ displayName: name, photoURL: photo || undefined })
          .then(() => {
            toast.success("Registration successful!");
            setIsOk("");
            navigate("/");
          })
          .catch(() => setIsOk("Profile update failed"));
      })
      .catch((error) => setIsOk(error.message));
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center font-display px-4 py-12 transition-colors duration-300 ${
        isDark ? "bg-[#101922]" : "bg-[#f6f7f8]"
      }`}
    >
      <div
        className={`relative flex w-full max-w-[1280px] min-h-[800px] rounded-xl overflow-hidden m-4 shadow-xl border transition-colors duration-300 ${
          isDark
            ? "bg-[#1a2632] border-[#334155]"
            : "bg-white border-[#f0f2f4]"
        }`}
      >
        {/* Left Side: Hero Section */}
        <div
          className={`hidden lg:flex flex-1 relative overflow-hidden ${
            isDark ? "bg-[#0f172a]" : "bg-[#137fec]/10"
          }`}
        >
          <div className="flex flex-col justify-center p-16 gap-8 z-10 w-full">
            <div
              className={`w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-lg border-4 mb-8 ${
                isDark ? "border-[#334155]" : "border-white"
              }`}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1616400619175-5beda3a17896?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80')",
              }}
            />

            <div className="flex flex-col gap-4">
              <h1 className="text-[#137fec] text-4xl font-black leading-tight tracking-tight lg:text-5xl">
                Start your learning journey today and transform your future.
              </h1>
              <h2
                className={`text-lg font-normal leading-normal ${
                  isDark ? "text-gray-200" : "text-[#111418]"
                }`}
              >
                Join thousands of students mastering new skills.
              </h2>
            </div>

            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#137fec] size-5" />
                <span
                  className={`text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Expert Instructors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#137fec] size-5" />
                <span
                  className={`text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Lifetime Access
                </span>
              </div>
            </div>
          </div>

          {/* Decorative background element */}
          <div
            className={`absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl ${
              isDark ? "bg-[#137fec]/15" : "bg-[#137fec]/20"
            }`}
          />
        </div>

        {/* Right Side: Registration Form */}
        <div
          className={`flex-1 flex flex-col justify-center items-center px-8 py-12 lg:px-20 transition-colors duration-300 ${
            isDark ? "bg-[#1a2632]" : "bg-white"
          }`}
        >
          <div className="w-full max-w-[480px]">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#137fec] p-2 rounded-lg">
                  <School className="text-white size-6" />
                </div>
                <span
                  className={`text-2xl font-bold tracking-tight ${
                    isDark ? "text-white" : "text-[#111418]"
                  }`}
                >
                  O-Learn
                </span>
              </div>
              <h2
                className={`tracking-tight text-[32px] font-bold leading-tight ${
                  isDark ? "text-white" : "text-[#111418]"
                }`}
              >
                Create Account
              </h2>
              <p
                className={`mt-2 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Sign up to get started with your new courses.
              </p>
            </div>

            {isOk && (
              <div
                className={`mb-4 p-3 rounded-lg border text-sm transition-colors ${
                  isDark
                    ? "bg-red-900/20 border-red-800 text-red-300"
                    : "bg-red-50 border-red-200 text-red-600"
                }`}
              >
                {isOk}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handelRegister} className="space-y-4">
              {/* Name Field */}
              <div className="flex flex-col w-full">
                <p
                  className={`text-sm font-medium leading-normal pb-2 ${
                    isDark ? "text-gray-200" : "text-[#111418]"
                  }`}
                >
                  Name
                </p>
                <input
                  name="name"
                  className={`flex w-full rounded-lg focus:outline-0 focus:ring-2 focus:ring-[#137fec]/50 border h-12 p-4 text-sm font-normal leading-normal placeholder:text-[#617589] transition-all ${
                    isDark
                      ? "bg-[#101922] border-gray-700 text-white placeholder-[#64748b]"
                      : "bg-white border-[#dbe0e6] text-[#111418]"
                  }`}
                  placeholder="Enter your full name"
                  type="text"
                  required
                />
              </div>

              {/* Photo URL Field */}
              <div className="flex flex-col w-full">
                <p
                  className={`text-sm font-medium leading-normal pb-2 ${
                    isDark ? "text-gray-200" : "text-[#111418]"
                  }`}
                >
                  Photo URL
                </p>
                <input
                  name="photo"
                  className={`flex w-full rounded-lg focus:outline-0 focus:ring-2 focus:ring-[#137fec]/50 border h-12 p-4 text-sm font-normal leading-normal placeholder:text-[#617589] transition-all ${
                    isDark
                      ? "bg-[#101922] border-gray-700 text-white placeholder-[#64748b]"
                      : "bg-white border-[#dbe0e6] text-[#111418]"
                  }`}
                  placeholder="https://example.com/photo.jpg"
                  type="url"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col w-full">
                <p
                  className={`text-sm font-medium leading-normal pb-2 ${
                    isDark ? "text-gray-200" : "text-[#111418]"
                  }`}
                >
                  Email Address
                </p>
                <input
                  name="email"
                  className={`flex w-full rounded-lg focus:outline-0 focus:ring-2 focus:ring-[#137fec]/50 border h-12 p-4 text-sm font-normal leading-normal placeholder:text-[#617589] transition-all ${
                    isDark
                      ? "bg-[#101922] border-gray-700 text-white placeholder-[#64748b]"
                      : "bg-white border-[#dbe0e6] text-[#111418]"
                  }`}
                  placeholder="name@example.com"
                  type="email"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col w-full">
                <p
                  className={`text-sm font-medium leading-normal pb-2 ${
                    isDark ? "text-gray-200" : "text-[#111418]"
                  }`}
                >
                  Password
                </p>
                <div className="relative">
                  <input
                    name="password"
                    onChange={handelValid}
                    className={`flex w-full rounded-lg focus:outline-0 focus:ring-2 focus:ring-[#137fec]/50 border h-12 p-4 pr-12 text-sm font-normal leading-normal placeholder:text-[#617589] transition-all ${
                      isDark
                        ? "bg-[#101922] border-gray-700 text-white placeholder-[#64748b]"
                        : "bg-white border-[#dbe0e6] text-[#111418]"
                    }`}
                    placeholder="••••••••"
                    type={eye ? "text" : "password"}
                    required
                  />
                  <button
                    className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${
                      isDark ? "text-[#94a3b8] hover:text-white" : "text-[#617589] hover:text-[#111418]"
                    }`}
                    type="button"
                    onClick={() => setEye(!eye)}
                  >
                    {eye ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                  </button>
                </div>
              </div>

              {/* Register Button */}
              <button
                className={`w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#137fec]/90 transition-colors mt-2 ${
                  isDark ? "bg-[#137fec] text-white" : "bg-[#137fec] text-white"
                }`}
                type="submit"
              >
                <span className="truncate">Register</span>
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div
                className={`flex-grow border-t transition-colors ${
                  isDark ? "border-gray-700" : "border-gray-200"
                }`}
              />
              <span
                className={`mx-4 text-sm font-medium ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                OR
              </span>
              <div
                className={`flex-grow border-t transition-colors ${
                  isDark ? "border-gray-700" : "border-gray-200"
                }`}
              />
            </div>

            {/* Social Sign Up */}
            <button
              onClick={handleGoogleSignUp}
              className={`w-full flex items-center justify-center gap-3 rounded-lg h-12 px-5 border transition-colors ${
                isDark
                  ? "border-gray-700 bg-transparent hover:bg-gray-800 text-white"
                  : "border-[#dbe0e6] bg-white hover:bg-gray-50 text-gray-700"
              }`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span
                className={`text-sm font-semibold ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Sign up with Google
              </span>
            </button>

            {/* Footer Link */}
            <p
              className={`mt-8 text-center text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Already have an account?{" "}
              <NavLink
                to="/login"
                className={`font-bold hover:underline ml-1 ${
                  isDark ? "text-[#60a5fa]" : "text-[#137fec]"
                }`}
              >
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;