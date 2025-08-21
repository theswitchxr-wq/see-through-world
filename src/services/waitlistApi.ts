export interface WaitlistSubmission {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  industry: string;
  useCase: string;
  expectedUsers: string;
  timeline: string;
  newsletter: boolean;
  terms: boolean;
}

export interface WaitlistResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    email: string;
    submittedAt: string;
  };
  error?: string;
}

class WaitlistApiService {
  private baseUrl: string;

  constructor() {
    // In production, this would be your actual API endpoint
    this.baseUrl = import.meta.env.VITE_API_URL || 'https://api.theswitch.life';
  }

  async submitWaitlist(data: WaitlistSubmission): Promise<WaitlistResponse> {
    try {
      // For now, we'll simulate an API call
      // In production, replace this with actual API call
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
      
      // Simulate success (90% success rate for demo)
      const isSuccess = Math.random() > 0.1;
      
      if (isSuccess) {
        // Store in localStorage for demo purposes
        const submissions = this.getStoredSubmissions();
        const newSubmission = {
          id: `waitlist_${Date.now()}`,
          ...data,
          submittedAt: new Date().toISOString(),
        };
        submissions.push(newSubmission);
        this.storeSubmissions(submissions);

        return {
          success: true,
          message: "Successfully joined the waitlist!",
          data: {
            id: newSubmission.id,
            email: newSubmission.email,
            submittedAt: newSubmission.submittedAt,
          },
        };
      } else {
        throw new Error("Network error occurred");
      }
    } catch (error) {
      console.error("Waitlist submission error:", error);
      
      return {
        success: false,
        message: "Failed to join waitlist",
        error: error instanceof Error ? error.message : "Unknown error occurred",
      };
    }
  }

  async checkWaitlistStatus(email: string): Promise<{ exists: boolean; position?: number }> {
    try {
      const submissions = this.getStoredSubmissions();
      const existingSubmission = submissions.find(sub => sub.email === email);
      
      if (existingSubmission) {
        const position = submissions.findIndex(sub => sub.email === email) + 1;
        return { exists: true, position };
      }
      
      return { exists: false };
    } catch (error) {
      console.error("Error checking waitlist status:", error);
      return { exists: false };
    }
  }

  private getStoredSubmissions(): (WaitlistSubmission & { id: string; submittedAt: string })[] {
    try {
      const stored = localStorage.getItem('switch_waitlist_submissions');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  private storeSubmissions(submissions: (WaitlistSubmission & { id: string; submittedAt: string })[]): void {
    try {
      localStorage.setItem('switch_waitlist_submissions', JSON.stringify(submissions));
    } catch (error) {
      console.error("Error storing submissions:", error);
    }
  }

  // Method to get analytics data (for admin purposes)
  getAnalytics() {
    const submissions = this.getStoredSubmissions();
    
    const industryCounts = submissions.reduce((acc, sub) => {
      acc[sub.industry] = (acc[sub.industry] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const userCounts = submissions.reduce((acc, sub) => {
      acc[sub.expectedUsers] = (acc[sub.expectedUsers] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const timelineCounts = submissions.reduce((acc, sub) => {
      acc[sub.timeline] = (acc[sub.timeline] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalSubmissions: submissions.length,
      industryBreakdown: industryCounts,
      userCountBreakdown: userCounts,
      timelineBreakdown: timelineCounts,
      recentSubmissions: submissions.slice(-10).reverse(),
    };
  }
}

export const waitlistApi = new WaitlistApiService();


