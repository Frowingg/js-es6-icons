const iconContainer = document.getElementById('icon_container');
const userSelection = document.getElementById('type_select');
const categories = [];
let randomColor = generateRandomString(6);
console.log(randomColor)

function generateRandomString(iLen) {
    var sRnd = '';
    var sChrs = "0123456789abcdef";
    for (var i = 0; i < iLen; i++) {
      var randomPoz = Math.floor(Math.random() * sChrs.length);
      sRnd += sChrs.substring(randomPoz, randomPoz + 1);
    }
    return sRnd;
};
const data = 
[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
        color: '#'+generateRandomString(6)
    },
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
        color: '#'+generateRandomString(6)
    },
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
        color: '#'+generateRandomString(6)
    },
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
        color: '#'+generateRandomString(6)
    },
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
        color: '#'+generateRandomString(6)
    },
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
        color: '#'+generateRandomString(6)
    },
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
        color: '#'+generateRandomString(6)
    },
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
        color: '#'+generateRandomString(6)
    },
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
	    color: '#'+generateRandomString(6)
    },
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
	    color: '#'+generateRandomString(6)
    },
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
	    color: '#'+generateRandomString(6)
    },
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
	    color: '#'+generateRandomString(6)
    },
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
        color: '#'+generateRandomString(6)
	},
    {
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
        color: '#'+generateRandomString(6)
	},
    {
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
        color: '#'+generateRandomString(6)
	},    
    {
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
        color: '#'+generateRandomString(6)
	}
];
    

data.forEach(icon => {
    if (!categories.includes(icon.type)) {
        categories.push(icon.type)
    }
    iconContainer.innerHTML += `
    <div class="icon_card"> 
        <i class='icon ${icon.family + ' ' + icon.prefix+icon.name}' style=color:${icon.color}> <br> <span> ${icon.name.toUpperCase()} </span></i> 
    </div>
    `
}
);

categories.forEach(category => {
    userSelection.innerHTML += `<option value="${category}">${category}</option>`;
});

userSelection.addEventListener('change',
    function showOnly() {
        iconContainer.innerHTML = '';
        const category = this.value;
        if (category !== 'all') {
            data.forEach(icon => {
                if (icon.type === category) {
                    iconContainer.innerHTML += '';
                    iconContainer.innerHTML += `
                    <div class="icon_card"> 
                        <i class='icon ${icon.family + ' ' + icon.prefix+icon.name}' style=color:${icon.color}> <br> <span> ${icon.name.toUpperCase()} </span></i> 
                    </div>
                    `;
                }
            });
        }
    }
)

