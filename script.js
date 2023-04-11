const modalMenu = document.querySelector('.modal_menu');
const buttonOpen = document.querySelector('.open');
const buttonClose = document.querySelector('.close_img');
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

const toggleMenu = (menu, menuButton, arrow) => {
  menu.classList.toggle('active');
  menuButton.classList.toggle('active');
  arrow.classList.toggle('active');
}

const ShowFeaturesDesk = () => {
  toggleMenu(featuresMenuDesk, featuresDesk, arrowDeskFeatures);
  toggleMenu(companyMenuDesk, companyDesk, arrowDeskCompany, false);
}

const ShowCompanyDesk = () => {
  toggleMenu(companyMenuDesk, companyDesk, arrowDeskCompany);
  toggleMenu(featuresMenuDesk, featuresDesk, arrowDeskFeatures, false);
}

const ShowMenu = (menu, menuItem) => {
  toggleMenu(menu, menuItem);
}

const handleResize = () => {
  if (window.innerWidth > 800) {
    handleClose();
  }
}

buttonOpen.addEventListener('click', handleOpen);
buttonClose.addEventListener('click', handleClose);
companyDesk.addEventListener('click', ShowCompanyDesk);
featuresDesk.addEventListener('click', ShowFeaturesDesk);
company.addEventListener('click', () => ShowMenu(companyMenu, company));
features.addEventListener('click', () => ShowMenu(featuresMenu, features));
window.addEventListener('resize', handleResize);
links.forEach(link => link.addEventListener('click', handleClick));
