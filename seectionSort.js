
var a = [1234, 4123, 342, 42342, 442, 124];
var b;


    //a[j] es el valor anterior a a[j+1] siempre

    for(i=0; i<a.length; i++){
    
    for (j=0;j<a.length;j++){
    if (a[i] < a[j]){
        b=a[i];
        c=a[j]
        a[i]=a[j];
        a[j]=b;
        console.log(a)
    }
    }
    }


