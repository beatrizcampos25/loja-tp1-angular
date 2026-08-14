export interface Produto {
    id:number;
    nome:string;
    preco:number;
    descricao: string;
    imageUrl?:string;
    promo?: boolean;
}
