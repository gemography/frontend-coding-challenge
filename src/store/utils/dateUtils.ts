
export function getPreviousDateFromDays(days:number) {
    let today = new Date()
    var priorDate = new Date().setDate(today.getDate() - days)
    let d = new Date(priorDate)

    let month = addPadToDate(d.getMonth() + 1),
    day = addPadToDate(d.getDate()),
    year = `${d.getFullYear()}`;

    return [year, month, day].join('-');
}

function addPadToDate(date:number) { 
    return date < 10 ? '0' + date : '' + date; 
  } 