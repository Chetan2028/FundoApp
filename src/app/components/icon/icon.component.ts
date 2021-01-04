import { Component, Input, OnInit } from '@angular/core';
import { NoteserviceService } from '../../services/noteService/noteservice.service';
import {DataService} from '../../services/dataService/data.service';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private noteService : NoteserviceService , private dataService : DataService) { }

  @Input() note:any
  
  ngOnInit(): void {
  }

  deleteNote(){
    console.log(this.note);
    
    let data = {
      noteIdList: [this.note.id],
      isDeleted: true
    }

    this.noteService.deleteNotes(data).subscribe((response)=>{
      console.log(" deleted successfull ");
       this.dataService.changeMessage("deleted")
      
    });
  }
}
