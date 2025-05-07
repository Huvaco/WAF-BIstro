// AOS ANIMATION
AOS.init();

// SCROLL ON TOP
function scrolltop() {
    let b = window.document;
    b = location.href = '#home';
}

function backToIntercept() {
    let b = window.document;
    b = location.href = 'Intercept-menu.html';
}

// CONTACT-FORM MESSAGE ALERT

let contact = document.getElementById('contact-form');
contact.addEventListener('submit', function (x) {
    x.preventDefault();
    alert('Sorry..! Request cannot be accepted due to some Technical Error')
})
//Intercepts
var responsiveDialogCleaner;
var feedBackButtonCleaner;
var templateEmbeddedFeedbackCleaner;
//Cratives Active
var responsiveDialogCreativeCleaner;
var popOverCleaner;
var sliderCleaner;
var popUnderCleaner;

//Creatives Passive
var infoBarCleaner;
var feedbackButtonCreativeCleaner;

//Creatives Embedded
var customEmbeddedFeedbackCleaner;
var embeddedLinkCleaner;

//Extra
var cleaner;

function myFunction() {
                QSI.API.unload(); 
                QSI.API.load(); 
                QSI.API.run();
}

function responsiveDialog(){
    window._qsie = window._qsie || [];window._qsie.push('Btn-ResponsiveDialog');
}

function feedBackButton(){
    window._qsie = window._qsie || [];window._qsie.push('Btn-FeedbackButton');
}

function templateEmbeddedFeedback(){
    window._qsie = window._qsie || [];window._qsie.push('Btn-TemplateEmbeddedFeedback');
}

//Creatives Active
function responsiveDialogCreative(){
    window._qsie = window._qsie || [];window._qsie.push('Btn-ResponsiveDialogCreative');
}

function popOver(){
    window._qsie = window._qsie || [];window._qsie.push('Btn-PopOver');
}

function slider(){
    window._qsie = window._qsie || [];window._qsie.push('Btn-Slider');
}

function popUnder(){
    window._qsie = window._qsie || [];window._qsie.push('Btn-PopUnder');
}

//Creatives Passive
function infoBar(){
    window._qsie = window._qsie || [];window._qsie.push('Btn-InfoBar');
}

function feedbackButtonCreative(){
    window._qsie = window._qsie || [];window._qsie.push('Btn-FeedbackButtonCreative');
}

//Creative Embedded
function customEmbeddedFeedback(){
    window._qsie = window._qsie || [];window._qsie.push('Btn-CustomEmbeddedFeedback');
}

function embeddedLink(){
    window._qsie = window._qsie || [];window._qsie.push('Btn-EmbeddedLink');
}