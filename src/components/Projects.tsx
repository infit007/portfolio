import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "Course-Selling Website",
        description: " Developed a Fullstack Course Selling App using MERN, enabling admin role management and user functionality" ,
        tech: "MongoDB, Express JS, React JS, Node JS",
        link: "https://course-selling-website-two.vercel.app/",
    },
    {
        title: "Interactive Dashboard for Supermarket Sales Analysis",
        description: "Developed an interactive dashboard analyzing sales data for 1,000+ transactions across 3 branches, providing insights into sales trends, customer demographics, and product performance.",
        tech: "Power BI, DAX, Excel",
        link: "https://github.com/infit007/Supermarket-Sales-Analytics",
    },
    {
        title: "End-to-End Loan Repayment Prediction Model",
        description: "Built a loan repayment prediction model using 9,579 records, achieving 85% accuracy.",
        tech: " Python, Scikit-Learn, Pandas, Seaborn, Streamlit",
        link: "#",
    },
    {
        title: "Coffee Shop Website",
        description: "Created a responsive coffee shop website using Tailwind CSS and Flowbite, streamlining development with reusable components.",
        tech: "HTML, CSS, JavaScript, Tailwind CSS, APIs",
        link: "https://infit007.github.io/Coffee-Shop-Website/",
    },
    {
        title: "Microscopic Fungi Classification System",
        description: "Engineered and implemented a deep learning model using MobileNetV2 architecture, achieving 70.62% accuracy by training on a dataset of 5000 images across 5 classes..",
        tech: "Python, Computer Vision, Flask, TensorFlow/Keras",
        link: "https://github.com/infit007/fungi_classification",
    },
    {
        title: "Real-Time Driver Drowsiness Detection",
        description: "Developed a Driver Drowsiness Detection System using Python, OpenCV, and TensorFlow, employing a pre-trained CNN model for real-time eye state classification (’Open’ or ’Closed’) at 30 FPS.",
        tech: "OpenCV, TensorFlow/Keras, Pygame",
        link: "",
    },
    
]

const techColors = {
    "React": "bg-blue-500",
    "React Native": "bg-green-500",
    "Vue.js": "bg-purple-500",
    "Python": "bg-yellow-500",
}

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <Link
                                    href={p.link}
                                    className="font-semibold text-primary hover:underline"
                                >
                                    {p.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech}
                                        </span>
                                    </div>
                                    <Link
                                        href={p.link}
                                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        View Project
                                        <ExternalLink className="inline-block size-3" />
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}