var users = [
    {id:1, username:"sa", password:"sa", firstname:"Super", lastname:"Admin", phone:"111-222-3333", email: "name@email.com", isReviewer: true, isAdmin: true },
    {id:2, username:"user",password:"user5", firstname:"NormalA", lastname:"UserE", phone:"111-222-3333", email: "name@email.com", isReviewer: true, isAdmin: true},
    {id:3, username:"user2",password:"user6", firstname:"NormalB", lastname:"UserF", phone:"", email: "name@email.com", isReviewer: false, isAdmin: false},
    {id:4, username:"user3",password:"user7", firstname:"NormalC", lastname:"UserG", phone:" ", email: "name@email.com", isReviewer: true, isAdmin: false},
    {id:5, username:"user4",password:"user8", firstname:"NormalD", lastname:"UserH", phone:" ", email: "name@email.com", isReviewer: true, isAdmin: false}
];

function loaded(){
    buildUserTable();
}

function buildUserTable(){
    var tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML= "";
    for(var user of users){
        var tr = "<tr>";
        tr +="<td class='center'>" + user.id + "</td>";
        tr +="<td>" + user.username + "</td>";
        tr +="<td>" + user.password + "</td>";
        tr +="<td>" + user.firstname + " " + user.lastname + "</td>";
        tr +="<td>" + user.phone + "</td>";
        tr +="<td>" + user.email + "</td>";
        tr +="<td class='center'>" + (user.isReviewer?"Yes":"No") + "</td>";
        tr +="<td class='center'>" + (user.isAdmin?"Yes":"No") + "</td>";
        tr += "</tr>";

        tbodyCtrl.innerHTML += tr;
    }
}