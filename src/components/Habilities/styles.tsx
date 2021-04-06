import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border: 2px solid var(--secondary);
    border-radius: 10px;
    padding: 0.75rem;
    
    > div{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        > div{ 
            min-width: 10rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
                
            border: 2px solid var(--secondary);
            border-radius: 10px;
            padding: 10px;

        } 

    } 
`