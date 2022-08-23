import { memo } from 'react';
import { ResultContainer, ResultSimvol } from './styles';
import { CORRECT_ANSWER } from '../../config';

type Props = {
    value?: string;
};

export const Result = memo(({ value }: Props) => {
    const valuesArray = value?.toString().split('');
    return (
        <ResultContainer>
            {valuesArray?.map((val, index) => (
                <ResultSimvol
                    correct={val === CORRECT_ANSWER[index]}
                    key={index?.toString()}
                >
                    •
                </ResultSimvol>
            ))}
        </ResultContainer>
    );
});
