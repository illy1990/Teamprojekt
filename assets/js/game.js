let PunktestandNeu = 0;
let shotsleft = 10;
let i = 0;


let TimeId1 = setInterval(() => {
    if (shotsleft < 1) {
        document.getElementById("flyingBird").style.display = "none";
    } else {
        let XAchse = Math.floor(Math.random() * 73);
        document.getElementById("flyingBird").style.display = "block";
        document.getElementById("flyingBird").style.position = "absolute";
        document.getElementById("flyingBird").style.top = XAchse + "vh";
        i++;

        let horizontal = 0;
        let TimeID2 = setInterval(() => {
            document.getElementById("flyingBird").style.left = horizontal + "%";
            horizontal++;
            if (horizontal == 97) {
                document.getElementById("flyingBird").style.display = "none";
                clearInterval(TimeID2)
            }
        }, 100)

        if (i == 1000) {
            document.getElementById("flyingBird").style.display = "none";
            clearInterval(TimeId1)
        }
    }
}, 1000)

document.getElementById("flyingBird").addEventListener("click", () => {
    if (shotsleft > 0) {
        PunktestandNeu = PunktestandNeu + 100;
        shotsleft = shotsleft - 1;
        document.getElementById("Ausgabe").innerHTML = PunktestandNeu;
        document.getElementById("flyingBird").style.display = "none"
        ToilettenpapierEinblenden(shotsleft)
        // document.getElementById("Restschusse").innerHTML = shotsleft;
    } else {
        document.getElementById("flyingBird").style.display = "none"
        shotsleft = 0;
        ToilettenpapierEinblenden(shotsleft)

        // document.getElementById("Restschusse").innerHTML = shotsleft;
    }
})

// document.getElementById("daneben").addEventListener("click", () => {
//     if (shotsleft > 0) {
//         shotsleft = shotsleft - 1;
//         document.getElementById("Restschusse").innerHTML = shotsleft;
//     } else {
//         document.getElementById("flyingBird").style.display = "none"
//         shotsleft = 0;
//         document.getElementById("Restschusse").innerHTML = shotsleft;
//     }
// })

document.getElementById("daneben").addEventListener("click", () => {
    if (shotsleft > 0) {
        shotsleft = shotsleft - 1;
        ToilettenpapierEinblenden(shotsleft)

        // document.getElementById("Restschusse").innerHTML = shotsleft;
    } else {
        document.getElementById("flyingBird").style.display = "none"
        shotsleft = 0;
        ToilettenpapierEinblenden(shotsleft)

        // document.getElementById("Restschusse").innerHTML = shotsleft;
    }
})


function ToilettenpapierEinblenden(shotsleft) {
    if (shotsleft <= 9) {
        document.getElementById("toilettenpapier10").style.display = "none";
    } if (shotsleft <= 8) {
        document.getElementById("toilettenpapier9").style.display = "none";
    } if (shotsleft <= 7) {
        document.getElementById("toilettenpapier8").style.display = "none";
    } if (shotsleft <= 6) {
        document.getElementById("toilettenpapier7").style.display = "none";
    } if (shotsleft <= 5) {
        document.getElementById("toilettenpapier6").style.display = "none";
    } if (shotsleft <= 4) {
        document.getElementById("toilettenpapier5").style.display = "none";
    } if (shotsleft <= 3) {
        document.getElementById("toilettenpapier4").style.display = "none";
    } if (shotsleft <= 2) {
        document.getElementById("toilettenpapier3").style.display = "none";
    } if (shotsleft <= 1) {
        document.getElementById("toilettenpapier2").style.display = "none";
    } if (shotsleft <= 0) {
        document.getElementById("toilettenpapier1").style.display = "none";
    }
    return shotsleft;
}


