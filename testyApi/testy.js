const jobsList = document.getElementById('jobsList');
let newJobs = [];



const loadJobs = async () => {
        try {
            const res = await fetch("https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=6d54e703&app_key=69dedd20d9b94d1778be8e912ab12484&results_per_page=10",)

newJobs = await res.json();
console.log(newJobs);
        displayJobs(newJobs);
    } catch (err) {
                console.error(err);
            }
        };


const displayJobs = (jobs) => {
    const htmlString = [jobs]
        .map((newJobs) => {
            return `
            <li class="job">
                <h2>${newJobs.results[0].title}</h2>
                <p>${newJobs.results[0].description}</p>
                
                
                
            </li>
        `;
        })
        .join('');
    jobsList.innerHTML = htmlString;
};
loadJobs();