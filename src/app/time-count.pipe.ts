import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.abs(value+todayWithNoTime)//added a +  instead of a -
    const secondsInHour=3600;
    var dateDifferenceSeconds=dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/secondsInHour;

    return dateCounter;

  }

}
