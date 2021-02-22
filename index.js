const inquirer = require("inquirer");
const fs = require("fs");

const emp = [];

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function promptProject() {
    ht();
    add();
}

function add() {
    inquirer.prompt([{
        type: "list",
        message: "Enter position",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "role"
    },
    {
        message: "Enter Name",
        name: "name"

    },
    {
        message: "Enter id",
        name: "id"
    },
    {
        message: "Enter email",
        name: "email"
    }])
    .then(function({name, id, email, role}) {
        let info = "";
        if (role === "Manager") {
            info = "officeNumber";
        } else if (role === "Engineer") {
            info = "Github";
        } else {
            info = "school";
        }
        inquirer.prompt([{
            message: `Enter member's ${info}`,
            name: "info"
        },
        {
            type: "list",
            message: "Add members?",
            choices: [
                "yes",
                "no"
            ],
            name: "addmem"
        }])
        .then(function({info, addmem}) {
            let mem;
            if (role === "Manager") {
                mem = new Manager(name, id, email, info);
            } else if (role === "Engineer") {
                mem = new Engineer(name, id, email, info);
            } else {
                mem = new Intern(name, id, email, info);
            }
            emp.push(mem);
            addmems(mem)
            .then(function() {
                if (addmem === "yes") {
                    add();
                } else {
                    write();
                }
            });
            
        });
    });
}


function ht() {
    const index = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <title>The Team</title>
    </head>
    <body>
        <nav class="navbar">
            <span class="navbar-brand w-100 text-center">The Team</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./teamprofile.html", index, function(err) {
        if (err) {
            console.log(err);
        }
    });

}

function addmems(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Manager") {
            const officePhone = member.getOfficeNumber();
            data = `<div class="col-5">
            <div class="mx-auto mb-1" style="width: 300px">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${officePhone}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col-5">
            <div class=" mx-auto mb-1" style="width: 300px">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const school = member.getSchool();
            data = `<div class="col-5">
            <div class="card mx-auto mb-1" style="width: 300px">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${school}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("output finished");
        fs.appendFile("./teamprofile.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
            
    
}

function write() {
    const index = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./teamprofile.html", index, function (err) {
        if (err) {
            console.log(err);
        };
    });
}

promptProject();