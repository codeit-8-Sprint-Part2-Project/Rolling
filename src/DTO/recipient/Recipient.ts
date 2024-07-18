type BackgroundImageURL = "beige" | "purple" | "blue" | "green";

export interface Recipient {
    id? : number;
    team : string;
    name : string;
    backgroundColor : string;
    backgroundImageURL? : BackgroundImageURL;
    createdAt? : Date;
    messageCount? : string;
    recentMessages? : string;
    reactionCount? : number;
    topReactions? : string;
}