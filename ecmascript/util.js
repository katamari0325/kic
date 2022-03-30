
const checkJumin = function(strJumin){
    strJumin = strJumin.replace('-','');

    const bits = [2,3,4,5,6,7,8,9,2,3,4,5];

    let sum =0;
    for(let i=0; i<bits.length ; i++){
         sum += Number(strJumin.substring(i, i+1))*bits[i];
    }
    let lastNum = Number(strJumin.substring(12, 13));
    let resultNum = (11 - (sum%11))%10;

    if(lastNum == resultNum){
        return true;
    }else{
        return false;
    }
}