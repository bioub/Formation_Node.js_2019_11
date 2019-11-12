setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 1000);
setTimeout(() => console.log('C'), 0);
setTimeout(() => console.log('D'), 500);

console.log('E');

// pile d'appels
// ^
// |
// |                           lg            lg    lg             lg
// |st - st - st - st - lg ... cbC ...       cbA - cbD ...        cbB
// +----------0----------------2-------------500---501------------1000-> temps
//                      E      C             A     D              B

// file d'attente (0ms) : cbC
// file d'attente (2ms) :
// file d'attente (500ms) : cbA cbD
// file d'attente (501ms) : cbD
// file d'attente (502ms) :
// file d'attente (1000ms) : cbB
// file d'attente (1001ms) : le programme s'arrête

/// ......
// Jake Archibald : In The loop
// 
