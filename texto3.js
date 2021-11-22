alert("Hi")

d = [111, 311, 411, 811, 211, 131, 122];
c = [928, 88, 872, 22, 11];
var b, c, d, e, i;


function bubbleSort(a){

for(i=0;i<a.length;i++){
    
    for(j=0;j<a.length;j++){
    if (a[j] < a[j+1]){
        b=a[j+1]; //hay que guardar el mismo valor 2 veces no se puede hacer de una
        a[j+1]=a[j];
        a[j]=b;

        console.log(a);  
    }
    }
 
}
}

bubbleSort(c);
