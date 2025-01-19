import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Bot, X } from "lucide-react";
import { Twitter, Mail, FileText,BarChart, MessageSquare, TrendingDown, BarChart3, Clock, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const Index = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const faqs = [
    {
      question: "How does the AI generate tweets?",
      answer: "Our AI analyzes successful SaaS marketing content and your product details to generate engaging, relevant tweets that resonate with your target audience."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! Once we launch, all waitlist members will get exclusive access to a free trial period to test out all premium features."
    },
    {
      question: "What social media platforms are supported?",
      answer: "Currently, we're focused on X (formerly Twitter) to provide the best possible experience. We plan to expand to other platforms in the future."
    }
  ];
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Enter your SaaS details",
      description: "Tell us about your product and target audience"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Get tweet suggestions",
      description: "Receive AI-generated tweet ideas in seconds"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Schedule and post",
      description: "One-click scheduling at optimal times"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Track and optimize",
      description: "Monitor performance and improve results"
    }
  ];
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI Tweet Recommendations",
      description: "Get personalized suggestions for tweet content that resonates with your audience.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Smart Scheduling",
      description: "Schedule tweets at optimal times based on your audience's engagement patterns.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Engagement Analytics",
      description: "Deep insights into your tweet performance with actionable improvement suggestions.",
    },
  ];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      
      const { error } = await supabase
        .from("users")
        .insert({email: email});
        // .insert([{ email }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been added to the waitlist.",
      });
      setEmail("");
    } catch (error) {
      console.error("Error adding user to waitlist", error);
      alert(error.message);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Revolutionize <span className="text-[#8B4513]">Your SaaS</span>
            <br />Marketing with AI-
            <br />Generated Tweets!
          </h1>
          <p className="text-xl text-gray-600">
            Generate tailored tweet ideas, automate your posting schedule, and boost your reach—
            <br />all in one tool
          </p>
          <div className="relative w-24 h-24 mx-auto mb-8 animate-float">
            <Bot className="w-full h-full text-[#8B4513]" />
          </div>

          <div className="max-w-md mx-auto mt-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-lg h-12 rounded-full p-5"
              />
              <Button 
                type="submit" 
                size="lg" 
                disabled={isLoading}
                className="bg-[#8B4513] hover:bg-[#704010] rounded-full h-12"
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          </div>
        </div>

        {/* Pain Points Section */}
        <section className="py-20 bg-sage/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 animate-fade-up">
            Struggling with Your SaaS Social Presence?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <MessageSquare className="w-8 h-8 text-coral" />,
                text: "Running out of engaging tweet ideas?"
              },
              {
                icon: <Clock className="w-8 h-8 text-coral" />,
                text: "Inconsistent posting schedule?"
              },
              {
                icon: <TrendingDown className="w-8 h-8 text-coral" />,
                text: "Low engagement rates?"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <p className="text-lg text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

        {/* Features Section */}
        <div className="py-24 bg-gradient-to-b from-white to-sage/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-dark">Core Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mb-4 text-coral">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

        {/* How It Works Section */}
        <section className="py-20 bg-sage/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-up">
          How It Works
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-coral/10 rounded-full flex items-center justify-center text-coral">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-coral/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

        {/* FAQ Section */}
        <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-up">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>

        {/* Footer */}
        <footer className="bg-sage/5 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">SaaScribe</h3>
            <p className="text-gray-600">
              AI-powered social media marketing for SaaS companies.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-coral">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-coral">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-coral">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-coral">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/ShrishailPatil_" className="text-gray-600 hover:text-coral">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-coral">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} SaaScribe. All rights reserved.</p>
        </div>
      </div>
    </footer>
      </div>
    </div>
  );
};

export default Index;