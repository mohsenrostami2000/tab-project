// select button, about, content

const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

// add event to about section

about.addEventListener('click', (e)=>{
    const id = e.target.dataset.id;
    // console.log(id);
    if(id) {
        // remove active from other btn, in other word remove active from all btn
        btns.forEach((btn)=>{
            btn.classList.remove('active');
            // add active class to taget event
            e.target.classList.add('active');
        });

        // hide other articles, in other word hide all articles
        articles.forEach((article) => {
            article.classList.remove('active');
        });

        const element = document.getElementById(id);
        element.classList.add('active');
    }
})