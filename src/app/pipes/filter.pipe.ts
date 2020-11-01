import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const result = [];
    if(value != null && arg != null && arg.length > 3){
      console.log(value);
      for(const item of value) {
        if(item.name){
          if (item.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
            result.push(item)
            console.log(result);
            console.log(arg);
          }
        }
      }
    }
    if(!result[0]){
      return value;
    }else{
      return result;
    }
  }

}

