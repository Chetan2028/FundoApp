import { Injectable } from '@angular/core';
import { HttpServiceService } from '../../services/httpService/http-service.service';


@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  constructor(private http : HttpServiceService) { }

  createNote(data) {
    return this.http.post('notes/addNotes', data);
  }

  getAllNotes(){
    return this.http.get('notes/getNotesList');
  }

  updateNote(data){
    return this.http.post('notes/updateNotes',data)
   }  
   
  deleteNotes(data){
    return this.http.post('notes/trashNotes',data)
  }

}
