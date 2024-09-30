import "./Form.css";
import { useRef } from 'react';
import useNearScreen from "../../utils/useNearScreen";

const Form = () => {
  const elementRef = useRef();
  const show = useNearScreen(elementRef)
  return (
    <section className="container-form" id="contact">
      <div className={`container-child-form  ${show ? 'animate' : ''}`} ref={elementRef}>
        <div className="titles-form" >
          <h2>Estamos para ayudarte</h2>
          <h3>Contactanos</h3>
          <p>A la brevedad nos comunicaremos contigo</p>
        </div>
        <div className="container-form-inputs">
          <form className="container-inputs">
            <div>
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" />
            </div>
            <div>
              <label htmlFor="phone">Celular</label>
              <input type="text" name="phone" />
            </div>
            <div>
              <label htmlFor="message">Mensaje</label>
              <textarea
                name="message"
                id=""
                className="textarea"
              ></textarea>
            </div>
          </form>
        </div>
        <div>
            <button className="btn-submit">Enviar</button>
        </div>
      </div>
    </section>
  );
};
export default Form;
