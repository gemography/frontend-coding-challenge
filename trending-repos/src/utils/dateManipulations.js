export function date30DaysAgo(){
    const date = new Date();
    date.setDate(date.getDate() - 30);

    const year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();

    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    
    return `${year}-${month}-${day}`;
};

export function numberOfDaysSinceRepoCreation(createdAt){
  const currentDate = new Date();
  const creationDate = new Date(createdAt);

  const differenceInTime = currentDate.getTime() - creationDate.getTime(); 
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays;

}