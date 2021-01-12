const schedule = require('node-schedule');


//each 5 seconds(without the "/" - will execute only on the 5th sec), 
//any min, 17h, any day, any month, on Tuesday - (0 - Sunday, 1 - Monday, 2 - Tuesday....)
const task1 = schedule.scheduleJob('*/5 * 17 * * 2', () => {
    console.log('Executing Task 1!', new Date().getSeconds());
});


setTimeout(() => {
    task1.cancel();
    console.log('Task 1 cancelled!')
}, 40000);


const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)]; // monday to friday
rule.hour = 17;
rule.second = 30;

const task2 = schedule.scheduleJob(rule, () => {
    console.log('Executing Task 2', new Date().getSeconds());
})