import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex">
        <div className="w-1/2 pr-8 mx-auto ml-7">
          <h2 className="text-3xl font-semibold mb-4">Cont<span className='text-yellow-500'>act Us</span></h2>
          <p className="mb-4">
            If you have any questions or concerns, please feel free to contact us using the form on the right.
          </p>
          <p>Email: careerfairevent@gmail.com</p>
          <p>Phone: +880170000000</p>
          <p>Address:Mirpur Dhaka</p>
        </div>
        <div className="w-1/2 pl-8">
        <h2 className="text-3xl font-semibold mb-4">Mess<span className='text-yellow-500'>age Us</span></h2>
          <form onSubmit={handleSubmit} className="max-w-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 p-2 w-full border rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-slate-500 hover:bg-yellow-300 text-yellow-500 font-semibold py-2 px-4 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
