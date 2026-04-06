import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

        {/* Detailed Extracted Variants */}
        {product.variants && product.variants.length > 0 && (
          <div className="mt-12 space-y-16">
            {product.variants.map((variant: any, idx: number) => (
              <div key={idx} className="bg-card border border-border rounded-xl shadow-sm p-8">
                <h3 className="text-2xl font-bold text-primary border-b border-border pb-4 mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {variant.title}
                </h3>

                {variant.tableData && (
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-foreground/90">Technical Specifications</h4>
                    <div className="overflow-x-auto border border-border rounded-lg">
                      <Table>
                        <TableHeader className="bg-muted">
                          <TableRow>
                            {variant.tableData.headers.map((header: string, i: number) => (
                              <TableHead key={i} className="font-bold text-foreground">
                                {header}
                              </TableHead>
                            ))}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {variant.tableData.rows.map((row: string[], rowIndex: number) => (
                            <TableRow key={rowIndex} className="hover:bg-muted/50">
                              {row.map((cell: string, cellIndex: number) => (
                                <TableCell key={cellIndex} className="align-top">
                                  <div className="whitespace-pre-wrap">{cell}</div>
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                )}

                {variant.applications && variant.applications.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-foreground/90">Applications</h4>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                      {variant.applications.map((app: string, i: number) => (
                        <li key={i} className="leading-relaxed">{app}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {variant.images && variant.images.length > 0 && (
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-foreground/90">Product Gallery</h4>
                    <div className="flex flex-wrap items-center gap-6">
                      {variant.images.map((img: string, i: number) => (
                        <div key={i} className="bg-white p-2 rounded-lg border border-border shadow-sm flex items-center justify-center">
                          <img
                            src={img}
                            alt={`${variant.title} image ${i + 1}`}
                            className="max-h-32 object-contain hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}