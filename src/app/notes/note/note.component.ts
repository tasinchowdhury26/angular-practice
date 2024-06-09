import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() note: {
    id: number,
    title: string,
    content: string,
    createdAt: Date,
    tags: string[],
    read: boolean
  }
}
