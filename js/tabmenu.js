var tabM = document.getElementById("tabMenu"),
tabM_a = tabM.getElementsByTagName('a'),
tabC = document.getElementById('tabContent'),
tabC_div = tabC.getElementsByTagName('div');	

for(var i=0; i<tabM_a.length; i++){
	tabM_a[i].onclick = function(){
		var gethref = this.getAttribute('href');
		gethref = gethref.split('#');
		gethref = gethref[1];
		on_off(gethref);					
	};
};
var on_off = function(a1){
	for(var i = 0; i < tabC_div.length; i++){		
		var getCName = tabC_div[i].getAttribute('class');
		getCName = getCName.split(" ");
		if(getCName[0] === a1){
			tabC_div[i].className = a1+" on";
		}
		else {
			tabC_div[i].className = getCName[0]+" off";
		}
	}
};