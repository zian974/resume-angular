import { Component, OnInit } from '@angular/core';


interface ComponentData {
  type: string;
}


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  data: ComponentData = {
    type: ""
  }

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
