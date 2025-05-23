"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowDown, ArrowUp, Check, MessageSquare, Users } from "lucide-react";
import { redirect } from "next/navigation";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Sarah M.",
      review:
        "Finally, a safe space to receive honest feedback. The anonymity feature is perfect!",
      rating: 5,
    },
    {
      name: "Alex K.",
      review:
        "inkognitOh! changed how I connect with people. The dashboard is so clean and intuitive.",
      rating: 5,
    },
    {
      name: "Jordan P.",
      review:
        "I love getting anonymous messages from friends. It's like a digital truth serum!",
      rating: 5,
    },
    {
      name: "Taylor R.",
      review:
        "The platform feels secure and the instant sharing is amazing. Highly recommended!",
      rating: 5,
    },
    {
      name: "Morgan L.",
      review:
        "Best anonymous messaging platform I've used. Simple, elegant, and totally anonymous.",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Simple Sign-up",
      description:
        "Get started in seconds with our streamlined registration process",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Secure Dashboard",
      description:
        "Your personal command center for managing all anonymous messages",
    },
    {
      icon: <ArrowUp className="w-8 h-8" />,
      title: "Instant Link Sharing",
      description:
        "Share your unique link anywhere and start receiving messages immediately",
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: "Total Anonymity",
      description: "Complete privacy protection for both senders and receivers",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div
          className="absolute inset-0 bg-gradient-radial from-gray-800/20 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />

        <div
          className={`text-center z-10 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge
            variant="secondary"
            className="mb-6 bg-gray-800 text-gray-200 border-gray-700"
          >
            Anonymous Messaging Platform
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent leading-tight">
            inkognitOh!
          </h1>

          <p className="text-2xl md:text-3xl font-light mb-8 text-gray-300 leading-relaxed">
            Reveal the truth, stay unknown.
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Enter a world where honesty flows freely. Create your account, get
            your unique link, and start receiving anonymous messages in your
            secure dashboard.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-2xl px-8 py-4 text-lg font-semibold w-full md:w-auto"
              onClick={() => {
                redirect("/sign-in");
              }}
            >
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 bg-gray-800 text-white transition-all duration-300 px-8 py-4 text-lg w-full md:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three simple steps to enter the anonymous world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Account",
                description:
                  "Sign up with just your email and create your anonymous profile",
              },
              {
                step: "02",
                title: "Get Your Link",
                description:
                  "Receive a unique, shareable link for your anonymous message inbox",
              },
              {
                step: "03",
                title: "Receive Messages",
                description:
                  "Share your link and start receiving anonymous messages in your dashboard",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-gray-600 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Choose inkognitOh!
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built for privacy, designed for truth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-700 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What Users Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real experiences from our anonymous community
            </p>
          </div>

          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gray-900 border-gray-800 h-full">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        "{testimonial.review}"
                      </p>
                      <p className="text-gray-500 font-semibold">
                        — {testimonial.name}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700" />
            <CarouselNext className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700" />
          </Carousel>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Ready to Enter the Anonymous World?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands who have discovered the power of anonymous
            communication. Your journey into honest connections starts here.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-2xl px-12 py-6 text-xl font-semibold w-full md:w-auto"
              onClick={() => {
                redirect("/sign-up");
              }}
            >
              Join inkognitOh! Now
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Free to start • No credit card required • Anonymous forever
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">inkognitOh!</div>
          <p className="text-gray-400 mb-6">Where truth meets anonymity</p>
          <div className="flex justify-center space-x-8 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-6">
            © 2024 inkognitOh! All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
