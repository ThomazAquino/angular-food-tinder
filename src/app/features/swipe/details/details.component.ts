import { Component, Input, OnInit } from '@angular/core';
import { FoodEntity } from '../../../core/_state/food.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() public food: FoodEntity;
  public expanded = false;

  constructor() {}

  ngOnInit(): void {}
}
