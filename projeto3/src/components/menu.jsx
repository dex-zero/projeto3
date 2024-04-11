import style from "./menu.module.css"

export default function Menu(){
    return(
        <div className={style.menuWrap}>
            <p><a href={'/'}>Home</a></p>
            <p><a href={'/Tech'}>Tecnologias</a></p>
            <p><a href={'/Calc'}>Média</a></p>
            <p><a href={'/Cont'}>Contato</a></p>
            <p><a href={'/RaM'}>Rick And Morty</a></p>
        </div>
    )
}