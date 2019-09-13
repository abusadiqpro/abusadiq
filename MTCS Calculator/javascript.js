/*function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

console.log(thousands_separators(1000));
console.log(thousands_separators(10000.23));
console.log(thousands_separators(100000));
*/

 function turnover(){
 	 

	var amt = parseInt(document.querySelector("#amount").value);

	var per = parseInt(document.querySelector("#percentage").value);

	var markup = (per/100) * amt;

	var Treturns = amt + markup;

	var dura = parseInt(document.querySelector("#duration").value);

	var monthly =( Treturns/dura);

	var date = new Date();
 	var effectMonth = date.getMonth() + 1;
 	var effectyear = date.getFullYear() + 1;
	var result = "Total return ="+" "+Treturns +"<br>"+"Monthly deduction = "+" "+ monthly+"<br>"+ "Profit ="+" "+ markup+"<br>"+ "Date ="+" "+ effectMonth+"<br>"+ "Year ="+" "+ effectyear;
 	document.querySelector("#resultGreenDiv").innerHTML= result;

 
}


/*function commaSeperator(){
	var num_parts = result.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");

}*/

function clear(){

	var amt = document.querySelector("#amount").value = '';
	amt = '';
	var per= document.querySelector("#percentage").value = '';
	per = '';


}

