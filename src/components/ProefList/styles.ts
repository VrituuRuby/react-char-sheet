import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    > div {
        border: solid 2px var(--secondary);
        border-radius: 10px;
        padding: 0.75rem;

        display: flex;
        flex-direction: column;

    }

    ul{
        list-style: none;
        >li input{
            margin-right: 0.5rem;
        }
    }
`;
