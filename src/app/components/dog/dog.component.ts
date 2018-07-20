import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { Dog } from '../../models/dog';
import { DogResponse } from 'src/app/models/dogResponse';

@Component({
selector: 'app-dog',
  templateUrl: 'dog.component.html',
  styleUrls: ['dog.component.css'],
  providers: [DogService]
})
export class DogComponent implements OnInit {
  public dogImg: string;
  public dogs: Array<string>;
  public selectedBreed: string;
  public isOpened: boolean;
  public breed: string;

  /**
  * @constructor
  *
  * @description The default constructor of the  'DogComponent' class.
  * @param _dogService The dog service.
  */
  constructor (private _dogService: DogService) {}
    ngOnInit() {
        this.getDogsList();
    }

  /**
  * The method to retrieve dogs breeds list.
  */
  public getDogsList () {
    this._dogService.getDogsList().subscribe(
        (data:  DogResponse ) => {
            if (data.message) {
                this.dogs = data.message;
            }
        },
        error => console.log(error)

    );
  }
/**
 * The method to retrieve dog image.
 * @param breed  the selected breed.
 */
  public getDogImage(breed: string) {
    this.selectedBreed = breed;
    this.breed = null;
    this.isOpened = true;
    this._dogService.getRandomDogImg(breed).subscribe(
        (data: Dog) => {
            if (data.message) {
                this.dogImg = data.message;
            }
        },
    error => console.log(error)
    );
  }

  /**
 * the method to close the dogs image layer.
 */
  public closeGrid() {
    this.isOpened = false;
    this.selectedBreed = null;
  }
}

