'use server';

/**
 * @fileOverview Generates attention-grabbing headlines for the landing page using AI.
 *
 * - generateHeadline - A function that generates multiple headlines.
 * - GenerateHeadlineInput - The input type for the generateHeadline function.
 * - GenerateHeadlineOutput - The return type for the generateHeadline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeadlineInputSchema = z.object({
  businessDescription: z
    .string()
    .describe('A description of the business offering Canva Pro at ₱99.'),
});
export type GenerateHeadlineInput = z.infer<typeof GenerateHeadlineInputSchema>;

const GenerateHeadlineOutputSchema = z.object({
  headlines: z
    .array(z.string())
    .describe('An array of attention-grabbing headlines.'),
});
export type GenerateHeadlineOutput = z.infer<typeof GenerateHeadlineOutputSchema>;

export async function generateHeadline(input: GenerateHeadlineInput): Promise<GenerateHeadlineOutput> {
  return generateHeadlineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHeadlinePrompt',
  input: {schema: GenerateHeadlineInputSchema},
  output: {schema: GenerateHeadlineOutputSchema},
  prompt: `You are a marketing expert specializing in creating high-converting landing page headlines.

  Generate 5 attention-grabbing headlines for a landing page with the following business description:
  {{businessDescription}}

  Each headline should be concise, persuasive, and designed to maximize conversion rates. Return the headlines as a JSON array.
  Headlines:`,
});

const generateHeadlineFlow = ai.defineFlow(
  {
    name: 'generateHeadlineFlow',
    inputSchema: GenerateHeadlineInputSchema,
    outputSchema: GenerateHeadlineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
