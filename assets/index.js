let search0 = () => {
	let input, filter, table, tr, td, i, txtValue
	input = document.getElementById("searchbar0")
	filter = input.value.toUpperCase()
	table = document.getElementById("table0")
	tr = table.getElementsByTagName("tr")
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[2]
		if (td) {
			txtValue = td.textContent || td.innerText
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = ""
			} else {
				tr[i].style.display = "none"
			}
		}
	}
}

let search1 = () => {
	let input, filter, table, tr, td, i, txtValue
	input = document.getElementById("searchbar1")
	filter = input.value.toUpperCase()
	table = document.getElementById("table1")
	tr = table.getElementsByTagName("tr")
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[2]
		if (td) {
			txtValue = td.textContent || td.innerText
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = ""
			} else {
				tr[i].style.display = "none"
			}
		}
	}
}
