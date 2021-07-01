let emp=$("#emp");

let job=$("#job");

let heading=$(".welcome-heading2");


let empLoginFormCreate=function()
{
    return $(`
    
        <form action="/employees/create-session" method="post">
            <div>
                <input name="email" type="email" required placeholder="harrypotter@hogwarts.uk">
                <span>*</span>
            </div>
            <div class="pwd">
                <input id="pwd-input" name="password" type="password" required placeholder="Password">
                <span>*</span>
                <i id="pwd-input-icon" class="fas fa-eye"></i>
            </div>
            <button type="submit">Submit</button>
        </form>
    
    `)
}


let jobLoginFormCreate=function()
{
    return $(`
    
        <form action="/referess/create-session" method="post">
            <div>
                <input name="email" type="email" required placeholder="harrypotter@hogwarts.uk">
                <span>*</span>
            </div>
            <div class="pwd">
                <input id="pwd-input" name="password" type="password" required placeholder="Password">
                <span>*</span>
                <i id="pwd-input-icon" class="fas fa-eye"></i>
            </div>
            <div>
                <input name="referralCode" type="text" required placeholder="Referral Code">
                <span>*</span>
            </div>
            <button type="submit">Submit</button>
        </form>
    
    `)
}


let eyeButtonPwd=$("#pwd-input-icon");
let inputPwd=document.getElementById("pwd-input");


eyeButtonPwd.on("click",function()
{
    if(inputPwd.type==="password")
    {

        inputPwd.type="text";
    }
    else
    {
        inputPwd.type="password";
    }
});


let eyeButtonConfirmPwd=$("#confirm-pwd-input-icon");
let inputConfirmPwd=document.getElementById("confirm-pwd-input");


eyeButtonConfirmPwd.on("click",function()
{
    if(inputConfirmPwd.type==="password")
    {

        inputConfirmPwd.type="text";
    }
    else
    {
        inputConfirmPwd.type="password";
    }
});


emp.on("click",function(event)
{
    event.preventDefault();
    $(".emp-job").remove();
    let empForm=empLoginFormCreate();
    $(".form-up").append(empForm);
    eyeButtonPwd=$("#pwd-input-icon");
    inputPwd=document.getElementById("pwd-input");
    eyeButtonPwd.on("click",function()
    {
        if(inputPwd.type==="password")
        {

            inputPwd.type="text";
        }
        else
        {
            inputPwd.type="password";
        }
    });
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
    eyeButtonPwd=$("#pwd-input-icon");
    inputPwd=document.getElementById("pwd-input");
    eyeButtonPwd.on("click",function()
    {
        if(inputPwd.type==="password")
        {

            inputPwd.type="text";
        }
        else
        {
            inputPwd.type="password";
        }
    });
    heading.css({
        "width": "200px",
        "background-color": "#b015b0",
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