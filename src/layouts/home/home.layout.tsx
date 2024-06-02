import { HomePage } from '../../pods';
import './home.styles.scss';

export const HomeLayout = () => {

    return (
        <main>
            <h1>Home</h1>
            <p>This is the home page</p>
            <HomePage /> 
        </main>
    )
}