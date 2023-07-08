let second = document.getElementById('second');

setInterval(() => {
    second.innerText += "   Seni Seviyorum Karım  "
}, 1000);

const firstSkillShow = document.getElementById('firstSkillShow')
const secondSkillShow = document.getElementById('secondSkillShow')
const thirdSkillShow = document.getElementById('thirdSkillShow');

const firstSkill = document.getElementById('firstSkill');
const secondSkill = document.getElementById('secondSkill');
const thirdSkill = document.getElementById('thirdSkill');

const firstIcon = document.getElementById('firstIcon')
const secondIcon = document.getElementById('secondIcon')
const thirdIcon = document.getElementById('thirdIcon')

const firstShow = () => {
    if(firstSkill.style.display === 'block'){
        firstSkill.style.display = 'none';
        firstIcon.classList.replace('fa-arrow-down','fa-arrow-right-long')

    }else{
        firstSkill.style.display = 'block';
        firstIcon.classList.replace('fa-arrow-right-long', 'fa-arrow-down')
    }
}

const secondShow = () => {
    if(secondSkill.style.display === 'block'){
        secondSkill.style.display = 'none';
        secondIcon.classList.replace('fa-arrow-down','fa-arrow-right-long')
    }else{
        secondSkill.style.display = 'block'
        secondIcon.classList.replace('fa-arrow-right-long','fa-arrow-down')
    }
}


const thirdShow = () => {
    if(thirdSkill.style.display === 'block'){
        thirdSkill.style.display = 'none';
        thirdIcon.classList.replace('fa-arrow-down','fa-arrow-right-long')
    }else{
        thirdSkill.style.display = 'block'
        thirdIcon.classList.replace('fa-arrow-right-long','fa-arrow-down')
    }
}

firstSkillShow.addEventListener('click', firstShow);
secondSkillShow.addEventListener('click', secondShow);
thirdSkillShow.addEventListener('click', thirdShow);
