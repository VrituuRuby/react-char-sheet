import styled from 'styled-components';

export const Container = styled.div`
    border: 2px solid var(--secondary);
    border-radius: 10px;
    padding: 0.75rem;

    > h3{
        margin-bottom: 0.5rem;
    }
    > table{
        width: 100%;
        
        th, td, tr{
            padding: 0.25rem;
            text-align: left;
            background-color: var(--secondary);
            border-radius: 3px;
            height: 2rem;
        }
    }
`;
