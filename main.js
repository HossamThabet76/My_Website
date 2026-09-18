let menu=document.getElementById('menu');
let links=Array.from(document.querySelectorAll('header ul a'));
let icon=document.querySelector('.icon');
let iconX=document.querySelector('.iconX');
let width=document.getElementById('width');
function menu_function(){
    menu.classList.toggle('active');
    width.classList.toggle('width');
}
icon.onclick=menu_function;
iconX.onclick=menu_function;
for(let i=0;i<links.length;i++){
    links[i].onclick=function(){
        menu_function();
        removeLine();
        links[i].classList.add('appear')
    }
}
function removeLine(){
    for(let i=0;i<links.length;i++){
        links[i].classList.remove('appear');
    }
}
let body=document.querySelector('body');
let moon=document.getElementById('moon');
let night;
if(localStorage.night!=null){
    night =JSON.parse(localStorage.night);
    if(night==false){
        body.classList.add('white');
        moon.innerHTML='<i class="fa-regular fa-sun"></i>';
    }
    else{
        body.classList.remove('white');
        moon.innerHTML='<i class="fa-solid fa-moon"></i>';
    }
}
else{
    night=true;
    localStorage.setItem('night',JSON.stringify(night));
}
moon.onclick=function(){
    if(night){
        body.classList.add('white');
        moon.innerHTML='<i class="fa-regular fa-sun"></i>';
        night=false;
        localStorage.night=night;
    }
    else{
        body.classList.remove('white');
        moon.innerHTML='<i class="fa-solid fa-moon"></i>';
        night=true;
        localStorage.night=night;
    }
}
let html=document.querySelector('html');
let sun=document.getElementById('sun');
let state;
if(localStorage.lang!=null){
    state=localStorage.lang;
    if(state=='ar'){
        arabic()
    }
    else{
        english()
    }
}
else{
    state='en';
    localStorage.setItem('lang',state);
}
sun.onclick=function(){ 
    if(state=='ar'){
        localStorage.lang=state;
        arabic()
    }
    else{
        localStorage.lang=state;
        english()
    }
}
function arabic(){
    html.lang='ar';
    body.style.direction='rtl';
    sun.textContent='AR';
    document.querySelector('header .logo').textContent='حسام'
    links[0].textContent='الرئيسيه'
    links[1].textContent='معلوماتي'
    links[2].textContent='المهارات'
    links[3].textContent='الخدمات'
    links[4].textContent='المشاريع'
    links[5].textContent='تواصل معي'
    document.querySelector('.main h4').textContent='مرحبا, انا'
    document.querySelector('.main h1').textContent='حسام ثابت'
    let job='مطور فرونت اند';
    writter(job);
    document.querySelector('.main p').textContent='أقوم بإنشاء مواقع إلكترونية عصرية ومتجاوبة'
    document.querySelector('.main .main-btn').textContent='اطلع على أعمالي'
    document.querySelector('.main .whats a').style.left='30px'
    document.querySelector('.main .whats a').style.right='auto'
    document.querySelector('.about .title').textContent='معلوماتي'
    document.querySelector('.about .text h2').innerHTML=`انا <span></span> مطور ويب`
    document.querySelector('.about .text span').textContent='حسام ثابت,'
    document.querySelector('.about .text p:first-of-type').textContent='أنا مطور واجهات أمامية (Front-end) ولدي شغف كبير بإنشاء تطبيقات ويب جذابة وسهلة الاستخدام، كما أنني شغوف للغاية بتطوير مهاراتي في البرمجة وبناء التطبيقات والمواقع الإلكترونية.'
    document.querySelector('.about .text p:last-of-type').textContent='لقد اكتسبتُ أيضاً أساساً متيناً في تقنيات HTML وCSS وJavaScript، كما أنني حريصٌ دائماً على تعلم تقنيات وأساليب جديدة لتعزيز مهاراتي.'
    document.querySelector('.about .info .line:first-child h3').innerHTML=`العمر:<span>٢٠</span>`
    document.querySelector('.about .info .line:nth-child(2) h3').innerHTML=`الايميل:<span>jzjdiskwk@gmail.com</span>`
    document.querySelector('.about .info .line:nth-child(3) h3').innerHTML=`المكان:<span>سوهاج</span>`
    document.querySelector('.skills .title').textContent='المهارات'
    document.querySelector('.main .arrow a').style.left='30px'
    document.querySelector('.main .arrow a').style.right='auto'
    document.querySelector('.services .title').textContent='الخدمات'
    document.querySelector('.services .card:first-child .info h3').textContent='تطوير الويب'
    document.querySelector('.services .card:first-child .info p').textContent='يمكنني بناء موقع إلكتروني باستخدام HTML وCSS وJavaScript.'
    document.querySelector('.services .card:nth-child(2) .info h3').textContent='التصميم المتجاوب'
    document.querySelector('.services .card:nth-child(2) .info p').textContent='سيكون موقعك متوافقاً تماماً (بنسبة 100%) مع جميع الأجهزة: الأجهزة اللوحية والهواتف الذكية.'
    document.querySelector('.services .card:nth-child(3) .info h3').textContent='تصميم إبداعي'
    document.querySelector('.services .card:nth-child(3) .info p').textContent='يمكنني تعديل موقعك الحالي وإضافة محتوى جديد لجعله أفضل بكثير.'
    document.querySelector('.services .card:nth-child(4) .info h3').textContent='أفكار للويب'
    document.querySelector('.services .card:nth-child(4) .info p').textContent='يمكنني تحويل أفكارك إلى مشاريع حقيقية عالية الجودة.'
    document.querySelector('.services .card:nth-child(5) .info h3').textContent='تنميق'
    document.querySelector('.services .card:nth-child(5) .info p').textContent='يمكنني مساعدتك في إعادة تصميم موقعك الإلكتروني الحالي ليصبح بمظهر أفضل بكثير.'
    document.querySelector('.services .card:nth-child(6) .info h3').textContent='دعم'
    document.querySelector('.services .card:nth-child(6) .info p').textContent='تتوفر خدمة الدعم إذا كنت ترغب في إجراء أي تعديلات على موقعك الإلكتروني بعد تسليمه.'
    document.querySelector('.projects .title').textContent='المشاريع'
    document.querySelector('.projects ul li:nth-child(1)').textContent='احدث المشاريع'
    document.querySelector('.projects ul li:nth-child(2)').textContent='مشاريع HTML & CSS'
    document.querySelector('.projects ul li:nth-child(3)').textContent='مشاريع جافاسكريبت'
    document.querySelector('.projects ul li:nth-child(4)').textContent='مشاريع رياكت'
    document.querySelector('.projects .container .card:nth-child(1) .info p').textContent='ليون'
    document.querySelector('.projects .container .card:nth-child(1) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(2) .info p').textContent='كاسبار'
    document.querySelector('.projects .container .card:nth-child(2) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(3) .info p').textContent='لوحة تحكم متجاوبة'
    document.querySelector('.projects .container .card:nth-child(3) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(4) .info p').textContent='افاتار'
    document.querySelector('.projects .container .card:nth-child(4) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(5) .info p').textContent='لوحه تحكم'
    document.querySelector('.projects .container .card:nth-child(5) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(6) .info p').textContent='قائمة مبتكرة'
    document.querySelector('.projects .container .card:nth-child(6) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(7) .info p').textContent='صفحة هبوط إبداعية'
    document.querySelector('.projects .container .card:nth-child(7) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(8) .info p').textContent='موقع ويب قابل للتمرير'
    document.querySelector('.projects .container .card:nth-child(8) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(9) .info p').textContent='موبايل'
    document.querySelector('.projects .container .card:nth-child(9) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(10) .info p').textContent='كردز'
    document.querySelector('.projects .container .card:nth-child(10) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(11) .info p').textContent='قائمة المهام'
    document.querySelector('.projects .container .card:nth-child(11) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(12) .info p').textContent='تحقق من الإنترنت'
    document.querySelector('.projects .container .card:nth-child(12) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(13) .info p').textContent='لعبه XO'
    document.querySelector('.projects .container .card:nth-child(13) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(14) .info p').textContent='اله حاسبه'
    document.querySelector('.projects .container .card:nth-child(14) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(15) .info p').textContent='السحب والإفلات'
    document.querySelector('.projects .container .card:nth-child(15) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(16) .info p').textContent='محرر الصور'
    document.querySelector('.projects .container .card:nth-child(16) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(17) .info p').textContent='شريط تمرير الصور'
    document.querySelector('.projects .container .card:nth-child(17) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(18) .info p').textContent='سرعه الكتابه'
    document.querySelector('.projects .container .card:nth-child(18) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(19) .info p').textContent='تيك-تاك'
    document.querySelector('.projects .container .card:nth-child(19) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(20) .info p').textContent='معرض أعمال بـ React'
    document.querySelector('.projects .container .card:nth-child(20) .info a').textContent='زياره المشروع'
    document.querySelector('.projects .container .card:nth-child(21) .info p').textContent='فورم ب رياكت'
    document.querySelector('.projects .container .card:nth-child(21) .info a').textContent='زياره المشروع'
    document.querySelector('.contact .title').textContent='لِنعمل معاً'
    document.querySelector('.contact .cards .card:nth-child(1) h4').textContent='الايميل'
    document.querySelector('.contact .cards .card:nth-child(1) a').textContent='ارسل رسالة'
    document.querySelector('.contact .cards .card:nth-child(2) h4').textContent='ماسنجر'
    document.querySelector('.contact .cards .card:nth-child(2) p').textContent='حسام ثابت'
    document.querySelector('.contact .cards .card:nth-child(2) a').textContent='ارسل رسالة'
    document.querySelector('.contact .cards .card:nth-child(3) h4').textContent='واتس اب'
    document.querySelector('.contact .cards .card:nth-child(3) p').textContent='٠١١٢٨٧٩٤٠٤٥'
    document.querySelector('.contact .cards .card:nth-child(3) a').textContent='ارسل رسالة'
    document.querySelector('.contact form input:nth-child(1)').placeholder='اسمك'
    document.querySelector('.contact form input:nth-child(2)').placeholder='ايميلك'
    document.querySelector('.contact form textarea').placeholder='رسالتك'
    document.querySelector('.contact form button').textContent='ارسل رساله'
    document.querySelector('footer p').innerHTML='حقوق النشر @ <span></span>'
    document.querySelector('footer p span').textContent='حسام ثابت'
    state='en';
}
function english(){
    html.lang='en';
    body.style.direction='ltr';
    sun.textContent='EN';
    document.querySelector('header .logo').textContent='Hossam'
    links[0].textContent='Home'
    links[1].textContent='About'
    links[2].textContent='Skills'
    links[3].textContent='Services'
    links[4].textContent='Projects'
    links[5].textContent='Contact'
    document.querySelector('.main h4').textContent=`Hello,I'm`
    document.querySelector('.main h1').textContent='Hossam Thabet'
    let job='Front End Developer';
    writter(job);
    document.querySelector('.main p').textContent='I Build Modern & Responsive Websites.'
    document.querySelector('.main .main-btn').textContent='View my work'
    document.querySelector('.main .whats a').style.left='auto'
    document.querySelector('.main .whats a').style.right='30px'
    document.querySelector('.about .title').textContent='About Me'
    document.querySelector('.about .text h2').innerHTML=`I'm <span></span>a Web Developer`
    document.querySelector('.about .text span').textContent='Hossam Thabet,'
    document.querySelector('.about .text p:first-of-type').textContent='I`m a front-end web developer with a strong passion for creating visually appealing and user-friendly web applications. i am very passionate about improving my coding skills & developing applications & websites.'
    document.querySelector('.about .text p:last-of-type').textContent='I have also gained a solid foundation in HTML, CSS and JavaScript. I am always eager to learn new technologies and techniques to enhance my skillset.'
    document.querySelector('.about .info .line:first-child h3').innerHTML=`Age:<span>20</span>`
    document.querySelector('.about .info .line:nth-child(2) h3').innerHTML=`Email:<span>jzjdiskwk@gmail.com</span>`
    document.querySelector('.about .info .line:nth-child(3) h3').innerHTML=`Place:<span>Sohag</span>`
    document.querySelector('.skills .title').textContent='Skills'
    document.querySelector('.main .arrow a').style.left='auto'
    document.querySelector('.main .arrow a').style.right='30px'
    document.querySelector('.services .title').textContent='Services'
    document.querySelector('.services .card:first-child .info h3').textContent='Web Development'
    document.querySelector('.services .card:first-child .info p').textContent='I can bulid a website by using HTML, CSS and JavaScript.'
    document.querySelector('.services .card:nth-child(2) .info h3').textContent='Responsive Design'
    document.querySelector('.services .card:nth-child(2) .info p').textContent='Your website will be 100% reponsive for all devices: Tablets and Smart phones.'
    document.querySelector('.services .card:nth-child(3) .info h3').textContent='Creative Design'
    document.querySelector('.services .card:nth-child(3) .info p').textContent='I can edit your current website by adding a new content to make it mush better.'
    document.querySelector('.services .card:nth-child(4) .info h3').textContent='Web Ideas'
    document.querySelector('.services .card:nth-child(4) .info p').textContent='I could turn your ideas into a real projects with high quality.'
    document.querySelector('.services .card:nth-child(5) .info h3').textContent='Retouch'
    document.querySelector('.services .card:nth-child(5) .info p').textContent='I can help you by redesign your current website to looks mush better.'
    document.querySelector('.services .card:nth-child(6) .info h3').textContent='Support'
    document.querySelector('.services .card:nth-child(6) .info p').textContent='Support is available if you wanna make any changes for your website after dilvering it.'
    document.querySelector('.projects .title').textContent='Projects'
    document.querySelector('.projects ul li:nth-child(1)').textContent='Latest Projects'
    document.querySelector('.projects ul li:nth-child(2)').textContent='HTML & CSS Projects'
    document.querySelector('.projects ul li:nth-child(3)').textContent='JavaScript Projects'
    document.querySelector('.projects ul li:nth-child(4)').textContent='React.JS Projects'
    document.querySelector('.projects .container .card:nth-child(1) .info p').textContent='Leon'
    document.querySelector('.projects .container .card:nth-child(1) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(2) .info p').textContent='Kasper'
    document.querySelector('.projects .container .card:nth-child(2) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(3) .info p').textContent='Responsive Dashboard'
    document.querySelector('.projects .container .card:nth-child(3) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(4) .info p').textContent='Avadar'
    document.querySelector('.projects .container .card:nth-child(4) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(5) .info p').textContent='Dashboard'
    document.querySelector('.projects .container .card:nth-child(5) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(6) .info p').textContent='Creative Menu'
    document.querySelector('.projects .container .card:nth-child(6) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(7) .info p').textContent='Creative Landing Page'
    document.querySelector('.projects .container .card:nth-child(7) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(8) .info p').textContent='Scrolling Website'
    document.querySelector('.projects .container .card:nth-child(8) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(9) .info p').textContent='Phone'
    document.querySelector('.projects .container .card:nth-child(9) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(10) .info p').textContent='CRUDS'
    document.querySelector('.projects .container .card:nth-child(10) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(11) .info p').textContent='To-Do-List'
    document.querySelector('.projects .container .card:nth-child(11) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(12) .info p').textContent='Check Internet'
    document.querySelector('.projects .container .card:nth-child(12) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(13) .info p').textContent='XO Game'
    document.querySelector('.projects .container .card:nth-child(13) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(14) .info p').textContent='Calculator'
    document.querySelector('.projects .container .card:nth-child(14) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(15) .info p').textContent='Drag & Drop'
    document.querySelector('.projects .container .card:nth-child(15) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(16) .info p').textContent='Image Editor'
    document.querySelector('.projects .container .card:nth-child(16) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(17) .info p').textContent='Image Slider'
    document.querySelector('.projects .container .card:nth-child(17) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(18) .info p').textContent='Typing Speed'
    document.querySelector('.projects .container .card:nth-child(18) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(19) .info p').textContent='Tic-Tac'
    document.querySelector('.projects .container .card:nth-child(19) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(20) .info p').textContent='Portfolio React'
    document.querySelector('.projects .container .card:nth-child(20) .info a').textContent='Visit Project'
    document.querySelector('.projects .container .card:nth-child(21) .info p').textContent='Form React'
    document.querySelector('.projects .container .card:nth-child(21) .info a').textContent='Visit Project'
    document.querySelector('.contact .title').textContent=`Let's work together`
    document.querySelector('.contact .cards .card:nth-child(1) h4').textContent='Email'
    document.querySelector('.contact .cards .card:nth-child(1) a').textContent='Send Message'
    document.querySelector('.contact .cards .card:nth-child(2) h4').textContent='Messenger'
    document.querySelector('.contact .cards .card:nth-child(2) p').textContent='Hossam Thabet'
    document.querySelector('.contact .cards .card:nth-child(2) a').textContent='Send Message'
    document.querySelector('.contact .cards .card:nth-child(3) h4').textContent='WhatsApp'
    document.querySelector('.contact .cards .card:nth-child(3) p').textContent='01128794045'
    document.querySelector('.contact .cards .card:nth-child(3) a').textContent='Send Message'
    document.querySelector('.contact form input:nth-child(1)').placeholder='Your Name'
    document.querySelector('.contact form input:nth-child(2)').placeholder='Your Email'
    document.querySelector('.contact form textarea').placeholder='Your Message'
    document.querySelector('.contact form button').textContent='Send Message'
    document.querySelector('footer p').innerHTML='Copyrights @  <span></span>'
    document.querySelector('footer p span').textContent='Hossam Thabet'
    state='ar';
}
let sectionService=document.querySelector('.services');
let sectionAbout=document.querySelector('.about');
let sectionSkills=document.querySelector('.skills');
let sectionProjects=document.querySelector('.projects');
let sectionContact=document.querySelector('.contact');
let sectionFooter=document.querySelector('footer');
let textAbout=document.querySelector('.about .text');
let infoAbout=document.querySelector('.about .info');
let pFooter=document.querySelector('footer p');
let iconsFooter=document.querySelectorAll('footer .social-icons a');
let cardsContact=document.querySelector('.contact .cards');
let formContact=document.querySelector('.contact form');
let skill_title=document.querySelector('.skills .skill-title');
let service_title=document.querySelector('.services .service-title');
let project_title=document.querySelector('.projects .project-title');
let about_title=document.querySelector('.about .about-title');
let contact_title=document.querySelector('.contact .contact-title');
let skill=document.querySelectorAll('.skills .card');
let service=document.querySelectorAll('.services .card');
let project=document.querySelectorAll('.projects .card');
let ul=document.querySelector('.projects ul');
let arrow=document.getElementById('arrow');
onscroll=function(){
    if(scrollY>175){
        arrow.style.display='block';
    }
    else{
        arrow.style.display='none';
    }
    if(scrollY>=sectionAbout.offsetTop - 600){
        about_title.style.transform='scale(1)';
        textAbout.style.cssText=`
            animation: e .5s linear forwards;`
        infoAbout.style.cssText=`
            animation: f .5s linear forwards;`
    }
    if(scrollY>=sectionSkills.offsetTop - 600){
        skill_title.style.transform='scale(1)';
        for(let i=0;i<skill.length;i++){
            skill[i].style.cssText=`
                transform:scale(1)`
        }
    }
    if(scrollY>=sectionService.offsetTop - 600){
        service_title.style.transform='scale(1)';
        for(let i=0;i<service.length;i++){
            service[i].style.cssText=`
                transform:scale(1)`
        }
    }
    if(scrollY>=sectionProjects.offsetTop - 600){
        project_title.style.transform='scale(1)';
        ul.style.transform='scale(1)';
        for(let i=0;i<project.length;i++){
            project[i].style.cssText=`
                transform:scale(1)`
        }
    }
    if(scrollY>=sectionContact.offsetTop - 600){
        contact_title.style.transform='scale(1)';
        cardsContact.style.cssText=`
            animation: e .5s linear forwards;`
        formContact.style.cssText=`
            animation: f .5s linear forwards;`
    }
    if(scrollY>=sectionFooter.offsetTop - 800){
        pFooter.style.cssText=`
            animation: e .5s linear forwards;`
        for(let i=0;i<iconsFooter.length;i++){
            iconsFooter[i].style.cssText=`
                animation: f .5s linear forwards;
                animation-delay:${i/2}s`
        }
    }
}
let titles=document.querySelectorAll('.projects ul li');
let allCards=document.querySelectorAll('.container .card');
let notLatCards=document.querySelectorAll('.container .notLat');
let htmlCards=document.querySelectorAll('.container .html-card');
let jsCards=document.querySelectorAll('.container .js-card');
let reactCards=document.querySelectorAll('.container .react-card');
titles[0].onclick=function(){
    remove();
    this.classList.add('active');
    notLatCards.forEach(notLat=>{
        notLat.classList.add('hide');
    })
}
titles[1].onclick=function(){
    remove();
    this.classList.add('active');
    main(jsCards,reactCards);
}
titles[2].onclick=function(){
    remove();
    this.classList.add('active');
    main(htmlCards,reactCards);
}
titles[3].onclick=function(){
    remove();
    this.classList.add('active');
    main(htmlCards,jsCards);
}
function main(param1,param2){
    param1.forEach(param1=>{
        param1.classList.add('hide');
    })
    param2.forEach(param2=>{
        param2.classList.add('hide');
    })
}
function remove(){
    titles.forEach(title=>{
        title.classList.remove('active');
    })
    allCards.forEach(all=>{
        all.classList.remove('hide');
    })
    notLatCards.forEach(notLat=>{
        notLat.classList.remove('notLat');
    })
}  
function writter(job){
    document.querySelector('.main h2').textContent='';
    let i=0;
    setTimeout(()=>{
        let x=setInterval(()=>{
            document.querySelector('.main h2').textContent+=job[i];
            i++;
            if(i==job.length){
                clearInterval(x);
            }
        },100)
    },2300)
    setTimeout(()=>{
        document.querySelector('.main h2').style.cssText=`
            border-right: 3px solid var(--main-color);
        `
    },1800)
    setTimeout(()=>{
        document.querySelector('.main h2').style.cssText=`
            border-right: transparent;
        `
    },4500)
} 