const bands = [
    'The Plot in You', 
    'The Devil Wears Prada', 
    'Pierce the Veil', 
    'Norma Jean', 
    'The Bled', 
    'Say Anything', 
    'The Midway State', 
    'We Came as Romans', 
    'Counterparts', 
    'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const list = document.getElementById('list');

// const articles = ['A ', 'An ', 'The '];
// const rPos = 1, rNeg = -1;
// console.time('sort');
// bands.sort(function(first, second) {
//     let {0:f, 1:s} = arguments;   

//     [...arguments].forEach((arg, index) => {
//         articles.forEach(article => {            
//             if(arg.startsWith(article)){
//                 if(index === 0) {
//                     f = arg.slice(article.length).trim();
//                 } else {
//                     s = arg.slice(article.length).trim();
//                 }                
//             }
//         });
//     });

//     if(f > s) return rPos;
//     else return rNeg;
// });
// console.timeEnd('sort');

function strip(str = '') {
    return str.replace(/^(the|an|a)\s+/gi, '').trim();

}

bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);

bands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    list.appendChild(li);
});

