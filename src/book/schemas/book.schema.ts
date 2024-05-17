import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { BookCategory } from "../dto/book.dto";

@Schema({
    timestamps: true,
})

export class Book{
    @Prop()
    title: string;

    @Prop()
    author: string;
    @Prop()
    desc:string;
    @Prop()
    price:number;


    @Prop({ required: true, enum: Object.values(BookCategory) })
    categor: string;

}

export const BookSchema = SchemaFactory.createForClass(Book)