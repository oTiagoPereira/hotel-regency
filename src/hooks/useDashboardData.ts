import { useState, useEffect } from "react";
import type { Guest } from "../components/GuestList/GuestList";

export interface Review {
  author: string;
  text: string;
  rating: number;
}

export const useDashboardData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [checkins, setCheckins] = useState<Guest[]>([]);
  const [checkouts, setCheckouts] = useState<Guest[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCheckins([
        {
          name: "Maria Santos",
          room: "205",
          time: "14:00",
          img: "https://ui-avatars.com/api/?name=Maria+Santos",
        },
        {
          name: "Carlos Lima",
          room: "312",
          time: "15:30",
          img: "https://ui-avatars.com/api/?name=Carlos+Lima",
        },
        {
          name: "Ana Costa",
          room: "108",
          time: "16:00",
          img: "https://ui-avatars.com/api/?name=Ana+Costa",
        },
      ]);
      setCheckouts([
        {
          name: "Pedro Silva",
          room: "401",
          time: "11:00",
          img: "https://ui-avatars.com/api/?name=Pedro+Silva",
        },
        {
          name: "Julia Mendes",
          room: "203",
          time: "12:00",
          img: "https://ui-avatars.com/api/?name=Julia+Mendes",
        },
        {
          name: "Roberto Alves",
          room: "506",
          time: "10:30",
          img: "https://ui-avatars.com/api/?name=Roberto+Alves",
        },
      ]);
      setReviews([
        {
          author: "Laura Oliveira",
          text: "Serviço impecável e quartos muito confortáveis!",
          rating: 5,
        },
        {
          author: "Marcos Pereira",
          text: "Localização perfeita e café da manhã delicioso.",
          rating: 4,
        },
      ]);
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return { isLoading, checkins, checkouts, reviews };
};
