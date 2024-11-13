'use client';

import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookF, FaAddressCard, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import { MdMarkEmailRead } from "react-icons/md";
import { Input, Textarea } from "@nextui-org/react";
import HomeImg from "../../public/image.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";


const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    mail: z.string().email({ message: "Email is required" }),
    message: z.string().min(8, { message: "Message must be at least 8 characters" }),
});

export default function ContactPage() {
    const [successMessage, setSuccessMessage] = useState("");  
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                console.log("Form Submitted", data);
                setSuccessMessage("Message sent successfully!");
                reset();
                setTimeout(() => setSuccessMessage(""), 4000);
            } else {
                console.error("Error");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    

    return (
        <div
            className="bg-cover bg-center min-h-screen flex justify-center items-center"
            style={{ backgroundImage: `url(${HomeImg.src})` }}
        >
            <div className="container max-w-4xl p-6 ">
                <h1 className="text-3xl text-white text-center pb-3 font-extrabold">Contact</h1>
                <p className="text-lg text-white text-center pb-6">
                    Have questions or want to get in touch? Fill out the form below, and we will get back to you as soon as possible.
                </p>

                <div className="text-white pb-5 pt-5">
                    <p className="text-center text-2xl font-extrabold pb-2">Work Hours</p>
                    <p className="text-center">MON – FRI : 9:00 AM – 6:00 PM</p>
                    <p className="text-center">SAT : 9:00 AM – 2:00 PM</p>
                </div>

                <div className="flex flex-col md:flex-row pb-5 space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1 text-left text-white rounded p-5 ">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <FaAddressCard className="text-2xl " />
                                <div>
                                    <label className="font-semibold">Address</label>
                                    <p>101 Independence Avenue, S.E. Washington, D.C.</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaPhoneAlt className="text-2xl" />
                                <div>
                                    <label className="font-semibold">Phone No</label>
                                    <p>+91 67324 85854</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MdMarkEmailRead className="text-2xl" />
                                <div>
                                    <label className="font-semibold">Email</label>
                                    <p>ckacademy@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 border-1 p-5 bg-white/10 backdrop-blur-md border-white/20 rounded-lg shadow-lg hover:bg-white/20 transition md:w-1/4 lg:w-56">
                        <p className="pb-5 text-2xl font-extrabold text-white text-center">Send a Message</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <Input
                                    label="Drop your name"
                                    className="w-full"
                                    type="text"
                                    {...register("name")}
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                            </div>

                            <div>
                                <Input
                                    label="Drop your email"
                                    className="w-full"
                                    type="email"
                                    {...register("mail")}
                                />
                                {errors.mail && <p className="text-red-500 text-sm">{errors.mail.message}</p>}
                            </div>

                            <div>
                                <Textarea
                                    label="Message"
                                    placeholder="Drop your description"
                                    className="w-full"
                                    {...register("message")}
                                />
                                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                            </div>

                            <div className="text-center">
                                <button className="p-2 w-28 text-sm bg-sky-500 text-white shadow-lg rounded-xl hover:bg-blue-500">
                                    Submit
                                </button>
                            </div>
                        </form>

                        {successMessage && (
                            <p className="text-green-500 text-sm text-center mt-4">
                                {successMessage}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <p className="pb-5 text-center text-2xl font-extrabold text-white">Get in touch</p>
                    <div className="py-1 px-36 text-lg font-semibold text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg sm:w-1/3 md:w-1/4 lg:w-56">

                        <div className="space-x-4 text-3xl flex justify-center">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white p-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition">
                                <FaTwitter />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white p-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.yourwebsite.com" target="_blank" rel="noopener noreferrer" className="text-white p-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition">
                                <TbWorldWww />
                            </a>
                            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-white p-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition">
                                <IoLogoWhatsapp />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white p-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition">
                                <BiLogoInstagramAlt />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
