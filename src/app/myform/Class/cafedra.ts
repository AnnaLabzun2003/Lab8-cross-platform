export class Cafedra{
    name: string = "";
    head: string = "";
    num_teachers: number = 0;
    address: string ="";
    teacher_list: string[] =[];

    constructor(name: string, head: string, num_teachers: number, address: string, teacher_list: string[]){
        this.name=name;
        this.head=head;
        this.num_teachers=num_teachers;
        this.address=address;
        this.teacher_list=teacher_list;

    }
}