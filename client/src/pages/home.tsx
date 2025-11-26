import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion, useReducedMotion } from "framer-motion";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useInView } from "@/hooks/use-in-view";
import { fadeInUp, fadeIn, scaleIn, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { AnimatedSection } from "@/components/animated-section";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  Heart, 
  Smile, 
  Palette, 
  Lightbulb, 
  Dumbbell, 
  Flame, 
  Users, 
  Zap,
  Activity,
  Target,
  Star,
  CheckCircle2,
  Check,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Loader2,
  Home as HomeIcon,
  Info,
  DollarSign,
  MessageSquare,
  TrendingUp,
  Menu,
  X,
  Video,
  Clock
} from "lucide-react";
import { SiWhatsapp, SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import transformationImage from "@assets/stock_images/before_and_after_wei_c6f6006f.jpg";
import workoutVideo from "@assets/5319089-uhd_3840_2160_25fps_1762541494599.mp4";
import heroVideo from "@assets/4325592-uhd_4096_2160_25fps_1762544359197.mp4";
import heroNewVideo from "@assets/hero-new.mp4";
import onlineClassImage from "@assets/generated_images/Online_fitness_class_women_c03f2b22.png";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonials } from "@/data/testimonials";
import transform1 from "@assets/image_1762684087328.png";
import transform2 from "@assets/image_1762684101410.png";
import transform3 from "@assets/image_1762684114427.png";
import transform4 from "@assets/image_1762684168147.png";
import transform5 from "@assets/image_1762684436027.png";
import transform6 from "@assets/image_1762684459075.png";
import transform7 from "@assets/image_1762684473690.png";
import transform8 from "@assets/image_1762684488005.png";
import trainer1Image from "@/assets/trainers/trainer1.png";
import trainer2Image from "@/assets/trainers/trainer2.png";
import trainer3Image from "@/assets/trainers/trainer3.png";
import cardioTrainingImage from "@assets/image_1762682663589.png";
import strengthTrainingImage from "@assets/image_1762682353257.png";
import flexibilityTrainingImage from "@assets/image_1762682466178.png";
import gymLogo from "@assets/gym-logo.png";
import hocLogo from "@assets/hoc-logo-transparent.png";
import ownerPhoto from "@assets/image_1762685263069.png";
import gymPhoto1 from "@assets/image_1762685345191.png";
import gymPhoto2 from "@assets/image_1762685364894.png";
import gymPhoto3 from "@assets/image_1762685382745.png";
import gymPhoto4 from "@assets/image_1762685391596.png";
import instagramIcon from "@assets/instagram-icon.png";
import facebookIcon from "@assets/facebook-icon.png";
import instagramVideo1 from "@assets/instagram_videos/video1.mp4";
import instagramVideo2 from "@assets/instagram_videos/video2.mp4";
import instagramVideo3 from "@assets/instagram_videos/video3.mp4";
import instagramVideo4 from "@assets/instagram_videos/video4.mp4";
import instagramVideo5 from "@assets/instagram_videos/video5.mp4";
import instagramVideo6 from "@assets/instagram_videos/video6.mp4";
import zumbaBanner from "@assets/class_banners/zumba.png";
import yogaBanner from "@assets/class_banners/yoga.png";
import aerobicsBanner from "@assets/class_banners/aerobics.png";
import cardioBanner from "@assets/class_banners/cardio.png";
import whatsappIcon from "@assets/whatsapp.svg";
import gymBackImage1 from "@assets/stock_images/dumbbells_fitness_gy_fc4bacfa.jpg";
import gymBackImage2 from "@assets/stock_images/dumbbells_fitness_gy_c2a617d6.jpg";
import gymBackImage3 from "@assets/stock_images/dumbbells_fitness_gy_1561c2c3.jpg";
import gymBackImage4 from "@assets/stock_images/dumbbells_fitness_gy_35149c86.jpg";
import gymBackImage5 from "@assets/stock_images/dumbbells_fitness_gy_0d51d04b.jpg";

const WHATSAPP_NUMBER = "918600126395";
const PHONE_NUMBER = "+91 8600126395";
const GOOGLE_REVIEWS_URL = "https://share.google/BOqrkzB7sb4X33Iy0";

interface TestimonialMobileCarouselProps {
  testimonials: typeof testimonials;
}

function TestimonialMobileCarousel({ testimonials }: TestimonialMobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              <Card className="bg-white/5 backdrop-blur-sm border-primary/20 p-6 h-auto">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-start gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-primary text-sm font-semibold">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {testimonial.review}
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-primary' 
                : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Stats configuration
const STATS_DATA = [
  { value: 2000, label: "Clients Transformed", suffix: "+" },
  { value: 18, label: "Certified Coaches", suffix: "" },
  { value: 32000, label: "Training Hours", suffix: "+" },
];

// Animated counter hook
function useCountUp(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!isInView) return;

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * target);

      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [target, isInView, duration]);

  return count;
}

