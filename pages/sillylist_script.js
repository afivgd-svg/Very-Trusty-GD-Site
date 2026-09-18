
/*fetch("https://raw.githubusercontent.com/afivgd-svg/Very-Trusty-GD-Site/refs/heads/main/ranks.json").then(res => res.json()).then(data => {
    updateList(data, true);
}).catch(err => {
    console.error("failed to load rankings:", err)
    const p = document.getElementById("people-list");
    p.innerHTML = "cannot load list";
});*/

let list = [];

fetch("https://gheomhetrys.ps.fhgdps.com/getCSL.php").then(res => res.json()).then(data => {
    updateList(data, true);
    //console.log("succes! :3");
}).catch(err => {
    console.error(`can't get list error. ${err}`);
})

/*[
    ["CrystalGD", "https://www.youtube.com/@zCrystalGD", "https://yt3.googleusercontent.com/WzKNy1cZNKRcplEj77RnOmDh34AqEdCs5mS3YOGUhID5_jstBKVoTtM1v35WMsccpscHWssiFQ=s160-c-k-c0x00ffffff-no-rj"],
    ["Naikotunna", "https://www.youtube.com/@naikotun", "https://yt3.googleusercontent.com/s6NIJFGcF9yArOCwkAAaIJg41csVmOFMbMWooeaSHYcigSQhlvct4uVYaNdPJ-9ivUG8-5Xl=s160-c-k-c0x00ffffff-no-rj"],
    ["Golden", "https://www.youtube.com/@Goldenfyre102", "https://yt3.googleusercontent.com/i4lJTZFZyixyjmTeuEx4hofdvM9tvJY1EiMySX5cT1gxECFa-0fpnh_AH0-dTzbaPF8oCaqFkQ=s160-c-k-c0x00ffffff-no-rj"],
    ["ExlvsGD", "https://www.youtube.com/@ExlvsGD", "https://yt3.googleusercontent.com/hRnqmB_-DXg0vS9SYBWamO9hgicdpcPKDkE-7dDkKCyZ00g-Hsjzc-H8h7BWkWbtbAATCaujE6c=s160-c-k-c0x00ffffff-no-rj"],
    ["SomeoneGD", "https://www.youtube.com/@Someone_GD1", "https://yt3.googleusercontent.com/IFlVkEfnibgsPskP8K3S8BcT5dN0pmef-6ftmmdlsF46JdpVBGBD8af3EKbzrBoS9asi8cszxh0=s160-c-k-c0x00ffffff-no-rj"],
    ["Chu", "https://www.youtube.com/@Chu-XO", "https://yt3.googleusercontent.com/64AB00exQ6vkV8GBT26-SiO_8jQoptUDQdbfS7SJ6gZ_x4GzSUNGXsA5qDQa0cpjl1R-OtxPCg=s160-c-k-c0x00ffffff-no-rj"],
    ["MrDummy", "https://www.youtube.com/@mrdummybusinesses", "https://yt3.googleusercontent.com/r9ZtwwbGiORZ_wdAdoptrzZGhcDq-rOE-WyL_StumJp4ADwO2UpzP7c5d3NKXBhT02nFzH6BObU=s160-c-k-c0x00ffffff-no-rj"],
    ["TanwaGD", "https://www.youtube.com/@gdtanwa26", "https://yt3.googleusercontent.com/5_VzRFTIRyXQJxoNSrNL-90678dQtI31hVVG0rqjKU3L-8nELv1CT6MdhWr_uyt772BFxj1s0g=s160-c-k-c0x00ffffff-no-rj"],
    ["idkwdymbythat", "https://www.youtube.com/@idkwdymbythat", "https://yt3.googleusercontent.com/RwbLwoVsN1ZMZ6ppZHX9JwFOYzMcT8m3aOez0e-03Qd2SM7PMbA25xMn20KCcXCtMYpaZVHWBw=s160-c-k-c0x00ffffff-no-rj"],
    ["Fufik", "https://www.youtube.com/@Fufik1GD", "https://yt3.googleusercontent.com/aUNCUEeXqmDRHLUCb5vlAqP6f18VE5ytNgAvXKWyyOwMRkp6xBa9lSd7bWk7mlRFp9yQSkcQwQ=s160-c-k-c0x00ffffff-no-rj"],
    ["Ryu", "https://www.youtube.com/@ryugetsuX", "https://yt3.googleusercontent.com/flF8WkpgoJp8NmdaNEFHLcLjfZU8wNqJmxAlURwiqL8Gijn58QZsCR7huPLc9CFbBmlFUnVjpA=s160-c-k-c0x00ffffff-no-rj"]
]*/

