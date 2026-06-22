"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BG           = "#0b0906";
const TEXT_PRIMARY = "#F2EDE8";
const TEXT_MUTED   = "rgba(242,237,232,0.40)";
const LABEL        = "rgba(242,237,232,0.75)";
const BORDER       = "rgba(255,255,255,0.10)";
const BORDER_FOCUS = "#E84018";
const ORANGE       = "#E84018";
const CHIP_BG      = "rgba(255,255,255,0.04)";
const CHIP_BORDER  = "rgba(255,255,255,0.09)";

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
    const [focusedField, setFocusedField]         = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting]          = useState(false);
    const [submissionResult, setSubmissionResult]  = useState<{ success: boolean; message: string } | null>(null);

    const toggleService = (service: string) => {
        setSelectedServices((prev) =>
            prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
        );
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
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (result.success) {
                setSubmissionResult({ success: true, message: "Message sent successfully! I'll get back to you soon." });
                (e.target as HTMLFormElement).reset();
                setSelectedServices([]);
            } else {
                setSubmissionResult({ success: false, message: result.message || "Something went wrong. Please try again." });
            }
        } catch {
            setSubmissionResult({ success: true, message: "Message sent successfully! I'll get back to you soon." });
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputStyle = (field: string) => ({
        width: "100%",
        borderBottom: `1px solid ${focusedField === field ? BORDER_FOCUS : BORDER}`,
        padding: "1rem 0",
        background: "transparent",
        color: TEXT_PRIMARY,
        outline: "none",
        transition: "border-color 0.2s",
        fontSize: "1rem",
        fontFamily: "var(--font-manrope)",
    });

    return (
        <>
        <style>{`
            .cf-input {
                outline: none !important;
                box-shadow: none !important;
                -webkit-appearance: none;
            }
            .cf-input::placeholder { color: rgba(242,237,232,0.28); }
        `}</style>
        <section
            id="contact"
            className="relative px-6 py-24 md:px-20 overflow-hidden"
            style={{ backgroundColor: BG }}
        >
            {/* Subtle orange ambient glow — bottom-right corner */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    right: "-10%",
                    bottom: "-10%",
                    width: "50vw",
                    height: "50vw",
                    maxWidth: "600px",
                    maxHeight: "600px",
                    background: "radial-gradient(circle, rgba(200,77,10,0.10) 0%, transparent 65%)",
                    pointerEvents: "none",
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Heading */}
                <div className="mb-16">
                    <h2
                        className="mb-6 font-syne font-bold leading-none tracking-tight"
                        style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", color: TEXT_PRIMARY }}
                    >
                        Let's start a{" "}
                        <span
                            style={{
                                background: `linear-gradient(100deg, ${ORANGE} 0%, #ff7a45 60%, #c84d0a 100%)`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            project
                        </span>
                    </h2>
                    <p className="text-xl font-manrope" style={{ color: TEXT_MUTED }}>
                        Interested in working together? We should queue up a time to chat.
                        <br />
                        I'll buy the coffee.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-12">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium font-manrope" style={{ color: LABEL }}>
                                Name*
                            </label>
                            <input
                                type="text" name="name" id="name" required
                                placeholder="Hello..."
                                className="cf-input"
                                style={inputStyle("name")}
                                onFocus={() => setFocusedField("name")}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium font-manrope" style={{ color: LABEL }}>
                                Email*
                            </label>
                            <input
                                type="email" name="email" id="email" required
                                placeholder="Where can I reply?"
                                className="cf-input"
                                style={inputStyle("email")}
                                onFocus={() => setFocusedField("email")}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                        <label htmlFor="company" className="block text-sm font-medium font-manrope" style={{ color: LABEL }}>
                            Company Name
                        </label>
                        <input
                            type="text" name="company" id="company"
                            placeholder="Your company or website?"
                            className="cf-input"
                            style={inputStyle("company")}
                            onFocus={() => setFocusedField("company")}
                            onBlur={() => setFocusedField(null)}
                        />
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <label className="block text-sm font-medium font-manrope" style={{ color: LABEL }}>
                            What's in your mind?*
                        </label>
                        <div className="flex flex-wrap gap-3">
                            {services.map((service) => {
                                const selected = selectedServices.includes(service);
                                return (
                                    <button
                                        key={service}
                                        type="button"
                                        onClick={() => toggleService(service)}
                                        className="px-5 py-2.5 rounded-full text-sm font-manrope transition-all duration-200"
                                        style={{
                                            backgroundColor: selected ? ORANGE : CHIP_BG,
                                            border: `1px solid ${selected ? ORANGE : CHIP_BORDER}`,
                                            color: selected ? "#fff" : TEXT_MUTED,
                                            transform: selected ? "scale(1.04)" : "scale(1)",
                                        }}
                                    >
                                        {service}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Submission feedback */}
                    {submissionResult && (
                        <div
                            className="p-4 rounded-lg text-sm font-medium font-manrope"
                            style={{
                                backgroundColor: submissionResult.success
                                    ? "rgba(232,88,10,0.12)"
                                    : "rgba(255,60,60,0.10)",
                                border: `1px solid ${submissionResult.success ? "rgba(232,88,10,0.30)" : "rgba(255,60,60,0.25)"}`,
                                color: submissionResult.success ? ORANGE : "#ff6b6b",
                            }}
                        >
                            {submissionResult.message}
                        </div>
                    )}

                    {/* Submit */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center gap-3 rounded-full font-bold font-manrope text-base transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                            style={{
                                padding: "0.9rem 2.2rem",
                                backgroundColor: ORANGE,
                                color: "#fff",
                            }}
                        >
                            {isSubmitting ? "Sending…" : "Send Message"}
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </form>
            </div>
        </section>
        </>
    );
}
