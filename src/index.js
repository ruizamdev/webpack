const $name = document.getElementById('title-name');
const $nickname = document.getElementById('subtitle-nickname');
const $links = document.getElementById('links');
const $description = document.getElementById('description-text');
const $avatar = document.getElementById('avatar-img');
const $footer = document.getElementById('footer');

const data = {
    name: "Armando Ruiz 🇲🇽",
    nickname: "@ruizamdev",
    description: "Desarrollador Front-end, estudiante en Platzi desde 2024.",
    avatar: "https://gravatar.com/userimage/259581501/d4758fa905f5c28487b299a361dfb4c5.jpeg?size=256",
    avatarAltText: "Armando Ruiz",
    social: 
    [
      {
        name: "twitter",
        url: "https://twitter.com/",
        username: "ruizamdev",
      },
      {
        name: "instagram",
        url: "https://instagram.com/",
        username: "ruizamdev",
      },
    ],
    
    links: 
    [
      {
        name: "blog",
        url: "https://ruizamdev.github.io/ruizam",
        color: "red",
        emoji: "📖",
      },
      {
        name: "linkedin",
        url: "https://linkedin/in/ruizam",
        color: "yellow",
        emoji: "💬",
      },
    ],
    footer: "🐐Solve et coagula🐐",
};

const main = () => {
  let name = document.createTextNode(data?.name);
  let nickname = document.createTextNode(data?.nickname);
  let description = document.createTextNode(data?.description);
  let footer = document.createTextNode(data?.footer);
  let links = data?.links?.map((link) => {
    return `
      <div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
          <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
            href="${link.url}" target="_blank">
            ${link.name}
          </a>
          <span>${link.emoji}</span>
        </div>
    `;
  }).join('');
  let newItem = document.createElement("section");
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $name.appendChild(name);
  $nickname.appendChild(nickname);
  $description.appendChild(description);
  $avatar.setAttribute('src', data?.avatar);
  $avatar.setAttribute('alt', data?.avatarAltText);
  $footer.appendChild(footer);
}

main();