import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
//everything I need for things to get passed in from other classes/librarys

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService){}

    //creats a cat interface based on the input from the user in body
    @Post()
    create(@Body() createCatDto: CreateCatDto) {
      this.catsService.create(createCatDto)
  }
    
    // returns all cat objects in an array found in cats.service
    @Get()
    //promise is say an array of cats will be returned no matter what
    async findAll(): Promise<Cat[]> {
      return this.catsService.findAll();
  }
  
  //updates an existing cat based on name of the cat so you can change aga or breed
  @Put()
  updateCats(@Body() CreateCatDto: CreateCatDto) {
    this.catsService.updateCats(CreateCatDto);
  }

  //deletes a cat from the array based on the name of the cat
  @Delete()
  deleteCat(@Body() CreateCatDto: CreateCatDto) {
    this.catsService.deleteCat(CreateCatDto.name);
  }
}

