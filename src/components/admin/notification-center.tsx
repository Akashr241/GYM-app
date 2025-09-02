"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { generateNotificationsAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

type Inputs = {
  eventDetails: string;
};

type NotificationResult = {
  memberName: string;
  notification: string;
};

export default function NotificationCenter() {
  const [notifications, setNotifications] = useState<NotificationResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    setNotifications([]);
    const result = await generateNotificationsAction(data.eventDetails);
    setIsLoading(false);

    if ("error" in result) {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      });
    } else {
      setNotifications(result);
      toast({
        title: "Success!",
        description: "Customized notifications have been generated for all active members.",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Notification Center</CardTitle>
        <CardDescription>
          Generate and send personalized announcements to all members. The content will be
          customized for each member using AI.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="eventDetails">Event or Announcement Details</Label>
            <Textarea
              id="eventDetails"
              placeholder="e.g., 'The gym will be closed this Friday for maintenance.' or 'New yoga class starts next Monday at 6 PM!'"
              {...register("eventDetails", { required: "This field is required." })}
            />
            {errors.eventDetails && <p className="text-sm text-destructive">{errors.eventDetails.message}</p>}
          </div>

          {notifications.length > 0 && (
            <div>
                <h3 className="mb-2 font-medium">Generated Previews:</h3>
                <ScrollArea className="h-72 w-full rounded-md border p-4">
                    <div className="space-y-4">
                        {notifications.map((n, i) => (
                            <Card key={i} className="bg-secondary">
                                <CardHeader className="p-4">
                                    <CardTitle className="text-base">{n.memberName}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 pt-0">
                                    <p className="text-sm text-secondary-foreground">{n.notification}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </ScrollArea>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Generate & Send
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
