import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  initials: string;
  role: string;
  rating: number;
  review: string;
  image?: string;
  index?: string | number;
}

export function TestimonialCard({ 
  name, 
  initials, 
  role, 
  rating, 
  review,
  image,
  index = 0
}: TestimonialCardProps) {
  return (
    <Card 
      className="bg-white border-gray-200 p-6 min-w-[320px] md:min-w-[380px] flex-shrink-0 shadow-md"
      data-testid={`card-testimonial-${index}`}
    >
      <CardContent className="p-0">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="h-12 w-12 flex-shrink-0">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-black font-bold text-lg">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold text-black text-base" data-testid={`text-name-${index}`}>
              {name}
            </h4>
            <p className="text-primary text-sm font-medium" data-testid={`text-role-${index}`}>
              {role}
            </p>
          </div>
        </div>
        <div className="flex gap-1 mb-3" data-testid={`rating-${index}`}>
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-gray-700 text-sm leading-relaxed italic" data-testid={`text-review-${index}`}>
          "{review}"
        </p>
      </CardContent>
    </Card>
  );
}
