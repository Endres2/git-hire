const jobsList = document.getElementById('jobsList');
let newJobs = [];



const loadJobs = async () => {
        try {
            const res = await fetch("https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=6d54e703&app_key=69dedd20d9b94d1778be8e912ab12484&results_per_page=10",)

newJobs = await res.json();
console.log(newJobs);
let array = newJobs.results;
for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    displayJobs(array[i]);
}
    
// for (let a of array) {
//     console.log(a);
//     displayJobs(a);
// }



// displayJobs(a);
    } catch (err) {
                console.error(err);
            }
        };


        
const displayJobs = (newJobs) => {
    // console.log(newJobs)
    
    const htmlString = [[newJobs]
    
    .map((newJobs) => {
        // for ( var i = 0, l = newJobs.results; i < l; i++ ){
             return `
            <li class="job">
                <h2>${newJobs.title}</h2>
                <h3>${newJobs.company.display_name}</h3>
                <h4>${newJobs.location.display_name}</h4>
                <p>${newJobs.description}</p>
                
                
                
            </li>
        `;
        
    })
    
        .join('')];
        
  jobsList.innerHTML = htmlString;
  
  console.log(newJobs);
  
  
 
    
    
};
loadJobs();

