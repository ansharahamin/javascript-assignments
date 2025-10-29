//  var container = document.getElementById("container")

// function showPara() {
// //     var list = `    <ul>
// //         <li>
// //             karachi
// //         </li>
// //         <li>
// //             hyd
// //         </li>
// //         <li>
// //             lahore
// //         </li>
// //         <li>
// //           isl
// //         </li>
// //     </ul>
// //        <button onclick="hideList()" type="button">Hide LIst</button>
// //  `


// // var para = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur totam minima earum id quibusdam modi quam ipsam omnis perspiciatis, unde architecto quisquam necessitatibus exercitationem fuga tempore, mollitia alias quo doloremque.`
// //    document.getElementById("para").innerHTML = para

// // }
// // function hidePara(){
// //     para.innerHTML =''
//  }
var imgs = ['https://thumbs.dreamstime.com/b/outdoor-summer-grilling-scene-friends-enjoying-barbecue-meal-pool-overlooking-scenic-landscape-outdoor-summer-398587751.jpg', 'https://thumbs.dreamstime.com/z/delightful-turkish-breakfast-spread-sunny-day-stunning-landscape-view-delightful-turkish-breakfast-spread-sunny-338096855.jpg', "https://loftandtable.com/wp-content/uploads/2016/07/mesa-buffet-loft-Table-2-1024x683.jpg", "https://i.insider.com/55b69cad2acae7b7188ba2c6?width=600&format=jpeg&auto=webp"]
var index = 0

function nextimg() {
    var image = document.getElementById("img")
    // var button = document.getElementById("next")
    // var button = document.getElementById("pre")

    if (index === imgs.length - 1) {
        index = 0
    } else {
        index++
    }
    image.src = imgs[index]
}

function previmg() {
    var image = document.getElementById("img")
    if (index === 0) {
        index = imgs.length-1
    } else {
        index--
    }
    image.src = imgs[index]
}