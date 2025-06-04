import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "View the pricing for the services",
};

export default function Pricing() {
  return <h1 className="text-6xl font-bold">Pricing</h1>;
}
