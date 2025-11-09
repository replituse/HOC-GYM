import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion, useReducedMotion } from "framer-motion";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useInView } from "@/hooks/use-in-view";
import { fadeInUp, fadeIn, scaleIn, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { AnimatedSection } from "@/components/animated-section";
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
import { SiWhatsapp } from "react-icons/si";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import transformationImage from "@assets/stock_images/before_and_after_wei_c6f6006f.jpg";
import workoutVideo from "@assets/5319089-uhd_3840_2160_25fps_1762541494599.mp4";
import heroVideo from "@assets/4325592-uhd_4096_2160_25fps_1762544359197.mp4";
import onlineClassImage from "@assets/generated_images/Online_fitness_class_women_c03f2b22.png";
import transform1 from "@assets/transformation_images/transform1.jpg";
import transform2 from "@assets/transformation_images/transform2.jpg";

const transform3 = "https://i.ytimg.com/vi/4U6GE6Y0pXw/maxresdefault.jpg";
const transform4 = "https://i.ytimg.com/vi/lDg8GVpBA6c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBy8EPf-HfmdeHQZsc13S-3b7ck2A";
import trainer1Image from "@assets/stock_images/indian_female_fitnes_26f1d39f.jpg";
import trainer2Image from "@assets/generated_images/Zumba_instructor_dancing_portrait_1640c3fe.png";
import trainer3Image from "@assets/generated_images/Strength_trainer_portrait_with_dumbbells_a7c3e639.png";
import cardioImage from "@assets/generated_images/Woman_doing_cardio_workout_1ba27fe8.png";
import functionalImage from "@assets/generated_images/Functional_training_exercise_e1989ece.png";
import strengthImage from "@assets/generated_images/Strength_training_with_weights_f007c33a.png";
import mobilityImage from "@assets/generated_images/Mobility_and_flexibility_exercise_26512ec9.png";
import yogaImage from "@assets/generated_images/Yoga_meditation_pose_691f5267.png";
import zumbaImage from "@assets/generated_images/Zumba_dance_fitness_class_875f492b.png";
import gymLogo from "@assets/gym-logo.png";
import hocLogo from "@assets/hoc-logo-transparent.png";
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

const WHATSAPP_NUMBER = "918600126395";
const PHONE_NUMBER = "+91 8600126395";
const GOOGLE_REVIEWS_URL = "https://share.google/BOqrkzB7sb4X33Iy0";

export default function Home() {
  const { toast } = useToast();
  const [callDialogOpen, setCallDialogOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactMenuOpen, setContactMenuOpen] = useState(false);
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
        <div className="container flex h-20 items-center justify-between px-4 md:px-6 relative">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group">
              <img 
                src={hocLogo} 
                alt="HOC Fitness" 
                className="h-16 md:h-20 w-auto relative transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
          </motion.div>
          
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-black/40 backdrop-blur-md border-l border-white/20">
              <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                <X className="h-6 w-6 text-white" />
                <span className="sr-only">Close</span>
              </SheetClose>
              <nav className="flex flex-col gap-6 mt-8">
                <button 
                  onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="text-lg font-medium text-white hover:text-primary transition-colors text-left"
                >
                  HOME
                </button>
                <button 
                  onClick={() => { document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="text-lg font-medium text-white hover:text-primary transition-colors text-left"
                >
                  PROGRAM
                </button>
                <button 
                  onClick={() => { document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="text-lg font-medium text-white hover:text-primary transition-colors text-left"
                >
                  PRICING
                </button>
                <button 
                  onClick={() => { document.getElementById('trainers')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="text-lg font-medium text-white hover:text-primary transition-colors text-left"
                >
                  TRAINERS
                </button>
                <button 
                  onClick={() => { document.getElementById('transformations')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="text-lg font-medium text-white hover:text-primary transition-colors text-left"
                >
                  BEFORE & AFTER
                </button>
                <button 
                  onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="text-lg font-medium text-white hover:text-primary transition-colors text-left"
                >
                  CONTACT
                </button>
              </nav>
            </SheetContent>
          </Sheet>
          
          {/* Desktop Navigation Menu */}
          <motion.nav 
            className="hidden lg:flex items-center gap-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="relative px-4 py-2 text-sm font-bold text-foreground hover:text-primary transition-all duration-300 group rounded-lg hover-elevate"
            >
              <span className="relative z-10">HOME</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button 
              onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-4 py-2 text-sm font-bold text-foreground hover:text-primary transition-all duration-300 group rounded-lg hover-elevate"
            >
              <span className="relative z-10">PROGRAM</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-4 py-2 text-sm font-bold text-foreground hover:text-primary transition-all duration-300 group rounded-lg hover-elevate"
            >
              <span className="relative z-10">PRICING</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button 
              onClick={() => document.getElementById('trainers')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-4 py-2 text-sm font-bold text-foreground hover:text-primary transition-all duration-300 group rounded-lg hover-elevate"
            >
              <span className="relative z-10">TRAINERS</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button 
              onClick={() => document.getElementById('transformations')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-4 py-2 text-sm font-bold text-foreground hover:text-primary transition-all duration-300 group rounded-lg hover-elevate"
            >
              <span className="relative z-10">BEFORE & AFTER</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-4 py-2 text-sm font-bold text-foreground hover:text-primary transition-all duration-300 group rounded-lg hover-elevate"
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
            <Dialog open={callDialogOpen} onOpenChange={setCallDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-2 border-primary/20 hover:border-primary/40 relative group overflow-visible">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Phone className="h-5 w-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Call Us Now</DialogTitle>
                  <DialogDescription>
                    Click the button below to call us directly and speak with our fitness experts
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center gap-4 py-4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <a 
                    href={`tel:${PHONE_NUMBER}`}
                    className="text-2xl font-bold text-primary hover:underline"
                  >
                    {PHONE_NUMBER}
                  </a>
                  <Button 
                    size="lg" 
                    className="w-full rounded-full"
                    onClick={() => window.location.href = `tel:${PHONE_NUMBER}`}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button 
              onClick={openWhatsApp} 
              size="lg" 
              className="rounded-full px-6 transition-all duration-300" 
              data-testid="button-book-call-header"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              <span>Book A Free Call</span>
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] md:min-h-[calc(100vh-5rem)] flex items-center overflow-hidden mt-20">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full bg-neutral-800">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            src="/videos/hero.mp4"
            className="absolute inset-0 w-full h-full object-cover object-[75%_5%] md:object-center"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10 px-4 md:px-6 py-8 md:py-12 mt-32 md:mt-0">
          <div className="max-w-3xl lg:max-w-2xl">
            <motion.div 
              className="space-y-5 md:space-y-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="font-heading font-bold leading-[1.15] tracking-tight text-white text-center lg:text-left" 
                style={{ fontSize: 'clamp(2rem, 7vw, 3.5rem)' }}
                variants={fadeInUp}
              >
                Transform Your
                <motion.span 
                  className="block text-primary mt-2"
                  variants={fadeInUp}
                >
                  Body & Mind
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-white/95 leading-relaxed max-w-xl font-medium text-center lg:text-left" 
                style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
                variants={fadeInUp}
              >
                Expert-led online fitness programs designed exclusively for women. Train anytime, anywhere.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-2 items-center lg:items-start pt-2"
                variants={fadeInUp}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    onClick={openWhatsApp} 
                    size="default"
                    className="rounded-full px-6 py-3 md:px-8 md:py-6 transition-all bg-primary hover:bg-primary/90 font-semibold text-sm md:text-base text-black"
                    data-testid="button-book-consultation-hero"
                  >
                    <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 text-black" />
                    Start Your Journey
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline" 
                    size="default"
                    className="rounded-full px-6 py-3 md:px-8 md:py-6 border-2 border-white bg-white/95 hover:bg-white hover:border-white transition-all font-semibold text-sm md:text-base text-foreground shadow-lg"
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    data-testid="button-view-packages"
                  >
                    View Packages
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div 
                className="flex justify-center lg:justify-start"
                variants={fadeInUp}
              >
                <motion.a 
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-wrap items-center gap-3 lg:gap-5 bg-black/70 hover:bg-black/80 backdrop-blur-md px-5 py-3 rounded-2xl transition-all duration-300 cursor-pointer group border border-white/30 hover:border-white/50 shadow-xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex group-hover:scale-110 transition-transform duration-300">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-white">4.8/5.0</span>
                  </div>
                  <div className="hidden md:block h-4 w-px bg-white/30" />
                  <div className="hidden md:block text-sm font-bold text-white whitespace-nowrap">
                    <span className="text-primary font-bold">1000+</span> Success Stories
                  </div>
                  <div className="hidden md:flex text-xs text-white/80 group-hover:text-white transition-colors items-center gap-1">
                    <span>View Reviews</span>
                    <TrendingUp className="h-3 w-3" />
                  </div>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notice Banner */}
      <AnimatedSection variant="slideInLeft">
        <section className="bg-primary/5 border-y border-primary/20 py-5">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-center gap-3 max-w-4xl mx-auto">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Info className="h-4 w-4 text-primary" />
              </div>
              <p className="text-center text-sm md:text-base text-primary font-semibold">
                <strong>Important:</strong> We only offer online classes. No offline batches available.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Form Section */}
      <AnimatedSection variant="scaleIn">
        <section className="py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/20 relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]" />
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-block mb-3 md:mb-4">
                <span className="bg-primary text-black px-5 py-2.5 rounded-full text-xs md:text-sm font-bold border border-primary/20">
                  Get Started Today
                </span>
              </div>
              <h2 className="font-heading font-bold mb-3 md:mb-4 tracking-tight text-xl md:text-2xl lg:text-3xl">
                Start Your Transformation
              </h2>
              <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
                Fill out the form and we'll contact you within 24 hours to discuss your fitness goals
              </p>
            </div>
            <Card className="p-4 md:p-6 lg:p-8 shadow-xl shadow-primary/10 border-2 border-primary/20 backdrop-blur hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 max-w-5xl mx-auto">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} data-testid="input-name" />
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
                          <FormLabel className="text-sm font-semibold">Email *</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" type="email" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <FormField
                      control={form.control}
                      name="contactNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">Contact Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="10-digit mobile number" {...field} data-testid="input-contact" />
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
                          <FormLabel className="text-sm font-semibold">Purpose of Joining *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-purpose">
                                <SelectValue placeholder="Select your fitness goal" />
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
                  </div>
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      size="default" 
                      className="w-full rounded-full text-sm py-4" 
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-form"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </Card>
          </div>
        </div>
        </section>
      </AnimatedSection>

      {/* Transformation Gallery */}
      <AnimatedSection variant="slideInRight">
        <section className="py-6 md:py-8 pb-10 md:pb-14 bg-gradient-to-b from-background via-primary/5 to-background" id="transformations">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <span className="bg-primary text-black px-5 py-2.5 rounded-full text-sm font-bold border border-primary/20">
                  Real Results
                </span>
              </div>
              <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold mb-3">
                <span className="text-primary">
                  Before & After
                </span>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">Real transformations from real women who took the first step towards a healthier lifestyle</p>
            </div>
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="grid grid-cols-2 gap-4 md:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {[
                { img: transform1, alt: "Before and after transformation 1", text: "Amazing Results", testId: "img-transformation-1", aspectRatio: '4/3' },
                { img: transform2, alt: "Before and after transformation 2", text: "Inspiring Change", testId: "img-transformation-2", aspectRatio: '4/3' },
                { img: transform3, alt: "Before and after transformation 3", text: "Real Progress", testId: "img-transformation-3" },
                { img: transform4, alt: "Before and after transformation 4", text: "Life Changing", testId: "img-transformation-4" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={scaleIn}
                  className="group relative rounded-lg md:rounded-xl overflow-hidden shadow-md md:shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src={item.img} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    style={{ aspectRatio: item.aspectRatio || 'auto', maxHeight: item.aspectRatio ? '300px' : 'none' }}
                    data-testid={item.testId}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-semibold text-xs md:text-sm">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        </section>
      </AnimatedSection>

      {/* Instagram Videos Section */}
      <AnimatedSection variant="zoomRotate">
        <section className="py-12 md:py-16 bg-black relative overflow-hidden" id="instagram-videos">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,204,22,0.08),transparent_70%)]" />
          <div className="w-full px-3 md:px-5 lg:px-6 relative">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-primary">
                  Workout with HOC Community
                </span>
              </h2>
              <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto font-bold">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
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
                className="flex items-center gap-3 group hover-elevate transition-all duration-300 border-2 border-white rounded-full px-5 py-2.5"
                data-testid="link-instagram-profile"
              >
                <div className="w-7 h-7 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={instagramIcon} 
                    alt="Instagram" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-base md:text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                  house_of_champions_studio
                </span>
              </a>

              <a 
                href="https://www.facebook.com/house_of_champions_studio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group hover-elevate transition-all duration-300 border-2 border-white rounded-full px-5 py-2.5"
                data-testid="link-facebook-profile"
              >
                <div className="w-7 h-7 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={facebookIcon} 
                    alt="Facebook" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-base md:text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                  house_of_champions_studio
                </span>
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Exclusively For Women - Elegant Black Design */}
      <AnimatedSection variant="fadeIn">
        <section className="py-8 md:py-10 bg-white relative overflow-hidden" id="program">
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

            {/* Class Banners Grid */}
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

            {/* Compact Info Section */}
            <div className="max-w-5xl mx-auto">
              {/* Features - Single Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-5 rounded-lg bg-black border border-black/10 hover:shadow-lg transition-all" data-testid="feature-live-classes">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-base mb-2 text-white">Daily LIVE Classes</h4>
                  <p className="text-white/80 text-sm">Expert trainers, interactive sessions</p>
                </div>
                <div className="text-center p-5 rounded-lg bg-black border border-black/10 hover:shadow-lg transition-all" data-testid="feature-flexible-timing">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-base mb-2 text-white">Flexible Timing</h4>
                  <p className="text-white/80 text-sm">Morning & evening slots available</p>
                </div>
                <div className="text-center p-5 rounded-lg bg-black border border-black/10 hover:shadow-lg transition-all" data-testid="feature-women-only">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-base mb-2 text-white">Women-Only Space</h4>
                  <p className="text-white/80 text-sm">Safe, supportive community</p>
                </div>
              </div>

              {/* Time Slots - Compact */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-black border border-black/10">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm block">Morning Sessions</span>
                    <span className="text-white/70 text-sm">5:45AM • 7AM • 8AM • 11AM</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-black border border-black/10">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm block">Evening Sessions</span>
                    <span className="text-white/70 text-sm">6PM • 7:30PM</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex justify-center">
                <button className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-black text-white font-bold text-sm md:text-base hover:bg-black/90 transition-all hover:scale-105 border-2 border-pink-500" data-testid="button-join-anytime">
                  Join Any Class, Any Time, Any Day
                </button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Training Types */}
      <AnimatedSection variant="slideUp">
        <section className="py-8 md:py-10 lg:py-12 bg-gradient-to-br from-primary/5 via-background to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="container px-4 md:px-6 relative max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-block mb-3 md:mb-4">
              <span className="bg-primary text-black px-5 py-2.5 rounded-full text-xs md:text-sm font-bold border border-primary/20">
                Diverse Workouts
              </span>
            </div>
            <h2 className="font-heading font-bold mb-2 md:mb-3 tracking-tight text-xl md:text-2xl lg:text-3xl">
              Our Training Programs
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-sm">Comprehensive programs for every fitness level and goal</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              { image: cardioImage, title: "Cardio Core", desc: "High-energy workouts that elevate your heart rate, boost endurance, and burn calories effectively.", icon: Flame },
              { image: functionalImage, title: "Functional Training", desc: "Improve daily performance, reduce injury risk, and enhance flexibility with practical movements.", icon: Target },
              { image: strengthImage, title: "Strength Training", desc: "Build muscle, increase power, and develop total body strength with progressive resistance workouts.", icon: Dumbbell },
              { image: mobilityImage, title: "Mobility Exercise", desc: "Enhance your range of motion and reduce stiffness with targeted mobility work.", icon: Activity },
              { image: yogaImage, title: "Yoga Training", desc: "Holistic practice combining postures, breathwork, and meditation for mind-body harmony.", icon: Heart },
              { image: zumbaImage, title: "Zumba / Aerobics", desc: "Fun cardio dance workouts that keep you active, energized, and engaged.", icon: Zap },
            ].map((item, i) => (
              <Card key={i} className="group overflow-hidden hover-elevate border-slate-200 shadow-md hover:shadow-xl transition-all duration-500 bg-white hover:border-slate-300">
                <div className="relative h-48 md:h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-3 md:p-4 space-y-1.5">
                  <h3 className="font-heading text-base md:text-lg font-bold text-slate-800 group-hover:text-slate-600 transition-colors">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </section>
      </AnimatedSection>

      {/* Pricing Packages - Redesigned */}
      <AnimatedSection variant="slideInLeft">
        <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden py-6" id="pricing">
        <div className="w-full px-3 md:px-4 lg:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-primary max-w-3xl mx-auto font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Choose the perfect plan that fits your lifestyle and commit to your wellness journey
            </motion.p>
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-6 perspective-1000">
            {[
              {
                name: "Starter",
                duration: "1 Month Plan",
                classes: "26 Live Classes",
                price: "₹2,999",
                pricePerClass: "₹115/class",
                description: "Perfect for beginners starting their fitness journey",
                features: [
                  "Personalized Nutrition Guide",
                  "Access to All Class Types",
                  "Cardio, HIIT & Yoga Sessions",
                  "Strength & Aerobic Training",
                  "Mindfulness & Meditation"
                ]
              },
              {
                name: "Champion",
                duration: "3 Months Plan",
                classes: "85 Live Classes",
                price: "₹6,999",
                pricePerClass: "₹82/class",
                description: "Most popular choice for serious transformation",
                features: [
                  "Complete Diet & Meal Planning",
                  "Unlimited Class Variety",
                  "Advanced HIIT & Cardio",
                  "Body Sculpting & Pilates",
                  "Priority Trainer Support"
                ],
                featured: true,
                badge: "Best Value"
              },
              {
                name: "Elite",
                duration: "6 Months Plan",
                classes: "UNLIMITED Classes",
                price: "₹9,999",
                pricePerClass: "Unlimited",
                description: "Ultimate commitment for lasting transformation",
                features: [
                  "Premium Nutrition Consultation",
                  "Unlimited Class Access 24/7",
                  "All Premium Programs",
                  "VIP Trainer Support",
                  "Flexible Schedule Options"
                ]
              },
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: pkg.featured ? 1.1 : 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`${pkg.featured ? 'z-20 w-full md:w-[350px] lg:w-[380px]' : 'z-10 w-full md:w-[320px] lg:w-[340px] opacity-90'} hidden md:block`}
                style={{ 
                  transform: pkg.featured ? 'translateZ(50px)' : i === 0 ? 'translateZ(-20px) rotateY(5deg)' : 'translateZ(-20px) rotateY(-5deg)'
                }}
              >
                <Card className={`group h-full p-5 md:p-6 lg:p-7 hover-elevate transition-all duration-500 bg-white border-2 border-white/20 hover:border-white/40 shadow-2xl relative overflow-hidden ${pkg.featured ? 'shadow-primary/20' : ''}`}>
                  {pkg.featured && (
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                  )}
                  <CardContent className="p-0 space-y-3 md:space-y-4 relative">
                    {pkg.badge && (
                      <div className="inline-flex items-center gap-1.5 bg-black text-white px-3 py-1.5 rounded-full text-xs font-bold">
                        <Star className="h-3 w-3 fill-white" />
                        {pkg.badge}
                      </div>
                    )}
                    <div>
                      <h3 className="font-heading text-2xl md:text-3xl font-extrabold mb-1 text-black">
                        {pkg.name}
                      </h3>
                      <p className="text-black/70 font-semibold text-sm md:text-base mb-0.5">{pkg.duration}</p>
                      <p className="text-black/60 text-xs md:text-sm italic">{pkg.description}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="font-heading text-4xl md:text-5xl font-black text-black">
                        {pkg.price}
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs md:text-sm text-black/60 font-medium">{pkg.classes}</span>
                        <span className="text-xs text-black/40">•</span>
                        <span className="text-xs md:text-sm font-bold text-black/80">{pkg.pricePerClass}</span>
                      </div>
                    </div>
                    <div className="h-px bg-black/10" />
                    <ul className="grid grid-cols-1 gap-2.5">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2.5 group/item">
                          <div className="h-5 w-5 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm md:text-base text-black/80 leading-tight font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={openWhatsApp} 
                      className="w-full rounded-full py-5 md:py-6 text-sm md:text-base font-bold transition-all duration-300 bg-black hover:bg-black/90 text-white"
                      data-testid={`button-select-${pkg.name.toLowerCase().replace(' ', '-')}`}
                    >
                      Start {pkg.name} Plan
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
                name: "Starter",
                duration: "1 Month Plan",
                classes: "26 Live Classes",
                price: "₹2,999",
                pricePerClass: "₹115/class",
                description: "Perfect for beginners starting their fitness journey",
                features: [
                  "Personalized Nutrition Guide",
                  "Access to All Class Types",
                  "Cardio, HIIT & Yoga Sessions",
                  "Strength & Aerobic Training",
                  "Mindfulness & Meditation"
                ]
              },
              {
                name: "Champion",
                duration: "3 Months Plan",
                classes: "85 Live Classes",
                price: "₹6,999",
                pricePerClass: "₹82/class",
                description: "Most popular choice for serious transformation",
                features: [
                  "Complete Diet & Meal Planning",
                  "Unlimited Class Variety",
                  "Advanced HIIT & Cardio",
                  "Body Sculpting & Pilates",
                  "Priority Trainer Support"
                ],
                featured: true,
                badge: "Best Value"
              },
              {
                name: "Elite",
                duration: "6 Months Plan",
                classes: "UNLIMITED Classes",
                price: "₹9,999",
                pricePerClass: "Unlimited",
                description: "Ultimate commitment for lasting transformation",
                features: [
                  "Premium Nutrition Consultation",
                  "Unlimited Class Access 24/7",
                  "All Premium Programs",
                  "VIP Trainer Support",
                  "Flexible Schedule Options"
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
                <Card className="group p-5 hover-elevate transition-all duration-500 bg-white border-2 border-white/20 hover:border-white/40 shadow-xl relative overflow-hidden">
                  <CardContent className="p-0 space-y-3 relative">
                    {pkg.badge && (
                      <div className="inline-flex items-center gap-1.5 bg-black text-white px-3 py-1.5 rounded-full text-xs font-bold">
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
                          <div className="h-4 w-4 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="h-2.5 w-2.5 text-white" />
                          </div>
                          <span className="text-sm text-black/80 leading-tight font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={openWhatsApp} 
                      className="w-full rounded-full py-5 text-sm font-bold transition-all duration-300 bg-black hover:bg-black/90 text-white"
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

      {/* Meet Trainers */}
      <AnimatedSection variant="scaleIn">
        <section className="py-8 md:py-10 lg:py-12 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 relative overflow-hidden" id="trainers">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="container px-4 md:px-6 relative max-w-5xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-block mb-3 md:mb-4">
              <span className="bg-primary text-black px-5 py-2.5 rounded-full text-xs md:text-sm font-bold border border-primary/20">
                Expert Team
              </span>
            </div>
            <h2 className="font-heading font-bold mb-2 md:mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-xl md:text-2xl lg:text-3xl">
              Meet Your Trainers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">Certified professionals dedicated to transforming your fitness journey</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
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
              <Card key={i} className="group p-4 md:p-5 hover-elevate bg-card/50 backdrop-blur border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/15">
                <CardContent className="p-0 space-y-3 text-center">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-500" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-primary/20 group-hover:border-primary/40 transition-all duration-500 shadow-lg">
                      <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-base md:text-lg font-bold mb-1 group-hover:text-primary transition-colors">{trainer.name}</h3>
                    <p className="text-xs text-primary font-bold bg-primary/10 px-2.5 py-1 rounded-full inline-block">{trainer.role}</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{trainer.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg overflow-hidden shadow-md">
                  <img src={gymLogo} alt="HOC Fitness" className="h-full w-full object-cover" />
                </div>
                <span className="font-heading text-xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                  HOC Fitness
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Includes all classes – Cardio core, HIIT, Yoga, Zumba, strength training, aerobics, Meditation and Pranayam, pilates, Body toning up & more.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=100063565829026" target="_blank" rel="noopener noreferrer" className="hover-elevate h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center" data-testid="link-facebook">
                  <Facebook className="h-5 w-5 text-primary" />
                </a>
                <a href="https://www.instagram.com/house_of_champions_studio/" target="_blank" rel="noopener noreferrer" className="hover-elevate h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center" data-testid="link-instagram">
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
                <a href="https://www.youtube.com/@houseofchampions8926" target="_blank" rel="noopener noreferrer" className="hover-elevate h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center" data-testid="link-youtube">
                  <Youtube className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Home</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary">Contact</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Get In Touch</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <a 
                    href="https://www.google.com/maps/place/House+Of+Champions+Gym/@19.2361639,73.1543851,17z/data=!3m1!4b1!4m6!3m5!1s0x3be795049d6e75a1:0xa3bb5dfe6f0afeaa!8m2!3d19.2361639!4d73.15696!16s%2Fg%2F11w18ww9mr?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Basement, Gangagodavari Apt, below Sundar Classes, Katemanivali, Naka, Kalyan, Maharashtra 421306
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <button 
                    onClick={() => setCallDialogOpen(true)} 
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-left" 
                    data-testid="button-phone"
                  >
                    +91 8600126395
                  </button>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="mailto:abhijeet18012001@gmail.com" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-email">abhijeet18012001@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>Copyright © 2025 Hoc Fitness. All Rights Reserved</p>
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
            className="h-16 w-16 rounded-full bg-black hover:bg-black/90 text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Contact Us"
            data-testid="button-floating-contact"
          >
            <MessageCircle className="h-7 w-7 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
