import { Component,OnInit, OnDestroy } from "@angular/core";
import { DogService } from "../../services/dog.service";
import { Dog } from "../../models/dog";
import { DogResponse } from 'src/app/models/dogResponse';

@Component({
selector: 'app-dog',
  templateUrl: 'dog.component.html',
  styleUrls: ['dog.component.css'],
  providers: [DogService]})
export class DogComponent implements OnInit{
  public dogImg : string;
  public dogs : Array<string>;
  public selectedBreed : string;
  public isOpened : boolean;

  /**
  * @constructor
  *
  * @description The default constructor of the  'Test.ClassWithMethodDeclaration' class.
  */
  constructor (
      private _dogService : DogService,
    ){}
  
    ngOnInit() {     
        this._getDogsList();
    }
  /**
  * Comment for method ´doSomething´.
  * @param target  Comment for parameter ´target´.
  * @returns       Comment for return value.
  */
  private _getDogsList (){
    this._dogService.getDogsList().subscribe(
        (data: DogResponse) => {
            if(data.message){
                this.dogs = data.message;
            }
        },
        error => console.log(error)
    );
  }
/**
 * Comment for method ´doSomething´.
 * @param breed  Comment for parameter ´target´.
 * @returns       Comment for return value.
 */
  public getDogImage(breed : string){
    this.selectedBreed = breed;
    this.isOpened = true;
    this._dogService.getRandomDogImg(breed).subscribe(
        (data: Dog) => {
            if(data.message){
                this.dogImg = data.message;
            }
        },
        error => console.log(error)
    ); 
  }

  /**
 * Comment for method ´doSomething´.
 */
  public closeGrid(){
    this.isOpened=false;
    this.selectedBreed=null;
  }
  
}
