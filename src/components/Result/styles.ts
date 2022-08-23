import styled from 'styled-components';

export const ResultContainer = styled.div`
    width: 200px;
    height: 100px;
    background: gray;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ResultSimvol = styled.span<{ correct?: boolean }>`
    font-size: 50px;
    line-height: 50px;
    margin-horizontal: 10px;
    color: ${({ correct }) => (correct ? '#fff' : '#000')};
`;
