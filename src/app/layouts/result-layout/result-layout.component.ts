import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-result-layout',
  templateUrl: './result-layout.component.html',
  styleUrls: ['./result-layout.component.scss']
})
export class ResultLayoutComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }


  goBack(){
   this.location.back()
  }
}
