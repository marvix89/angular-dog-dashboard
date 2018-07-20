import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    /**
    * The method to filter items.
    */
    transform(items: any, searchItem: any): any {
        if (!searchItem) { return items; }
        return items.filter(function(el) {
            return el.toLowerCase().includes(searchItem.toLowerCase());
        });
    }
}
