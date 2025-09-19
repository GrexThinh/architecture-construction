"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "./carousel";

type Props = React.ComponentProps<typeof Carousel> & {
  autoplayDelay?: number;
  autoplayStopOnInteraction?: boolean;
};

export default function ClientCarousel({
  autoplayDelay = 3000,
  autoplayStopOnInteraction = true,
  children,
  opts,
  plugins,
  ...rest
}: Props) {
  const mergedPlugins = [
    Autoplay({
      delay: autoplayDelay,
      stopOnInteraction: autoplayStopOnInteraction,
    }),
    ...(Array.isArray(plugins) ? plugins : []),
  ];

  return (
    <Carousel opts={opts} plugins={mergedPlugins} {...rest}>
      {children}
    </Carousel>
  );
}
