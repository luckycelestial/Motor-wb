import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="group">
            <Link href="/#products" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Products
            </Link>
          </Button>
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="flex justify-center items-center rounded-xl bg-muted/20 border shadow-inner overflow-hidden p-6">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto max-h-[400px] object-cover rounded-lg"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{product.icon}</div>
                <h1 className="text-3xl sm:text-4xl font-bold text-primary" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {product.name}
                </h1>
              </div>
              
              <h2 className="text-xl text-foreground/80 font-medium mb-6">
                {product.description}
              </h2>
              
              <div className="prose prose-slate dark:prose-invert">
                <p className="text-foreground/70 leading-relaxed text-lg">
                  {product.details}
                </p>
              </div>

              <div className="mt-10 flex gap-4">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/#contact">Enquire Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}