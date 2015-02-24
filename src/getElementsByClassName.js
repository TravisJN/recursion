// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className)
{
	//array to store nodes that match the className
	var elementArray = [];

	//start searching the dom at the body
	var root = document.body;

	//recursive function that steps through all children and if node does not have
	//a child, it goes on to the node's siblings
	var searchDOM = function(node, func) {
		//call the function that checks if the node has the correct class and if it does
		//it pushes it to elementArray
	    func(node);
	    //move on to the node's child
	    node = node.firstChild;

	    //if the node does have a child, call function searchDOM again which will first look
	    //for children until it finds a node without children, then it will walk through the
	    //node's siblings
	    while (node) {
	    	searchDOM(node, func);
	        node = node.nextSibling;
    	}
	}

	//call recursive function which checks for the correct class name and pushes
	//it into the array
	searchDOM(root, function(node) {
		if (_.contains(node.classList, className)) {
			elementArray.push(node);
		}
	});

	return elementArray;

}

