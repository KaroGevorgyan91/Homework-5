
/*Task 3 list of possible anagrams

function checkAnagrams(arr, str1, newArr = []){
    for (var i = 0; i < arr.length; i++){
        if( arr[i].split("").sort().join() === str1.split("").sort().join()){
            newArr.push(arr[i]);
        }
    }
return newArr;
}
var a = ['licnep', 'nilcpe', 'circular'];
var s = 'pencil';
conole.log(checkAnagrams(a, s));

/*

/* Task 4 

function check(arr, newArr = []) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === false) {
      return "Invalid Arguments";
    } else {
      newArr.push(Math.min(...arr[i]));
    }
  }

  if (Math.min(...newArr) >= 0) {
    return "No negatives";
  }
  else {
    return (Math.min(...newArr));
  }

};
var a = [[2, -3, -9, 0], [1, 2], [-4, -11, 0]];
var b = [1, 3, 4];
var c = [[2, 3, 9, 0], [1, 2], [4, 11, 0]];

console.log(check(a));
console.log(check(b));
console.log(check(c));

/*

/* task 1 

function numberToSpel( n ) {

	var string = n.toString();
	var units =  [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    var tyes = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
    var huges = [ '', 'thousand', 'million'];
    var start = string.length; 
    var parts = [];
    var other; 
    while( start > 0 ) {
			other = start;
			parts.push( string.slice( ( start = Math.max( 0, start - 3 ) ), other ) ); //dzaxic aj ereq hatov  ktrtelu hamar
		}

		var spels = [];
		for( var i = 0; i < parts.length; i++ ) {
        var hat =  parseInt( parts[i] );

        if(hat) {
            var q = parts[i].split( '' ).reverse().map( parseFloat );
            if( q[1] === 1 ) {
					q[0] += 10;
				}
				if( ( n = huges[i] ) ) {
					spels.push( n );
				}
                if( ( n = units[ q[0] ] ) ) {
					spels.push( n );
				}
                if( ( n = tyes[ q[1] ] ) ) {
					spels.push( n);
				}
					if( ( n = units[ q[0] ] ) ) {
					spels.push( n);
				}

                if( q[0] || q[1] ) {
                	if( q[2] || ! i && parts.length) {
						spels.push( "and" );
					}
				
				}
                if( ( n = units[ q[2] ] ) ) {
					spels.push( n + ' hundred' );
				}
				
			}
			
		}
		
		return spels.reverse().join( ' ' );
		
	}
var z = 4;

console.log(numberToSpel(z))

/*