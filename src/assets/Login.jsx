import React, { useContext, useState } from "react";
import { useLocation, useNavigate, NavLink } from "react-router";
import { toast } from "react-toastify";
import { Eye, EyeOff, Users } from "lucide-react";
import AuthContext from "../context/AuthContext";
import useTheme from "../hooks/useTheme";

const Login = () => {
  const { theme, textColor, bg } = useTheme();
  const { signin, signinWthGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isDemoLoading, setIsDemoLoading] = useState(false);

  const isDark = theme === "dark";

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      await signinWthGoogle();
      toast.success("Login successful!");
      navigate(location.state?.from?.pathname || "/", { replace: true });
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Google login failed");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
      setErrorMsg("Please enter both email and password");
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await signin(email, password);
      form.reset();
      toast.success("Login successful!");
      navigate(location.state?.from?.pathname || "/", { replace: true });
    } catch (err) {
      console.error(err);
      const msg =
        err.code === "auth/wrong-password"
          ? "Incorrect password"
          : err.code === "auth/user-not-found"
          ? "No account found with this email"
          : err.message || "Login failed";
      setErrorMsg(msg);
      toast.error(msg);
    }
  };

  const handleDemoLogin = async () => {
    setIsDemoLoading(true);
    setErrorMsg("");

    try {
      await signin("user@mail.com", "123Qwe$");
      toast.success("Demo login successful!");
      navigate(location.state?.from?.pathname || "/dashboard", { replace: true });
    } catch (err) {
      console.error("Demo login failed:", err);
      setErrorMsg("Demo login failed – check console or credentials");
      toast.error("Demo login failed");
    } finally {
      setIsDemoLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 py-12 font-display transition-colors duration-300 ${
        isDark ? "bg-[#101922]" : "bg-[#f6f7f8]"
      }`}
    >
      <div
        className={`w-full max-w-[1280px] rounded-2xl shadow-2xl overflow-hidden border transition-colors duration-300 ${
          isDark
            ? "bg-[#1a2632] border-[#334155] text-[#f1f5f9]"
            : "bg-white border-[#f0f2f4] text-[#111418]"
        }`}
      >
        <div className="flex flex-col lg:flex-row min-h-[700px]">
          {/* Left - Hero / Visual */}
          <div
            className={`hidden lg:flex lg:w-1/2 relative overflow-hidden ${
              isDark ? "bg-[#0f172a]" : "bg-[#137fec]/5"
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${
                isDark ? "from-[#0f172a]/30" : "from-[#137fec]/10"
              } to-transparent`}
            />
            <div className="relative z-10 flex flex-col justify-center p-12 xl:p-16 w-full">
              <div className="flex items-center gap-3 mb-10">
                <div className="size-10 bg-[#137fec] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#137fec]/20">
                  <Users className="size-6" />
                </div>
                <h1
                  className={`text-3xl font-black tracking-tight ${
                    isDark ? "text-[#f1f5f9]" : "text-[#111418]"
                  }`}
                >
                  O-Learn
                </h1>
              </div>

              <div
                className={`w-full aspect-video bg-cover bg-center rounded-2xl shadow-2xl border-4 mb-10 ${
                  isDark ? "border-[#334155]" : "border-white"
                }`}
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=2070&q=80')",
                }}
              />

              <h2
                className={`text-4xl xl:text-5xl font-black leading-tight mb-6 ${
                  isDark ? "text-[#f1f5f9]" : "text-[#111418]"
                }`}
              >
                Welcome back to your learning journey
              </h2>

              <p
                className={`text-lg mb-8 max-w-md ${
                  isDark ? "text-[#94a3b8]" : "text-[#617589]"
                }`}
              >
                The beautiful thing about learning is that nobody can take it away from you.
              </p>

              <div
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border ${
                  isDark
                    ? "bg-[#137fec]/20 border-[#137fec]/30 text-[#60a5fa]"
                    : "bg-[#137fec]/10 border-[#137fec]/20 text-[#137fec]"
                }`}
              >
                <Users className="size-5" />
                <span className="text-sm font-semibold">
                  Join 20k+ active learners
                </span>
              </div>
            </div>

            <div
              className={`absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl ${
                isDark ? "bg-[#137fec]/10" : "bg-[#137fec]/20"
              }`}
            />
          </div>

          {/* Right - Login Form */}
          <div
            className={`flex-1 flex items-center justify-center p-8 lg:p-12 xl:p-16 transition-colors duration-300 ${
              isDark ? "bg-[#1a2632]" : "bg-white"
            }`}
          >
            <div className="w-full max-w-md space-y-8">
              <div className="space-y-2">
                <h2
                  className={`text-3xl font-bold ${
                    isDark ? "text-[#f1f5f9]" : "text-[#111418]"
                  }`}
                >
                  Welcome Back
                </h2>
                <p
                  className={`${
                    isDark ? "text-[#94a3b8]" : "text-[#617589]"
                  }`}
                >
                  Sign in to continue your learning journey
                </p>
              </div>

              {errorMsg && (
                <div
                  className={`p-4 rounded-xl border text-sm transition-colors ${
                    isDark
                      ? "bg-red-900/30 border-red-800/50 text-red-300"
                      : "bg-red-50 border-red-200 text-red-700"
                  }`}
                >
                  {errorMsg}
                </div>
              )}

              {/* Demo Login Button */}
              <button
                onClick={handleDemoLogin}
                disabled={isDemoLoading}
                className={`
                  w-full h-12 flex items-center justify-center gap-2 
                  border rounded-xl font-medium transition-colors duration-200
                  ${
                    isDark
                      ? "border-[#137fec]/40 text-[#60a5fa] hover:bg-[#137fec]/20"
                      : "border-[#137fec]/50 text-[#137fec] hover:bg-[#137fec]/10"
                  }
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
              >
                {isDemoLoading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  <>
                    <Users size={18} />
                    Login as Demo User
                  </>
                )}
              </button>

              <p
                className={`text-center text-xs mt-1 ${
                  isDark ? "text-[#64748b]" : "text-[#617589]"
                }`}
              >
                (user@mail.com / 123Qwe$)
              </p>

              <form onSubmit={handleLogin} className="space-y-5">
                {/* Email */}
                <div>
                  <label
                    className={`block text-sm font-medium mb-1.5 ${
                      isDark ? "text-[#f1f5f9]" : "text-[#111418]"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className={`w-full h-12 px-4 rounded-xl border bg-white placeholder-[#617589] focus:ring-2 focus:ring-[#137fec]/60 focus:border-[#137fec] outline-none transition-all duration-200 ${
                      isDark
                        ? "bg-[#101922] border-[#334155] text-[#f1f5f9] placeholder-[#64748b]"
                        : "bg-white border-[#dbe0e6] text-[#111418]"
                    }`}
                    placeholder="name@example.com"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label
                      className={`block text-sm font-medium ${
                        isDark ? "text-[#f1f5f9]" : "text-[#111418]"
                      }`}
                    >
                      Password
                    </label>
                    <NavLink
                      to="/forgetpassword"
                      className={`text-sm font-medium hover:underline ${
                        isDark ? "text-[#60a5fa]" : "text-[#137fec]"
                      }`}
                    >
                      Forgot password?
                    </NavLink>
                  </div>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      className={`w-full h-12 px-4 pr-12 rounded-xl border placeholder-[#617589] focus:ring-2 focus:ring-[#137fec]/60 focus:border-[#137fec] outline-none transition-all duration-200 ${
                        isDark
                          ? "bg-[#101922] border-[#334155] text-[#f1f5f9] placeholder-[#64748b]"
                          : "bg-white border-[#dbe0e6] text-[#111418]"
                      }`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${
                        isDark
                          ? "text-[#94a3b8] hover:text-[#60a5fa]"
                          : "text-[#617589] hover:text-[#137fec]"
                      }`}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Remember me */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className={`h-5 w-5 rounded border focus:ring-[#137fec]/60 ${
                      isDark
                        ? "border-[#334155] text-[#137fec] focus:ring-[#60a5fa]/60"
                        : "border-[#dbe0e6] text-[#137fec]"
                    }`}
                  />
                  <label
                    htmlFor="remember"
                    className={`ml-3 text-sm font-medium ${
                      isDark ? "text-[#f1f5f9]" : "text-[#111418]"
                    }`}
                  >
                    Remember me for 30 days
                  </label>
                </div>

                <button
                  type="submit"
                  className={`w-full h-12 text-white font-bold rounded-xl shadow-lg transition-all duration-200 ${
                    isDark
                      ? "bg-[#137fec] hover:bg-[#0e6fd9] shadow-[#137fec]/15"
                      : "bg-[#137fec] hover:bg-[#0e6fd9] shadow-[#137fec]/25"
                  }`}
                >
                  Sign In
                </button>
              </form>

              <div className="relative py-4">
                <div
                  className={`absolute inset-0 flex items-center ${
                    isDark ? "border-[#334155]" : "border-[#dbe0e6]"
                  }`}
                >
                  <div className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span
                    className={`px-4 ${
                      isDark ? "bg-[#1a2632] text-[#64748b]" : "bg-white text-[#617589]"
                    }`}
                  >
                    Or continue with
                  </span>
                </div>
              </div>

              <button
                onClick={handleGoogleLogin}
                className={`w-full flex items-center justify-center gap-3 h-12 border rounded-xl transition-colors duration-200 ${
                  isDark
                    ? "border-[#334155] bg-[#101922] hover:bg-[#253441] text-[#f1f5f9]"
                    : "border-[#dbe0e6] bg-white hover:bg-gray-50 text-[#111418]"
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
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="font-medium">Continue with Google</span>
              </button>

              <p
                className={`text-center text-sm pt-4 ${
                  isDark ? "text-[#94a3b8]" : "text-[#617589]"
                }`}
              >
                Don't have an account?{" "}
                <NavLink
                  to="/register"
                  className={`font-semibold hover:underline ${
                    isDark ? "text-[#60a5fa]" : "text-[#137fec]"
                  }`}
                >
                  Sign up
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;