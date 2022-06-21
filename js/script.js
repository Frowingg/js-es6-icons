const iconContainer = document.getElementById('icon_container');
const userSelection = document.getElementById('type_select');
const categories = [];
const data = 
[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
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
console.log(categories)
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

