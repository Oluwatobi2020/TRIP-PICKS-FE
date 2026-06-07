import { Icon } from "@iconify/react";
import CategoryImageOne from "@/assets/category-one.png";
import CategoryImageTwo from "@/assets/category-two.png";
import CategoryImageThree from "@/assets/category-three.png";
import CategoryImageFour from "@/assets/category-four.png";
import CategoryImageFive from "@/assets/category-five.png";
import CategoryImageSix from "@/assets/category-six.png";
import CategoryImageSeven from "@/assets/category-seven.png";
import CategoryImageEight from "@/assets/category-eight.png";
import LondonHotelPic from "@/assets/london-hotel.png";
import HotelPic from "@/assets/homepageHotelPic.png";

export const listOfCurrency = [
  {
    id: 1,
    desc: "USD",
    val: "USD",
  },
  {
    id: 2,
    desc: "EUR",
    val: "EUR",
  },
  {
    id: 3,
    desc: "GBP",
    val: "GBP",
  },
  {
    id: 3,
    desc: "NGN",
    val: "NGN",
  },
];

export const whyBookWithUs = [
  {
    id: 1,
    title: "Daytime Stays",
    body: "Book hotel rooms within curated time slots set by the hotel",
    icon: (
      <Icon
        icon="ri:money-dollar-circle-line"
        width="32"
        height="32"
        color="#335CFF"
      />
    ),
  },
  {
    id: 2,
    title: "Instant Booking",
    body: "No long forms, no stress. Book in seconds and get confirmation instantly.",
    icon: (
      <Icon
        icon="material-symbols:check-circle-outline-rounded"
        width="32"
        height="32"
        color="#335CFF"
      />
    ),
  },
  {
    id: 3,
    title: "Citywide Options",
    body: "Hotels for every budget & vibe. Find the perfect place for your needs.",
    icon: <Icon icon="tabler:world" width="32" height="32" color="#335CFF" />,
  },
  {
    id: 4,
    title: "Secure Payments",
    body: "Your info stays protected with industry-standard encryption.",
    icon: (
      <Icon
        icon="ri:secure-payment-line"
        width="32"
        height="32"
        color="#335CFF"
      />
    ),
  },
  {
    id: 5,
    title: "Cancel Anytime",
    body: "Flexible cancellation policies. Plans change, we understand.",
    icon: <Icon icon="iconoir:cancel" width="32" height="32" color="#335CFF" />,
  },
  {
    id: 6,
    title: "24/7 Support",
    body: "We've always got your back. Reach us anytime, day or night.",
    icon: (
      <Icon
        icon="streamline-plump:customer-support-3"
        width="32"
        height="32"
        color="#335CFF"
      />
    ),
  },
];

export const categoryList = [
  {
    id: 1,
    title: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    ratings: "4.5",
    amount: 800,
    categoryImage: CategoryImageOne,
  },
  {
    id: 2,
    title: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    ratings: "4.5",
    amount: 800,
    categoryImage: CategoryImageTwo,
  },
  {
    id: 3,
    title: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    ratings: "4.5",
    amount: 800,
    categoryImage: CategoryImageThree,
  },
  {
    id: 4,
    title: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    ratings: "4.5",
    amount: 800,
    categoryImage: CategoryImageFour,
  },
  {
    id: 5,
    title: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    ratings: "4.5",
    amount: 800,
    categoryImage: CategoryImageFive,
  },
  {
    id: 6,
    title: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    ratings: "4.5",
    amount: 800,
    categoryImage: CategoryImageSix,
  },
  {
    id: 7,
    title: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    ratings: "4.5",
    amount: 800,
    categoryImage: CategoryImageSeven,
  },
  {
    id: 8,
    title: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    ratings: "4.5",
    amount: 800,
    categoryImage: CategoryImageEight,
  },
];

