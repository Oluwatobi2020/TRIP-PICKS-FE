"use client";

import { FaStar } from "react-icons/fa";

type Props = {
  rating: number;
  size?: number;
};

const StarRatingTwo = ({ rating, size = 24 }: Props) => {
  // Ensure rating stays between 0 and 5
  const normalizedRating = Math.max(0, Math.min(rating, 5));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
      }}
    >
      {[...Array(5)].map((_, index) => {
        // Each star represents 1 rating value
        const starValue = index + 1;

        // Calculate fill percentage for this specific star
        let fillPercentage = 0;

        if (normalizedRating >= starValue) {
          // Fully filled star
          fillPercentage = 100;
        } else if (normalizedRating > index && normalizedRating < starValue) {
          // Partially filled star
          fillPercentage = (normalizedRating - index) * 100;
        }

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
              }}
            >
              <FaStar size={size} color="#F6B51E" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarRatingTwo;