// StatCard component
function StatCard({ value, label, suffix, index }: { value: number; label: string; suffix: string; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const count = useCountUp(value, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-2 md:p-4"
    >
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1" data-testid={`text-stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs md:text-sm text-white/80 font-medium leading-tight">{label}</div>
    </motion.div>
  );
}

export default function Home() {
  const { toast } = useToast();
  const [callDialogOpen, setCallDialogOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactMenuOpen, setContactMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      purpose: undefined,
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: (data: any) => {
      toast({
        title: "Thank you!",
        description: data.message || "We'll contact you shortly to discuss your fitness journey.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20want%20to%20book%20a%20free%20consultation%20for%20your%20fitness%20program.`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0 overflow-x-hidden">
      {/* Navigation Header */}
      <header className="fixed top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-xl shadow-lg shadow-black/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="w-full max-w-[1920px] mx-auto flex h-20 items-center justify-between gap-4 px-4 md:px-8 lg:px-12 xl:px-16 relative">
          <motion.div 
            className="flex items-center flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="focus:outline-none"
              aria-label="Scroll to top"
              data-testid="button-logo-home"
            >
              <img 
                src={hocLogo} 
                alt="HOC Fitness" 
                className="h-16 w-auto transition-transform duration-300 hover:scale-105 cursor-pointer" 
              />
            </button>
          </motion.div>
          
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-md border-l border-primary/20">
              <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                <X className="h-6 w-6 text-foreground" />
                <span className="sr-only">Close</span>
              </SheetClose>
              <nav className="flex flex-col gap-6 mt-8">
                <button 
                  onClick={() => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                >
                  ABOUT US
                </button>
                <button 
                  onClick={() => { document.getElementById('instagram-videos')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                >
                  COMMUNITY
                </button>
                <button 
                  onClick={() => { document.getElementById('transformations')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                >
                  TRANSFORMATIONS
                </button>
                <button 
                  onClick={() => { document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                >
                  SERVICES
                </button>
                {/* <button 
                  onClick={() => { document.querySelector('section.bg-white')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="text-lg font-medium hover:text-primary transition-colors text-left"
                >
                  <span className="text-pink-500">WOMENS PROGRAM</span>
                </button> */}
                <button 
                  onClick={() => { document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                >
                  PACKAGES
                </button>
                <button 
                  onClick={() => { document.getElementById('trainers')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                >
                  TRAINERS
                </button>
                <button 
                  onClick={() => { document.querySelector('[data-testid="section-testimonials"]')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                >
                  TESTIMONIALS
                </button>
                <button 
                  onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                >
                  CONTACT
                </button>
              </nav>
            </SheetContent>
          </Sheet>
          
          {/* Desktop Navigation Menu */}
          <motion.nav 
            className="hidden lg:flex items-center gap-2 xl:gap-3 flex-1 justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-3 py-3 text-xs font-bold text-foreground hover:text-primary transition-all duration-300 group rounded-lg hover-elevate whitespace-nowrap"
            >
              <span className="relative z-10">ABOUT US</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button 
              onClick={() => document.getElementById('instagram-videos')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-3 py-3 text-xs font-bold text-foreground hover:text-primary transition-all duration-300 group rounded-lg hover-elevate whitespace-nowrap"
            >
              <span className="relative z-10">COMMUNITY</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button 
              onClick={() => document.getElementById('transformations')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-3 py-3 text-xs font-bold text-foreground hover:text-primary transition-all duration-300 group rounded-lg hover-elevate whitespace-nowrap"
            >
              <span className="relative z-10">TRANSFORMATIONS</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button 
              onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-3 py-3 text-xs font-bold text-foreground hover:text-primary transition-all duration-300 group rounded-lg hover-elevate whitespace-nowrap"
            >
              <span className="relative z-10">SERVICES</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            {/* <button 
              onClick={() => document.querySelector('section.bg-white')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-3 py-3 text-xs font-bold hover:text-pink-400 transition-all duration-300 group rounded-lg hover-elevate whitespace-nowrap"
            >
              <span className="relative z-10 text-pink-500">WOMENS PROGRAM</span>
              <div className="absolute inset-0 bg-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button> */}
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-3 py-3 text-xs font-bold text-foreground hover:text-primary transition-all duration-300 group rounded-lg hover-elevate whitespace-nowrap"
            >
              <span className="relative z-10">PACKAGES</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button 
              onClick={() => document.getElementById('trainers')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-3 py-3 text-xs font-bold text-foreground hover:text-primary transition-all duration-300 group rounded-lg hover-elevate whitespace-nowrap"
            >
              <span className="relative z-10">TRAINERS</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button 
              onClick={() => document.querySelector('[data-testid="section-testimonials"]')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-3 py-3 text-xs font-bold text-foreground hover:text-primary transition-all duration-300 group rounded-lg hover-elevate whitespace-nowrap"
            >
              <span className="relative z-10">TESTIMONIALS</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-3 py-3 text-xs font-bold text-foreground hover:text-primary transition-all duration-300 group rounded-lg hover-elevate whitespace-nowrap"
            >
              <span className="relative z-10">CONTACT</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.nav>
          
          <motion.div 
            className="hidden lg:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ThemeToggle />
            <Button 
              onClick={openWhatsApp} 
              size="default" 
              className="rounded-full px-6 transition-all duration-300" 
              data-testid="button-book-call-header"
            >
              <span>Consult Now</span>
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden mt-20">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full bg-neutral-900">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            src={heroNewVideo}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10 px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="space-y-6 md:space-y-8 text-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Main Headline */}
              <motion.h1
                className="font-heading font-extrabold leading-[1.1] tracking-tight text-white text-center"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}
                variants={fadeInUp}
                data-testid="hero-headline"
              >
                Transform Your Life With
                <span className="block text-primary mt-2">
                  Expert Online Coaching
                </span>
              </motion.h1>
              
              {/* Subline */}
              <motion.p 
                className="text-white/95 leading-relaxed font-semibold text-center max-w-2xl mx-auto" 
                style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)' }}
                variants={fadeInUp}
                data-testid="hero-subline"
              >
                Personalized workouts, guidance & accountability built for your lifestyle.
              </motion.p>

              {/* CTAs */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4"
                variants={fadeInUp}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} 
                    size="default"
                    className="rounded-full px-8 transition-all bg-primary hover:bg-primary/90 font-semibold text-sm md:text-base text-white shadow-2xl shadow-primary/30"
                    data-testid="button-start-journey"
                  >
                    Start Your Journey
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline" 
                    size="default"
                    className="rounded-full px-8 border-2 border-white/80 bg-white/10 hover:bg-white/20 backdrop-blur-md hover:border-white transition-all font-semibold text-sm md:text-base text-white shadow-2xl"
                    onClick={openWhatsApp}
                    data-testid="button-book-consultation"
                  >
                    Book Free Consultation
                  </Button>
                </motion.div>
              </motion.div>

              {/* Founder's Message */}
              <motion.div 
                className="text-white/90 text-base md:text-lg font-medium text-center pt-6 max-w-3xl mx-auto space-y-4"
                variants={fadeInUp}
                data-testid="hero-founder-message"
              >
                <p className="leading-relaxed">
                  With years of experience in fitness training and a deep passion for empowering people, our founder created House of Champions to share professional fitness expertise with everyone around the world.
                </p>
                <p className="text-primary font-semibold italic leading-relaxed">
                  "Your transformation is our mission. Every rep, every session, every victory — we celebrate it all with you."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About House of Champions */}
      <AnimatedSection variant="fadeIn">
        <section className="py-12 md:py-16 lg:py-20 bg-card relative overflow-hidden border-t border-primary/10" id="about">
          <div className="w-full px-6 md:px-12 lg:px-16 relative mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <motion.h2 
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                data-testid="heading-about"
              >
                About House of <span className="text-primary">Champions</span>
              </motion.h2>
              <motion.p 
                className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto font-semibold leading-relaxed md:whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                data-testid="text-about-subtitle"
              >
                Empowering everyone to achieve their fitness goals through expert-led online training programs
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-8 md:gap-12 lg:gap-16 mb-12 items-start max-w-7xl mx-auto">
              {/* Left Side: Our Story and Our Vision */}
              <div className="space-y-10 lg:space-y-12">
                {/* Our Story */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-primary" data-testid="heading-our-story">Our Story</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed" data-testid="text-our-story">
                    House of Champions was founded with a singular vision: to make professional fitness training accessible to everyone. We believe that every individual deserves access to expert guidance, personalized programs, and a supportive community that celebrates their fitness journey.
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    What started as a passion project has grown into a thriving online fitness community, helping thousands transform their lives through dedicated training, proper nutrition, and unwavering support.
                  </p>
                </motion.div>

                {/* Our Vision */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-primary" data-testid="heading-our-vision">Our Vision</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed" data-testid="text-our-vision">
                    We envision a world where fitness is not just a goal, but a lifestyle embraced by people of all ages and backgrounds. Our mission is to break down barriers to fitness training by offering flexible, online programs that fit into your busy schedule.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-sm md:text-base">Expert-led training programs for everyone</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-sm md:text-base">Flexible online classes that work with your schedule</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-sm md:text-base">Supportive community of like-minded champions</p>
                    </div>
                  </div>
                </motion.div>

                {/* Impact Statistics */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-xl bg-white/5 border border-primary/20 p-4 md:p-6"
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                    {STATS_DATA.map((stat, index) => (
                      <StatCard key={stat.label} {...stat} index={index} />
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Side: Owner Photo and Founder Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start space-y-6"
              >
                {/* Owner Photo */}
                <div className="w-full">
                  <div className="relative rounded-lg overflow-hidden border-2 border-primary aspect-[3/4]">
                    <img 
                      src={ownerPhoto} 
                      alt="House of Champions Owner" 
                      className="w-full h-full object-cover"
                      data-testid="img-owner"
                    />
                  </div>
                </div>

                {/* Meet Our Founder */}
                <div className="w-full text-left space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary" data-testid="heading-founder">Meet Our Founder</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    With years of experience in fitness training and a deep passion for empowering people, our founder created House of Champions to share professional fitness expertise with everyone around the world.
                  </p>
                  <p className="text-white font-semibold text-sm md:text-base italic">
                    "Your transformation is our mission. Every rep, every session, every victory - we celebrate it all with you."
                  </p>
                </div>
              </motion.div>
            </div>

            {/* HOC Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground" data-testid="heading-gallery">OUR HOC <span className="text-primary">GALLERY</span></h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[gymPhoto1, gymPhoto2, gymPhoto3, gymPhoto4].map((img, idx) => (
                  <motion.div 
                    key={idx}
                    className="relative rounded-lg overflow-hidden border-2 border-primary aspect-square group cursor-pointer"
                    data-testid={`img-gallery-${idx + 1}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={img} 
                      alt={`Gym photo ${idx + 1}`} 
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Instagram Videos Section */}
      <AnimatedSection variant="zoomRotate">
        <section className="py-12 md:py-16 bg-card relative overflow-hidden border-t border-primary/10" id="instagram-videos">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,200,83,0.05),transparent_70%)]" />
          <div className="w-full px-3 md:px-5 lg:px-6 relative">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                Workout with HOC <span className="text-primary">Community</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto font-bold">
                Experience the energy, dedication, and transformation happening daily
              </p>
            </div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {[
                { src: instagramVideo1, testId: "instagram-video-1", hideOnDesktop: false },
                { src: instagramVideo2, testId: "instagram-video-2", hideOnDesktop: false },
                { src: instagramVideo3, testId: "instagram-video-3", hideOnDesktop: false },
                { src: instagramVideo4, testId: "instagram-video-4", hideOnDesktop: false },
                { src: instagramVideo5, testId: "instagram-video-5", hideOnDesktop: false },
                { src: instagramVideo6, testId: "instagram-video-6", hideOnDesktop: true }
              ].map((video, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`group relative rounded-lg overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 w-full aspect-[9/16] ${video.hideOnDesktop ? 'lg:hidden' : ''}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <video
                    src={video.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    data-testid={video.testId}
                  >
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-10">
              <a 
                href="https://www.instagram.com/house_of_champions_studio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group hover-elevate transition-all duration-300 border-2 border-primary rounded-full px-5 py-2.5"
                data-testid="link-instagram-profile"
              >
                <div className="w-7 h-7 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={instagramIcon} 
                    alt="Instagram" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-foreground text-base md:text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                  house_of_champions_studio
                </span>
              </a>

              <a 
                href="https://www.facebook.com/house_of_champions_studio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group hover-elevate transition-all duration-300 border-2 border-primary rounded-full px-5 py-2.5"
                data-testid="link-facebook-profile"
              >
                <div className="w-7 h-7 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={facebookIcon} 
                    alt="Facebook" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-foreground text-base md:text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                  house_of_champions_studio
                </span>
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Transformation Gallery - Auto-scrolling Slider */}
      <AnimatedSection variant="slideInRight">
        <section className="py-12 md:py-16 lg:py-20 bg-card relative overflow-hidden border-t border-primary/10" id="transformations">
          <div className="w-full relative">
            <div className="text-center mb-10 md:mb-12 lg:mb-16 px-4 md:px-6 lg:px-8">
              <motion.h2 
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                data-testid="heading-transformations"
              >
                Witness the <span className="text-primary">Transformation</span>
              </motion.h2>
              <motion.p 
                className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                data-testid="text-transformations-subtitle"
              >
                From doubt to dedication, see how our members achieved their dream bodies
              </motion.p>
            </div>
            
            <style>{`
              @keyframes scroll-horizontal {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              
              .scroll-container {
                display: flex;
                animation: scroll-horizontal 10s linear infinite;
              }
              
              .scroll-container:hover {
                animation-play-state: paused;
              }
            `}</style>
            
            <div className="w-full overflow-hidden">
              <div className="scroll-container">
                {/* First set of images */}
                {[
                  { img: transform1, alt: "Fitness transformation 1", testId: "img-transformation-1" },
                  { img: transform2, alt: "Fitness transformation 2", testId: "img-transformation-2" },
                  { img: transform3, alt: "Fitness transformation 3", testId: "img-transformation-3" },
                  { img: transform4, alt: "Fitness transformation 4", testId: "img-transformation-4" },
                  { img: transform5, alt: "Fitness transformation 5", testId: "img-transformation-5" },
                  { img: transform6, alt: "Fitness transformation 6", testId: "img-transformation-6" },
                  { img: transform7, alt: "Fitness transformation 7", testId: "img-transformation-7" },
                  { img: transform8, alt: "Fitness transformation 8", testId: "img-transformation-8" }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px] px-2 md:px-3"
                    data-testid={`card-transformation-${idx + 1}`}
                  >
                    <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-primary aspect-[3/4]">
                      <img 
                        src={item.img} 
                        alt={item.alt} 
                        className="w-full h-full object-cover"
                        data-testid={item.testId}
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for infinite scroll effect */}
                {[
                  { img: transform1, alt: "Fitness transformation 1 duplicate" },
                  { img: transform2, alt: "Fitness transformation 2 duplicate" },
                  { img: transform3, alt: "Fitness transformation 3 duplicate" },
                  { img: transform4, alt: "Fitness transformation 4 duplicate" },
                  { img: transform5, alt: "Fitness transformation 5 duplicate" },
                  { img: transform6, alt: "Fitness transformation 6 duplicate" },
                  { img: transform7, alt: "Fitness transformation 7 duplicate" },
                  { img: transform8, alt: "Fitness transformation 8 duplicate" }
                ].map((item, idx) => (
                  <div 
                    key={`duplicate-${idx}`}
                    className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px] px-2 md:px-3"
                  >
                    <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-primary aspect-[3/4]">
                      <img 
                        src={item.img} 
                        alt={item.alt} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Services - Redesigned */}
      <AnimatedSection variant="slideUp">
        <section id="program" className="py-12 md:py-16 lg:py-20 bg-card relative overflow-hidden border-t border-primary/10" data-testid="section-training-programs">
          <div className="container px-4 md:px-6 relative max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-12 lg:mb-16">
              <motion.h2 
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                data-testid="heading-training-programs"
              >
                Our <span className="text-primary">Services</span>
              </motion.h2>
              <motion.p 
                className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                data-testid="text-training-programs-subtitle"
              >
                Comprehensive programs for every fitness level and goal
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { 
                  image: cardioTrainingImage, 
                  title: "Personalised Training", 
                  desc: "Science based plans + nutrition based on your goals and lifestyle.",
                  testId: "card-personalised-training"
                },
                { 
                  image: strengthTrainingImage, 
                  title: "Personal Guidance", 
                  desc: "Weekly check-ins, accountability and form corrections.",
                  testId: "card-personal-guidance"
                },
                { 
                  image: flexibilityTrainingImage, 
                  title: "Proven Transformation", 
                  desc: "6+ years of coaching experience. 1000+ lives impacted.",
                  testId: "card-proven-transformation"
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex"
                >
                  <Card className="group overflow-hidden hover-elevate bg-card shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-primary flex flex-col w-full" data-testid={item.testId}>
                    <div className="relative h-56 md:h-64 w-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        data-testid={`img-${item.testId}`}
                      />
                    </div>
                    <CardContent className="p-5 md:p-6 space-y-2 flex-1 flex flex-col">
                      <h3 className="font-heading text-lg md:text-xl lg:text-2xl font-bold text-black" data-testid={`heading-${item.testId}`}>
                        {item.title}
                      </h3>
                      <p className="text-black leading-relaxed text-sm md:text-base flex-1" data-testid={`text-${item.testId}`}>
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Exclusively For Women - Elegant Black Design */}
      {/* <AnimatedSection variant="fadeIn">
        <section className="py-8 md:py-10 bg-card relative overflow-hidden">
          <div className="w-full px-3 md:px-5 lg:px-6 relative max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <div className="inline-block mb-3">
                <span className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-wide">
                  Exclusively For Women
                </span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                <span className="text-black">
                  Only Designed For <span className="text-pink-500">WOMENS</span>
                </span>
              </h2>
              <p className="text-base md:text-lg text-black/70 max-w-3xl mx-auto">
                Transform your body, elevate your confidence, and embrace a stronger you
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {[
                { src: zumbaBanner, title: "ZUMBA CLASS", testId: "banner-zumba" },
                { src: yogaBanner, title: "YOGA CLASS", testId: "banner-yoga" },
                { src: aerobicsBanner, title: "AEROBICS CLASS", testId: "banner-aerobics" },
                { src: cardioBanner, title: "CARDIO CLASS", testId: "banner-cardio" }
              ].map((banner, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="group relative rounded-lg overflow-hidden border-2 border-black/20 hover:border-black transition-all duration-300 hover:shadow-xl"
                >
                  <img
                    src={banner.src}
                    alt={banner.title}
                    className="w-full h-full object-cover"
                    data-testid={banner.testId}
                  />
                </motion.div>
              ))}
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-5 rounded-lg bg-white border-2 border-black hover:shadow-lg transition-all" data-testid="feature-live-classes">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-base mb-2 text-black">Daily LIVE Classes</h4>
                  <p className="text-black text-sm">Expert trainers, interactive sessions</p>
                </div>
                <div className="text-center p-5 rounded-lg bg-white border-2 border-black hover:shadow-lg transition-all" data-testid="feature-flexible-timing">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-base mb-2 text-black">Flexible Timing</h4>
                  <p className="text-black text-sm">Morning & evening slots available</p>
                </div>
                <div className="text-center p-5 rounded-lg bg-white border-2 border-black hover:shadow-lg transition-all" data-testid="feature-women-only">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-base mb-2 text-black">Women-Only Space</h4>
                  <p className="text-black text-sm">Safe, supportive community</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white border-2 border-black">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-center">
                    <span className="font-bold text-black text-sm block">Morning Sessions</span>
                    <span className="text-black text-sm">5:45AM • 7AM • 8AM • 11AM</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white border-2 border-black">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-center">
                    <span className="font-bold text-black text-sm block">Evening Sessions</span>
                    <span className="text-black text-sm">6PM • 7:30PM</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-black text-white font-bold text-sm md:text-base hover:bg-black/90 transition-all hover:scale-105 border-2 border-pink-500" data-testid="button-join-anytime">
                  Join Any Class, Any Time, Any Day
                </button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection> */}

      {/* Pricing Packages - Redesigned */}
      <AnimatedSection variant="slideInLeft">
        <section className="min-h-screen bg-primary/5 flex items-center justify-center relative overflow-hidden pt-6 pb-12 md:pb-16 lg:pb-20 border-t border-primary/10" id="pricing">
        <div className="w-full px-3 md:px-4 lg:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <motion.h2 
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Transform Your Life <span className="text-primary">Today</span>
            </motion.h2>
            <motion.p 
              className="text-sm md:text-base lg:text-lg text-muted-foreground mx-auto font-bold px-4 md:whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Choose the perfect plan that fits your lifestyle and commit to your wellness journey
            </motion.p>
          </div>
          <div className="hidden md:grid md:grid-cols-4 gap-4 lg:gap-6 items-start max-w-[1400px] mx-auto">
            {[
              {
                name: "Fit Basics",
                duration: "4 Weeks",
                classes: "",
                price: "₹2,500",
                pricePerClass: "",
                description: "For those who prefer to train on their own.",
                features: [
                  "Personalized Diet Plan",
                  "Weekly Diet Adjustments",
                  "Home/Gym Workout Plan (4-week progression)",
                  "Access to Recorded Group Sessions",
                  "Weekly Progress Tracking Form",
                  "WhatsApp Support (within working hours)"
                ]
              },
              {
                name: "Fit Plus",
                duration: "4 Weeks",
                classes: "Main Group Program",
                price: "₹5,000",
                pricePerClass: "",
                description: "Live coaching for structure, accountability & discipline.",
                features: [
                  "Live Group Training Sessions",
                  "Personalized Diet Plan",
                  "Weekly Progress Review",
                  "Form & Technique Guidance",
                  "Group Community Support"
                ],
                featured: true,
                badge: "Popular"
              },
              {
                name: "Pro Transformation Program",
                duration: "4 Weeks",
                classes: "",
                price: "₹7,500",
                pricePerClass: "",
                description: "For faster and controlled transformation.",
                features: [
                  "Everything in Fit Plus",
                  "Weekly 1:1 Progress Call (10–15 mins)",
                  "Habit & Routine Planning",
                  "Behavioral Accountability"
                ]
              },
              {
                name: "Elite Athlete / Fast Result Program",
                duration: "4 Weeks",
                classes: "",
                price: "₹10,000",
                pricePerClass: "",
                description: "Designed for athletes & highly committed individuals.",
                features: [
                  "Everything in Pro",
                  "Performance Tracking (Strength / Endurance / Agility)",
                  "Technique Video Feedback",
                  "Priority WhatsApp Support"
                ]
              },
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex"
              >
                <Card className={`group flex flex-col w-full ${pkg.featured ? 'p-7 md:p-8' : 'p-5 md:p-6'} min-h-[600px] transition-all duration-300 bg-card border-2 ${pkg.featured ? 'border-primary shadow-2xl shadow-primary/20' : 'border-primary/40'} hover:border-primary hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 relative overflow-hidden`}>
                  {pkg.featured && (
                    <>
                      <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                      <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
                    </>
                  )}
                  <CardContent className="p-0 space-y-3 md:space-y-4 relative flex flex-col h-full">
                    {pkg.badge && (
                      <div className="inline-flex items-center gap-1.5 bg-primary text-white px-3 py-1.5 rounded-full text-xs font-bold w-fit">
                        <Star className="h-3 w-3 fill-white" />
                        {pkg.badge}
                      </div>
                    )}
                    <div>
                      <h3 className={`font-heading ${pkg.featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-extrabold mb-1 text-black`}>
                        {pkg.name}
                      </h3>
                      <p className="text-black/70 font-semibold text-sm mb-0.5">{pkg.duration}</p>
                      <p className="text-black/60 text-xs italic">{pkg.description}</p>
                    </div>
                    <div className="space-y-1">
                      <div className={`font-heading ${pkg.featured ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'} font-black text-black`}>
                        {pkg.price}
                      </div>
                      {pkg.classes && (
                        <span className="text-xs text-black/60 font-medium block">{pkg.classes}</span>
                      )}
                    </div>
                    <div className="h-px bg-black/10" />
                    <ul className="grid grid-cols-1 gap-2 flex-1">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 group/item">
                          <div className="h-4 w-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="h-2.5 w-2.5 text-white" />
                          </div>
                          <span className="text-xs md:text-sm text-muted-foreground leading-tight font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={openWhatsApp} 
                      className={`w-full rounded-full ${pkg.featured ? 'py-5 md:py-6' : 'py-4 md:py-5'} text-sm font-bold transition-all duration-300 bg-primary hover:bg-primary/90 text-white mt-auto`}
                      data-testid={`button-select-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      Start {pkg.name.split(' ')[0]} Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile View - Stacked Cards */}
          <div className="md:hidden space-y-4">
            {[
              {
                name: "Fit Basics",
                duration: "4 Weeks",
                classes: "",
                price: "₹2,500",
                pricePerClass: "",
                description: "For those who prefer to train on their own.",
                features: [
                  "Personalized Diet Plan",
                  "Weekly Diet Adjustments",
                  "Home/Gym Workout Plan (4-week progression)",
                  "Access to Recorded Group Sessions",
                  "Weekly Progress Tracking Form",
                  "WhatsApp Support (within working hours)"
                ]
              },
              {
                name: "Fit Plus",
                duration: "4 Weeks",
                classes: "Main Group Program",
                price: "₹5,000",
                pricePerClass: "",
                description: "Live coaching for structure, accountability & discipline.",
                features: [
                  "Live Group Training Sessions",
                  "Personalized Diet Plan",
                  "Weekly Progress Review",
                  "Form & Technique Guidance",
                  "Group Community Support"
                ],
                featured: true,
                badge: "Popular"
              },
              {
                name: "Pro Transformation Program",
                duration: "4 Weeks",
                classes: "",
                price: "₹7,500",
                pricePerClass: "",
                description: "For faster and controlled transformation.",
                features: [
                  "Everything in Fit Plus",
                  "Weekly 1:1 Progress Call (10–15 mins)",
                  "Habit & Routine Planning",
                  "Behavioral Accountability"
                ]
              },
              {
                name: "Elite Athlete / Fast Result Program",
                duration: "4 Weeks",
                classes: "",
                price: "₹10,000",
                pricePerClass: "",
                description: "Designed for athletes & highly committed individuals.",
                features: [
                  "Everything in Pro",
                  "Performance Tracking (Strength / Endurance / Agility)",
                  "Technique Video Feedback",
                  "Priority WhatsApp Support"
                ]
              },
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="group p-5 transition-all duration-500 bg-card border-2 border-primary/40 hover:border-primary shadow-xl hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 relative overflow-hidden">
                  <CardContent className="p-0 space-y-3 relative">
                    {pkg.badge && (
                      <div className="inline-flex items-center gap-1.5 bg-primary text-white px-3 py-1.5 rounded-full text-xs font-bold">
                        <Star className="h-3 w-3 fill-white" />
                        {pkg.badge}
                      </div>
                    )}
                    <div>
                      <h3 className="font-heading text-2xl font-extrabold mb-1 text-black">
                        {pkg.name}
                      </h3>
                      <p className="text-black/70 font-semibold text-sm mb-0.5">{pkg.duration}</p>
                      <p className="text-black/60 text-xs italic">{pkg.description}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="font-heading text-3xl font-black text-black">
                        {pkg.price}
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs text-black/60 font-medium">{pkg.classes}</span>
                        <span className="text-xs text-black/40">•</span>
                        <span className="text-xs font-bold text-black/80">{pkg.pricePerClass}</span>
                      </div>
                    </div>
                    <div className="h-px bg-black/10" />
                    <ul className="grid grid-cols-1 gap-2">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 group/item">
                          <div className="h-4 w-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="h-2.5 w-2.5 text-white" />
                          </div>
                          <span className="text-sm text-muted-foreground leading-tight font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={openWhatsApp} 
                      className="w-full rounded-full py-5 text-sm font-bold transition-all duration-300 bg-primary hover:bg-primary/90 text-white"
                      data-testid={`button-select-${pkg.name.toLowerCase().replace(' ', '-')}`}
                    >
                      Start {pkg.name} Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        </section>
      </AnimatedSection>

      {/* Meet Trainers - Redesigned */}
      <AnimatedSection variant="scaleIn">
        <section className="bg-card flex items-center justify-center relative overflow-hidden py-8 md:py-10 lg:py-12 border-t border-primary/10" id="trainers">
          <div className="w-full px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
              <motion.h2 
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Meet Your <span className="text-primary">Trainers</span>
              </motion.h2>
              <motion.p 
                className="text-sm md:text-base lg:text-lg text-muted-foreground mx-auto font-bold px-4 md:whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Certified professionals dedicated to transforming your fitness journey
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
              {[
                {
                  name: "Snata Pattnaik",
                  role: "Founder & Managing Director",
                  image: trainer1Image,
                  bio: "10 years of experience inspiring, training, and transforming people across Delhi NCR, Bangalore, Mumbai, and Kolkata."
                },
                {
                  name: "Neha Kashyap",
                  role: "Zumba & Dance Trainer",
                  image: trainer2Image,
                  bio: "10+ years Zumba trainer with Shiamak Davar Institute training. Certified yoga and dance fitness trainer."
                },
                {
                  name: "Manisha",
                  role: "Strength & Weight Loss Specialist",
                  image: trainer3Image,
                  bio: "Passionate about health and helping people achieve their fitness goals through strength training and weight loss programs."
                },
              ].map((trainer, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-md border-2 border-primary mb-4 group">
                    <img 
                      src={trainer.image} 
                      alt={trainer.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                      {trainer.name}
                    </h3>
                    <p className="text-primary text-sm md:text-base font-bold">
                      {trainer.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {trainer.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Train With Winston Section */}
      <AnimatedSection variant="fadeIn">
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 relative overflow-hidden border-t border-primary/10" id="why-choose">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-300/20 rounded-full blur-2xl" />
          
          <div className="container px-4 md:px-6 relative max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-12 lg:mb-16">
              <motion.h2 
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                data-testid="heading-why-choose"
              >
                Why Choose <span className="text-primary">Train With Winston</span>
              </motion.h2>
              <motion.p 
                className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                data-testid="text-why-choose-subtitle"
              >
                Transformation Philosophy
              </motion.p>
            </div>

            <style>{`
              .flip-card {
                perspective: 1000px;
                height: 100%;
                min-height: 280px;
              }
              
              .flip-card-inner {
                position: relative;
                width: 100%;
                height: 100%;
                min-height: 280px;
                text-align: center;
                transition: transform 0.6s;
                transform-style: preserve-3d;
              }
              
              .flip-card:hover .flip-card-inner {
                transform: rotateY(180deg);
              }
              
              .flip-card-front, .flip-card-back {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
              }
              
              .flip-card-back {
                transform: rotateY(180deg);
              }
              
              @keyframes float-icon {
                0%, 100% {
                  transform: translateY(0) rotate(0deg);
                }
                50% {
                  transform: translateY(-10px) rotate(5deg);
                }
              }
              
              .floating-icon {
                animation: float-icon 3s ease-in-out infinite;
              }
            `}</style>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Structure, Not Guesswork",
                  desc: "Science based personalized workout & diet according to your goals and lifestyle.",
                  icon: Target,
                  testId: "card-structure",
                  backImage: gymBackImage1,
                  accent: "from-emerald-500 to-green-600"
                },
                {
                  title: "High Accountability",
                  desc: "Weekly check-ins, form correction, progress tracking. You don't fall off track.",
                  icon: CheckCircle2,
                  testId: "card-accountability",
                  backImage: gymBackImage2,
                  accent: "from-green-500 to-emerald-600"
                },
                {
                  title: "Clear Guidance",
                  desc: "No confusion. No overthinking. You'll know exactly what to do daily.",
                  icon: Lightbulb,
                  testId: "card-guidance",
                  backImage: gymBackImage3,
                  accent: "from-teal-500 to-green-600"
                },
                {
                  title: "Mindset & Discipline Coaching",
                  desc: "You don't just get in shape. You become consistent.",
                  icon: Zap,
                  testId: "card-mindset",
                  backImage: gymBackImage4,
                  accent: "from-emerald-600 to-teal-500"
                },
                {
                  title: "Premium Community",
                  desc: "A batch where everyone is moving.",
                  icon: Users,
                  testId: "card-community",
                  backImage: gymBackImage5,
                  accent: "from-green-600 to-emerald-500"
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="h-full"
                >
                  <div className="flip-card" data-testid={item.testId}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <Card className="bg-card shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                          <CardContent className="p-6 md:p-8 space-y-4">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center shadow-lg`}>
                              <item.icon className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground text-left" data-testid={`heading-${item.testId}`}>
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-left" data-testid={`text-${item.testId}`}>
                              {item.desc}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="flip-card-back">
                        <Card className="border-primary/40 h-full overflow-hidden shadow-xl">
                          <div className="relative w-full h-full">
                            <img 
                              src={item.backImage} 
                              alt="Gym fitness background" 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 space-y-4">
                              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center floating-icon shadow-xl`}>
                                <item.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                              </div>
                              <p className="text-white text-base md:text-lg font-bold text-center">
                                {item.title}
                              </p>
                              <p className="text-white/80 text-sm text-center">
                                Your transformation starts here
                              </p>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection variant="slideUp">
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 relative overflow-hidden border-t border-primary/10" id="faq">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="container px-4 md:px-6 relative max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-12 lg:mb-16">
              <motion.h2 
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                data-testid="heading-faq"
              >
                Frequently Asked <span className="text-primary">Questions</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  question: "Do I need equipment?",
                  answer: "No, programs can be done with or without equipment.",
                  testId: "faq-equipment"
                },
                {
                  question: "Will the diet be strict?",
                  answer: "No, it will be flexible and based on your daily routine.",
                  testId: "faq-diet"
                },
                {
                  question: "Batch time?",
                  answer: "Multiple batches available.",
                  testId: "faq-batch-time"
                },
                {
                  question: "Do you train beginners?",
                  answer: "Yes.",
                  testId: "faq-beginners"
                },
              ].map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card 
                      className="bg-gradient-to-br from-green-100/80 via-emerald-50/90 to-green-50 border-2 border-primary/20 hover-elevate transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:border-primary/40 backdrop-blur-sm" 
                      data-testid={faq.testId}
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    >
                      <CardContent className="p-5 md:p-6">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-md">
                              <MessageSquare className="h-4 w-4 text-white" />
                            </div>
                            <h3 className="font-heading text-base md:text-lg font-bold text-foreground" data-testid={`question-${faq.testId}`}>
                              {faq.question}
                            </h3>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                          >
                            <svg
                              className="w-4 h-4 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </motion.div>
                        </div>
                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                            marginTop: isOpen ? 16 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="pl-11 border-l-2 border-primary/30 ml-4">
                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed pl-4" data-testid={`answer-${faq.testId}`}>
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Customer Testimonials Section */}
      <AnimatedSection variant="fadeIn">
        <section className="py-12 md:py-16 lg:py-20 bg-primary/5 relative overflow-hidden border-t border-primary/10" data-testid="section-testimonials">
          <div className="max-w-full">
            <div className="text-center mb-12 md:mb-16 px-4">
              <motion.h2 
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                data-testid="heading-testimonials"
              >
                What Our Members <span className="text-primary">Say</span>
              </motion.h2>
              <motion.p 
                className="text-sm md:text-base lg:text-lg text-muted-foreground mx-auto font-semibold max-w-2xl md:whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                data-testid="text-testimonials-subtitle"
              >
                Over 1000+ lives transformed through our personalized online fitness programs
              </motion.p>
            </div>

            {/* Mobile View: Auto-sliding Large Cards */}
            <div className="block md:hidden px-4">
              <TestimonialMobileCarousel testimonials={testimonials} />
            </div>

            {/* Desktop View: Three Row Continuous Scrolling */}
            <div className="hidden md:block">
              {/* Row 1: Left to Right - Displays first 6 testimonials (indices 0-5) */}
              <div className="relative overflow-hidden mb-6 testimonial-row" data-testid="testimonial-row-1">
                <div className="flex gap-6 animate-scroll-left">
                  {[...testimonials.slice(0, 6), ...testimonials.slice(0, 6)].map((testimonial, index) => (
                    <TestimonialCard
                      key={`row1-${index}`}
                      {...testimonial}
                      index={`row1-${index}`}
                    />
                  ))}
                </div>
              </div>

              {/* Row 2: Right to Left - Displays next 7 testimonials (indices 6-12) */}
              <div className="relative overflow-hidden mb-6 testimonial-row" data-testid="testimonial-row-2">
                <div className="flex gap-6 animate-scroll-right">
                  {[...testimonials.slice(6, 13), ...testimonials.slice(6, 13)].map((testimonial, index) => (
                    <TestimonialCard
                      key={`row2-${index}`}
                      {...testimonial}
                      index={`row2-${index}`}
                    />
                  ))}
                </div>
              </div>

              {/* Row 3: Left to Right - Displays last 7 testimonials (indices 13-19) */}
              <div className="relative overflow-hidden testimonial-row" data-testid="testimonial-row-3">
                <div className="flex gap-6 animate-scroll-left">
                  {[...testimonials.slice(13, 20), ...testimonials.slice(13, 20)].map((testimonial, index) => (
                    <TestimonialCard
                      key={`row3-${index}`}
                      {...testimonial}
                      index={`row3-${index}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section - Light Green Background with Styled Cards */}
      <AnimatedSection variant="fadeIn">
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 border-t border-primary/10 relative overflow-hidden" id="contact">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          
          <div className="container px-4 md:px-6 max-w-7xl mx-auto relative">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight text-foreground">
                Get In <span className="text-primary">Touch</span>
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground mx-auto font-medium">
                We'd love to hear from you. Reach out to us today!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Column - Contact Form & Business Hours */}
              <div className="space-y-6">
                {/* Contact Form */}
                <Card className="bg-card shadow-xl border-2 border-primary/20 p-5 md:p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                        Send Us a Message
                      </h3>
                    </div>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <div className="grid md:grid-cols-2 gap-3">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium text-muted-foreground">Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" {...field} data-testid="input-name" className="bg-background border-2 border-input focus:border-primary transition-colors" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium text-muted-foreground">Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your email" type="email" {...field} data-testid="input-email" className="bg-background border-2 border-input focus:border-primary transition-colors" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="contactNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-muted-foreground">Phone Number</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input 
                                    {...field}
                                    placeholder="Enter 10 digit number" 
                                    data-testid="input-contact" 
                                    className="bg-background border-2 border-input focus:border-primary transition-colors pr-10"
                                    maxLength={10}
                                    inputMode="numeric"
                                    onChange={(e) => {
                                      const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                      field.onChange(value);
                                    }}
                                  />
                                  {field.value && field.value.length === 10 && /^[0-9]+$/.test(field.value) && (
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow">
                                        <Check className="w-3 h-3 text-white" />
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="purpose"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-muted-foreground">Service Needed</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-purpose" className="bg-background border-2 border-input focus:border-primary transition-colors">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="weight-loss">Overall Weight Loss</SelectItem>
                                  <SelectItem value="body-toning">For Body Toning</SelectItem>
                                  <SelectItem value="postpartum">Reducing Postpartum Belly Fat</SelectItem>
                                  <SelectItem value="strength-building">Build Strength/Endurance/Flexibility</SelectItem>
                                  <SelectItem value="general-fitness">General Fitness</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold shadow-lg" 
                          disabled={contactMutation.isPending}
                          data-testid="button-submit-form"
                        >
                          {contactMutation.isPending ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>

                {/* Business Hours Card */}
                <Card className="bg-gradient-to-br from-emerald-500 to-green-600 shadow-xl p-5 md:p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
                        Business Hours
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 bg-white/10 rounded-lg p-3">
                        <Clock className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-white text-sm mb-0.5">Monday - Friday</p>
                          <p className="text-white/80 text-sm">8:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 bg-white/10 rounded-lg p-3">
                        <Clock className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-white text-sm mb-0.5">Saturday</p>
                          <p className="text-white/80 text-sm">9:00 AM - 4:00 PM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 bg-white/10 rounded-lg p-3">
                        <Clock className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-white text-sm mb-0.5">Sunday</p>
                          <p className="text-white/80 text-sm">Emergency Services Only</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Contact Details */}
              <Card className="bg-card shadow-xl border-2 border-primary/20 p-5 md:p-6 flex flex-col h-full">
                <CardContent className="p-0 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                      Contact Details
                    </h3>
                  </div>
                  
                  <div className="space-y-3 flex flex-col flex-1">
                    {/* Phone Number */}
                    <div className="flex items-start gap-3 bg-green-50 rounded-lg p-3 border border-primary/10">
                      <div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-0.5 text-sm">Phone</p>
                        <a 
                          href={`tel:${PHONE_NUMBER}`}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {PHONE_NUMBER}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3 bg-green-50 rounded-lg p-3 border border-primary/10">
                      <div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-0.5 text-sm">Email</p>
                        <a 
                          href="mailto:houseofchampions2020@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          houseofchampions2020@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-3 bg-green-50 rounded-lg p-3 border border-primary/10">
                      <div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-0.5 text-sm">Address</p>
                        <a 
                          href="https://www.google.com/maps/place/House+Of+Champions+Gym/@19.2361639,73.1543851,17z/data=!3m1!4b1!4m6!3m5!1s0x3be795049d6e75a1:0xa3bb5dfe6f0afeaa!8m2!3d19.2361639!4d73.15696!16s%2Fg%2F11w18ww9mr?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          Basement, Gangagodavari Apt, below Sundar Classes, Katemanivali, Naka, Kalyan, Maharashtra 421306
                        </a>
                      </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex items-start gap-3 bg-green-50 rounded-lg p-3 border border-primary/10">
                      <div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground mb-2 text-sm">Follow Us</p>
                        <div className="flex flex-wrap gap-2">
                          <a 
                            href="https://www.instagram.com/house_of_champions_studio/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="h-9 w-9 rounded-full flex items-center justify-center hover-elevate transition-all bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500"
                            data-testid="link-instagram-contact"
                          >
                            <SiInstagram className="h-4 w-4 text-white" />
                          </a>
                          <a 
                            href="https://www.facebook.com/house_of_champions_studio/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="h-9 w-9 rounded-full flex items-center justify-center hover-elevate transition-all bg-[#1877F2]"
                            data-testid="link-facebook-contact"
                          >
                            <SiFacebook className="h-4 w-4 text-white" />
                          </a>
                          <a 
                            href="https://www.youtube.com/@houseofchampions8926" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="h-9 w-9 rounded-full flex items-center justify-center hover-elevate transition-all bg-[#FF0000]"
                            data-testid="link-youtube-contact"
                          >
                            <SiYoutube className="h-5 w-5 text-white" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Google Map */}
                    <div className="flex-1 flex flex-col min-h-0">
                      <div className="rounded-lg overflow-hidden border-2 border-primary/20 h-full shadow-lg">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.6867458926443!2d73.15438507501688!3d19.236163882025976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795049d6e75a1%3A0xa3bb5dfe6f0afeaa!2sHouse%20Of%20Champions%20Gym!5e0!3m2!1sen!2sin!4v1731141928000!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="House of Champions Location"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </div>
            </div>
          </section>
      </AnimatedSection>

      {/* Final CTA Section */}
      <AnimatedSection variant="fadeIn">
        <section className="py-16 md:py-20 lg:py-24 bg-primary relative overflow-hidden" id="final-cta">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
          <div className="container px-4 md:px-6 relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
                Start your transformation today.
              </h2>
              
              <div className="flex flex-col items-center gap-6">
                <Button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  size="default"
                  className="rounded-full px-12 py-6 text-lg font-bold bg-white text-primary hover:bg-white/90 transition-all shadow-2xl shadow-black/20 hover:scale-105"
                  data-testid="button-join-now-final"
                >
                  Join Now
                </Button>
                
                <button
                  onClick={openWhatsApp}
                  className="text-white/90 hover:text-white transition-colors text-base md:text-lg font-medium flex items-center gap-2"
                  data-testid="link-whatsapp-final-cta"
                >
                  <SiWhatsapp className="h-6 w-6" />
                  DM me on WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="w-full px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16">
            {/* Company Info */}
            <div className="space-y-4 lg:col-span-1">
              <div className="flex items-center gap-3">
                <img src={hocLogo} alt="HOC Fitness" className="h-12 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transform your body and mind with expert-led fitness programs designed for everyone.
              </p>
              <div className="flex gap-3 pt-2">
                <a href="https://www.facebook.com/profile.php?id=100063565829026" target="_blank" rel="noopener noreferrer" className="hover-elevate h-10 w-10 rounded-lg bg-[#1877F2] flex items-center justify-center transition-transform hover:scale-110" data-testid="link-facebook">
                  <SiFacebook className="h-5 w-5 text-white" />
                </a>
                <a href="https://www.instagram.com/house_of_champions_studio/" target="_blank" rel="noopener noreferrer" className="hover-elevate h-10 w-10 rounded-lg bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center transition-transform hover:scale-110" data-testid="link-instagram">
                  <SiInstagram className="h-5 w-5 text-white" />
                </a>
                <a href="https://www.youtube.com/@houseofchampions8926" target="_blank" rel="noopener noreferrer" className="hover-elevate h-10 w-10 rounded-lg bg-[#FF0000] flex items-center justify-center transition-transform hover:scale-110" data-testid="link-youtube">
                  <SiYoutube className="h-5 w-5 text-white" />
                </a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover-elevate h-10 w-10 rounded-lg bg-[#25D366] flex items-center justify-center transition-transform hover:scale-110" data-testid="link-whatsapp">
                  <SiWhatsapp className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-base font-bold mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('instagram-videos')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition-colors">
                    Community
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('transformations')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition-colors">
                    Transformations
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('trainers')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition-colors">
                    Trainers
                  </button>
                </li>
                <li>
                  <button onClick={() => document.querySelector('[data-testid="section-testimonials"]')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition-colors">
                    Testimonials
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading text-base font-bold mb-4 text-foreground">Our Services</h3>
              <ul className="space-y-2.5 text-sm">
                <li className="text-muted-foreground">HIIT Training</li>
                <li className="text-muted-foreground">Yoga & Meditation</li>
                <li className="text-muted-foreground">Strength Training</li>
                <li className="text-muted-foreground">Cardio Core</li>
                <li className="text-muted-foreground">Zumba</li>
                <li className="text-muted-foreground">Aerobics</li>
                <li className="text-muted-foreground">Body Toning</li>
              </ul>
            </div>

            {/* Packages */}
            <div>
              <h3 className="font-heading text-base font-bold mb-4 text-foreground">Packages</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition-colors">
                    Monthly Plans
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition-colors">
                    Quarterly Plans
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition-colors">
                    Annual Plans
                  </button>
                </li>
                {/* <li>
                  <button onClick={() => document.querySelector('section.bg-white')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition-colors">
                    Women's Program
                  </button>
                </li> */}
                <li>
                  <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition-colors">
                    Personal Training
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition-colors">
                    Group Classes
                  </button>
                </li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="font-heading text-base font-bold mb-4 text-foreground">Get In Touch</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <a 
                    href="https://www.google.com/maps/place/House+Of+Champions+Gym/@19.2361639,73.1543851,17z/data=!3m1!4b1!4m6!3m5!1s0x3be795049d6e75a1:0xa3bb5dfe6f0afeaa!8m2!3d19.2361639!4d73.15696!16s%2Fg%2F11w18ww9mr?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Basement, Gangagodavari Apt, Katemanivali, Naka, Kalyan, Maharashtra 421306
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <a 
                    href={`tel:${PHONE_NUMBER}`}
                    className="text-muted-foreground hover:text-primary transition-colors" 
                    data-testid="button-phone"
                  >
                    +91 8600126395
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <a href="mailto:abhijeet18012001@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-email">
                    abhijeet18012001@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>Copyright © 2025 House of Champions Fitness. All Rights Reserved</p>
              <div className="flex gap-6">
                <button className="hover:text-primary transition-colors">Privacy Policy</button>
                <button className="hover:text-primary transition-colors">Terms of Service</button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Contact Icon - All Screens */}
      <div className="fixed bottom-8 right-6 md:right-8 z-50">
        <div className="relative">
          {/* Contact Options - Appear Above Icon */}
          {contactMenuOpen && (
            <div className="absolute bottom-20 right-0 w-56 bg-white dark:bg-card rounded-2xl shadow-2xl border border-border overflow-hidden mb-2 animate-in slide-in-from-bottom-4 fade-in duration-200">
              <button
                onClick={() => {
                  openWhatsApp();
                  setContactMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-6 py-4 hover:bg-primary/5 transition-colors border-b"
                data-testid="button-contact-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">WhatsApp</span>
              </button>
              
              <button
                onClick={() => {
                  window.location.href = `tel:${PHONE_NUMBER}`;
                  setContactMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-6 py-4 hover:bg-primary/5 transition-colors"
                data-testid="button-contact-call"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Call</span>
              </button>
            </div>
          )}
          
          {/* Floating Button */}
          <button
            onClick={() => setContactMenuOpen(!contactMenuOpen)}
            className="hover:scale-110 transition-all duration-300"
            aria-label="Contact Us"
            data-testid="button-floating-contact"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="h-16 w-16" />
          </button>
        </div>
      </div>
    </div>
  );
}
