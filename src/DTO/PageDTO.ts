export interface ResponseDTO<T>{
    count : number;
    next? : string;
    previous? : string;
    results : T[];
}