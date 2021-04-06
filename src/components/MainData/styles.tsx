import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    width: 100%;

    border: 2px solid var(--secondary);
    border-radius: 10px;
    padding: 0.75rem;
    margin-top: 0.5rem;

    > div{
        width: 50%;
    }
    > .grid{
        display: grid;
        width: 50%;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr; 
        gap: 0.5rem;

        > div {
            width: 100%;
            padding: 0.5rem;
        }
    
        p{
            border-bottom: 1px solid white;
            font-weight: bold;
        }
    }

`
