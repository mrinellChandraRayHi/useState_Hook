import { useContext } from 'react';
import { data, data1 } from '../App'; // Correct import statement

const ChaildC = () => {
    const name = useContext(data);
    const gender = useContext(data1);
    return (
        <div>
            <h1>Hi my name is {name} and my gender is {gender}</h1>
        </div>
    );
};

export default ChaildC;
