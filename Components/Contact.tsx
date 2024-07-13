import React from "react";

const Contact = () => (
    <div className="p-8" id="contact">
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl text-center m-4">Contact with us</h1>
            <p className="hidden sm:flex max-w-3xl text-center m-4">
                At Jagsco Marble, we pride ourselves on delivering the finest quality marble to meet your design and construction needs. Whether you're looking for classic elegance or contemporary styles, our expert team is here to assist you.
            </p>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center">
            <div className="hidden md:flex flex-col p-12 items-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15228.397164369904!2d78.40310579999999!3d17.407022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9769d67653cf%3A0xedc8eb32768b7f62!2sJagsco%20Interiors!5e0!3m2!1sen!2sin!4v1720851590291!5m2!1sen!2sin"
                    width="600"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <form className="space-y-3 w-full max-w-md p-6 bg-white shadow-lg rounded-md">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-black"
                    >
                        Name
                    </label>
                    <div className="mt-2">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            className="block w-full rounded-md py-1.5 text-gray-900 sm:text-sm sm:leading-6 border-black border-2"
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-black"
                    >
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md py-1.5 text-gray-900 sm:text-sm sm:leading-6 border-black border-2"
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium leading-6 text-black"
                    >
                        Subject
                    </label>
                    <div className="mt-2">
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            autoComplete="subject"
                            required
                            className="block w-full rounded-md py-1.5 text-gray-900 sm:text-sm sm:leading-6 border-black border-2"
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium leading-6 text-black"
                    >
                        Message
                    </label>
                    <div className="mt-2">
                        <textarea
                            id="message"
                            name="message"
                            autoComplete="message"
                            required
                            className="block w-full rounded-md py-1.5 text-gray-900 sm:text-sm sm:leading-6 border-black border-2"
                            rows={5}
                        ></textarea>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="flex justify-center rounded-md border-2 border-black text-black px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white transition duration-200 ease-in-out"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
);

export default Contact;
