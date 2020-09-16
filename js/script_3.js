var sort = function(str) {
  return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
}

jQuery( document ).change(function() {
	let original = document.getElementById('original').value;
	let test = document.getElementById('test').value;
	document.getElementById('anograma').value = "НЕ анаграма";
	if (original.trim() === test.trim()){
		document.getElementById('anograma').value = "Не анаграма";
	} else {
		
		if (sort(original) === sort(test)){
			document.getElementById('anograma').value = "Анаграма";
		} else {
			document.getElementById('anograma').value = "Не анаграма";
		}
	}
});
