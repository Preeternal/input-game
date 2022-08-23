import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { Input } from './components/Input';
import { Result } from './components/Result';
import { selectValue, valueSet } from './state/value';

import { Container } from './styles';

function App() {
    const value = useSelector(selectValue);
    const dispatch = useDispatch();
    const onValueChange = useCallback(
        (val: string) => {
            dispatch(valueSet(val));
        },
        [dispatch],
    );
    return (
        <Container>
            <Input value={value} onInputChange={onValueChange} />
            <Result value={value} />
        </Container>
    );
}

export default App;
