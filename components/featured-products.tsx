import { ProductListThumbnail } from "@/components/product-list-thumbnail";
import { productListSchema } from "@/lib/schema";
import { z } from "zod";

export function FeaturedProducts({
  products,
}: {
  products: z.infer<typeof productListSchema>;
}) {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.data.slice(0, 4).map((product) => (
            <ProductListThumbnail key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
