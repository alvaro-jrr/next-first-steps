import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Learn the information to contact me",
};

export default function Contact() {
  return <h1 className="text-6xl font-bold">Contact</h1>;
}
