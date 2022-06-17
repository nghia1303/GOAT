#COPY PASTE THIS PART TO REUSE THE MENU PART


.menu-expanding{
    background-color: transparent;
    border: none;
    margin: 10px;
}

.bi bi-x-circle{
    font-size:20px !important;
}
.expand-menu{
    position:relative;
}

.menu-list{
    border-radius: 9px;
    position:absolute;
    color:white;
    background: linear-gradient(to bottom,rgba(14,43,111,0.9) 45%,rgba(14,43,111,0) 100%);
    height: 100vh !important;
    width: 20vw !important;
    min-width: 280px;
    display:block;
    opacity:0;
    pointer-event:none;
    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
    transform: translateY(-10px);
}

.expand-menu.active > .menu-expanding + .menu-list{
    opacity:1;
    pointer-event:auto;
    transform: translateY(0);
}

.list{
    display:flex;
    flex-direction: column;
    gap:4px;
    margin-top: 15px;
}
.menu-link:hover{
    color:#ec373d;
    transition: 0.6s;
}
.menu-link{
    text-decoration: none;
    color :white;
    margin-left: 50px;
    font-size:18px;
    
}
