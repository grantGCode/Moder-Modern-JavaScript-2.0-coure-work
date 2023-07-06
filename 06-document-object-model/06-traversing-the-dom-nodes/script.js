const parent = document.querySelector('.parent');

a = parent.childNodes;// Returns all the child nodes (this case the children of div parent)
b = parent.childNodes[0].textContent; // returns nothing because the white space has no content.
c = parent.childNodes[0].nodeName; // returns name of node;
d = parent.childNodes[3].childNode; // returns textContent;
e = parent.childNodes[3].innerHTML; // returns the inner text of div Child 2
f = parent.childNodes[3].outerHTML; // returns the
// white space counts as a text node. The text node representing white space will typically appear after the previous node because of the white space after the element.

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);