export const categoryListTwo = [
  {
    id: 1,
    title: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    ratings: "4.5",
    amount: 800,
    categoryImage: CategoryImageOne,
  },
  {
    id: 2,
    title: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    ratings: "4.5",
    amount: 800,
    categoryImage: CategoryImageTwo,
  },
  {
    id: 3,
    title: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    ratings: "4.5",
    amount: 800,
    categoryImage: CategoryImageThree,
  },
  {
    id: 4,
    title: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    ratings: "4.5",
    amount: 800,
    categoryImage: CategoryImageFour,
  },
];
export const locationAndNumbersOfHotelsList = [
  {
    id: 1,
    categoryImage: LondonHotelPic,
    location: "London",
    count: "800",
  },
  {
    id: 2,
    categoryImage: CategoryImageTwo,
    location: "New York",
    count: "650",
  },
  {
    id: 3,
    categoryImage: LondonHotelPic,
    location: "Dubai",
    count: "720",
  },
  {
    id: 4,
    categoryImage: CategoryImageFour,
    location: "Paris",
    count: "540",
  },
  {
    id: 5,
    categoryImage: LondonHotelPic,
    location: "Rome",
    count: "430",
  },
  {
    id: 6,
    categoryImage: CategoryImageSix,
    location: "Istanbul",
    count: "390",
  },
  {
    id: 7,
    categoryImage: LondonHotelPic,
    location: "Barcelona",
    count: "480",
  },
  {
    id: 8,
    categoryImage: CategoryImageEight,
    location: "Singapore",
    count: "520",
  },
];

export const sampleTestimonies = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "San Francisco, CA",
    content:
      "Perfect for my business trips! I can book a room for just a few hours between meetings. The flexibility is exactly what I needed.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "San Francisco, CA",
    content:
      "Perfect for my business trips! I can book a room for just a few hours between meetings. The flexibility is exactly what I needed.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "San Francisco, CA",
    content:
      "Perfect for my business trips! I can book a room for just a few hours between meetings. The flexibility is exactly what I needed.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "San Francisco, CA",
    content:
      "Perfect for my business trips! I can book a room for just a few hours between meetings. The flexibility is exactly what I needed.",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    role: "San Francisco, CA",
    content:
      "Perfect for my business trips! I can book a room for just a few hours between meetings. The flexibility is exactly what I needed.",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    role: "San Francisco, CA",
    content:
      "Perfect for my business trips! I can book a room for just a few hours between meetings. The flexibility is exactly what I needed.",
  },
  {
    id: 7,
    name: "Sarah Johnson",
    role: "San Francisco, CA",
    content:
      "Perfect for my business trips! I can book a room for just a few hours between meetings. The flexibility is exactly what I needed.",
  },
  {
    id: 8,
    name: "Sarah Johnson",
    role: "San Francisco, CA",
    content:
      "Perfect for my business trips! I can book a room for just a few hours between meetings. The flexibility is exactly what I needed.",
  },
];

export const listOfHotels = [
  {
    id: 1,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: HotelPic,
  },
  {
    id: 2,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: CategoryImageOne,
  },
  {
    id: 3,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: CategoryImageTwo,
  },
  {
    id: 4,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: CategoryImageThree,
  },
  {
    id: 5,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: CategoryImageFour,
  },
  {
    id: 6,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: CategoryImageFive,
  },
  {
    id: 7,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: CategoryImageSix,
  },
  {
    id: 8,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: CategoryImageSeven,
  },
  {
    id: 9,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: CategoryImageEight,
  },
  {
    id: 10,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: HotelPic,
  },
  {
    id: 11,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: CategoryImageOne,
  },
  {
    id: 12,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: CategoryImageTwo,
  },
  {
    id: 13,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: CategoryImageThree,
  },
  {
    id: 14,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: CategoryImageFour,
  },
  {
    id: 15,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: CategoryImageFive,
  },
  {
    id: 16,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: CategoryImageSix,
  },
  {
    id: 17,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: CategoryImageSeven,
  },
  {
    id: 18,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: CategoryImageEight,
  },
  {
    id: 19,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: HotelPic,
  },
  {
    id: 20,
    name: "The Azure Sanctuary",
    location: "D28 Birmingham street, london",
    starRatings: 5,
    reviewRatings: 9.5,
    numberOfReviews: "1236",
    amount: 135,
    discount: 3,
    discountedAmount: 165,
    hotelPic: CategoryImageOne,
  },
];

