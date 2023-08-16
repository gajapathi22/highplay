import React from 'react';
import image from '../assets/images/signup.jpeg';
const SignUp = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-md shadow-md w-96">
                <div className="mb-6">
                    <img
                        src={image} // Replace with your banner image path
                        alt="Banner"
                        className="w-full"
                    />
                </div>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block font-medium text-gray-600">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white rounded-md py-2 font-medium hover:bg-blue-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-4">
                    <button className="text-gray-600 font-medium mr-4 hover:text-gray-800 transition duration-300">
                        Login with Google
                    </button>
                    <button className="text-gray-600 font-medium hover:text-gray-800 transition duration-300">
                        Login with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
