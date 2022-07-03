import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SwipeService {
  private _foodList: BehaviorSubject<Food[] | null> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  get foodList$(): Observable<Food[]> {
    return this._foodList.asObservable();
  }

  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>('./assets/db/product_examples.json').pipe(
      map((food) => food.filter(f => f.category.name === 'Hauptspeisen - Mains')),
      tap((foodList: Food[]) => {
        this._foodList.next(foodList);
      }),
    );
  }
}

export interface Food {
  id: string;
  name: string;
  attributes: Attribute[];
  category: {
    name: string
  }
  imageSet: ImageSet[]
}

export interface ImageSet {
  fileName: string;
  id: string;
  imageHeight: number;
  imageType: number;
  imageWidth: number;
  targetDevices: number[];
  title: string;
  url: string;
}

export interface Attribute {
  category: string;
  name: string;
  order: number;
  requirement: number;
  type: number;
  value:string;
  value_i18n: string;
}
