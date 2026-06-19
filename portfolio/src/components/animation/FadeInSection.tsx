import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

type Props = {
    children: ReactNode;
    delay?: number;
};

export default function FadeInSection({ children, delay = 0 }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-100px 0px -100px 0px",
    });

    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        ease: "easeOut",
                        delay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}