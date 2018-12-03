function f( n ) {
var s = 0;
	if( n == 0 ) 
		return( s );
	if( n == 1 ) {
		s += 1;
		return( s );
	}
	else {
	return( f ( n - 1) + f ( n - 2 ) );
  		}
	}
function show(n) {
var i;
	for (i = 0; i <= n; i++) {
	f1.s.value += "  " + f(i);
	   }
	}

	// Em mông lung cái này lắm thầy ơiiiii :/ ... em tham khảo ở gg