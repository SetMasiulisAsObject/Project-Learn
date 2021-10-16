export default function runBigTask(){
    let a =0;
    for (let index = 0; index < 50000; index++) {
        a=a+index;
        
    }
    return a;
}