import { useContext, useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { MainContext } from "./Context";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Login() {
  const { userHandler } = useContext(MainContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState(localStorage.getItem("rememberedEmail") || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("rememberedEmail")) {
      setRememberMe(true);
    }
  }, []);

  function loginHandler(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    setError("");
    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        userHandler(user.toJSON());

        // Save or remove email from localStorage based on "Remember Me"
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        navigate("/");
      })
      .catch((error) => {
        let errorMessage = "Invalid email or password. Please try again.";
        if (error.code === "auth/user-not-found") {
          errorMessage = "No account found. Please register first.";
        } else if (error.code === "auth/wrong-password") {
          errorMessage = "Incorrect password. Try again.";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "Invalid email format.";
        }
        setError(errorMessage);
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">Login</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={loginHandler} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300 pr-10"
              placeholder="Enter your password"
            />
            <span
              className="absolute top-9 right-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </span>
          </div>
          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-sm text-gray-700">Remember Me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:bg-gray-400 cursor-pointer"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="text-center text-sm text-gray-600 mt-2">
            Don't have an account?{" "}
            <Link to="/Register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
