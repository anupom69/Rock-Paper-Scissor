function randNum(){
    let rand = Math.ceil(Math.random()*3);
    return rand;
}


function gameTriggered() {
    var rand1 = randNum();
    var rand2 = randNum();
    let p1Img = document.querySelectorAll("img")[0];
    let p2Img = document.querySelectorAll("img")[1];
    p1Img.setAttribute("src", conv(rand1));
    p2Img.setAttribute("src", conv(rand2));
    showResult(rand1, rand2);
}

function conv(num) {
    switch (num) {
        case 1:
            return "images/rock.png";
    
        case 2:
            return "images/paper.png"
        case 3:
            return "images/scissor.png"
    }
}

function showResult(rand1, rand2) {
    let show = document.querySelector(".container p");
    let player2 = document.querySelector(".player2");
    let player1 = document.querySelector(".player1");
    if (rand1==rand2) {
        show.innerHTML = "Draw";
    }
    else if (rand1==1 && rand2 == 2) {
        show.innerHTML = "Player-2 is Winner"
    }
    else if (rand1==1 && rand2 == 3) {
        show.innerHTML = "Player-1 is Winner"
    }
    else if (rand1==2 && rand2 == 1) {
        show.innerHTML = "Player-1 is Winner"
    }
    else if (rand1==2 && rand2 == 3) {
        show.innerHTML = "Player-2 is Winner"
    }
    else if (rand1==3 && rand2 == 1) {
        show.innerHTML = "Player-2 is Winner"
    }
    else if (rand1==3 && rand2 == 2) {
        show.innerHTML = "Player-1 is Winner"
    }
    
}