import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import mongoose from 'mongoose';

@Injectable()
export class BookService {

    constructor ( @InjectModel(Book.name)
    private bookModel: mongoose.Model<Book>

){}

async findAll() : Promise<Book[]> {
const books  =  await this.bookModel.find()
return books
}

async createBook(book:Book):Promise<Book>{
    const res = await this.bookModel.create(book)
    return res
}

async udpateBook(id:string,book:Book):Promise<Book>{
    const res  =  await this.bookModel.findByIdAndUpdate(id, book)
    return res
}

async deleteBook(id:string):Promise<Book>{
    const res  =  await this.bookModel.findByIdAndDelete(id)
    return res
}

async findById(id:string):Promise<Book>{
    const res  =  await this.bookModel.findById(id)
    return res
}



}
