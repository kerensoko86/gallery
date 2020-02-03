'use strict'

var gProjects = _createProjects();
var gId = '';
// Private functions:
function _createProjects() {
    var projects = loadFromStorage('projects');
    if (projects) return projects;
    else {
        var projects = [{
                    id: 'books',
                    name: 'Books',
                    title: 'Find a good book easy',
                    desc: 'Love to read? want to find a great book? come to buy at our store',
                    url: 'https://kerensoko86.github.io/books/',
                    publishedAt: Date.now(),
                    labels: ['table', 'books']
                },
                {
                    id: 'minesweeper',
                    name: 'Minesweeper',
                    title: 'Find all the numbers without hitting the mines',
                    desc: 'Play the classic puzzle game Minesweeper online for free. No download required. Can you uncover all the mines?',
                    url: 'https://kerensoko86.github.io/Minesweeper/',
                    publishedAt: Date.now(),
                    labels: ['keren']
                },
                {
                    id: 'touchnums',
                    name: 'Touch-Nums',
                    title: 'Touch Numbers in Order: Number Game ',
                    desc: 'Touch Nums Game is a math game for free. Train your brain, perception and reaction skills!',
                    url: ' https://kerensoko86.github.io/touchnums/',
                    publishedAt: Date.now(),
                    labels: ['keren']
                },
                {
                    id: 'inpicture',
                    name: 'In-Picture',
                    title: 'Choose correctly - in picture',
                    desc: 'Check if your intuition really works, do you know how to rad the situation? play now!',
                    url: 'https://kerensoko86.github.io/in-picture/',
                    publishedAt: Date.now(),
                    labels: ['keren']
                }
            ]
            .map(_createProject)

        saveToStorage('projects', projects);
    }

    return projects;
}

function _createProject(proj) {

    var project = {
        id: proj.id,
        name: proj.name,
        title: proj.title,
        desc: proj.desc,
        url: proj.url,
        publishedAt: Date.now(),
        labels: []
    }
    return project;
}


function getProjects() {
    return gProjects;
}

function getProject(projectId) {
    return gProjects.find(gProject => gProject.id === projectId);
}