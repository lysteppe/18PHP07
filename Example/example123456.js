// Example

// var a = 4;
// switch(a) {
// 	case 3:
// 		document.write(" Đây là số 3");
// 		break;
// 	case 6:
// 		document.write(" Đây là số 5 hay 6 gì đó");
// 		break;
// 	default:
// 		document.write(" Là số đặt biệt");
// 		break;	
// }
// 	document.write("<br>");

// -- BT1: cong tru nhan chia

var a = 5, b =6;

function plus(a, b) {
	document.write('Total: '+ (a + b)+ "<br>");
}
	// document.write('<br>');

function subtraction(a, b) {
	document.write('Total: '+ (a - b)+ "<br>");
}
	// document.write('<br>');

function multiplication(a, b) {
	document.write('Total: '+ (a * b)+ "<br>");
}
	// document.write('<br>');

function division(a, b) {
	document.write('Total: '+ (a / b)+ "<br>");
}

plus(a, b)
subtraction(a, b)
multiplication(a, b)
division(a, b)

document.write("<br>");

// -- BT2: In ra thang

// var a = 1;
// switch(a){
// 	case 1:
// 		// document.write("Day la thang 1");
// 		// break;
// 	case 2:
// 		// document.write("Day la thang ");
// 		// break;
// 	case 3:
// 		// document.write("Day la thang 3");
// 		// break;
// 	case 4:
// 		// document.write("Day la thang 5");
// 		// break;
// 	case 5:
// 		// document.write("Day la thang " + a);
// 		// break;
// 	case 6:
// 		// document.write("Day la thang 6");
// 		// break;
// 	case 7:
// 		// document.write("Day la thang 7");
// 		// break;
// 	case 8:
// 		// document.write("Day la thang 9");
// 		// break;
// 	case 9:
// 		// document.write("Day la thang 9");
// 		// break;
// 	case 10:
// 		// document.write("Day la thang 10");
// 		// break;
// 	case 11:
// 		// document.write("Day la thang 11");
// 		// break;
// 	case 12:
// 		document.write("Đây là tháng " + a);
// 		break;
// 	default:
// 		document.write("Đây không phải là tháng trong năm");
// 		break;
// }

// if (a > 0 & a < 13) {
//     document.write("Đây là tháng " + a);
// }
// else
//     document.write("Đây không phải tháng trong năm!!");


// document.write("<br>");



// -- BT3: Ngay Thang

// var month, year;
// function monthcheck(month, year){
// 	switch (month){
// 		case 1:
// 		case 3:
// 		case 5:
// 		case 7:
// 		case 8:
// 		case 10:
// 		case 12:
// 			document.write("Tháng ", month," Năm ", year, ", Tháng có 31 ngày. ");
// 			break;
// 		case 4:
// 		case 6:
// 		case 9:
// 		case 11:
// 			document.write("Tháng ", month, " Năm ", year, ", Tháng có 30 ngày ");
// 			break;
// 		case 2:
// 			if ((year % 4 == 0) && (year % 100 != 0)) {
// 				document.write("Tháng 2 năm ", year, ", Tháng có 29 ngày ");
// 			} 
// 			else {
// 				document.write("Tháng 2 năm ", year, ", Tháng có 28 ngày ");
// 			}
// 			break;
// 			default:
// 				document.write("Tháng ",month, " năm ",year,", có 30 ngày ");
// 			default: document.write("<br>Đây không phải là tháng trong năm!!");break;
// 	}
// }
// monthcheck(13,2020);

// document.write("<br>");



// for(var i = 1; i <= 12; i++) {
// 	document.write("Day la thang " + i + "<br>");
// }
// var n =1;
// while(n <= 12){
// 	document.write("Day la thang " + n + "<br>");
// }
// var m = 1;
// do {
// 	document.write("Day la thang " + m + "<br>");
// 	m++;
// }	while (m <= 12);


// document.write("<br>");



