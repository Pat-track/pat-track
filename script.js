var button=document.getElementById('btn');
button.addEventListener('click',function(){
    redirectToPage('home.html');
});

function redirectToPage(pagePath){
    window.location.href=pagePath;
}