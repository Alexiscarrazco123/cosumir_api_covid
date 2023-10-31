
document.getElementById('search').addEventListener('click', () => {
    displayCovid();
});

async function displayCovid() {
    const covidData = document.getElementById('covid').value;
    const covid = await getCovid(covidData);
    addCovid(covid);
    console.log(covid);
    console.log(covidData);
}

async function getCovid(id) {
   
    let response = await fetch(`https://api.covidtracking.com/v1/us/daily.json`);
    
    return await response.json();
    
}

function addCovid(covid) {
    const covidList = document.getElementById('covid-container');
    const element = document.createElement('div');
    element.innerHTML = `
        <strong>Id</strong>: ${covid.id}
        <strong>Name</strong>: ${covid.name}
        <strong>Base Experience</strong>: ${covid.base_experience}
       
    `;
   
}