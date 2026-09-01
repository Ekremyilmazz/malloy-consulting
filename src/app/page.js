import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import FeaturedBook from "@/components/sections/FeaturedBook";
import BookingCTA from "@/components/sections/BookingCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <FeaturedBook />
      <BookingCTA />
    </div>
  );
}