const name = 'Henry';
const age = 31;
const job = 'Web Developer';
const city = 'London';
let my_html;

// without template string (es5)
my_html = '<ul><li>Name: '+ name + '</li><li>Age: ' + age + ' </li><li>Job: '+ job + ' </li></ul>';

my_html2 =  '<ul>' +
            '<li>Name: ' + name + '</li>' +
            '<li>Age: ' + age + '</li>' +
            '<li>Job: ' + job + '</li>' +
            '</ul>';


function hello(){
        return 'Hello World 2020';
}



// with template strings (es6)
my_html3 = `
    <ul>
        <li>Name: ${name}</li>
        <li>Name: ${age}</li>
        <li>Name: ${job}</li>
        <li>Name: ${city}</li>
        <li>Name: ${2 + 3}</li>
        <li>Name: ${hello()}</li>
        <li>Name: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`


document.body.innerHTML = my_html3;


/* ---------------------------------------- */