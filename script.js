
function fibonacci(num) {
// your code here
	if(num > 0)
	{
		let a=0; 
	    let	 b=1;
		for(let i=2; i<=num; i++)
		{
			let temp = a;
			a = b;
			b = temp + a;
			
		}
	
		return a;
	}	
		else{
		return "Enter a positive number";
		}
	}
  
let num = parseFloat(prompt("Enter a Positive Number"));
alert(fibonacci(num));
    
module.exports = fibonacci;