import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  initials: string;
  role: string;
  rating: number;
  review: string;
  index?: number;
}

export function TestimonialCard({ 
  name, 
  initials, 
  role, 
  rating, 
  review,
  index = 0
}: TestimonialCardProps) {
  return (
    <Card 
      className="bg-white/10 backdrop-blur-sm border-primary/20 p-6 min-w-[320px] md:min-w-[380px] flex-shrink-0"
      data-testid={`card-testimonial-${index}`}
    >
      <CardContent className="p-0">
        <div className="flex items-start gap-4 mb-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
            <span className="text-black font-bold text-lg" data-testid={`text-initials-${index}`}>
              {initials}
            </span>
          </div>
          <div>
            <h4 className="font-bold text-white text-base" data-testid={`text-name-${index}`}>
              {name}
            </h4>
            <p className="text-primary text-sm" data-testid={`text-role-${index}`}>
              {role}
            </p>
          </div>
        </div>
        <div className="flex gap-1 mb-3" data-testid={`rating-${index}`}>
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-white/90 text-sm leading-relaxed italic" data-testid={`text-review-${index}`}>
          {review}
        </p>
      </CardContent>
    </Card>
  );
}
