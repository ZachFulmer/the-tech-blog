function titleUpdate() {
    const title = document.querySelector('#header-title');

    title.innerHTML = 'Your Dashboard';
}
  
document.querySelector('#dash-link').addEventListener('click', titleUpdate);
  