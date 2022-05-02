export interface IField{
    val: string,
    error: string,
    isValid: () => boolean;
}