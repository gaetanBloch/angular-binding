import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Default value, otherwise None or Native
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() {
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }
}
