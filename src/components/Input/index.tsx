import { memo, useCallback } from 'react';
import { InputContainer } from './styles';
import { getInteger, setNumberLimit } from '../../helpers';

type Props = {
    value?: string;
    onInputChange?: (value: string) => void;
};

export const Input = memo(({ value, onInputChange }: Props) => {
    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const integer = getInteger(e.target.value);
            const limited = setNumberLimit(integer);
            onInputChange?.(limited);
        },
        [onInputChange],
    );
    return <InputContainer value={value} onChange={onChange} />;
});
