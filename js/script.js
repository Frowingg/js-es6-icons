const iconContainer = document.getElementById('icon_container');
const userSelection = document.getElementById('type_select');
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
    iconContainer.innerHTML += `
    <div class="icon_card"> 
        <i class='icon ${icon.family + ' ' + icon.prefix+icon.name}' style=color:${icon.color}> <br> <span> ${icon.name.toUpperCase()} </span></i> 
    </div>
    `
}
);

userSelection.addEventListener('change',
    function showOnly() {
        iconContainer.innerHTML = '';
        const category = this.value;
        if (category !== 'all') {
            data.forEach(icon => {
                if (icon.type === category) {
                    iconContainer.innerHTML += `
                        <div class="icon_card"> 
                            <i class='icon ${icon.family + ' ' + icon.prefix+icon.name}' style=color:${icon.color}> <br> ${icon.name.toUpperCase()} </i> 
                        </div>`
                }
            });
        }
        // if (category===1) {
        //     iconContainer.innerHTML = '';
        //     iconContainer.innerHTML = populateIconContainer('animal')  
        // } else if (category===2) {
        //     iconContainer.innerHTML = '';
        //     iconContainer.innerHTML += populateIconContainer('vegetable') 
        // } else if (category===3) {
        //     iconContainer.innerHTML = '';
        //     iconContainer.innerHTML += populateIconContainer('user')
        // }
    }
)

