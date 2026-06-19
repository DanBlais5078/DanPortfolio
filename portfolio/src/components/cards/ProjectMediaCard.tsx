import { useRef, useState } from "react";
import { Eye, X } from "lucide-react";

type Props = {
    mp4?: string;
};

export default function ProjectMediaCard({ mp4 }: Props) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const [hovered, setHovered] = useState(false);
    const [open, setOpen] = useState(false);

    const handleEnter = () => {
        setHovered(true);
        videoRef.current?.play();
    };

    const handleLeave = () => {
        setHovered(false);

        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <>
            {/* CARD */}
            <div
                className="
                    relative group aspect-video overflow-hidden
                    bg-black/40 border border-white/10 rounded-xl
                    transition-all duration-300
                    hover:border-blue-500/40
                    hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
                    cursor-pointer
                "
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                onClick={openModal}
            >
                {mp4 && (
                    <video
                        ref={videoRef}
                        src={mp4}
                        muted
                        loop
                        playsInline
                        className="
                            w-full h-full object-cover object-top
                            opacity-60 grayscale-[20%]
                            group-hover:opacity-100 group-hover:grayscale-0
                            transition duration-300
                            group-hover:scale-[1.05]
                        "
                    />
                )}

                {!hovered && (
                    <div className="
                        absolute inset-0
                        bg-black/30 backdrop-blur-[2px]
                        transition-opacity duration-300
                    " />
                )}

                <div className="
                    absolute inset-0
                    flex flex-col items-center justify-center gap-2
                    pointer-events-none
                ">
                    <Eye className={`
                        w-6 h-6 text-white/80 transition
                        ${hovered ? "opacity-0" : "opacity-100"}
                    `} />

                    <span className={`
                        text-xs tracking-wider uppercase
                        px-3 py-1 rounded-md
                        bg-black/60 border border-white/10
                        text-white/80 transition
                        ${hovered ? "opacity-0" : "opacity-100"}
                    `}>
                        Hover to view, click to enlarge
                    </span>
                </div>
            </div>

            {/* MODAL */}
            {open && (
                <div
                    className="
                        fixed inset-0 z-50
                        flex items-center justify-center
                        bg-black/80 backdrop-blur-md
                    "
                    onClick={closeModal}
                >
                    <div
                        className="
                            relative w-[90vw] max-w-5xl aspect-video
                            bg-black rounded-xl overflow-hidden
                            border border-white/10
                            shadow-2xl
                        "
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            onClick={closeModal}
                            className="
                                absolute top-3 right-3 z-10
                                bg-black/60 border border-white/10
                                p-2 rounded-md
                                hover:bg-black/80 transition
                            "
                        >
                            <X size={18} />
                        </button>

                        {mp4 && (
                            <video
                                src={mp4}
                                autoPlay
                                controls
                                className="w-full h-full object-fill object-top"
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}