import { ROLES } from "./roles.enum";

export class TaskModel {
    name = '';
    description = '';
    completed = false;
    level = ROLES.NORMAL;

    constructor(name, description, completed, level){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level
    }

}
