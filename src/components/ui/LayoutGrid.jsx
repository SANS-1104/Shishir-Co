"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

// Placeholder for cn utility function
const cn = (...classes) => classes.filter(Boolean).join(' ');

export default function LayoutGrid({ cards }) {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-20 grid grid-cols-1 md:grid-cols-3 max-w-4xl max-h-2xl mx-auto gap-16 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-2/3 m-auto z-50 flex justify-center items-center flex-wrap flex-col border-4 border-black bg-white"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            {selected?.id !== card.id && <BlurImage card={card} />}
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

LayoutGrid.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node,
      PropTypes.string,
    ]).isRequired,
    className: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  })).isRequired,
};

const BlurImage = ({ card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

BlurImage.propTypes = {
  card: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-white h-96 w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

SelectedCard.propTypes = {
  selected: PropTypes.shape({
    content: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node,
      PropTypes.string,
    ]).isRequired,
  }),
};
