import { Card, CardContent } from '@/react-app/components/ui/card';
import { Badge } from '@/react-app/components/ui/badge';
import { productCategories } from '@/data/products';
import { Sparkles } from 'lucide-react';

export default function Products() {
  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Product Range</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Quality Products from
            <span className="block bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
              India to the World
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of premium products, carefully sourced and quality-tested for international markets
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <Card
              key={category.id}
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.products.slice(0, 4).map((product) => (
                    <Badge key={product} variant="secondary" className="text-xs">
                      {product}
                    </Badge>
                  ))}
                  {category.products.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{category.products.length - 4} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
