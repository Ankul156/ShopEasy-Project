import { useContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { MainContext } from "./Context";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Register() {
    const { userHandler } = useContext(MainContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    function registerHandler(e) {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        if (password.length < 6) {
            setError("Password should be at least 6 characters.");
            return;
        }

        setError("");
        setLoading(true);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                userHandler(user);
                navigate("/");
            })
            .catch((error) => {
                let errorMessage = "An error occurred. Please try again.";
                if (error.code === "auth/email-already-in-use") {
                    errorMessage = "This email is already in use. Try logging in.";
                } else if (error.code === "auth/invalid-email") {
                    errorMessage = "Invalid email format.";
                } else if (error.code === "auth/weak-password") {
                    errorMessage = "Password should be at least 6 characters.";
                }
                setError(errorMessage);
            })
            .finally(() => setLoading(false));
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Create Account</h2>
                {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}
                <form onSubmit={registerHandler} className="space-y-5">
                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            placeholder="Enter your email"
                        />
                    </div>
                    {/* Password Input */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none pr-10"
                            placeholder="Enter your password"
                        />
                        <span
                            className="absolute top-9 right-3 cursor-pointer text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiOutlineEyeInvisible size={22} /> : <AiOutlineEye size={22} />}
                        </span>
                    </div>
                    {/* Confirm Password Input */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="mt-1 block w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none pr-10"
                            placeholder="Confirm your password"
                        />
                    </div>
                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition transform hover:scale-105 cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
                {/* Already have an account? */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-500 hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
}