//updateList(list, true);

function updateList(array, clear_text) {
    //const p = document.getElementById("people-list");
    //let html = "";
    for (let i = 0; i < array.length; i++) {
       //html += `#${i + 1} - <a href="${array[i][1]}">${array[i][0]}</a><br>`;
       let idk = array[i];
       createBox(i + 1, idk[0], idk[1], idk[2], idk[3], idk[4]);
    }

    const container = document.getElementById("list-container");
    const footer = document.getElementById("footer-text");
    footer.style.visibility = "visible";
    footer.style.top = `${110 + (+container.offsetHeight)}px`;
    footer.style.height = "60px";
    //console.log(container.offsetHeight);
    //if (clear_text) p.innerHTML = html;
    //else p.innerHTML += html;
    //p.style.visibility = "hidden";
}

//createBox("10", "RobTop", "https://www.google.com");

function createBox(rank, name, url, pfp, desc, gd) { // some DOM Manipulation stuff. it literally add a box and it says. :3
    const container = document.getElementById("list-container");
    //const btn = document.createElement("button");
    //btn.textContent = `#${rank} - ${name} - ${url}`;
    let pfp2 = pfp;
    if (pfp == "no yt pfp") {
        pfp = "../assets/images/son.png"
    }
    let nameColors = "white";
    let textShadowColors = "#000000";
    if (rank == '1') {
        nameColors = "gold";
        textShadowColors = "#ff8800"
    }

    /*const a = document.createElement("a");
    a.href = `${url}`;*/
    const divBox = document.createElement("div");
    if (url != "no yt acc") divBox.classList.add("list-boxes");
    divBox.innerHTML = `<p style="text-shadow: 3px 3px 8px ${textShadowColors}; color: ${nameColors}; font-size: 30px; position: absolute; left: 15px;">#${rank} - ${name}</p>`
    divBox.onclick = `spawnBalls("${desc}", "${gd}")`;
    const pfpImage = document.createElement("img");
    pfpImage.src = pfp;
    pfpImage.alt = "pfp";
    pfpImage.style = "height: 100px; border-radius: 20px; position: absolute; left: 100%; transform: translate(-100%, 0%);"
    divBox.addEventListener('click', () => {
        spawnBalls(rank, name, url, pfp, desc, gd);
    });
    /*if (url != "no yt acc") {
        container.appendChild(a);
        a.appendChild(divBox);
    } else {
        container.appendChild(divBox);
    }*/
   container.appendChild(divBox);

    divBox.appendChild(pfpImage);
}

function spawnBalls(rank, name, url, pfp, desc, gd) {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    const popup = document.createElement("div");
    popup.classList.add("mediaSocialPopup");
    const close = document.createElement("div");
    close.classList.add("close-btn");
    close.innerHTML = "X";
    close.addEventListener('click', () => {
        removeBalls(overlay);
    })
    const upPIdk = document.createElement("p");
    upPIdk.innerHTML = `#${rank} - ${name}`;
    upPIdk.style = `font-size: 30px; text-align: center; text-shadow: 0px 0px 20px rgb(0, 0, 0); position: absolute; left: 50%; top: 10px; transform: translate(-50%, -50%); display: flex; justify-items: center; align-items: center;`;

    const description = document.createElement("p");
    description.innerHTML = desc;
    description.style = `position: absolute; left: 50%; bottom: 10px; transform: translate(-50%, -50%); width: 600px; text-align: center;`;

    if (url != "no yt acc") {
        const ytA = document.createElement("a");
        ytA.href = url;
        const ytBtn = document.createElement("div");
        ytBtn.classList.add("ytBtn");
        popup.appendChild(ytA);
        ytA.appendChild(ytBtn);
    }

    if (gd != "no gd acc") {
        const gdA = document.createElement("a");
        gdA.href = gd;
        const gdBtn = document.createElement("div");
        gdBtn.classList.add("gdBtn");
        popup.appendChild(gdA);
        gdA.appendChild(gdBtn);
    }
    
    document.body.appendChild(overlay);
    overlay.appendChild(popup);
    popup.appendChild(close);
    popup.appendChild(upPIdk);
    popup.appendChild(description);
}

function removeBalls(overlay) {
    document.body.removeChild(overlay);
}

//<button class="close-btn" id="close-btn">X</button>
