const modalMenu = document.querySelector('.modal_menu');
const buttonOpen = document.querySelector('.open');
const buttonClose = document.querySelector('.close_img');
const companyMenu = document.querySelector('.company_menu');
const featuresMenu = document.querySelector('.features_menu');
const companyMenuDesk = document.querySelector('.company_menu_desktop');
const featuresMenuDesk = document.querySelector('.features_menu_desktop');
const features = document.getElementById('features');
const featuresDesk = document.getElementById('features_desk');
const company = document.getElementById('company');
const companyDesk = document.getElementById('company_desk');
const arrowDeskFeatures = document.getElementById('arrow_desk_features');
const arrowDeskCompany = document.getElementById('arrow_desk_company');
const links = document.querySelectorAll('a');

const handleClick = (event) => {
  event.preventDefault();
}

const handleOpen = () => {
  modalMenu.classList.add('active');
}

const handleClose = () => {
  modalMenu.classList.remove('active');
}

const ShowFeatures = () => {
  featuresMenu.classList.toggle('active');
  features.classList.toggle('active');
}

const ShowCompany = () => {
  companyMenu.classList.toggle('active');
  company.classList.toggle('active');
}

const ShowFeaturesDesk = () => {
  featuresMenuDesk.classList.toggle('active');
  featuresDesk.classList.toggle('active');
  arrowDeskFeatures.classList.toggle('active');
  arrowDeskCompany.classList.remove('active');
  companyMenuDesk.classList.remove('active');
}

const ShowCompanyDesk = () => {
  companyMenuDesk.classList.toggle('active');
  companyDesk.classList.toggle('active');
  arrowDeskCompany.classList.toggle('active');
  arrowDeskFeatures.classList.remove('active');
  featuresMenuDesk.classList.remove('active');
}

const handleResize = () => {
  if (window.innerWidth > 800) {
    modalMenu.classList.remove('active');
  }
}

companyDesk.addEventListener('click', ShowCompanyDesk);
featuresDesk.addEventListener('click', ShowFeaturesDesk);
company.addEventListener('click', ShowCompany);
features.addEventListener('click', ShowFeatures);
buttonOpen.addEventListener('click', handleOpen);
buttonClose.addEventListener('click', handleClose);
window.addEventListener('resize', handleResize);
links.forEach((link) => {
  link.addEventListener('click', handleClick);
})