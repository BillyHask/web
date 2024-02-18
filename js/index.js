const header = document.getElementById('header');
const enButton = document.getElementById('enButton');
const ruButton = document.getElementById('uaButton');
const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');
const servicesLink = document.getElementById('servicesLink');
const contactLink = document.getElementById('contactLink');
const mainTitle = document.getElementById('mainTitle');
const aboutUs = document.getElementById('aboutUs');
const sectionheader = document.getElementById('section-header');
const sectionheadersubject = document.getElementById('section_headersubject');
const usersignbutton = document.getElementById('user_signbutton');
const userfreebutton = document.getElementById('user_freebutton');
const sectionheader_subtitlepowersubtitle = document.getElementById('sectionheader_subtitle powersubtitle');
const formabutton = document.getElementById('forma_button');
const formainput = document.getElementById('forma_input');
const poweritemstext = document.getElementById('power_itemstext');
const power_itemstext2 = document.getElementById('power_itemstext2');
const progresssubject = document.getElementById('progress_subject');
const progresssuptitle = document.getElementById('progress_suptitle');
const progressbutton = document.getElementById('progress_button');
const powerintrestingname = document.getElementById('power_intrestingname');
const powerintrestingsuptitle = document.getElementById('power_intrestingsuptitle');

//window.addEventListener('scroll', () => {
//  if (window.scrollY > 100) {
//    header.style.backgroundColor = '#555';
//  } else {
//    header.style.backgroundColor = '#333';
//  }
//});


enButton.addEventListener('click', () => {
  updateLanguage('en');
});

uaButton.addEventListener('click', () => {
  updateLanguage('ua');
});


function updateLanguage(selectedLanguage) {

  if (selectedLanguage === 'en') {
    homeLink.textContent = 'About';
    aboutLink.textContent = 'Product';
    servicesLink.textContent = 'Service';
    contactLink.textContent = 'Contact';
    sectionheader.textContent = '100% SATISFIED GUARANTEE';
    sectionheadersubject.textContent = 'Power up your shopify products';
    usersignbutton.textContent = 'Sign in';
    userfreebutton.textContent = 'Try Free';
    sectionheader_subtitlepowersubtitle.textContent = 'More than 90,000+ companies trust our business. Get help from a dedicated shopify developer today';
    formainput.placeholder = 'Your email address';
    formabutton.textContent = 'Sign in';
    poweritemstext.textContent = '30 days free trial';
    power_itemstext2.textContent = 'No credit card required';
    progresssubject.textContent = 'Make Progress';
    progresssuptitle.textContent = 'with opening plans';
    progressbutton.textContent ='Buy Plan';
    powerintrestingname.textContent = 'Margaret Philips';
    powerintrestingsuptitle.textContent = 'Watch our best services';
  } else if (selectedLanguage === 'ua') {
    homeLink.textContent = 'Про нас';
    aboutLink.textContent = 'Продукт';
    servicesLink.textContent = 'Сервіс';
    contactLink.textContent = 'Контакти';
    sectionheader.textContent = '100% ГАРАНТІЇ';
    sectionheadersubject.textContent = 'Увімкніть свої shopify продукти';
    usersignbutton.textContent = 'Увійти';
    userfreebutton.textContent = 'Безкоштовно';
    sectionheader_subtitlepowersubtitle.textContent = 'Понад 90 000 компаній довіряють нашому бізнесу. Отримайте допомогу від відданого розробника shopify сьогодні';
    formabutton.textContent = 'Увійти';
    formainput.placeholder = 'Ваш email';
    poweritemstext.textContent = '30 днів безкоштовної пробної версії';
    power_itemstext2.textContent = 'Кредитна картка не потрібна';
    progresssubject.textContent = 'Робіть успіхи';
    progresssuptitle.textContent = 'з планами відкриття';
    progressbutton.textContent ='Купити план';
    powerintrestingname.textContent = 'Маргарет Філіпс';
    powerintrestingsuptitle.textContent = 'Перегляньте наші найкращі послуги';
  }
}
