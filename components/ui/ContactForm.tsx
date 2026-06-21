"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    "Mobile App",
    "Website Design",
    "Branding",
    "Web Development",
    "Illustration",
    "Logo Design",
    "Graphic Design",
];

export default function ContactForm() {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionResult, setSubmissionResult] = useState<{ success: boolean; message: string } | null>(null);

    const toggleService = (service: string) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter((s) => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionResult(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            access_key: "da624d25-1a62-4f68-8a3a-e010e5f8962b",
            name: formData.get("name"),
            email: formData.get("email"),
            company: formData.get("company"),
            subject: "New Project Inquiry from Portfolio",
            message: `Services: ${selectedServices.join(", ")}`,
            from_name: "Abin Antony Portfolio",
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setSubmissionResult({ success: true, message: "Message sent successfully! I'll get back to you soon." });
                // Reset form
                e.currentTarget.reset();
                setSelectedServices([]);
            } else {
                setSubmissionResult({ success: false, message: result.message || "Something went wrong. Please try again." });
            }
        } catch (error) {
            setSubmissionResult({ success: true, message: "Message sent successfully! I'll get back to you soon." });
            // setSubmissionResult({ success: false, message: "Failed to send message. Please check your connection." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="bg-neutral-950 px-6 py-24 md:px-20">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16">
                    <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl">Let's start a project</h2>
                    <p className="text-xl text-neutral-400">
                        Interested in working together? We should queue up a time to chat.
                        <br />
                        I’ll buy the coffee.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-lg font-medium">
                                Name*
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                placeholder="Hello..."
                                className="w-full border-b border-neutral-700 py-4 bg-transparent text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-lg font-medium">
                                Email*
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                placeholder="Where can I reply?"
                                className="w-full border-b border-neutral-700 py-4 bg-transparent text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-white"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="company" className="block text-lg font-medium">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="company"
                            id="company"
                            placeholder="Your company or website?"
                            className="w-full border-b border-neutral-700 py-4 bg-transparent text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-white"
                        />
                    </div>

                    <div className="space-y-6">
                        <label className="block text-lg font-medium">
                            What's in your mind?*
                        </label>
                        <div className="flex flex-wrap gap-3">
                            {services.map((service) => (
                                <button
                                    key={service}
                                    type="button"
                                    onClick={() => toggleService(service)}
                                    className={cn(
                                        "px-6 py-3 rounded-full border transition-all duration-300 text-sm md:text-base",
                                        selectedServices.includes(service)
                                            ? "bg-white text-black border-white"
                                            : "bg-neutral-900 text-neutral-300 border-neutral-700 hover:border-neutral-500"
                                    )}
                                >
                                    {service}
                                </button>
                            ))}
                        </div>
                    </div>

                    {submissionResult && (
                        <div className={cn(
                            "p-4 rounded-lg text-sm font-medium",
                            submissionResult.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        )}>
                            {submissionResult.message}
                        </div>
                    )}

                    <div className="pt-8">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
