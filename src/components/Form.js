import React, { useState } from 'react';

const Form = () => {
  // Define state variables to hold form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className='sm:flex flex-row  '>
    <div className='basis-1/2 flex flex-col justify-start items-center pl-10'>
       <div className='text-6xl pt-10 font-mono'>Let's Work together</div>
    </div>
    <div className="basis-1/3 mx-10 py-10 md:basis-1/2 lg:pr-20 ">
      <form onSubmit={handleSubmit} className=" border-4 border-blue-60 rounded-3xl bg-gradient-to-t from-blue-500 to-blue-200 shadow-lg px-8 pt-6 pb-8 mb-4 ">
        {/* Name Input */}
        <div className="mb-6">
          <label className="focus:ring ring-black block text-gray-700 text-xl font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Phone Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="123-456-7890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Message Textarea */}
        <div className="mb-6">
          <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Form;