// -- BT4: Chia

// for(var i = 1; i <= 100; i++) {
// 	if(i % 15 == 0) 
// 		document.write(" Số " + i + " Chia hết cho 15<br>");
// 		// document.write("<br>");
	
// 	else if(i % 3 == 0)
// 		document.write(" Số " + i + " Chia hết cho 3<br>");
		
// 	else if(i % 5 == 0)
// 		document.write(" Số " + i + " Chia hết cho 5<br>");
	
// 	else 
// 		document.write(" Số " + i +" Không chia hết cho 3, 5, 15<br>");
		
// }

document.write("<br>");


// var i = 1;
// while(i <= 100) {
// 	if(i % 15 == 0) {
// 		document.write(" Số " + i + " Chia hết cho 15");
// 		document.write("<br>");
// 	}
// 		else if(i % 5 == 0){
// 		document.write(" Số " + i + " Chia hết cho 5");
// 		document.write("<br>");
// 	}
// 	else if(i % 3 == 0){
// 		document.write(" Số " + i + " Chia hết cho 3");
// 		document.write("<br>");
// 	}
// 	else {
// 		document.write(" Số " + i +" Không chia hết cho 3, 5, 15");
// 		document.write("<br>");
// 	}
// 	i++;
// }

// var i = 1;
// do {
// 	if(i % 15 == 0) {
// 		document.write(" Số " + i + " Chia hết cho 15");
// 		document.write("<br>");
// 	}	
// 	else if(i % 5 == 0){
// 		document.write(" Số " + i + " Chia hết cho 5");
// 		document.write("<br>");
// 	}
// 	else if(i % 3 == 0){
// 		document.write(" Số " + i + " Chia hết cho 3");
// 		document.write("<br>");
// 	}	
// 	else {
// 		document.write(" Số " + i +" Không chia hết cho 3, 5, 15");
// 		document.write("<br>");
// 	}
// 	i++;
// }while(i <= 100)

// -- BT5: Kiem tra

var a;
function checkParity(a) {
    if (a % 2 == 0) 
        document.write(a + " là số chẵn<br>");
       
    else
        document.write(a + " là số lẽ<br>");
        
}

var i = 1, j = 1, fibo = i + j;  
function checkFibonacci(a) {
    if (a == 1 || a == 2)
        document.write(a + " nằm trong dãy fibonaci từ 1-100<br>");  
    else {
        while (fibo < a) {
            i = j;
            j = fibo;
            fibo = (i + j);
        }
        if (fibo == a) 
            document.write(a + " nằm trong dãy fibonaci từ 1-100<br>");
            
        else
            document.write(a + " không nằm trong dãy fibonaci từ 1-100<br>");
            
    }
}

var i = 1;
function checkGovernment(a) {
    while (i * i < a) {
    }
    if (i * i == a) 
        document.write(a + " là số chính phương.<br>");
    else
        document.write(a + " Không phải là số chính phương.<br>");
    i++
}
checkParity(9);
checkFibonacci(13);
checkGovernment(9);

document.write("<br>");

// -- BT6: Kiem tra so lon nho

var a, b, c, d;
function Max(a, b, c, d) {
    (a > b & a > c & a > d)?
    document.write(a + " là số lớn nhất<br>"):
        (b>c & b > d)?
        document.write(b + " là số lớn nhất<br>"):
            (c > d)?
            document.write(c + " là số lớn nhất<br>"): 
                document.write(d + " là số lớn nhất<br>"); 
}
function Min(a, b, c, d) {
    (a < b & a < c & a < d)?
    document.write(a + " là số nhỏ nhất<br>"):
        (b < c & b < d)?
        document.write(b + " là số nhỏ nhất<br>"):
            (c < d)?
            document.write(c + " là số nhỏ nhất<br>"): 
                document.write(d + " là số nhỏ nhất<br>"); 
}
Max(5, 10, 15, 20);
Min(1, 5, 20, 0);
