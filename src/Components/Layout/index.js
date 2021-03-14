import s from './Layout.module.css'

const Layout = (props) => {
    const style = {}
    if(props.urlBg){
        style.backgroundImage = `url(${props.urlBg})`
    }
    if(props.colorBg){
        style.backgroundColor = props.colorBg
    }

    return (
        <section className={s.root} style = {style}>
            <div className={s.wrapper} >
                <article>
                    <div className={s.title}>
                        <h3>{props.title || null}</h3>
                        <span className={s.separator}></span>   
                    </div>
                    <div className={s.desc && s.full}>
                        {props.children} 
                    </div>
                </article>
            </div>
        </section>)
}

export default Layout