"use client";

import { FaStar } from "react-icons/fa";

type RatingBreakdown = Record<string, number>;

type Props = {
  ratingBreakdown: RatingBreakdown;
  size?: number;
};

const StarRating = ({
  ratingBreakdown,
  size = 24,
}: Props) => {
  const ratings = Object.values(ratingBreakdown);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
      }}
    >
      {ratings.map((value, index) => {
        // Ensure value stays between 0 and 5
        const normalizedValue = Math.max(
          0,
          Math.min(value, 5)
        );

        // Convert to percentage
        const fillPercentage =
          (normalizedValue / 5) * 100;

        return (
          <div
            key={index}
            style={{
              position: "relative",
              width: size,
              height: size,
            }}
          >
            {/* Background Star */}
            <FaStar
              size={size}
              color="#D9D9D9"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />

            {/* Filled Star */}
            <div
              style={{
                width: `${fillPercentage}%`,
                overflow: "hidden",
                position: "absolute",
                top: 0,
                left: 0,
                whiteSpace: "nowrap",
                display: "inline-block",
              }}
            >
              <FaStar
                size={size}
                color="#F6B51E"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;