function countHandler(fligtClass, isTrue) {
	const fClass = document.getElementById(fligtClass).value;
	var fClassCount = parseInt(fClass);
	console.log(fligtClass);

	if(isTrue){
		fClassCount++;
	} else{
		if (fClassCount>0) {
			fClassCount--;
		}
	}
	document.getElementById(fligtClass).value = fClassCount;
	
	const fClassTotal = document.getElementById("f-class").value;
	const fClassTotalCount = parseInt(fClassTotal);
	const eClassTotal = document.getElementById("e-class").value;
	const eClassTotalCount = parseInt(eClassTotal);

	document.getElementById("subtotal").innerText = fClassTotalCount * 150 + eClassTotalCount * 100;
	document.getElementById("vat").innerText = (fClassTotalCount * 150 *.1 + eClassTotalCount * 100*.1).toFixed(0);
	document.getElementById("total").innerText = (fClassTotalCount * 150 *1.1 + eClassTotalCount * 100*1.1).toFixed(0);
	
}

function notification(){
	const firstClassTicket = document.getElementById("f-class").value;
	const econoClassTicket = document.getElementById("e-class").value;
	const subtotal = document.getElementById("subtotal").innerText;
	const vat = document.getElementById("vat").innerText;
	const total = document.getElementById("total").innerText;

	const totalTicket = parseInt(firstClassTicket) + parseInt(econoClassTicket);

	if (totalTicket) {
		document.getElementById("modal-content").innerText = "Dear sir, you are about to buy " + firstClassTicket + " First Class Ticket & " + econoClassTicket + " Economic Class Ticket. Total Price is $" + total + " (Ticket price $" + subtotal + ", vat $" + vat + '). Plz, click "Ok" to confirm or "Edit" to make change.';
	} else {
		document.getElementById("modal-content").innerText = "To go next step at least 1 (one) ticket must be added."
	}


}