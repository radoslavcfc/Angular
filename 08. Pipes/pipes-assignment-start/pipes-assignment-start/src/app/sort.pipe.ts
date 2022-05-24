import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(value: any, valueType:string): any {
    return value.sort((a,b)=> {      
      if ( a[valueType] < b[valueType] ){
        return -1;
      }
      if ( a[valueType] > b[valueType] ){
        return 1;
      }
      return 0;    
    })
  }
}