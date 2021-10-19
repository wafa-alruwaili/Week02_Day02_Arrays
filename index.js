
console.log("wafa");


 let e = [3, 5, 7, 1, 9, 11];
 function odd() {
    for (i = 0; i < e.length; i++) {
        if (e[i] % 2 != 0) {
            e[i] = e[i] * 2;
        }
    } 

 }
 console.log(odd(e));
 odd();





 let o = [2, 4, 6, , 8, 10, 12];
 function even() {
    for (y = 0; y < o.length; y++) {
        if (o[y] % 2 == 0) {
            o[y] = o[y] * 2;
        }
    }
 }

  console.log(even(o));

 even();





 var choices = ['Grey', 'bink', 'black', 'purple'];
  function color() {
    for (var i = 0; i < choices.length; i++) {
       
       console.log("my favorite color is: " + choices[0])
        

    }
 }

 color();






    const array = [2, 3, 4, 5, 6, 7];
    function num() {
        console.log(array);
        array.push(8, 9);
        array.unshift(0, 1);
        
    }
    console.log(num(array));
    num();



    const n = [1, 2, 3, 4, 5];
    const k = 1;
    function key1() {

        for (i = 0; i < n.length; i++) {
            if (k == n == [i]) {



                console.log('true');
            }
            else {
                console.log('false');
            }
        }
    }
    key1();

 

    const number = [1, 4, 5, 6, , 9, 6, 3, 2, 7]
     const key = 10;
    function elem() {
         for (i = 0; i < key.length; i++) {
            for (j = i + 1; j < number.length; j++) {
                 if (key[i] + key[j] == num)

                     console.log(key[i] + "+" + key[j] + "=" + num);

           }
        }
     }

    elem();