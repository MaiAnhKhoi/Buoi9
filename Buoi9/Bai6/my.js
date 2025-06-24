function onChangeImage1(){
    let img1 = document.getElementById("img1");
    let name = img1.getAttribute("data-name");
    if(name == "funny"){
        img1.src = "monkey_part1x1.jpg";
        img1.setAttribute("data-name", "monkey");
        Win();
    }
    else if(name == "monkey"){
        img1.src = "panda_swap_part1x1.jpg";
        img1.setAttribute("data-name", "panda");
        Win();
    }
    else{
        img1.src = "funny-cat1_part1x1.jpg";
        img1.setAttribute("data-name", "funny");
        Win();
    }
}
function onChangeImage2(){
    let img2 = document.getElementById("img2");
    let name = img2.getAttribute("data-name");
    if(name == "funny"){
        img2.src = "monkey_part2x1.jpg";
        img2.setAttribute("data-name", "monkey");
        Win();
    }
    else if(name == "monkey"){
        img2.src = "panda_swap_part2x1.jpg";
        img2.setAttribute("data-name", "panda");
        Win();
    }
    else{
        img2.src = "funny-cat1_part2x1.jpg";
        img2.setAttribute("data-name", "funny");
        Win();
    }
}
function onChangeImage3(){
    let img3 = document.getElementById("img3");
    let name = img3.getAttribute("data-name");
    if(name == "funny"){
        img3.src = "monkey_part3x1.jpg";
        img3.setAttribute("data-name", "monkey");
        Win();
    }
    else if(name == "monkey"){
        img3.src = "panda_swap_part3x1.jpg";
        img3.setAttribute("data-name", "panda");
        Win();
    }
    else{
        img3.src = "funny-cat1_part3x1.jpg";
        img3.setAttribute("data-name", "funny");
        Win();
    }
}
function onChangeImage4(){
    let img4 = document.getElementById("img4");
    let name = img4.getAttribute("data-name");
    if(name == "funny"){
        img4.src = "monkey_part4x1.jpg";
        img4.setAttribute("data-name", "monkey");
        Win();
    }
    else if(name == "monkey"){
        img4.src = "panda_swap_part4x1.jpg";
        img4.setAttribute("data-name", "panda");
        Win();
    }
    else{
        img4.src = "funny-cat1_part4x1.jpg";
        img4.setAttribute("data-name", "funny");
        Win();
    }
}
function onChangeImage5(){
    let img5 = document.getElementById("img5");
    let name = img5.getAttribute("data-name");
    if(name == "funny"){
        img5.src = "monkey_part5x1.jpg";
        img5.setAttribute("data-name", "monkey");
        Win();
    }
    else if(name == "monkey"){
        img5.src = "panda_swap_part5x1.jpg";
        img5.setAttribute("data-name", "panda");
        Win();
    }
    else{
        img5.src = "funny-cat1_part5x1.jpg";
        img5.setAttribute("data-name", "funny");
        Win();
    }
}
function Win()
{
    let img1 = document.getElementById("img1");
    let name1 = img1.getAttribute("data-name");
    let img2 = document.getElementById("img2");
    let name2 = img2.getAttribute("data-name");
    let img3 = document.getElementById("img3");
    let name3 = img3.getAttribute("data-name");
    let img4 = document.getElementById("img4");
    let name4 = img4.getAttribute("data-name");
    let img5 = document.getElementById("img5");
    let name5 = img5.getAttribute("data-name");
    let td1 = img1.parentElement;
    let td2 = img2.parentElement;
    let td3 = img3.parentElement;
    let td4 = img4.parentElement;
    let td5 = img5.parentElement;
    if(name1 === name2 && name1 === name3 && name1 === name4 && name1 === name5){

        td1.style.border = "3px solid red";
        td2.style.border = "3px solid red";
        td3.style.border = "3px solid red";
        td4.style.border = "3px solid red";
        td5.style.border = "3px solid red";
    }
    else{
        td1.style.border = "none";
        td2.style.border = "none";
        td3.style.border = "none";
        td4.style.border = "none";
        td5.style.border = "none";
    }

}