
fetch("https://raw.githubusercontent.com/afivgd-svg/Very-Trusty-GD-Site/refs/heads/main/ranks.json").then(res => res.json()).then(data => {
    updateList(data, true);
}).catch(err => {
    console.error("failed to load rankings:", err)
    const p = document.getElementById("people-list");
    p.innerHTML = "cannot load list";
});

function updateList(array, clear_text) {
    const p = document.getElementById("people-list");
    let html = "";
    for (let i = 0; i < array.length; i++) {
        html += `#${i + 1} - <a href="${array[i][1]}">${array[i][0]}</a><br>`;
    }
    if (clear_text) p.innerHTML = html;
    else p.innerHTML += html;
    //p.style.visibility = "hidden";
}
