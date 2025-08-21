import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { waitlistApi } from "@/services/waitlistApi";
import { Building, Clock, Download, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";

interface WaitlistAdminProps {
  isVisible?: boolean;
}

export const WaitlistAdmin = ({ isVisible = false }: WaitlistAdminProps) => {
  const [analytics, setAnalytics] = useState<any>(null);
  const [recentSubmissions, setRecentSubmissions] = useState<any[]>([]);

  useEffect(() => {
    if (isVisible) {
      loadData();
    }
  }, [isVisible]);

  const loadData = () => {
    const data = waitlistApi.getAnalytics();
    setAnalytics(data);
    setRecentSubmissions(data.recentSubmissions);
  };

  const exportData = () => {
    const data = waitlistApi.getAnalytics();
    const csvContent = convertToCSV(data.recentSubmissions);
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `switch-waitlist-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const convertToCSV = (data: any[]) => {
    const headers = ['Name', 'Email', 'Company', 'Role', 'Industry', 'Expected Users', 'Timeline', 'Submitted At'];
    const rows = data.map(sub => [
      `${sub.firstName} ${sub.lastName}`,
      sub.email,
      sub.company,
      sub.role,
      sub.industry,
      sub.expectedUsers,
      sub.timeline,
      new Date(sub.submittedAt).toLocaleDateString()
    ]);
    
    return [headers, ...rows].map(row => row.join(',')).join('\n');
  };

  if (!isVisible) return null;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Waitlist Dashboard</h1>
          <p className="text-muted-foreground">Monitor waitlist submissions and analytics</p>
        </div>
        <Button onClick={exportData} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Data
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics?.totalSubmissions || 0}</div>
            <p className="text-xs text-muted-foreground">
              People waiting to join Switch
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Industry</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analytics?.industryBreakdown ? 
                Object.entries(analytics.industryBreakdown)
                  .sort(([,a], [,b]) => (b as number) - (a as number))[0]?.[0] || 'N/A'
                : 'N/A'
              }
            </div>
            <p className="text-xs text-muted-foreground">
              Most common industry
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Timeline</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analytics?.timelineBreakdown ? 
                Object.entries(analytics.timelineBreakdown)
                  .sort(([,a], [,b]) => (b as number) - (a as number))[0]?.[0] || 'N/A'
                : 'N/A'
              }
            </div>
            <p className="text-xs text-muted-foreground">
              Most common timeline
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growth</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {recentSubmissions.length > 0 ? 
                Math.round((recentSubmissions.length / analytics?.totalSubmissions) * 100)
                : 0
              }%
            </div>
            <p className="text-xs text-muted-foreground">
              Recent submissions
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="recent" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recent">Recent Submissions</TabsTrigger>
          <TabsTrigger value="industry">Industry Breakdown</TabsTrigger>
          <TabsTrigger value="timeline">Timeline Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Submissions</CardTitle>
              <CardDescription>
                Latest waitlist entries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSubmissions.map((submission, index) => (
                  <div key={submission.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-xr-blue to-xr-purple flex items-center justify-center text-white font-semibold">
                        {submission.firstName[0]}{submission.lastName[0]}
                      </div>
                      <div>
                        <div className="font-medium">
                          {submission.firstName} {submission.lastName}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {submission.email}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{submission.company}</div>
                      <div className="text-sm text-muted-foreground">{submission.role}</div>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary">{submission.industry}</Badge>
                        <Badge variant="outline">{submission.expectedUsers}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="industry" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Industry Breakdown</CardTitle>
              <CardDescription>
                Distribution across different industries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {analytics?.industryBreakdown && 
                  Object.entries(analytics.industryBreakdown)
                    .sort(([,a], [,b]) => (b as number) - (a as number))
                    .map(([industry, count]) => (
                      <div key={industry} className="flex items-center justify-between">
                        <span className="capitalize">{industry}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-muted rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-xr-blue to-xr-purple h-2 rounded-full"
                              style={{ 
                                width: `${((count as number) / analytics.totalSubmissions) * 100}%` 
                              }}
                            />
                          </div>
                          <span className="text-sm font-medium w-12 text-right">
                            {count as number}
                          </span>
                        </div>
                      </div>
                    ))
                }
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Timeline Analysis</CardTitle>
              <CardDescription>
                Implementation timeline preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {analytics?.timelineBreakdown && 
                  Object.entries(analytics.timelineBreakdown)
                    .sort(([,a], [,b]) => (b as number) - (a as number))
                    .map(([timeline, count]) => (
                      <div key={timeline} className="flex items-center justify-between">
                        <span className="capitalize">{timeline}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-muted rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-xr-pink to-xr-cyan h-2 rounded-full"
                              style={{ 
                                width: `${((count as number) / analytics.totalSubmissions) * 100}%` 
                              }}
                            />
                          </div>
                          <span className="text-sm font-medium w-12 text-right">
                            {count as number}
                          </span>
                        </div>
                      </div>
                    ))
                }
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};


