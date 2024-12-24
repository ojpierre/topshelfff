import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CanceledPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Order Canceled</h1>
      <p className="text-xl mb-8">
        Your order has been canceled. No charges were made.
      </p>
      <Button asChild>
        <Link href="/">Return to Shop</Link>
      </Button>
    </div>
  );
}
