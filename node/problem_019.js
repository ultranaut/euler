/* jshint node: true  */

/**
 * Problem 19: Counting Sundays
 * You are given the following information, but you may prefer to do
 * some research for yourself.
 *
 *    * 1 Jan 1900 was a Monday.
 *    * Thirty days has September,
 *      April, June and November.
 *      All the rest have thirty-one,
 *      Saving February alone,
 *      Which has twenty-eight, rain or shine.
 *      And on leap years, twenty-nine.
 *    * A leap year occurs on any year evenly divisible by 4, but not
 *      on a century unless it is divisible by 400.
 *
 * How many Sundays fell on the first of the month during the twentieth
 * century (1 Jan 1901 to 31 Dec 2000)?
 */

module.exports = {
  months: [ { name: 'January',   length: 31 },
            { name: 'February',  length: 28 },
            { name: 'March',     length: 31 },
            { name: 'April',     length: 30 },
            { name: 'May',       length: 31 },
            { name: 'June',      length: 30 },
            { name: 'July',      length: 31 },
            { name: 'August',    length: 31 },
            { name: 'September', length: 30 },
            { name: 'October',   length: 31 },
            { name: 'November',  length: 30 },
            { name: 'December',  length: 31 } ],

  countSundays: function countSundays(start, end) {
    var year  = 1900,
        count = 0,
        month = 0, // january
        wkday = 0, // monday
        leap  = 0;
    while (year < end) {
      leap = 0;
      // see what day of week we're at
      if (wkday === 6 && year >= start) {
        count++;
      }
      // figure out if we need to leap a day
      if (month === 1) {
        if (year % 100 === 0) {
          if (year % 400 === 0) {
            leap = 1;
          }
        }
        else if (year % 4 === 0) {
          leap = 1;
        }
      }

      // move forward a month
      wkday = (wkday + ((this.months[month].length + leap) % 7)) % 7;
      month = (month + 1) % 12;
      if (month === 0) {
        year++;
      }
    }
    return count;
  }
};
