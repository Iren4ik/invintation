'use client'

import { useEffect, useState } from "react";

type ImageRotateGridProps = {
  blocks: string[][];
  interval?: number;
};

// const sequence = [0, 5, 1, 4, 3, 2];
const sequence = [3, 2, 0, 5, 1, 4];

export default function PicturesGrid({
  blocks,
  interval = 2000,
}: ImageRotateGridProps) {
  const blockCount = blocks.length;

  const [indexes, setIndexes] = useState<number[]>(Array(blockCount).fill(0));
  const [prevIndexes, setPrevIndexes] = useState<number[]>(Array(blockCount).fill(0));
  const [step, setStep] = useState(0);
  const [activeBlock, setActiveBlock] = useState<number | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndexes((prev) => {
        const next = [...prev];
        const blockIndex = sequence[step % sequence.length];

        setPrevIndexes(prev);

        next[blockIndex] =
          (next[blockIndex] + 1) % blocks[blockIndex].length;

        setActiveBlock(blockIndex);

        return next;
      });

      setStep((prev) => prev + 1);
    }, interval);

    return () => clearInterval(intervalId);
  }, [step, blocks, interval]);

  return (
    <div className="grid grid-cols-3 md:grid-cols-6">
      {blocks.map((images, blockIndex) => (
        <div
          key={blockIndex}
          className="relative aspect-[2/3] overflow-hidden"
        >
          {/* старая */}
          <img
            src={images[prevIndexes[blockIndex]]}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* новая */}
          <img
            src={images[indexes[blockIndex]]}
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-opacity duration-500
              ${
                activeBlock === blockIndex
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          />
        </div>
      ))}
    </div>
  );
};