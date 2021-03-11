import s from './Layout.module.css'

const Layout = (props) => {

    return (
        <section className={s.root} style = {{background : props.urlBg ? `url(${props.urlBg})`: props.colorBg}}>
            <div className={s.wrapper} >
                <article>
                    <div className={s.title}>
                        <h3>{props.title || null}</h3>
                        <span className={s.separator}></span>   
                    </div>
                    <div className={s.desc && s.full}>
                        <p>{props.desc || null}</p>
                    </div>
                </article>
            </div>
        </section>)
}

export default Layout