import styleConstructor from '../BurgerConstructor/BurgerConstructo.module.css';
import ConstructorDropzone from "../ConstructorDropzone/ConstructorDropzone";
import ConstructorTotalPrice from "../ConstructorTotalPrice/ConstructorTotalPrice";

const BurgerConstructor = () => (
    <section className={`${styleConstructor.wrapper} mt-25 mr-5 mb-10 ml-5`}>
        <ConstructorDropzone/>
        <ConstructorTotalPrice/>
    </section>
);

export default BurgerConstructor
