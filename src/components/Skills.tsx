import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// TODO: Update skills
const skills = [
    "C++", 
    "SQL", 
    "Python", 
    "Pandas", 
    "NumPy", 
    "Matplotlib", 
    "Seaborn", 
    "Power BI", 
    "Excel", 
    "Git", 
    "GitHub", 
    "Streamlit", 
    "GCP", 
    "Salesforce CRM", 
    "Visualforce", 
    "LWC", 
    "TensorFlow", 
    "Keras", 
    "PyTorch", 
    "scikit-learn", 
    "OpenCV", 
    "MERN Stack", 
    "MongoDB", 
    "ExpressJS", 
    "ReactJS", 
    "NodeJS", 
    "DAX", 
    "Apex Programming", 
    "Vite"
];


export const Skills = () => {
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                        <Badge key={i} variant="secondary">{s}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}