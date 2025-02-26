import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { CSSProperties, ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  backgroundImage?: string;
  svgComponent?: ReactNode;
  link: string;
  index: number;
  imageStyle?: CSSProperties;
  backgroundImageStyle?: CSSProperties;
}

export default function ProjectCard({
  title,
  description,
  image,
  backgroundImage,
  svgComponent,
  link,
  index,
  imageStyle,
  backgroundImageStyle,
}: ProjectCardProps) {
  return (
    <Link href={link}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="cursor-pointer"
      >
        <Card className="overflow-hidden h-full">
          <div className="aspect-video relative">
            {image ? (
              <img
                src={image}
                alt={title}
                className="object-contain w-full h-full"
                style={imageStyle}
              />
            ) : backgroundImage ? (
              <div 
                className="w-full h-full bg-contain bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url(${backgroundImage})`,
                  ...backgroundImageStyle
                }}
              />
            ) : svgComponent ? (
              <div className="w-full h-full flex items-center justify-center p-6">
                {svgComponent}
              </div>
            ) : null}
          </div>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
