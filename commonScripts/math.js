// Script: 'math.js' , generated by Gamedonia
define({
	divide:function divide (x,y) {
		
		var total;
		require (["utils"], function(utils) {
		    
			var sum = utils.sum(x,y);		    		    
		    total = (sum / x / y);
		    
		});
		
		return total;
				
	}
});