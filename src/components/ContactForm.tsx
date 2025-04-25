
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from 'emailjs-com';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});


type FormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    
  });

  const onSubmit = (data: FormValues) => {
    const templateParams = {
      from_name: data.firstName + " " + data.lastName,
      reply_to: data.email,
      message: data.message,
    };
  
    emailjs
      .send(
        'service_5k0r0xq',
        'template_4xm249n',
        templateParams,
        'h2-FOJLlHGpj_wLhS'
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for reaching out. I'll get back to you soon.",
          });
          form.reset();
        },
        (error) => {
          console.error("Email send error:", error);
          toast({
            title: "Oops!",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4" >
          <FormField 
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/100">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} className="bg-white/10" style = {{border: "2px solid rgba(255,255,255, 0.5)"}} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/100">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} className="bg-white/10" style = {{border: "2px solid rgba(255,255,255, 0.5)"}} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/100">Email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} className="bg-white/10" style = {{border: "2px solid rgba(255,255,255, 0.5)"}} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/100">Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Your message here..." 
                  className="min-h-[120px] bg-white/10"
                  {...field} 
                  style = {{border: "2px solid rgba(255,255,255, 0.5)"}}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-accent hover:bg-accent/90"
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
};