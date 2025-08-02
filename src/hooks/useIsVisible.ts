import { useRef } from "react";
import { useInView } from "framer-motion";

type MarginFormat =
  | `${number}px`
  | `${number}px ${number}px`
  | `${number}px ${number}px ${number}px`
  | `${number}px ${number}px ${number}px ${number}px`;

type UseIsVisibleOptions = {
  margin?: MarginFormat;
};

type UseIsVisibleReturn = {
  ref: React.RefObject<HTMLElement | null>;
  inView: boolean;
  margin: MarginFormat;
};

export function useIsVisible({ margin = "-200px" }: UseIsVisibleOptions = {}): UseIsVisibleReturn {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin });

  return { ref, inView, margin };
}
