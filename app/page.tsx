import { Hero } from "@/components/hero";
import { ProductList } from "@/components/product-list";
import { getProducts } from "@/lib/products";
import { NewsletterSignup } from "@/components/newsletter-signup";

export default async function Page() {
  const products = await getProducts();

  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <div className="mx-auto max-w-screen-xl px-4">
        <ProductList list={products} />
      </div>
      <NewsletterSignup />
    </div>
  );
}
