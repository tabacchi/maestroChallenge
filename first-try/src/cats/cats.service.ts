import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    //creates a cat array with one entry already
    private cats: Cat[] =[
        {
            name:"cat",
            age: 4,
            breed:"cat"
        }
    ];

    //creats the cat prett simple
    create(cat: Cat) {
        this.cats.push(cat);
    }
    //returns array of cat also pretty simple
    findAll(): Cat[] {
        return this.cats;
    }
    //using es6 arrow functions 
    updateCats(cat){
        //map returns each member of the array. 
        //so p is the cat from the array and cat is the passed in cat
        //if the names match retun change the old one to the new cat 
        this.cats = this.cats.map(p => {
            if (p.name == cat.name) {
                return{ ...cat};
            }
            return p;
        });
    }
    //also using es6 arrow functions but a bit simpler deletes all 
    //array objects with the same name that is passed in
    deleteCat(name){
        this.cats =this.cats.filter(p=> p.name !=name);
    }
}
