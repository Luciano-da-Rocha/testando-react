import './header.css'

interface HeaderProps{
    title?: string;
}

export function Header( {title = "Problema no titulo"}: HeaderProps){
    return(
        <header className="header">
            <h1 className="title">{title}</h1>
            <div id="barra-pesquisa">
            <label>Search the site:</label>
            <input type="search" id="site-search" name="q" placeholder='Pesquise'/>
             <button>Search</button>
            </div>

           
        </header>

    )
}

