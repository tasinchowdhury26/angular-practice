import { Component } from '@angular/core';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  completedNotes =[];

  sampleNote = {
    id: 1,
    title: "Meeting Notes",
    content: "Discussed project milestones and deadlines. Assigned tasks to team members.",
    createdAt: new Date('2023-06-01T10:00:00Z'),
    tags: ["meeting", "project", "tasks"],
    read: 'not completed',
    extraNote: ''
  }

  markAsRead(){
    this.sampleNote.read = 'completed';
  }
  takeExtraNote(event: any){
    this.sampleNote.extraNote = event.target.value;
    console.log(this.sampleNote.extraNote)
  }
}
