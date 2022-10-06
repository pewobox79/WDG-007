
function getValue(){
    console.log("hier ist der Wert")

}

getValue();


function addiereZweiUndDrei(){
    return 3+2
}

addiereZweiUndDrei();

const result = addiereZweiUndDrei();

console.log(result)


function dynamicAddition(value1, value2){
    return value1 + value2;
}

const addierterWert = dynamicAddition(2.5,3.5);
console.log(addierterWert)


let integer = "VolleZahl" ;
let float = "Kommazahl";


//initial value / initialer Wert


function namesAusgabe(name){

    if(!name){
        let fallback = "Da ist keiner!";
        return fallback;
    }else{
        let myOutput = `mein Name ist ${name}`;
        return myOutput;
    }

}

const werBistDu = namesAusgabe("peter wolf");
console.log(werBistDu);


