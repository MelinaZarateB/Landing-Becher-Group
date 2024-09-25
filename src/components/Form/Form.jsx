import './Form.css';

const Form = () => {
    return(
        <section className='container-form'>
            <div className='container-child-form'>
                <div className='titles-form'>
                    <h2>Estamos para ayudarte</h2>
                    <h3>Contactanos</h3>
                    <p>A la brevedad nos contactaremos contigo</p>
                </div>
            <form className='container-inputs'>
                <div>
                <label htmlFor="">Nombre</label>
                <input type="text" />
                </div>
                <div>
                <label htmlFor="">Email</label>
                <input type="text" />
                </div>
                <div>
                <label htmlFor="">Celular</label>
                <input type="text" />
                </div>
                <div>
                <label htmlFor="">Mensaje</label>
                <input type="text" name="" id="" />
                </div>

            </form>
            </div>

        </section>
    )
}
export default Form;