export const userReviews = [
  {
    id: 1,
    name: "Adebayo Ogunleye",
    date: "2025-01-14",
    comment:
      "Great experience overall. The interface was smooth and easy to navigate.",
    rating: 4.5,
    ratingDescription: "Excellent",
  },
  {
    id: 2,
    name: "Chiamaka Okafor",
    date: "2025-01-22",
    comment:
      "Customer support was responsive, but there’s room for improvement in performance.",
    rating: 3.8,
    ratingDescription: "Very Good",
  },
  {
    id: 3,
    name: "Ibrahim Sule",
    date: "2025-02-02",
    comment:
      "Very intuitive design and fast load times. I’d definitely recommend it.",
    rating: 5,
    ratingDescription: "Excellent",
  },
  {
    id: 4,
    name: "Tolulope Akinwale",
    date: "2025-02-10",
    comment:
      "Decent features, but some parts of the app feel a bit unfinished.",
    rating: 3.2,
    ratingDescription: "Good",
  },
];

export const hotelLocations = [
  {
    location: "Lagos, Nigeria",
    hotelsAvailable: 320,
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc",
  },
  {
    location: "Abuja, Nigeria",
    hotelsAvailable: 180,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
  {
    location: "Accra, Ghana",
    hotelsAvailable: 210,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
  },
  {
    location: "Cape Town, South Africa",
    hotelsAvailable: 290,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  },
  {
    location: "Nairobi, Kenya",
    hotelsAvailable: 170,
    image: "https://images.unsplash.com/photo-1543582890-139a4ff9946e",
  },
  {
    location: "Dubai, UAE",
    hotelsAvailable: 540,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
  {
    location: "London, United Kingdom",
    hotelsAvailable: 820,
    image: "https://images.unsplash.com/photo-1488747279002-c8523379faaa",
  },
  {
    location: "Paris, France",
    hotelsAvailable: 760,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    location: "New York City, USA",
    hotelsAvailable: 910,
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  },
  {
    location: "Los Angeles, USA",
    hotelsAvailable: 640,
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
  },
  {
    location: "Tokyo, Japan",
    hotelsAvailable: 880,
    image: "https://images.unsplash.com/photo-1549693578-d683be217e58",
  },
  {
    location: "Seoul, South Korea",
    hotelsAvailable: 510,
    image: "https://images.unsplash.com/photo-1517153295259-74eb0b416cee",
  },
  {
    location: "Singapore",
    hotelsAvailable: 430,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
  },
  {
    location: "Bangkok, Thailand",
    hotelsAvailable: 670,
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
  },
  {
    location: "Rome, Italy",
    hotelsAvailable: 590,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    location: "Barcelona, Spain",
    hotelsAvailable: 560,
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
  },
];

export const amountFormatterWithoutCurrency = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const getStatusStyles = (status?: string) => {
  const normalizedStatus = status?.toLowerCase()?.trim();

  switch (normalizedStatus) {
    case "confirmed":
      return {
        background: "#E0FAEC",
        color: "#1FC16B",
      };

    case "pending":
      return {
        background: "#FFF7E0",
        color: "#F6B51E",
      };

    default:
      return {
        background: "#FDECEC",
        color: "error.main",
      };
  }
};

export const currencySymbols: Record<string, string> = {
  USD: "$",
  NGN: "₦",
  EUR: "€",
  GBP: "£",
};

export type CurrencyCode = "USD" | "NGN" | "EUR" | "GBP";

export const currencies: Record<
  CurrencyCode,
  {
    symbol: string;
    label: string;
  }
> = {
  USD: {
    symbol: "$",
    label: "US Dollar",
  },
  NGN: {
    symbol: "₦",
    label: "Naira",
  },
  EUR: {
    symbol: "€",
    label: "Euro",
  },
  GBP: {
    symbol: "£",
    label: "Pound Sterling",
  },
};

export const activities = [
  {
    id: "act_001",
    title: "Nike Art Gallery",
    category: "Culture",
    area: "Lekki",
    durationMinutes: 90,
    priceLevel: 2,
    rating: 4.8,
    imageUrl: "https://example.com/image1.jpg",
    description:
      "Browse contemporary African art in one of Lagos' best-known galleries.",
    tags: ["art", "indoor", "culture"],
  },
  {
    id: "act_002",
    title: "Lekki Conservation Centre",
    category: "Nature",
    area: "Lekki",
    durationMinutes: 120,
    priceLevel: 2,
    rating: 4.7,
    imageUrl: "https://example.com/image2.jpg",
    description:
      "Walk through nature trails and experience the famous canopy walkway.",
    tags: ["nature", "outdoor", "adventure"],
  },
  {
    id: "act_003",
    title: "Tarkwa Bay Beach",
    category: "Leisure",
    area: "Victoria Island",
    durationMinutes: 240,
    priceLevel: 2,
    rating: 4.6,
    imageUrl: "https://example.com/image3.jpg",
    description:
      "Enjoy a relaxing day at one of Lagos' most popular island beaches.",
    tags: ["beach", "outdoor", "relaxation"],
  },
  {
    id: "act_004",
    title: "Freedom Park",
    category: "Culture",
    area: "Lagos Island",
    durationMinutes: 90,
    priceLevel: 1,
    rating: 4.5,
    imageUrl: "https://example.com/image4.jpg",
    description: "Explore a historic landmark transformed into a cultural hub.",
    tags: ["history", "culture", "outdoor"],
  },
  {
    id: "act_005",
    title: "National Museum Lagos",
    category: "History",
    area: "Onikan",
    durationMinutes: 120,
    priceLevel: 1,
    rating: 4.4,
    imageUrl: "https://example.com/image5.jpg",
    description:
      "Discover Nigerian artifacts and learn about the nation's history.",
    tags: ["museum", "history", "indoor"],
  },
  {
    id: "act_006",
    title: "Boat Cruise on Lagos Lagoon",
    category: "Adventure",
    area: "Victoria Island",
    durationMinutes: 180,
    priceLevel: 3,
    rating: 4.7,
    imageUrl: "https://example.com/image6.jpg",
    description: "Take in scenic waterfront views on a guided boat cruise.",
    tags: ["water", "cruise", "outdoor"],
  },
  {
    id: "act_007",
    title: "Filmhouse Cinema",
    category: "Entertainment",
    area: "Lekki",
    durationMinutes: 150,
    priceLevel: 2,
    rating: 4.6,
    imageUrl: "https://example.com/image7.jpg",
    description:
      "Catch the latest blockbuster movies in a modern cinema setting.",
    tags: ["movies", "indoor", "entertainment"],
  },
  {
    id: "act_008",
    title: "JTown Indoor Karting",
    category: "Adventure",
    area: "Lekki",
    durationMinutes: 60,
    priceLevel: 3,
    rating: 4.5,
    imageUrl: "https://example.com/image8.jpg",
    description: "Race against friends on an exciting indoor karting track.",
    tags: ["karting", "sports", "indoor"],
  },
  {
    id: "act_009",
    title: "New Afrika Shrine",
    category: "Music",
    area: "Ikeja",
    durationMinutes: 180,
    priceLevel: 2,
    rating: 4.8,
    imageUrl: "https://example.com/image9.jpg",
    description: "Experience live Afrobeat performances in an iconic venue.",
    tags: ["music", "nightlife", "culture"],
  },
  {
    id: "act_010",
    title: "Elegushi Beach",
    category: "Leisure",
    area: "Lekki",
    durationMinutes: 240,
    priceLevel: 2,
    rating: 4.3,
    imageUrl: "https://example.com/image10.jpg",
    description:
      "Spend the day by the ocean with food, music, and beach activities.",
    tags: ["beach", "outdoor", "family"],
  },
  {
    id: "act_011",
    title: "Lufasi Nature Park",
    category: "Nature",
    area: "Lekki",
    durationMinutes: 120,
    priceLevel: 1,
    rating: 4.4,
    imageUrl: "https://example.com/image11.jpg",
    description: "Explore wildlife exhibits and peaceful green surroundings.",
    tags: ["nature", "wildlife", "outdoor"],
  },
  {
    id: "act_012",
    title: "Terra Kulture",
    category: "Culture",
    area: "Victoria Island",
    durationMinutes: 120,
    priceLevel: 2,
    rating: 4.7,
    imageUrl: "https://example.com/image12.jpg",
    description: "Enjoy Nigerian art, theatre, and cultural exhibitions.",
    tags: ["culture", "theatre", "art"],
  },
  {
    id: "act_013",
    title: "Upbeat Recreation Centre",
    category: "Sports",
    area: "Lekki",
    durationMinutes: 90,
    priceLevel: 2,
    rating: 4.6,
    imageUrl: "https://example.com/image13.jpg",
    description:
      "Try trampolines, climbing walls, and indoor fitness activities.",
    tags: ["fitness", "sports", "indoor"],
  },
  {
    id: "act_014",
    title: "Omu Resort",
    category: "Adventure",
    area: "Ibeju-Lekki",
    durationMinutes: 300,
    priceLevel: 3,
    rating: 4.5,
    imageUrl: "https://example.com/image14.jpg",
    description:
      "Enjoy amusement rides, animal encounters, and water attractions.",
    tags: ["resort", "family", "adventure"],
  },
  {
    id: "act_015",
    title: "Bogobiri House",
    category: "Music",
    area: "Ikoyi",
    durationMinutes: 150,
    priceLevel: 2,
    rating: 4.4,
    imageUrl: "https://example.com/image15.jpg",
    description: "Listen to live music performances in a creative atmosphere.",
    tags: ["music", "arts", "nightlife"],
  },
  {
    id: "act_016",
    title: "Kalakuta Museum",
    category: "History",
    area: "Ikeja",
    durationMinutes: 90,
    priceLevel: 1,
    rating: 4.5,
    imageUrl: "https://example.com/image16.jpg",
    description: "Learn about the life and legacy of Afrobeat pioneer Fela.",
    tags: ["history", "museum", "music"],
  },
  {
    id: "act_017",
    title: "Oniru Beach",
    category: "Leisure",
    area: "Victoria Island",
    durationMinutes: 240,
    priceLevel: 2,
    rating: 4.3,
    imageUrl: "https://example.com/image17.jpg",
    description: "Relax by the shore and enjoy a lively beachfront atmosphere.",
    tags: ["beach", "outdoor", "social"],
  },
  {
    id: "act_018",
    title: "Johnson Jakande Tinubu Park",
    category: "Nature",
    area: "Alausa",
    durationMinutes: 60,
    priceLevel: 1,
    rating: 4.2,
    imageUrl: "https://example.com/image18.jpg",
    description: "Take a stroll through landscaped gardens and fountains.",
    tags: ["park", "nature", "relaxation"],
  },
  {
    id: "act_019",
    title: "Paint & Sip Workshop",
    category: "Arts",
    area: "Lekki",
    durationMinutes: 120,
    priceLevel: 2,
    rating: 4.6,
    imageUrl: "https://example.com/image19.jpg",
    description: "Create your own artwork in a fun guided painting session.",
    tags: ["art", "creative", "indoor"],
  },
  {
    id: "act_020",
    title: "Escape Room Challenge",
    category: "Entertainment",
    area: "Victoria Island",
    durationMinutes: 60,
    priceLevel: 2,
    rating: 4.7,
    imageUrl: "https://example.com/image20.jpg",
    description: "Solve puzzles and clues with friends before time runs out.",
    tags: ["games", "teamwork", "indoor"],
  },
  {
    id: "act_021",
    title: "Go Bowling",
    category: "Entertainment",
    area: "Lekki",
    durationMinutes: 90,
    priceLevel: 2,
    rating: 4.5,
    imageUrl: "https://example.com/image21.jpg",
    description: "Enjoy competitive bowling in a family-friendly environment.",
    tags: ["bowling", "games", "indoor"],
  },
  {
    id: "act_022",
    title: "Badagry Heritage Tour",
    category: "History",
    area: "Badagry",
    durationMinutes: 360,
    priceLevel: 3,
    rating: 4.8,
    imageUrl: "https://example.com/image22.jpg",
    description: "Visit historical landmarks and learn about Nigeria's past.",
    tags: ["history", "tour", "culture"],
  },
  {
    id: "act_023",
    title: "Kayaking Experience",
    category: "Adventure",
    area: "Lekki",
    durationMinutes: 90,
    priceLevel: 3,
    rating: 4.6,
    imageUrl: "https://example.com/image23.jpg",
    description: "Paddle through calm waterways and enjoy scenic views.",
    tags: ["water", "sports", "outdoor"],
  },
  {
    id: "act_024",
    title: "Food Tasting Tour",
    category: "Food",
    area: "Victoria Island",
    durationMinutes: 180,
    priceLevel: 3,
    rating: 4.7,
    imageUrl: "https://example.com/image24.jpg",
    description: "Sample a variety of local and international cuisines.",
    tags: ["food", "tour", "social"],
  },
  {
    id: "act_025",
    title: "Chess Club Meetup",
    category: "Social",
    area: "Yaba",
    durationMinutes: 120,
    priceLevel: 1,
    rating: 4.4,
    imageUrl: "https://example.com/image25.jpg",
    description:
      "Challenge players of different skill levels in friendly matches.",
    tags: ["chess", "games", "community"],
  },
  {
    id: "act_026",
    title: "Photography Walk",
    category: "Arts",
    area: "Ikoyi",
    durationMinutes: 120,
    priceLevel: 1,
    rating: 4.5,
    imageUrl: "https://example.com/image26.jpg",
    description:
      "Capture beautiful cityscapes and improve your photography skills.",
    tags: ["photography", "creative", "outdoor"],
  },
  {
    id: "act_027",
    title: "Yoga in the Park",
    category: "Wellness",
    area: "Ikoyi",
    durationMinutes: 60,
    priceLevel: 1,
    rating: 4.7,
    imageUrl: "https://example.com/image27.jpg",
    description: "Join a guided yoga session in a calm outdoor environment.",
    tags: ["wellness", "fitness", "outdoor"],
  },
  {
    id: "act_028",
    title: "Cooking Masterclass",
    category: "Food",
    area: "Lekki",
    durationMinutes: 180,
    priceLevel: 2,
    rating: 4.8,
    imageUrl: "https://example.com/image28.jpg",
    description: "Learn to prepare delicious meals from experienced chefs.",
    tags: ["food", "learning", "indoor"],
  },
  {
    id: "act_029",
    title: "Mini Golf Experience",
    category: "Entertainment",
    area: "Victoria Island",
    durationMinutes: 90,
    priceLevel: 2,
    rating: 4.5,
    imageUrl: "https://example.com/image29.jpg",
    description:
      "Enjoy a fun and casual mini-golf session with friends or family.",
    tags: ["golf", "games", "outdoor"],
  },
  {
    id: "act_030",
    title: "Sunset Rooftop Hangout",
    category: "Leisure",
    area: "Victoria Island",
    durationMinutes: 120,
    priceLevel: 3,
    rating: 4.8,
    imageUrl: "https://example.com/image30.jpg",
    description:
      "Watch the sunset while enjoying city views from a rooftop venue.",
    tags: ["views", "social", "relaxation"],
  },
];
