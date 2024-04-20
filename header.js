class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
   <nav>
    <div class="navbar">
      <i class='bx bx-menu'></i>
      <div class="logo" style="background-color:#a9c7ee;width:60px;height:41px;color:#000435">KH</div>
      <div class="nav-links">
        <div class="sidebar-logo">
          <span class="logo-name"style="background-color:#094514; width:60px;height:41px;color:#69F483">KH</span>
          <i class='bx bx-x' ></i>
        </div>
         
         
		
      </div>
      <div class="search-box">
        <i class='bx bx'></i>
      </div>
    </div>
  </nav>`
        ;
    }
}
customElements.define("header-component", Header);