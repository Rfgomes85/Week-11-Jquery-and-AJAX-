$.get('https://reqres.in/api/users/2', (data) => console.log(data));

$.post('https://reqres.in/api/users', {
    name: 'Tommy',
    job: 'Front End Software Developer' 
}, (data) => console.log(data));