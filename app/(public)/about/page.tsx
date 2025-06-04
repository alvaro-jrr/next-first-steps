import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me",
  keywords: ["about", "Alvaro"],
};

export default function About() {
  return <h1 className="text-6xl font-bold">About</h1>;
}
