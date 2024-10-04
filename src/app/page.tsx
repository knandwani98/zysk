"use client";

import { Analytics } from "@/components/Analytics";
import { Blogs } from "@/components/Blogs";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Review } from "@/components/Review";
import { Trial } from "@/components/Trial";

export default function Home() {
  return (
    <main>
      <Header />
      <hr className="separator" />

      <Hero />
      <hr className="separator" />

      <Features />
      <hr className="separator" />

      <Review />

      <Analytics />
      <hr className="separator" />

      <Blogs />

      <Trial />
      <Footer />
    </main>
  );
}
