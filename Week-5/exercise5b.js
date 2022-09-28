function vowelCount (str) {
    vowelList = ['a', 'e', 'i', 'o', 'u'];
    let charMap = new Map();
    const count = 0;
     for (const key of str.toLowerCase()) {
          charMap.set(key,count); 
     }
   
     for (const key of str.toLowerCase()) {
       let count = charMap.get(key);
         charMap.set(key, count + 1);
     }
   
     for (const [key,value] of charMap) {
       if (vowelList.includes(key)) {
         console.log(key,value);
       }
     }
   } 
   
   let a = "Devanshu Litoria";
   vowelCount(a);