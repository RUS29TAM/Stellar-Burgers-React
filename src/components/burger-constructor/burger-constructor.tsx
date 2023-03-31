import styleConstructor from './burger-constructor.module.css';
import ConstructorDropzone from "../constructor-dropzone/constructor-dropzone";
import ConstructorTotalPrice from "../constructor-total-price/constructor-total-price";

const BurgerConstructor = () => (
    <section className={`${styleConstructor.wrapper} mt-25 mr-5 mb-10 ml-5`}>
        <ConstructorDropzone/>
        <ConstructorTotalPrice/>
    </section>
);

export default BurgerConstructor
