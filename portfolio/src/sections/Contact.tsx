import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        const sendingToast = toast.loading("Sending message...");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                throw new Error("Failed to send message");
            }

            setForm({ name: "", email: "", message: "" });

            toast.success("Message sent successfully!", {
                id: sendingToast,
            });
        } catch (err) {
            console.log(err)
            toast.error("Something went wrong. Please try again.", {
                id: sendingToast,
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="contact" data-section className="max-w-7xl mx-auto px-8 py-24">

            {/* Header */}
            <div className="mb-12">
                <p className="text-blue-400 font-medium mb-2">
                    Contact
                </p>

                <h2 className="text-4xl font-bold">
                    Let’s work together
                </h2>

                <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
                    I’m currently open to junior developer roles and freelance opportunities.
                    If you want to build something or discuss a role, feel free to reach out.
                </p>
            </div>

            {/* Card Layout */}
            <div className="grid lg:grid-cols-2 gap-8">

                {/* Info Side */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                    <h3 className="text-xl font-semibold mb-4">
                        Contact Information
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">
                        I typically respond within 24–48 hours. I’m open to:
                    </p>

                    <ul className="space-y-2 text-gray-300 text-sm mb-6">
                        <li>• Full-stack developer roles</li>
                        <li>• Frontend / React positions</li>
                        <li>• Backend development work</li>
                        <li>• Freelance / contract work</li>
                        <li>• Collaboration on web projects</li>
                    </ul>

                    <div className="text-sm text-gray-400 space-y-2">
                        <p>
                            <span className="text-gray-500">Email:</span>{" "}
                            <a
                                href="mailto:blaiswebsolutions@gmail.com"
                                className="text-gray-300 hover:text-blue-400 transition"
                            >
                                blaiswebsolutions@gmail.com
                            </a>
                        </p>

                        <p>
                            <span className="text-gray-500">Phone:</span>{" "}
                            <a
                                href="tel:6132665989"
                                className="text-gray-300 hover:text-blue-400 transition"
                            >
                                613-266-5989
                            </a>
                        </p>

                        <p>
                            <span className="text-gray-500">Location:</span>{" "}
                            Lower Mainland, British Columbia, Canada (also open to remote)
                        </p>
                    </div>
                </div>

                {/* Form Side */}
                <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 space-y-4"
                >

                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-gray-200 focus:outline-none focus:border-blue-500"
                        required
                    />

                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-gray-200 focus:outline-none focus:border-blue-500"
                        required
                    />

                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-gray-200 focus:outline-none focus:border-blue-500"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 transition font-medium"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                </form>

            </div>
        </section>
    );
}