let games = []

// ? search 3d games
const search0 = () => {
	let input, filter, table, tr, td, i, txtValue
	input = document.getElementById("searchbar0")
	filter = input.value.toUpperCase()
	table = document.getElementById("table0")
	tr = table.getElementsByTagName("tr")

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1]
		td2 = tr[i].getElementsByTagName("td")[2]
		td3 = tr[i].getElementsByTagName("td")[3]

		if (td) {
			txtValue = td.textContent || td.innerText
			txtValue2 = td2.textContent || td2.innerText
			txtValue3 = td3.textContent || td3.innerText

			games.push({ name: txtValue, playtime: txtValue2, score: txtValue3 })
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = ""
			} else {
				tr[i].style.display = "none"
			}
		}
	}

	console.log(games)
}

// ? sort table
const sort = (table, column, asc = false) => {
	const dirModifier = asc ? 1 : -1
	const tBody = table.tBodies[0]
	const rows = Array.from(tBody.querySelectorAll("tr"))
	const sortedRows = rows.sort((a, b) => {
		const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim()
		const bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim()
		return aColText > bColText ? 1 * dirModifier : -1 * dirModifier
	})
	while (tBody.firstChild) {
		tBody.removeChild(tBody.firstChild)
	}
	tBody.append(...sortedRows)
	table.querySelectorAll("th").forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"))
	table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc", asc)
	table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc", !asc)
}
document.querySelectorAll(".table-sortable th").forEach((headerCell) => {
	headerCell.addEventListener("click", () => {
		const tableElement = headerCell.parentElement.parentElement.parentElement
		const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell)
		const currentIsAscending = headerCell.classList.contains("th-sort-asc")
		sort(tableElement, headerIndex, !currentIsAscending)
	})
})
