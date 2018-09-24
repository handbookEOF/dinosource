/** 
Kalo ada waktu senggang coba nanti adain objek baru. 
Jadi nanti objek objek db tinggal ngirim array yang isinya variabel-variablenya, dan cuma ngirim satu variabel array.
Terus nanti hdr di tiadain. Tinggal ganti sama idtab cuma di caps di first letter.
*/

var na = "N/A";
var un = "Unknown";
var og = "On Going"
var dbt = "Dino's Beloved Team";
var itil = "It is local!";


function islamDB(){
	idtab = "islam";
	hdr = "Islam";
	arrDB = [
		['Al Quran Indonesia', 'http://quranforandroid.com/', 'Andi Unpam'],
	];
	
	showTable(arrDB, idtab, hdr);
}

function acdDB(){
	idtab = "academic";
	hdr = "Akademik";
	arrDB = [
		['Garba Rujukan Digital', 'http://garuda.ristekdikti.go.id/', 'KEMENRISTEK DIKTI'],
		['Neliti', 'https://www.neliti.com/id/', 'Neliti Pty Ltd.'],
		['Jurnal Online LIPI', 'http://www.jurnal.lipi.go.id/', 'LIPI'],
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
