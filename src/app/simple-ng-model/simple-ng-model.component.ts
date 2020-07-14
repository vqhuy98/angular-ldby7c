import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-ng-model',
  templateUrl: './simple-ng-model.component.html',
  styleUrls: ['./simple-ng-model.component.css']
})
export class SimpleNgModelComponent implements OnInit {
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
  constructor() { }

  ngOnInit() {
  }

}