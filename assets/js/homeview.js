let emp=$("#emp");

let job=$("#job");

let heading=$(".welcome-heading2");

let empLoginFormCreate=function()
{
    return $(`
    
        <form action="employees/create-session" method="post">
               <input type="email" required placeholder="harrypotter@hogwarts.uk">
               <input type="password" required placeholder="lumos">
               <button type="submit">Submit</button>
        </form>
    
    `)
}


let jobLoginFormCreate=function()
{
    return $(`
    
        <form action="job-seekers/create-session" method="post">
               <input type="email" required placeholder="harrypotter@hogwarts.uk">
               <input type="password" required placeholder="lumos">
               <input type="text" required placeholder="Referral Code"> 
               <button type="submit">Submit</button>
        </form>
    
    `)
}

emp.on("click",function(event)
{
    event.preventDefault();
    $(".emp-job").remove();
    let empForm=empLoginFormCreate();
    $(".form-up").append(empForm);
    heading.css({
        "width": "200px",
        "background-color": "rgb(174, 19, 56)",
        "margin": "auto",
        "margin-bottom": "20px",
        "height": "35px",
        "display": "flex",
        "justify-content": "center",
        "align-items": "center",
        "border-radius": "15px"
    });
    heading.html("Employee");
});


job.on("click",function(event)
{
    event.preventDefault();
    $(".emp-job").remove();
    let jobForm=jobLoginFormCreate();
    $(".form-up").append(jobForm);
    heading.css({
        "width": "200px",
        "background-color": "rgb(174, 19, 56)",
        "margin": "auto",
        "margin-bottom": "20px",
        "height": "35px",
        "display": "flex",
        "justify-content": "center",
        "align-items": "center",
        "border-radius": "15px"
    });
    heading.html("Job Seeker");
});