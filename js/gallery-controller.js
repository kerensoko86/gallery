'use strict'

function onInit() {
    renderProjects();
}


function renderProjects() {
    var projects = getProjects();
    var strHTMLs = projects.map(function(project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1" onclick="onRenderModal('${project.id}')">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid inside-img" src="img/portfolio/${project.id}.png" alt="">
        </a>
        <div class="portfolio-caption">
            <h4>'${project.name}'</h4>
            <p class="text-muted">'${project.title}'</p>
        </div>
    </div>`
    })
    $('.proj').html(strHTMLs.join(''));
}


function onRenderModal(id) {
    var proj = getProject(id);

    $('.modal-content h2').text(proj.name);
    $('.item-intro').text(proj.title);
    $('.modal-content img').attr('src', `img/portfolio/${proj.id}.png`);
    $('.desc').text(proj.desc);
    // $('.date').html(new Date(proj.publishedAt));
    $('li a').attr('href', proj.url);
}

function onContact() {
    var $email = $('.email').val();
    var $subject = $('.subject').val();
    var $message = $('.message').val();

    if (!$email || !$subject || !$message) return;

    window.location.href = (`https://mail.google.com/mail/?view=cm&fs=1&to=${$email}.com&su=${$subject}&body=${$message}`);
    var $email = '';
    var $subject = '';
    var $message = '';
}