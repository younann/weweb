"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            We Build{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
              Digital Experiences
            </span>{" "}
            That Matter
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Transform your digital presence with our expert team of developers,
            designers, and strategists. We create beautiful, high-performance
            websites that drive results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="gap-2">
              Start Your Project <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="outline">
              View Our Work
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}