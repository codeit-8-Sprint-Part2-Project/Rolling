type BackgroundImageURL = "beige" | "purple" | "blue" | "green";

export interface Recipient {
    id : number;
    team : string;
    name : string;
    backgroundColor : string;
    backgroundImageURL : string;
    createdAt : Date;
    messageCount : string;
    recentMessages : string;
    reactionCount : number;
    topReactions : string;
}