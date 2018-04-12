import { Component, Output, EventEmitter } from "@angular/core";
import { create } from "domain";



@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent{
    title: string = '';
    
    @Output() create: EventEmitter<string> = new EventEmitter();

    onSubmit(){
        this.create.emit(this.title);
    }
}