"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution built with Next.js and Stripe",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe"],
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard for a growing SaaS company",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["React", "Tailwind CSS", "Charts"],
  },
  {
    title: "Educational Platform",
    description: "Online learning platform with video courses",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Node.js", "MongoDB"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our recent projects and see how we've helped
            businesses achieve their goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}