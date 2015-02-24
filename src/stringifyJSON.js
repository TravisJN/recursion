// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var str = "";

	if (Array.isArray(obj)) {
		//object is an array so add opening bracket
		str += "[";
		//loop through array, recursing over this function and adding the return value to str
		for (var i = 0; i < obj.length; i++) {
			str += stringifyJSON(obj[i]) + ",";
		}
		//this removes the last comma that was placed if indeed there was one
		if (obj.length > 0) {
			str = str.slice(0, str.length - 1);
		}
		str += "]";
		return str;
	} else if (typeof obj === 'object' && obj !== null) {
		str += "{";
		for (var key in obj) {
			//if the key/value pair is a function or undefined skip it entirely
			if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
				str += stringifyJSON(key);
				str += ":";
				str += stringifyJSON(obj[key]) + ",";
			}
			
		}
		//remove the last comma
		if (str.length > 1) {
			str = str.slice(0, str.length - 1);
		}
		str += "}";
		return str;
	}

	//check each element and return a stringified version of it
	if (obj === null){
  		return 'null';
  	}	else if (typeof obj === "string") {
  		return '"' + obj + '"';
  	} else {
  		return obj.toString();
  	}

};
