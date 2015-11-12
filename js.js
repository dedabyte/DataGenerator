(function(){

  var DATETIME_FORMATS = {
    AMPMS: ['AM', 'PM'],
    ERANAMES: ['Before Christ', 'Anno Domini'],
    ERAS: ['BC', 'AD'],
    DAY: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    SHORTDAY: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    MONTH: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    SHORTMONTH: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };
  var EMAILS = ['gmail.com', 'outlook.com', 'yahoo.com'];
  var COUNTRIES = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Republic of the', 'Congo, Democratic Republic of the', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'St. Kitts and Nevis ', 'St. Lucia', 'St. Vincent and The Grenadines ', 'Samoa', 'San Marino', 'Sao Tome and Principe ', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'UK (United Kingdom)', 'USA (United States of America)', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City (Holy See)', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];
  var COMPANIES = ['Apple', 'Samsung Group', 'Google', 'Microsoft', 'Verizon', 'AT&T', 'Amazon.com', 'GE', 'China Mobile', 'Walmart', 'Coca-Cola', 'IBM', 'Toyota', 'Wells Fargo', 'BMW', 'T (Telekom)', 'Volkswagen', 'Shell', 'Walt Disney', 'ICBC', 'Mercedes-Benz', 'Vodafone', 'HSBC', 'China Construction Bank', 'Citi', 'Bank of America', 'Intel', 'Chase', 'The Home Depot', 'Facebook', 'Nike', 'Cisco', 'Oracle', 'Agricultural Bank of China', 'Mitsubishi (Conglomerate)', 'Honda', 'McDonald\'s', 'American Express', 'Pepsi', 'Nestle', 'Allianz', 'Siemens', 'Bank of China', 'Ford', 'CVS', 'Orange', 'UPS', 'AXA', 'Hyundai', 'Santander'];
  var CITIES = ['Shanghai', 'Karachi', 'Lagos', 'Delhi', 'Istanbul', 'Tokyo', 'Mumbai', 'Moscow', 'São Paulo', 'Beijing', 'Shenzhen', 'Seoul', 'Lahore', 'Jakarta', 'Guangzhou', 'Kinshasa', 'Tianjin', 'Cairo', 'Mexico City', 'Lima', 'New York City', 'Bengaluru', 'London', 'Bangkok', 'Dongguan', 'Chongqing', 'Nanjing', 'Tehran', 'Shenyang', 'Bogotá', 'Ho Chi Minh City', 'Ningbo', 'Hong Kong', 'Baghdad', 'Changsha', 'Dhaka', 'Wuhan', 'Hyderabad', 'Hanoi', 'Faisalabad', 'Rio de Janeiro', 'Foshan', 'Santiago', 'Riyadh', 'Ahmedabad', 'Singapore', 'Shantou', 'Yangon', 'Saint Petersburg', 'Chennai'];
  var STREETS = ['Addison Road', 'Adler Street', 'Albany Street', 'Albemarle Street', 'Albert Embankment', 'Attlee Road', 'Ayles Road', 'Baker Street', 'Baylis Road', 'Beauchamp Place', 'Bedford Square', 'Bellot Street', 'Berkeley Square', 'Bevin Road', 'Black Prince Road', 'Bob Marley Way', 'Bond Street', 'Bondfield Avenue', 'Bouverie Street', 'Brunel Road', 'Butler Road', 'Cadogan Place', 'Cavendish Square', 'Caxton Street', 'Charles II Street', 'Charlotte Street', 'Chatham Avenue', 'Chester Terrace', 'Cheyne Walk', 'Clarence Street', 'Cleveland Street', 'Connaught Square', 'Cromwell Road', 'Cumberland Terrace', 'Curzon Street', 'Czar Street', 'Dacre Street', 'Dean Bradley Street', 'Dean Farrar Street', 'Dean Ryle Street', 'Dorando Close', 'Downing Street', 'Drury Lane', 'Drury Road', 'Duke of Wellington Place', 'Empress Drive', 'Evelyn Street', 'Fitzroy Square', 'Flowers Close', 'Frith Street'];
  var MALE_NAMES = ['Jacob', 'Harry', 'Aiden', 'Shawn', 'Alexander', 'Nathan', 'Muhammad', 'Ali', 'Niall', 'Aaron', 'Tyler', 'Logan', 'Daniel', 'Kevin', 'Austin', 'Jonah', 'Joshua', 'Jason', 'Alex', 'Dylan', 'Robert', 'Michael', 'Blake', 'Anthony', 'James', 'Zayn', 'Louis', 'Ryan', 'Andrew', 'Jayden', 'Liam', 'Christopher', 'Brian', 'David', 'Joseph', 'Mason', 'Matthew', 'John', 'Kyle', 'Jack', 'Adam', 'Max', 'Ethan', 'Noah', 'Brandon', 'Luke', 'William', 'Jackson', 'Jordan', 'Spencer'];
  var FEMALE_NAMES = ['Chloe', 'Charlotte', 'Alyssa', 'Emily', 'Elizabeth', 'Lucy', 'Aaliyah', 'Abigail', 'Jade', 'Emma', 'Rebecca', 'Abby', 'Jennifer', 'Samantha', 'Kellie', 'Olivia', 'Lauren', 'Natalie', 'Hannah', 'Ashley', 'Amanda', 'Jessica', 'Anna', 'Bella', 'Sarah', 'Zoe', 'Rachel', 'Lily', 'Nicole', 'Taylor', 'Savannah', 'Madison', 'Alexis', 'Isabella', 'Megan', 'Paige', 'Sophia', 'Amy', 'Ellie', 'Ava', 'Jasmine', 'Vanessa', 'Grace', 'Sophie', 'Alice', 'Ella', 'Katie', 'Lilly', 'Mia', 'Amber'];
  var SURNAMES = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King', 'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins'];
  var LOREM_PARAGRAPHS = [
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
    'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
    'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.',
    'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.',
    'Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
    'Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.',
    'Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus.',
    'Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor.',
    'Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
    'Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis'
  ];

  var LOREM_TEXT, LOREM_TEXT_SPLITTED, LOREM_ALL_WORDS, LOREM_LONGER_WORDS, LOREM_SHORTER_WORDS;

  function setOtherLoremVars(){
    LOREM_TEXT = LOREM_PARAGRAPHS.join(' ');

    LOREM_TEXT_SPLITTED = LOREM_TEXT.split(' ');

    LOREM_ALL_WORDS = LOREM_TEXT_SPLITTED.map(function(word){
      return lowercase(word).replace(/[^\w\s]/gi, '')
    });
    LOREM_ALL_WORDS = removeDuplicatesFromArray(LOREM_ALL_WORDS);

    LOREM_LONGER_WORDS = LOREM_ALL_WORDS.filter(function(word){
      return word.length > 5;
    });

    LOREM_SHORTER_WORDS = LOREM_ALL_WORDS.filter(function(word){
      return word.length <= 5;
    });
  }

  setOtherLoremVars();



  var namesCache = {
    name: '',
    surname: ''
  };
  var slice = [].slice;
  var splice = [].splice;
  var toString = Object.prototype.toString;

  function lowercase(string){
    return isString(string) ? string.toLowerCase() : string;
  }

  function uppercase(string){
    return isString(string) ? string.toUpperCase() : string;
  }

  function concat(array1, array2, index){
    return array1.concat(slice.call(array2, index));
  }

  function isNumber(value){
    return typeof value === 'number';
  }

  function isString(value){
    return typeof value === 'string';
  }

  function isRegExp(value){
    return toString.call(value) === '[object RegExp]';
  }

  function isObject(value){
    return toString.call(value) === '[object Object]';
  }

  function isArray(value){
    return toString.call(value) === '[object Array]';
  }

  function isDate(value){
    return toString.call(value) === '[object Date]';
  }

  function isUndefined(value){
    return typeof value === 'undefined';
  }

  function isDefined(value){
    return typeof value !== 'undefined';
  }

  function isBoolean(value){
    return typeof value === 'boolean';
  }

  function isFunction(value){
    return typeof value === 'function';
  }

  function toInt(str){
    return parseInt(str, 10);
  }

  function isElement(node){
    return !!(node &&
    (node.nodeName  // we are a direct element
    || (node.prop && node.attr && node.find)));  // we have an on and find method part of jQuery API
  }

  function baseExtend(dst, objs, deep){
    for(var i = 0, ii = objs.length; i < ii; ++i){
      var obj = objs[i];
      if(!isObject(obj) && !isFunction(obj)){
        continue;
      }
      var keys = Object.keys(obj);
      for(var j = 0, jj = keys.length; j < jj; j++){
        var key = keys[j];
        var src = obj[key];

        if(deep && isObject(src)){
          if(isDate(src)){
            dst[key] = new Date(src.valueOf());
          }else if(isRegExp(src)){
            dst[key] = new RegExp(src);
          }else if(src.nodeName){
            dst[key] = src.cloneNode(true);
          }else if(isElement(src)){
            dst[key] = src.clone();
          }else{
            if(!isObject(dst[key])){
              dst[key] = isArray(src) ? [] : {};
            }
            baseExtend(dst[key], [src], true);
          }
        }else{
          dst[key] = src;
        }
      }
    }

    return dst;
  }

  function extend(dst){
    return baseExtend(dst, slice.call(arguments, 1), false);
  }

  function merge(dst){
    return baseExtend(dst, slice.call(arguments, 1), true);
  }

  function toNumberFormat(n, decimals, decimal_sep, thousands_sep){
    var
      c = isNaN(decimals) ? 2 : Math.abs(decimals),
      d = decimal_sep || '.',
      t = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
      sign = (n < 0) ? '-' : '',
      i = parseInt(n = Math.abs(n).toFixed(c)) + '',
      j = ((j = i.length) > 3) ? j % 3 : 0;
    return sign + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
  }

  function setValueToDefault(value, defaultValue){
    return typeof value === 'undefined' ? defaultValue : value;
  }

  function getRandomFromArray(array){
    return array[randomInt(0, array.length - 1)];
  }

  function removeDuplicatesFromArray(array){
    var seen = {};
    return array.filter(function(item){
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  }

  function argumentsToArray(args){
    return Array.prototype.slice.call(args);
  }

  /* DATE FILTER METHODS FROM ANGULARJS */

  function timezoneToOffset(timezone, fallback){
    var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
    return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
  }

  function addDateMinutes(date, minutes){
    date = new Date(date.getTime());
    date.setMinutes(date.getMinutes() + minutes);
    return date;
  }

  function convertTimezoneToLocal(date, timezone, reverse){
    reverse = reverse ? -1 : 1;
    var timezoneOffset = timezoneToOffset(timezone, date.getTimezoneOffset());
    return addDateMinutes(date, reverse * (timezoneOffset - date.getTimezoneOffset()));
  }

  function padNumber(num, digits, trim){
    var neg = '';
    if(num < 0){
      neg = '-';
      num = -num;
    }
    num = '' + num;
    while(num.length < digits) num = '0' + num;
    if(trim){
      num = num.substr(num.length - digits);
    }
    return neg + num;
  }

  function dateGetter(name, size, offset, trim){
    offset = offset || 0;
    return function(date){
      var value = date['get' + name]();
      if(offset > 0 || value > -offset){
        value += offset;
      }
      if(value === 0 && offset == -12){
        value = 12;
      }
      return padNumber(value, size, trim);
    };
  }

  function dateStrGetter(name, shortForm){
    return function(date, formats){
      var value = date['get' + name]();
      var get = uppercase(shortForm ? ('SHORT' + name) : name);

      return formats[get][value];
    };
  }

  function timeZoneGetter(date, formats, offset){
    var zone = -1 * offset;
    var paddedZone = (zone >= 0) ? "+" : "";

    paddedZone += padNumber(Math[zone > 0 ? 'floor' : 'ceil'](zone / 60), 2) +
      padNumber(Math.abs(zone % 60), 2);

    return paddedZone;
  }

  function getFirstThursdayOfYear(year){
    // 0 = index of January
    var dayOfWeekOnFirst = (new Date(year, 0, 1)).getDay();
    // 4 = index of Thursday (+1 to account for 1st = 5)
    // 11 = index of *next* Thursday (+1 account for 1st = 12)
    return new Date(year, 0, ((dayOfWeekOnFirst <= 4) ? 5 : 12) - dayOfWeekOnFirst);
  }

  function getThursdayThisWeek(datetime){
    return new Date(datetime.getFullYear(), datetime.getMonth(),
      // 4 = index of Thursday
      datetime.getDate() + (4 - datetime.getDay()));
  }

  function weekGetter(size){
    return function(date){
      var firstThurs = getFirstThursdayOfYear(date.getFullYear()),
        thisThurs = getThursdayThisWeek(date);

      var diff = +thisThurs - +firstThurs,
        result = 1 + Math.round(diff / 6.048e8); // 6.048e8 ms per week

      return padNumber(result, size);
    };
  }

  function ampmGetter(date, formats){
    return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1];
  }

  function eraGetter(date, formats){
    return date.getFullYear() <= 0 ? formats.ERAS[0] : formats.ERAS[1];
  }

  function longEraGetter(date, formats){
    return date.getFullYear() <= 0 ? formats.ERANAMES[0] : formats.ERANAMES[1];
  }

  var DATE_FORMATS = {
    yyyy: dateGetter('FullYear', 4),
    yy: dateGetter('FullYear', 2, 0, true),
    y: dateGetter('FullYear', 1),
    MMMM: dateStrGetter('Month'),
    MMM: dateStrGetter('Month', true),
    MM: dateGetter('Month', 2, 1),
    M: dateGetter('Month', 1, 1),
    dd: dateGetter('Date', 2),
    d: dateGetter('Date', 1),
    HH: dateGetter('Hours', 2),
    H: dateGetter('Hours', 1),
    hh: dateGetter('Hours', 2, -12),
    h: dateGetter('Hours', 1, -12),
    mm: dateGetter('Minutes', 2),
    m: dateGetter('Minutes', 1),
    ss: dateGetter('Seconds', 2),
    s: dateGetter('Seconds', 1),
    // while ISO 8601 requires fractions to be prefixed with `.` or `,`
    // we can be just safely rely on using `sss` since we currently don't support single or two digit fractions
    sss: dateGetter('Milliseconds', 3),
    EEEE: dateStrGetter('Day'),
    EEE: dateStrGetter('Day', true),
    a: ampmGetter,
    Z: timeZoneGetter,
    ww: weekGetter(2),
    w: weekGetter(1),
    G: eraGetter,
    GG: eraGetter,
    GGG: eraGetter,
    GGGG: longEraGetter
  };
  var DATE_FORMATS_SPLIT = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/;
  var NUMBER_STRING = /^\-?\d+$/;
  var R_ISO8601_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;

  function jsonStringToDate(string){
    var match;
    if(match = string.match(R_ISO8601_STR)){
      var date = new Date(0),
        tzHour = 0,
        tzMin = 0,
        dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear,
        timeSetter = match[8] ? date.setUTCHours : date.setHours;

      if(match[9]){
        tzHour = toInt(match[9] + match[10]);
        tzMin = toInt(match[9] + match[11]);
      }
      dateSetter.call(date, toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
      var h = toInt(match[4] || 0) - tzHour;
      var m = toInt(match[5] || 0) - tzMin;
      var s = toInt(match[6] || 0);
      var ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
      timeSetter.call(date, h, m, s, ms);
      return date;
    }
    return string;
  }

  function formatDate(date, format, timezone){
    var text = '',
      parts = [],
      fn, match;

    format = format || 'yyyy-MM-dd';
    if(isString(date)){
      date = NUMBER_STRING.test(date) ? toInt(date) : jsonStringToDate(date);
    }

    if(isNumber(date)){
      date = new Date(date);
    }

    if(!isDate(date) || !isFinite(date.getTime())){
      return date;
    }

    while(format){
      match = DATE_FORMATS_SPLIT.exec(format);
      if(match){
        parts = concat(parts, match, 1);
        format = parts.pop();
      }else{
        parts.push(format);
        format = null;
      }
    }

    var dateTimezoneOffset = date.getTimezoneOffset();
    if(timezone){
      dateTimezoneOffset = timezoneToOffset(timezone, date.getTimezoneOffset());
      date = convertTimezoneToLocal(date, timezone, true);
    }
    parts.forEach(function(value){
      fn = DATE_FORMATS[value];
      text += fn ? fn(date, DATETIME_FORMATS, dateTimezoneOffset) : value.replace(/(^'|'$)/g, '').replace(/''/g, "'");
    });

    return text;
  }

  /* END DATE FILTER */



  /**
   * Returns random decimal number.
   * @param {number} [min] - minimum number, inclusive - default: 1
   * @param {number} [max] - maximum number, exclusive - default: 100
   * @param {number} decimals - number of decimals
   * @returns {number} - decimal number
   */
  function randomFloat(min, max, decimals){
    if(arguments.length === 1){
      max = min;
      min = 1;
    }else{
      min = setValueToDefault(min, 1);
      max = setValueToDefault(max, 100);
    }
    decimals = setValueToDefault(decimals, 2);

    var pow = Math.pow(10, decimals);
    var ret = Math.random() * (max - min) + min;
    return Math.round(ret * pow) / pow;
  }

  /**
   * Returns random integer number.
   * @param {number} [min] - minimum number, inclusive - default: 1
   * @param {number} [max] - maximum number, exclusive - default: 100
   * @returns {number} - integer number
   */
  function randomInt(min, max){
    if(arguments.length === 1){
      max = min;
      min = 1;
    }else{
      min = setValueToDefault(min, 1);
      max = setValueToDefault(max, 100);
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Returns random formatted decimal number.
   * @param {number} [min] - minimum number, inclusive - default: 1
   * @param {number} [max] - maximum number, exclusive - default: 100
   * @param {number} [decimals] - number of decimals - default: 2
   * @param {string} [decimal_sep] - decimal separator - default: '.'
   * @param {string} [thousands_sep] - thousends separator - default: ','
   * @returns {string} - formatted string
   */
  function randomFormattedNumber(min, max, decimals, decimal_sep, thousands_sep){
    var money = randomFloat(min, max);
    return toNumberFormat(money, decimals, decimal_sep, thousands_sep);
  }

  /**
   * Returns random week day string.
   * @param {number} [min] - minimum week day index, inclusive - default: 1
   * @param {number} [max] - maximum week day index, exclusive - default: 7
   * @returns {string} - week day string
   */
  function randomDay(min, max){
    min = setValueToDefault(min, 1);
    max = setValueToDefault(max, 7);

    return DATETIME_FORMATS.DAY[randomInt(min - 1, max - 1)];
  }

  /**
   * Returns random short week day string.
   * @param {number} [min] - minimum week day index, inclusive - default: 1
   * @param {number} [max] - maximum week day index, exclusive - default: 7
   * @returns {string} - short week day string
   */
  function randomDayShort(min, max){
    min = setValueToDefault(min, 1);
    max = setValueToDefault(max, 7);

    return DATETIME_FORMATS.SHORTDAY[randomInt(min - 1, max - 1)];
  }

  /**
   * Returns random month string.
   * @param {number} [min] - minimum month index, inclusive - default: 1
   * @param {number} [max] - maximum month index, exclusive - default: 12
   * @returns {string} - month string
   */
  function randomMonth(min, max){
    min = setValueToDefault(min, 1);
    max = setValueToDefault(max, 12);

    return DATETIME_FORMATS.MONTH[randomInt(min - 1, max - 1)];
  }

  /**
   * Returns random short month string.
   * @param {number} [min] - minimum month index, inclusive - default: 1
   * @param {number} [max] - maximum month index, exclusive - default: 12
   * @returns {string} - short month string
   */
  function randomMonthShort(min, max){
    min = setValueToDefault(min, 1);
    max = setValueToDefault(max, 12);

    return DATETIME_FORMATS.SHORTMONTH[randomInt(min - 1, max - 1)];
  }

  /**
   * Returns random formatted date string.
   * @param {Date} minDate - minimum date - default: 30 days before Date.now()
   * @param {Date} maxDate - maximum date - default: 30 days after Date.now()
   * @param {string} format - date format - default yyyy-MM-dd
   * @param timezone - timezone
   * @returns {string} - formatted date string
   */
  function randomDate(minDate, maxDate, format, timezone){
    var oneDay = 86400000;
    minDate = setValueToDefault(minDate, new Date(Date.now() - oneDay * 30));
    maxDate = setValueToDefault(maxDate, new Date(Date.now() + oneDay * 30));

    var newTimestamp = randomInt(minDate.getTime(), maxDate.getTime());
    return formatDate(newTimestamp, format, timezone);
  }

  /**
   * Returns random country.
   * @returns {string} - country name
   */
  function randomCountry(){
    return getRandomFromArray(COUNTRIES);
  }

  /**
   * Returns number pattern.
   * @param {string} pattern - pattern with placeholders, example: (##8#) ##-##-100 returns: (1283) 13-23-100
   * @returns {string}
   */
  function randomNumberPattern(pattern){
    return pattern.replace(/\#/g, function(){
      return randomInt(0, 9);
    });
  }

  /**
   * Return random boolen value.
   * @returns {boolean}
   */
  function randomBool(){
    return randomInt() % 2 === 0;
  }

  /**
   * Returns random gender.
   * @returns {string}
   */
  function randomGender(){
    return randomBool() ? 'male' : 'female';
  }

  /**
   * Returns random male name.
   * @returns {string}
   */
  function randomMaleName(noCache){
    var name = getRandomFromArray(MALE_NAMES);
    if(!noCache){
      namesCache.name = name;
    }
    return name;
  }

  /**
   * Returns random remale name.
   * @returns {string}
   */

  function randomFemaleName(noCache){
    var name = getRandomFromArray(FEMALE_NAMES);
    if(!noCache){
      namesCache.name = name;
    }
    return name;
  }

  /**
   * Returns random name, male or female.
   * @returns {string}
   */
  function randomName(noCache){
    var allNames = concat(MALE_NAMES, FEMALE_NAMES);
    var name = getRandomFromArray(allNames);
    if(!noCache){
      namesCache.name = name;
    }
    return name;
  }

  /**
   * Returns random surname.
   * @returns {string}
   */
  function randomSurname(noCache){
    var surname = getRandomFromArray(SURNAMES);
    if(!noCache){
      namesCache.surname = surname;
    }
    return surname;
  }

  /**
   * Returns random email.
   * @returns {string}
   */
  function randomEmail(noCache){
    if(noCache){
      return lowercase(randomName(true) + '.' + randomSurname(true) + '@' + getRandomFromArray(EMAILS));
    }else{
      return lowercase((namesCache.name || randomName(true)) + '.' + (namesCache.surname || randomSurname(true)) + '@' + getRandomFromArray(EMAILS));
    }
  }

  /**
   * Returns random argument from given method arguments.
   * @returns {string}
   */
  function randomArg(){
    var args = argumentsToArray(arguments);
    return getRandomFromArray(args);
  }

  /**
   * Returns random company name.
   * @returns {string}
   */
  function randomCompany(){
    return getRandomFromArray(COMPANIES);
  }

  /**
   * Returns random city name.
   * @returns {string}
   */
  function randomCity(){
    return getRandomFromArray(CITIES);
  }

  /**
   * Returns random street name.
   * @returns {string}
   */
  function randomStreet(){
    return getRandomFromArray(STREETS);
  }

  /**
   * Returns random text content.
   * @param {string} type - "t": text, "p": paragraph
   * @param {number} count - for "t": number of words, for "p": number of paragraphs
   * @returns {string}
   */
  function randomText(type, count){
    if(type === 'p'){
      var paragraphs = [];
      for(var i = 0; i < count; i++){
        paragraphs.push(LOREM_PARAGRAPHS[i % LOREM_PARAGRAPHS.length]);
      }
      return paragraphs.join('\r\n');
    }

    if(type === 't'){
      return LOREM_TEXT_SPLITTED.slice(0, count).join(' ');
    }
  }

  function words(minCount, maxCount, longOrShort){
    if(isDefined(minCount) && isUndefined(maxCount)){
      maxCount = minCount;
      minCount = 1;
    }else{
      minCount = setValueToDefault(minCount, 1);
      maxCount = setValueToDefault(maxCount, 10);
    }
    var count = randomInt(minCount, maxCount);
    var arr = [];
    if(isUndefined(longOrShort)){
      arr = LOREM_ALL_WORDS;
    }else{
      arr = longOrShort ? LOREM_LONGER_WORDS : LOREM_SHORTER_WORDS;
    }
    count = setValueToDefault(count, 10);
    var words = [], word;
    for(var i = 0; i < count; i++){
      word = getRandomFromArray(arr);
      if(words.indexOf(word) >= 0){
        i--;
      }else{
        words.push(word);
      }
    }
    return words;
  }

  function randomWords(minCount, maxCount){
    return words(minCount, maxCount);
  }

  function randomLongerWords(minCount, maxCount){
    return words(minCount, maxCount, true);
  }

  function randomShorterWords(minCount, maxCount){
    return words(minCount, maxCount, false);
  }

  /**
   * Returns guid.
   * @returns {string}
   */
  function guid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  /**
   * Returns link to placehold.it image service.
   * @param {number} [width] - image width, default: 128
   * @param {number} [height] - image height, default: 128
   * @returns {string} - url to image
   */
  function randomImage(width, height){
    if(arguments.length === 1){
      height = width;
    }else{
      width = setValueToDefault(width, 128);
      height = setValueToDefault(height, 128);
    }
    return 'http://placehold.it/' + width + 'x' + height;
  }



  function isReservedProperty(prop){
    return ['__repeat'].indexOf(prop) >= 0;
  }

  function removeMustache(value){
    return value.substring(2, value.length - 2);
  }

  function parseString(value){
    try{
      var evaluated = eval('generators.' + value);
      return isDefined(evaluated) ? evaluated : value;
    }catch(e){
      return value.replace(/{{(.*?)}}/g, function(s){
        s = removeMustache(s);
        var generatorName = s.split('(')[0];
        if(generatorName && generators.hasOwnProperty(generatorName)){
          return eval('generators.' + s);
        }
        return s;
      });
    }
  }

  function parseArray(arr){
    var first = arr[0];
    if(isString(first) && first.indexOf('__repeat:') === 0){
      var length = parseInt(first.replace('__repeat:', ''));
      var ret = [];
      var second = arr[1];
      for(var i = 0; i < length; i++){
        if(isObject(second)){
          ret.push(parseConfig(second));
        }else{
          ret.push(valueParser(second));
        }
      }
      return ret;
    }else{
      return arr.map(function(a){
        return valueParser(a);
      });
    }
  }

  var generators = {
    guid: guid,
    float: randomFloat,
    int: randomInt,
    numberPattern: randomNumberPattern,
    formattedNumber: randomFormattedNumber,
    date: randomDate,
    bool: randomBool,
    country: randomCountry,
    city: randomCity,
    street: randomStreet,
    company: randomCompany,
    day: randomDay,
    dayShort: randomDayShort,
    month: randomMonth,
    monthShort: randomMonthShort,
    email: randomEmail,
    gender: randomGender,
    name: randomName,
    nameMale: randomMaleName,
    nameFemale: randomFemaleName,
    surname: randomSurname,
    words: randomWords,
    wordsLong: randomLongerWords,
    wordsShort: randomShorterWords,
    text: randomText,
    randomArg: randomArg,
    image: randomImage
  };

  function parseConfig(config){
    var __repeat = valueParser(config.__repeat);

    if(!__repeat){

      return propParser(config);

    }else{

      var retarr = [];
      for(var i = 0; i < __repeat; i++){
        retarr.push(propParser(config));
      }
      return retarr;

    }

    function propParser(config){
      var ret = {};
      for(var configProp in config){
        if(!config.hasOwnProperty(configProp) || isReservedProperty(configProp)){
          continue;
        }
        var configValue = config[configProp];
        ret[configProp] = valueParser(configValue);
      }
      return ret;
    }

  }

  function valueParser(value){
    if(isString(value)){
      return parseString(value);
    }
    else if(isObject(value)){
      return parseConfig(value);
    }
    else if(isArray(value)){
      return parseArray(value);
    }
    else{
      return value;
    }
  }

  window.DataGenerator = function(){
    this.generate = parseConfig
  };
  
})();



/* TEST */
var generator = new DataGenerator();

var generated = generator.generate({
  __repeat: 'int(3, 7)',
  id: 'guid()',
  isActive: 'bool()',
  profilePic: 'image(300)',
  name: '{{name()}} {{surname()}}',
  gender: 'gender()',
  email: 'email()',
  address: '{{int()}} {{street()}}, {{city()}}, {{country()}}',
  company: '{{company().toUpperCase()}}',
  balance: 'formattedNumber(100000, 1000000)',
  phone: 'numberPattern("06#/##-##-###")',
  tags: 'words()',
  position: 'randomArg("developer", "tester", "manager")',
  bio: 'text("p", 1)',
  birthDate: 'date(new Date(1984, 0, 1), new Date(1989, 11, 31), "dd MMMM yyyy")',
  gps: { lat: 'float(-90, 90)', lng: 'float(-180, 180)' }
});
console.log(generated);
