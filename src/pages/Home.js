import bg from '../image/bg.jpg';
import { Title,Wrapper } from './Home.styled';

const Home = () => {
    return (
        <Wrapper>
            <img src={bg} alt='Oops' />        
            <Title> Welcome to your private phone book</Title>      
        </Wrapper>
    );
};

export default Home;