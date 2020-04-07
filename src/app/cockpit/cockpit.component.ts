import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<Server>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<Server>();
  // newServerName = '';
  newServerContent = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit(new Server(serverNameInput.value, this.newServerContent));
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit(new Server(serverNameInput.value, this.newServerContent));
  }
}
