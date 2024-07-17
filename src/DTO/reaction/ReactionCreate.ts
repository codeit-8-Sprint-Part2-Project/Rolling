import { ReactionRetrieve } from "./ReactionRetrieve";

type Type = "increase" | "decrease";

export interface ReactionCreate {
  emoji: string;
  type: Type;
  id?: number;
  recipient_id?: string;
  count?: number;
  results: ReactionRetrieve[];
}
