let userName = document.querySelector("#input-name");
let userRole = document.querySelector("#input-role");
let userBio = document.querySelector("#input-bio");
let userPhotoUrl = document.querySelector("#input-photo");
let form = document.querySelector("#profile-form-section");

let cardContainer = document.querySelector("#cards-container");

let userManager = {

    users: [],
    init: function () {

        form.addEventListener("submit", this.submitForm.bind(this))
    },
    submitForm: function (e) {
        e.preventDefault()
        this.addUser()
    },
    addUser: function () {
        this.users.push({
            userName: userName.value,
            userRole: userRole.value,
            userBio: userBio.value,
            userPhotoUrl: userPhotoUrl.value
        })
        form.reset()
        this.renderUi();
    },
    renderUi: function () {

        const user = this.users[this.users.length - 1];

            // 1. Card
            const card = document.createElement('div');
            card.classList.add('profile-card');
            card.id = 'card-1';
            
            // 2. Banner
            const banner = document.createElement('div');
            banner.classList.add('card-banner');

            // 3. Card Body
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            // 4. Avatar Wrap
            const avatarWrap = document.createElement('div');
            avatarWrap.classList.add('avatar-wrap');

            // 5. Avatar Image
            const avatarImg = document.createElement('img');
            avatarImg.classList.add('avatar-img');
            avatarImg.id = 'card1-img';
            avatarImg.src = user.userPhotoUrl
            avatarImg.alt = 'Sophia Carter';
            avatarImg.onerror = function () {
                this.style.display = 'none';
                this.nextElementSibling.style.display = 'flex';
            };

            
            // 6. Avatar Fallback
            const avatarFallback = document.createElement('div');
            avatarFallback.classList.add('avatar-fallback');
            avatarFallback.id = 'card1-fallback';
            avatarFallback.textContent = 'SC';

            // 7. Name
            const cardName = document.createElement('div');
            cardName.classList.add('card-name');
            cardName.id = 'card1-name';
            cardName.innerText = user.userName;
            console.log(user.userName);

            // 8. Role
            const cardRole = document.createElement('span');
            cardRole.classList.add('card-role');
            cardRole.id = 'card1-role';
            cardRole.innerText = user.userRole;

            // 9. Divider
            const cardDivider = document.createElement('div');
            cardDivider.classList.add('card-divider');

            // 10. Bio
            const cardBio = document.createElement('p');
            cardBio.classList.add('card-bio');
            cardBio.id = 'card1-bio';
            cardBio.innerText = user.userBio

            // --- Assemble ---
            avatarWrap.appendChild(avatarImg);
            avatarWrap.appendChild(avatarFallback);

            cardBody.appendChild(avatarWrap);
            cardBody.appendChild(cardName);
            cardBody.appendChild(cardRole);
            cardBody.appendChild(cardDivider);
            cardBody.appendChild(cardBio);

            card.appendChild(banner);
            card.appendChild(cardBody);

            // --- Add to container ---
            document.querySelector('#cards-container').appendChild(card);

            

    },
    removeUser: function () { }
}

userManager.init()