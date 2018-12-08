
  function romenGetValue(c) {
    if (c == 'X') return 10;
    if (c == 'V') return 5;
    if (c == 'L') return 50;
    if (c == 'C') return 100;
    if (c == 'D') return 500;
    if (c == 'I') return 1;
    if (c == 'M') return 1000;
    return -1;
}
exports.convert=function (romen){
    if(typeof romen !="string"){
        throw new TypeError("String is required");
    }
    let value=0;
    romen=romen.split("").reverse().join("");
     console.log(romen.length);
     for(var i=0;i<romen.length;i++){
              switch(romen[i]){
                case 'M':
                value+=1000;
                break;
                case 'D':
                if (i != 0) {
                    if (romenGetValue(romen[i - 1]) <= romenGetValue(romen[i])) {
                       value += 500;
                    } else {
                        value -= 500;
                    }
                } else {
                    value += 500;
                }
                break;
                case 'X':
                    if (i != 0) {
                        if (romenGetValue(romen[i - 1]) <= romenGetValue(romen[i])) {
                              value+=10
                        } else {
                           value-=10
                        }
                    } else {
                      value+=10
                    }
                    break;
                    case 'C':
                    if (i != 0) {
                        if (romenGetValue(romen[i - 1]) <= romenGetValue(romen[i])) {
                            value+=100;
                        } else {
                            value-=100;
                        }
                    } else {
                        value+=100;
                    }
                    break;
                    case 'V':
                    if (i != 0) {
                        if (romenGetValue(romen[i - 1]) <= romenGetValue(romen[i])) {
                            value+=5;
                        } else {
                           
                            value-=5
                        }
                    } else {
                        value+=5
                    }
                    break;
                    case 'I':
                    if (i == 0) {
                       
                        value++;
                        break;
                    }
                    if (i != 0) {
                        if (romenGetValue(romen[i - 1]) <= romenGetValue(romen[i])) {
                            value++;

                        }
                        else {
                            value--;
                        }
                    }

                    break;
              }

     }
     if(value<0){
         throw(new Error("Value is invalid"));
     }
     return value;
}
/*console.log(romenGetValue('M'))
convert("romen")
const r1="IV"
const r2="MV"
result=convert(r1);
result2=convert(r2);
console.log(result);
console.log(result2)
module.exports=convert;*/
console.log("log");