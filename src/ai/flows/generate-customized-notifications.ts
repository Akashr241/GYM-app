// Use server directive.
'use server';

/**
 * @fileOverview Generates customized notifications for members regarding schedules and events.
 *
 * - generateCustomizedNotifications - A function that generates customized notifications.
 * - GenerateCustomizedNotificationsInput - The input type for the generateCustomizedNotifications function.
 * - GenerateCustomizedNotificationsOutput - The return type for the generateCustomizedNotifications function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCustomizedNotificationsInputSchema = z.object({
  memberName: z.string().describe('The name of the member receiving the notification.'),
  eventDetails: z
    .string()
    .describe('The details of the schedule or event, including date, time, and description.'),
  gymName: z.string().describe('The name of the gym.'),
  memberTier: z
    .string()
    .optional()
    .describe('The membership tier of the member (e.g., Basic, Premium).'),
});

export type GenerateCustomizedNotificationsInput = z.infer<
  typeof GenerateCustomizedNotificationsInputSchema
>;

const GenerateCustomizedNotificationsOutputSchema = z.object({
  notificationText: z.string().describe('The customized notification text for the member.'),
});

export type GenerateCustomizedNotificationsOutput = z.infer<
  typeof GenerateCustomizedNotificationsOutputSchema
>;

export async function generateCustomizedNotifications(
  input: GenerateCustomizedNotificationsInput
): Promise<GenerateCustomizedNotificationsOutput> {
  return generateCustomizedNotificationsFlow(input);
}

const generateCustomizedNotificationsPrompt = ai.definePrompt({
  name: 'generateCustomizedNotificationsPrompt',
  input: {schema: GenerateCustomizedNotificationsInputSchema},
  output: {schema: GenerateCustomizedNotificationsOutputSchema},
  prompt: `You are a notification generation expert for gyms.

  Your task is to generate a customized notification for a gym member based on the provided event details, gym name, member name, and member tier.
  The notification should be concise, friendly, and relevant to the member.

  Here are the details:
  Member Name: {{{memberName}}}
  Event Details: {{{eventDetails}}}
  Gym Name: {{{gymName}}}
  Member Tier: {{{memberTier}}}

  Please generate a personalized notification text for the member:
`,
});

const generateCustomizedNotificationsFlow = ai.defineFlow(
  {
    name: 'generateCustomizedNotificationsFlow',
    inputSchema: GenerateCustomizedNotificationsInputSchema,
    outputSchema: GenerateCustomizedNotificationsOutputSchema,
  },
  async input => {
    const {output} = await generateCustomizedNotificationsPrompt(input);
    return output!;
  }
);

