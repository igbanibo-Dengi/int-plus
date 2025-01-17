"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    image: "/images/project-1.jpg",
    title: "Innovative Digital Retail Platform",
    category: "SaaS Web Development",
    date: "January 2022",
    description:
      "Witness our groundbreaking e-commerce platform that seamlessly change the digital selling narrative worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
  },
  {
    image: "/images/project-1.jpg",
    title: "Enhanced Logistics Solution",
    category: "Progressive Web App Development",
    date: "March 2022",
    description:
      "Our fitness app helps users stay fit and motivated with personalized workout plans and progress tracking. Its user-friendly design and comprehensive features make staying healthy an enjoyable experience.",
  },
]

export function WorksSection() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="title">
            <span className="text-muted-foreground">Our</span>{" "}
            <span className="text-white">Works</span>
          </h2>
          <p className="mx-auto max-w-[800px] text-muted-foreground">
            Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we&apos;ve had with
            diverse clients across various industries. Let our work speak for itself.
          </p>
        </motion.div>

        <div className="mx-auto grid gap-8 mt-16 lg:grid-cols-2 items-start">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-gradient-to-b from-[#1A1A1A] via-[#1A1A1A]/60 to-background rounded-3xl border-none  shadow-none group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="p-4 md:p-8 relative">
                <div className="relative w-full bg-[#1A1A1A] rounded-[17px]  bg-[url('/bg-small.svg')]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={600}
                    className="opacity-20 rounded-[17px]"
                  />
                  <div className="absolute -bottom-5 w-full flex items-center justify-center">
                    <Button
                      variant="outline"
                      size={"lg"}
                      className="mx-auto"
                    >
                      View Projects Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="mt-10 space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex flex-col md:flex-row text-white md:items-center md:justify-between text-sm">
                    <p className="text-white">Category: {project.category}</p>
                    <p>{project.date}</p>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            size="lg"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

