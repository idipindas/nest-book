import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/book.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}
  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post()
  async createBook(
    @Body()
    book: CreateBookDto,
  ): Promise<Book> {
    return this.bookService.createBook(book);
  }

  @Patch('/:id')
  async updateBook(
    @Param('id') id: string,
    @Body()
    book: CreateBookDto,
  ): Promise<Book> {
    return this.bookService.udpateBook(id, book);
  }

  @Delete('/:id')
  async deleteBook(@Param('id') id: string): Promise<Book> {
    return this.bookService.deleteBook(id);
  }
@Get('/:id')
  async getBook(@Param('id') id: string): Promise<Book> {
    return this.bookService.findById(id);
  }

}
