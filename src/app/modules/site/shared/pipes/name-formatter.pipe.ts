import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatUser'
})
export class NameFormatterPipe implements PipeTransform {

  transform(value: string): string {
    let user: string = ''

    const name = value.split(' ')
    user = name[0].charAt(0) + name[name.length - 1].charAt(0)

    return user.toUpperCase()
  }

}
