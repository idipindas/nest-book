export class CreateBookDto {
    readonly title: string;
    readonly author: string;
    readonly desc: string;
    readonly price: number;
    readonly categor: BookCategory;
}

export class UpdateBookDto {
    readonly title?: string;
    readonly author?: string;
    readonly desc?: string;
    readonly price?: number;
    readonly categor?: BookCategory;
}
export enum BookCategory {
    Adventure = 'adv',
    Love = 'love',
    Drama = 'drama',
}
