import { ExecutionPhase } from "@/generated/prisma"

type Phase = Pick<ExecutionPhase, "creditsConsumed">

export const GetPhasesTotalCost = (phases: Phase[]) => {
    return phases.reduce((sum, phase) =>  sum + (phase.creditsConsumed || 0), 0);
}