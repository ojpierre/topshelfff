import { ProductBuyForm } from "@/components/product-buy-form";
import { productSchema } from "@/lib/schema";
import Image from "next/image";
import { z } from "zod";
import { ImageIcon } from "lucide-react";
import { useState } from "react";

export function ProductDetail({
  product,
}: {
  product: z.infer<typeof productSchema>;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-background flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        <div className="ring-border relative aspect-square overflow-hidden rounded-xl ring-1">
          {product.images?.[0] && !imageError ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              width={600}
              height={600}
              className="size-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex size-full items-center justify-center bg-muted">
              <ImageIcon className="size-16 text-muted-foreground" />
            </div>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-muted-foreground mb-4">{product.description}</p>
        <div className="text-2xl font-bold mb-6">
          {product.price.display_amount}
        </div>
        <ProductBuyForm priceId={product.price.id} />
      </div>
    </div>
  );
}
