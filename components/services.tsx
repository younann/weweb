"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Globe,
  Rocket,
  Shield,
  BarChart,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Beautiful, responsive websites that work seamlessly across all devices.",
  },
  {
    icon: Globe,
    title: "E-Commerce Solutions",
    description:
      "Scalable online stores with secure payment processing and inventory management.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Lightning-fast websites optimized for speed and search engine rankings.",
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description:
      "Comprehensive security measures and ongoing maintenance to keep your site safe.",
  },
  {
    icon: BarChart,
    title: "Analytics & SEO",
    description:
      "Data-driven insights and SEO strategies to improve your online presence.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of web development services to help your
            business succeed online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}