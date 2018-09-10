/** 
Kalo ada waktu senggang coba nanti adain objek baru. 
Jadi nanti objek objek db tinggal ngirim array yang isinya variabel-variablenya, dan cuma ngirim satu variabel array.
Terus nanti hdr di tiadain. Tinggal ganti sama idtab cuma di caps di first letter.
*/

var na = "N/A";
var un = "Unknown";
var cn = "Common";
var itil = "It is local!";


function dwnDB(){
	idtab = "downloadable";
	hdr = "Downloadable";
	arrDB = [
		['Linux Training', 'http://www.linux-training.be/', 'Paul Cobbaut', na],
		['Bookfi', 'http://en.bookfi.net', 'Unknown', na],
		['Goal Kicker', 'https://goalkicker.com', 'Stackoverflow', na],
		['Internet Archive', 'https://archive.org/', 'The Internet Archive', na],
	];
	
	showTable(arrDB, idtab, hdr);
}

function redDB(){
	idtab = "read";
	hdr = "Online-Only";
	arrDB = [
		['W3Schools', 'https://w3schools.com', un, na],
		['Codecademy', 'https://codecademy.com', un, na],
		['Tavmjong', 'https://tavmjong.free.fr', 'Tavmjong Bah', na],
		['The News Manual',	'https://www.thenewsmanual.net/', un, na],
		['Geoff Lawrence', 'https://geofflawrence.com', un, na],
		['Project Euler', 'https://projecteuler.net', un , na],
		['Sekolah Koding', 'https://sekolahkoding.com', un, itil],
		['HackDesign', 'https://hackdesign.org/', un, na],
		['Feynman Lectures', 'https://www.feynmanlectures.caltech.edu', un, na],
	];
	
	showTable(arrDB, idtab, hdr);
}

function acdDB(){
	idtab = "academic";
	hdr = "Academic";
	arrDB = [
		['Garba Rujukan Digital', 'http://garuda.ristekdikti.go.id/', 'KEMENRISTEK DIKTI', itil],
		['Neliti', 'https://www.neliti.com/id/', 'Neliti Pty Ltd.', itil],
		['Jurnal Online LIPI', 'http://www.jurnal.lipi.go.id/', 'LIPI', itil],
	];
	
	showTable(arrDB, idtab, hdr);
}

function showTable(arr, idt, hdr){
	var arr, body, h1, hdr, tab, thead, tbody, tr, td, tn, row, col, idt;
	body = document.getElementById(idt); //tambahin parameter buat ganti index kelas jadi nama id
	h1 = document.createElement('h1');
	h1c = document.createTextNode(hdr);
	h1.appendChild(h1c);
	body.appendChild(h1);
	tab = document.createElement('table');
	thead = document.createElement('thead'); //** */
	tr = document.createElement('tr');
	th = document.createElement('th');
	tnh = document.createTextNode("Name");
	th.appendChild(tnh);
	tr.appendChild(th);
	th = document.createElement('th');
	tnh = document.createTextNode("Link");
	th.appendChild(tnh);
	tr.appendChild(th);
	th = document.createElement('th');
	tnh = document.createTextNode("Owner");
	th.appendChild(tnh);
	tr.appendChild(th);
	th = document.createElement('th');
	tnh = document.createTextNode("Localization");
	th.appendChild(tnh);
	tr.appendChild(th);
	thead.appendChild(tr);//** */
	tab.appendChild(thead);
	tbody = document.createElement('tbody'); //** */
	for (row = 0; row < arr.length; row++){
		tr = document.createElement('tr');
		for (col = 0; col < arr[row].length; col++){
			td = document.createElement('td');
			tn = document.createTextNode(arr[row][col]);
			td.appendChild(tn);
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	tab.appendChild(tbody);
	body.appendChild(tab);
}
