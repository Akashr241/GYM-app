'use server';

import { generateCustomizedNotifications } from '@/ai/flows/generate-customized-notifications';
import { members } from '@/lib/data';

type NotificationResult = {
  memberName: string;
  notification: string;
};

export async function generateNotificationsAction(
  eventDetails: string
): Promise<NotificationResult[] | { error: string }> {
  if (!eventDetails || eventDetails.trim() === '') {
    return { error: 'Event details cannot be empty.' };
  }

  try {
    const gymName = 'GymTrack Lite';

    const notificationPromises = members
      .filter((member) => member.status === 'Active')
      .map((member) =>
        generateCustomizedNotifications({
          memberName: member.name,
          eventDetails,
          gymName,
          memberTier: member.tier,
        }).then((output) => ({
          memberName: member.name,
          notification: output.notificationText,
        }))
      );

    const results = await Promise.all(notificationPromises);
    return results;
  } catch (e) {
    console.error(e);
    return { error: 'Failed to generate notifications. Please try again.' };
  }
}
