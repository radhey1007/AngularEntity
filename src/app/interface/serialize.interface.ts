export interface Serializable<T> {
    deserialize(input:any,parent?:any):T;
}