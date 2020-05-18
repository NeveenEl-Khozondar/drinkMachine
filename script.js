var drinks = [
    { drink: 'coffe', price: 5 },
    { drink: 'cola', price: 4 },
    { drink: 'tea', price: 2 },
    { drink: 'water', price: 3 },
];


$("#btn").click(function () {
    var drinkName = $('input[name=drink]:checked', '#list').val();
    var inputrSiQ = $('#price').val()
    console.log(drinkName)
    console.log(inputrSiQ)

        for (var i = 0; i < drinks.length; i++) {
            if (drinks[i].drink === drinkName) {
                var final = inputrSiQ - drinks[i].price;
                if (inputrSiQ - drinks[i].price === 0) {
                    var rest = document.createElement('label');
                    rest.textContent = 'Your request has been successfully completed. Wait a minute';
                    $('#lableHabibi').append(rest)
                    console.log("1")

                } else if (inputrSiQ - drinks[i].price > 0) {
                    var rest = document.createElement('label');
                    rest.textContent = 'Your request has been successfully completed. Wait a minute . . . your rest = ' + final + ' $';
                    $('#lableHabibi').append(rest)
                    console.log("2")

                } else {
                    var falseInput = document.createElement('label');
                    falseInput.textContent = 'Soorry, the amount is not enough, you are missing : ' + final + ' $';
                    $('#lableHabibi').append(falseInput)
                    console.log("3")
                }
            }
        }
    }
);



    // button.onclick = function () {
    //     var mony = document.getElementById("mony").value();
    //     var drink = document.getElementById("x").value.
    //     if(mony>drink){
    //         result.innerHTML ="wate to finsh make your order , The rest = " + (mony-drink)
    //     }else{
    //         alert("soorry .. your mony Not enough");

    //     }

    // }


    ////////////////////////////

    // var drinks = {
    //     coffee: 2,
    //     Tea: 1,
    //     water: 1,
    //     milk: 3,
    //     Cola: 2,
    //     Cappu: 2
    // }

    //        $("#enter").click(function(){
    //         var mony = $("#mony").val();
    //         var drnk = $(".x");
    //         var item = drinks.drink
    //         var last = mony-item;
    //         if(mony>item){
    //             alert("hello .. wate a minet your order has done => git you rest from the box " + (mony-item));
    //         }else{
    //             alert("soorry .. your mony Not enough"+last);

    //         }
    //         $('h1').append(last)
    //  });






    // $("#add-task").click(function () {
    //     var str = $("#input-task").val();
    //     var z = $("<li> " + str + "</li>")
    //     $('ul').append(z)
    // })

    // $(document).ready(function(){
    //     $("#mony").click(function(){
    //         var radioValue = $("input[name='gender']:checked").val();
    //         if(radioValue){
    //             alert("Your are a - " + radioValue);
    //         }
    //     });
    // });

// button.onclick = function addtask() {
// button.onclick = function addtask() {
//     var element = document.createElement("li");
//     var text = document.getElementById("input-task").value
//     element.innerHTML = text;
//     var x = document.getElementById("list-container");
//     x.appendChild(element);
// }
// $(document).ready(function(){
//         $(".x").click(function(){
//             var siqel =$("#mony").val()
//             var drink = $("")
//             for(var i=0; i<=array.length; i++){
//                 if(siqel){
//                 }
//             }
//     }
// }
