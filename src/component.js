export default function paint() {
	const divName = "MyDiv" + this.Name.replace('.', '_');
	
	console.log(`*** ${divName} paint *** `);

	let myDiv = document.getElementById(divName);

	if(!myDiv) {
		myDiv = document.createElement('div');
		myDiv.setAttribute("id", divName);
		myDiv.setAttribute("style","width: 100%; height: 100%;");
		myDiv.innerHTML = "Hi there!";
		this.Element.appendChild(myDiv);
	}

	console.log(this.Data);	// Dimensions and Expressions should be set
	console.log(this.Layout.Text0); // see Definition.xml
}
