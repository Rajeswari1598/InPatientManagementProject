import { Pipe,PipeTransform} from "@angular/core";

@Pipe({
    'name': 'custompipe'
})
export class custompipe implements PipeTransform{
    transform(value: any) {
       let firstChar= value.charAt(0);
       let restchar=value.substring(1);
       let sentance=firstChar.toUpperCase()+restchar.toLowerCase();
       return sentance;
    }
}