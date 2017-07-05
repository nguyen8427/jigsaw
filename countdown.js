var daysUntilMyBirthday = 60;

for(var x = 0; x < 60; x++){
    if(daysUntilMyBirthday > 30){
        console.log(daysUntilMyBirthday + " days until my birthday. Such a long time..");
    }
    else if( 5 <= daysUntilMyBirthday && daysUntilMyBirthday <= 30){
        console.log(daysUntilMyBirthday + " days until my birthday. I'm very excited!");
    }
    else {
        console.log(daysUntilMyBirthday + " days UNTIL MY BIRTHDAY!!!");
    }
    daysUntilMyBirthday -= 1;
}

console.log("HAPPY BIRTHDAY!!!");