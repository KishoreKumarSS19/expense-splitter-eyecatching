const input = document.getElementById("memberInput");
const addBtn = document.getElementById("addBtn");
const container = document.getElementById("membersContainer");

// members array
let members = JSON.parse(localStorage.getItem("members")) || [];

// render on load
renderMembers();

// add member
addBtn.addEventListener("click", function () {
    const name = input.value.trim();

    if (name === "") {
        alert("Enter a member name");
        return;
    }

    members.push(name);
    saveAndRender();
    input.value = "";
});

// render function
function renderMembers() {
    container.innerHTML = "";

    for (let i = 0; i < members.length; i++) {

        const card = document.createElement("div");
        card.className = "member-card";

        const left = document.createElement("div");
        left.className = "member-left";

        const avatar = document.createElement("div");
        avatar.className = "avatar";
        avatar.textContent = members[i][0].toUpperCase();

        const name = document.createElement("span");
        name.textContent = members[i];

        left.appendChild(avatar);
        left.appendChild(name);

        const removeBtn = document.createElement("button");
        removeBtn.className = "remove-btn";
        removeBtn.textContent = "Remove";

        removeBtn.addEventListener("click", function () {
            members.splice(i, 1);
            saveAndRender();
        });

        card.appendChild(left);
        card.appendChild(removeBtn);

        container.appendChild(card);
    }
}

// save + render
function saveAndRender() {
    localStorage.setItem("members", JSON.stringify(members));
    renderMembers();
}
