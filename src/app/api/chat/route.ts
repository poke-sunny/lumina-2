import { openai } from '@ai-sdk/openai'
import { streamText, tool } from 'ai'
import { z } from 'zod'

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: openai('gpt-4o'),
    system: `You are Lumina AI, a professional real estate investment assistant for Gen Z investors.
    You have access to the following tools:
    1. Property Matcher: Find properties based on budget and location.
    2. Affordability Calculator: Project 10-year costs.
    3. Development Info: Details on Southampton Waterfront (£100M tokenized development).
    4. Offer Drafter: Professional negotiation drafting.
    Be concise, helpful, and use a premium tone.`,
    messages,
    tools: {
      getSouthamptonInfo: tool({
        description: 'Get details about the Southampton Waterfront development',
        parameters: z.object({}),
        execute: async () => ({
          status: 'Active',
          valuation: '£100M',
          tokenized: 'J.P. Morgan Kinexys',
          yield: '8.2% APY',
          completion: 'Q4 2026',
          location: 'Southampton Waterfront',
        }),
      }),
      calculateAffordability: tool({
        description: 'Calculate 10-year affordability for a property',
        parameters: z.object({
          price: z.number(),
          deposit: z.number(),
          interestRate: z.number(),
        }),
        execute: async ({ price, deposit, interestRate }) => {
          const loan = price - deposit
          const monthlyRate = interestRate / 100 / 12
          const monthlyPayment = (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -120))
          return {
            monthlyPayment: monthlyPayment.toFixed(2),
            totalPaid: (monthlyPayment * 120).toFixed(2),
            equityIn10Years: price * 1.4, // Assume 4% appreciation
          }
        },
      }),
    },
  })

  return result.toDataStreamResponse()
}