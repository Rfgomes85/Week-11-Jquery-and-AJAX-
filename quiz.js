let customers = [
    {
    firstName:'Sam',
    lastName : 'Smith',
    email: "ssmith@gmail.com"
    },
    {
    firstName:'Tom',
    lastName : 'Jones',
    email: "tjones@gmail.com"
    }
    ];
    let newRowHTML = "";
$("#customerTable")
 ( let 
customer
 of customers ) {

newRowHTML
 = `
<tr>
<td>${newRowHTML
 .firstName
 }</td>
<td>${newRowHTML.
lastName
 }</td>
<td>${newRowHTML.
email
 }</td>
</tr>`;
customer.
$("#tableBody")
$("#customerTable");
}
