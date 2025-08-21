import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { waitlistApi, WaitlistSubmission } from "@/services/waitlistApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building, CheckCircle, Mail, MessageSquare, User, Zap } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const waitlistSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  industry: z.string().min(1, "Please select an industry"),
  useCase: z.string().min(10, "Please describe your use case (at least 10 characters)"),
  expectedUsers: z.string().min(1, "Please select expected user count"),
  timeline: z.string().min(1, "Please select timeline"),
  newsletter: z.boolean().default(false),
  terms: z.boolean().refine((val) => val === true, "You must accept the terms and conditions"),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

interface WaitlistFormProps {
  onSuccess?: () => void;
  onClose?: () => void;
}

export const WaitlistForm = ({ onSuccess, onClose }: WaitlistFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      newsletter: false,
      terms: false,
    },
  });

  const watchedTerms = watch("terms");
  const watchedNewsletter = watch("newsletter");

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await waitlistApi.submitWaitlist(data as WaitlistSubmission);
      
      if (response.success) {
        setIsSuccess(true);
        toast.success(response.message, {
          description: "We'll be in touch soon with updates about Switch.",
        });
        
        // Reset form after success
        setTimeout(() => {
          reset();
          setIsSuccess(false);
          onSuccess?.();
        }, 3000);
      } else {
        throw new Error(response.error || "Failed to join waitlist");
      }
      
    } catch (error) {
      toast.error("Failed to join waitlist", {
        description: error instanceof Error ? error.message : "Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Welcome to the Future!
        </h3>
        <p className="text-muted-foreground mb-6">
          You've successfully joined the Switch waitlist. We'll notify you as soon as we launch.
        </p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>✓ Added to exclusive early access list</p>
          <p>✓ Priority notification when we launch</p>
          <p>✓ Special founding member benefits</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-xr-blue to-xr-purple flex items-center justify-center">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Join the Switch Waitlist
        </h2>
        <p className="text-muted-foreground">
          Be among the first to experience the future of presence
        </p>
      </div>

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-sm font-medium">
            First Name *
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="firstName"
              {...register("firstName")}
              className="pl-10"
              placeholder="Enter your first name"
            />
          </div>
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-sm font-medium">
            Last Name *
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="lastName"
              {...register("lastName")}
              className="pl-10"
              placeholder="Enter your last name"
            />
          </div>
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email Address *
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            {...register("email")}
            className="pl-10"
            placeholder="Enter your email address"
          />
        </div>
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Company Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="company" className="text-sm font-medium">
            Company *
          </Label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="company"
              {...register("company")}
              className="pl-10"
              placeholder="Enter company name"
            />
          </div>
          {errors.company && (
            <p className="text-sm text-red-500">{errors.company.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="role" className="text-sm font-medium">
            Role *
          </Label>
          <Input
            id="role"
            {...register("role")}
            placeholder="e.g., CEO, CTO, Developer"
          />
          {errors.role && (
            <p className="text-sm text-red-500">{errors.role.message}</p>
          )}
        </div>
      </div>

      {/* Industry and Use Case */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="industry" className="text-sm font-medium">
            Industry *
          </Label>
          <Select onValueChange={(value) => setValue("industry", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="manufacturing">Manufacturing</SelectItem>
              <SelectItem value="retail">Retail & E-commerce</SelectItem>
              <SelectItem value="finance">Finance & Banking</SelectItem>
              <SelectItem value="media">Media & Entertainment</SelectItem>
              <SelectItem value="real-estate">Real Estate</SelectItem>
              <SelectItem value="government">Government</SelectItem>
              <SelectItem value="non-profit">Non-Profit</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.industry && (
            <p className="text-sm text-red-500">{errors.industry.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="expectedUsers" className="text-sm font-medium">
            Expected Users *
          </Label>
          <Select onValueChange={(value) => setValue("expectedUsers", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select user count" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10 users</SelectItem>
              <SelectItem value="11-50">11-50 users</SelectItem>
              <SelectItem value="51-200">51-200 users</SelectItem>
              <SelectItem value="201-1000">201-1,000 users</SelectItem>
              <SelectItem value="1000+">1,000+ users</SelectItem>
            </SelectContent>
          </Select>
          {errors.expectedUsers && (
            <p className="text-sm text-red-500">{errors.expectedUsers.message}</p>
          )}
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-2">
        <Label htmlFor="timeline" className="text-sm font-medium">
          Implementation Timeline *
        </Label>
        <Select onValueChange={(value) => setValue("timeline", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select timeline" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
            <SelectItem value="short-term">Short-term (3-6 months)</SelectItem>
            <SelectItem value="medium-term">Medium-term (6-12 months)</SelectItem>
            <SelectItem value="long-term">Long-term (12+ months)</SelectItem>
            <SelectItem value="exploring">Just exploring</SelectItem>
          </SelectContent>
        </Select>
        {errors.timeline && (
          <p className="text-sm text-red-500">{errors.timeline.message}</p>
        )}
      </div>

      {/* Use Case Description */}
      <div className="space-y-2">
        <Label htmlFor="useCase" className="text-sm font-medium">
          How do you plan to use Switch? *
        </Label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <Textarea
            id="useCase"
            {...register("useCase")}
            className="pl-10 min-h-[100px]"
            placeholder="Describe your use case, goals, or specific needs..."
          />
        </div>
        {errors.useCase && (
          <p className="text-sm text-red-500">{errors.useCase.message}</p>
        )}
      </div>

      {/* Preferences */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="newsletter"
            checked={watchedNewsletter}
            onCheckedChange={(checked) => setValue("newsletter", checked as boolean)}
          />
          <Label htmlFor="newsletter" className="text-sm">
            Subscribe to our newsletter for updates and insights
          </Label>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={watchedTerms}
            onCheckedChange={(checked) => setValue("terms", checked as boolean)}
            className="mt-1"
          />
          <Label htmlFor="terms" className="text-sm">
            I accept the{" "}
            <a href="#" className="text-primary hover:underline">
              terms and conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline">
              privacy policy
            </a>
            *
          </Label>
        </div>
        {errors.terms && (
          <p className="text-sm text-red-500">{errors.terms.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-xr-blue to-xr-purple hover:from-xr-blue/90 hover:to-xr-purple/90 text-white"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
            Joining Waitlist...
          </>
        ) : (
          <>
            <Zap className="w-5 h-5 mr-2" />
            Join the Waitlist
          </>
        )}
      </Button>

      {/* Footer */}
      <p className="text-xs text-center text-muted-foreground">
        By joining the waitlist, you'll be among the first to know when Switch launches. 
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
};
