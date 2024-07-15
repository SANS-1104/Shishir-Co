import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import cn from "../../utils/cn";
import '../../Team.css'

export default function HoverEffect({ items, className }) {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return ( 
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-blue-500/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardLink href={item.link}>{item.linkText}</CardLink>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div className={cn("card-border-clr h-full w-full p-4 bg-white overflow-hidden relative z-20", className)}>
      <div className="relative z-50 h-full">{children}</div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-color text-2xl font2 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("mt-8 content-clr font6 tracking-wide leading-relaxed font-medium mb-12 text-base", className)}>
      {children}
    </p>
  );
};

export const CardLink = ({ className, children, href }) => {
  return (
    <a href={href} className={cn("text-blue-500  hover:underline absolute text-color bottom-4", className)}>
      
      {children}
      <i class="fa-solid fa-arrow-up-right-from-square ml-2"></i>
    </a>
  );
};
