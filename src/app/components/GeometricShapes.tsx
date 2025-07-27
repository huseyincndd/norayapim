"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    mobileWidth = 200,
    mobileHeight = 50,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    mobileWidth?: number;
    mobileHeight?: number;
    rotate?: number;
    gradient?: string;
}) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                    style={{
                        width: isMobile ? mobileWidth : width,
                        height: isMobile ? mobileHeight : height,
                    }}
                />
            </motion.div>
        </motion.div>
    );
}

export function GeometricShapes() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large Shapes */}
            <ElegantShape
                delay={0.2}
                width={800}
                height={180}
                mobileWidth={120}
                mobileHeight={30}
                rotate={15}
                gradient="from-premium-red/[0.20]"
                className="left-[-15%] md:left-[-8%] top-[10%] md:top-[15%]"
            />

            <ElegantShape
                delay={0.4}
                width={700}
                height={160}
                mobileWidth={100}
                mobileHeight={25}
                rotate={-20}
                gradient="from-premium-red/[0.18]"
                className="right-[-10%] md:right-[-3%] top-[60%] md:top-[65%]"
            />

            <ElegantShape
                delay={0.3}
                width={650}
                height={150}
                mobileWidth={110}
                mobileHeight={28}
                rotate={25}
                gradient="from-premium-red/[0.16]"
                className="left-[2%] md:left-[8%] bottom-[8%] md:bottom-[12%]"
            />

            {/* Medium Shapes */}
            <ElegantShape
                delay={0.5}
                width={450}
                height={110}
                mobileWidth={90}
                mobileHeight={22}
                rotate={-12}
                gradient="from-premium-red/[0.14]"
                className="right-[8%] md:right-[15%] top-[5%] md:top-[8%]"
            />

            <ElegantShape
                delay={0.6}
                width={400}
                height={100}
                mobileWidth={80}
                mobileHeight={20}
                rotate={18}
                gradient="from-premium-red/[0.12]"
                className="left-[25%] md:left-[30%] top-[25%] md:top-[30%]"
            />

            <ElegantShape
                delay={0.7}
                width={380}
                height={95}
                mobileWidth={75}
                mobileHeight={18}
                rotate={-30}
                gradient="from-premium-red/[0.10]"
                className="right-[30%] md:right-[35%] bottom-[15%] md:bottom-[20%]"
            />

            <ElegantShape
                delay={0.8}
                width={350}
                height={85}
                mobileWidth={70}
                mobileHeight={17}
                rotate={22}
                gradient="from-premium-red/[0.08]"
                className="left-[45%] md:left-[50%] top-[45%] md:top-[50%]"
            />

            {/* Smaller Shapes */}
            <ElegantShape
                delay={0.9}
                width={280}
                height={70}
                mobileWidth={60}
                mobileHeight={15}
                rotate={-15}
                gradient="from-premium-red/[0.06]"
                className="right-[45%] md:right-[50%] top-[35%] md:top-[40%]"
            />

            <ElegantShape
                delay={1.0}
                width={250}
                height={60}
                mobileWidth={55}
                mobileHeight={14}
                rotate={35}
                gradient="from-premium-red/[0.05]"
                className="left-[15%] md:left-[20%] top-[70%] md:top-[75%]"
            />

            <ElegantShape
                delay={1.1}
                width={220}
                height={55}
                mobileWidth={50}
                mobileHeight={12}
                rotate={-25}
                gradient="from-premium-red/[0.04]"
                className="right-[60%] md:right-[65%] top-[80%] md:top-[85%]"
            />

            <ElegantShape
                delay={1.2}
                width={200}
                height={50}
                mobileWidth={45}
                mobileHeight={11}
                rotate={28}
                gradient="from-premium-red/[0.03]"
                className="left-[60%] md:left-[65%] top-[15%] md:top-[20%]"
            />

            <ElegantShape
                delay={1.3}
                width={180}
                height={45}
                mobileWidth={40}
                mobileHeight={10}
                rotate={-18}
                gradient="from-premium-red/[0.025]"
                className="right-[75%] md:right-[80%] top-[55%] md:top-[60%]"
            />

            <ElegantShape
                delay={1.4}
                width={160}
                height={40}
                mobileWidth={35}
                mobileHeight={9}
                rotate={32}
                gradient="from-premium-red/[0.02]"
                className="left-[75%] md:left-[80%] bottom-[30%] md:bottom-[35%]"
            />

            {/* Extra Small Shapes for Detail */}
            <ElegantShape
                delay={1.5}
                width={120}
                height={30}
                mobileWidth={30}
                mobileHeight={8}
                rotate={-10}
                gradient="from-premium-red/[0.015]"
                className="right-[85%] md:right-[90%] top-[25%] md:top-[30%]"
            />

            <ElegantShape
                delay={1.6}
                width={100}
                height={25}
                mobileWidth={25}
                mobileHeight={6}
                rotate={40}
                gradient="from-premium-red/[0.01]"
                className="left-[85%] md:left-[90%] top-[85%] md:top-[90%]"
            />
        </div>
    );
} 