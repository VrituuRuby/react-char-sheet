import styled from 'styled-components';

export const Container = styled.div`
    border: 2px solid var(--secondary);
    border-radius: 10px;
    padding: 0.75rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

     .shield{
        text-align: center;

        > svg {
            position: relative;
            fill: var(--secondary);
        }
        > h3{
            position: relative;
            top: -100px;
        }
    }

    .hex{
        text-align: center;

        > svg {
            position: relative;
            fill: var(--secondary);
            transform: rotate(30deg);
        }
        > h3{
            position: relative;
            top: -100px;
        }
    }

    > div{
        display: flex;
        text-align: center;
    }

    .health-bar{        
        width: 100%;
        height: 1.75rem;
        background-color: var(--secondary);
        border-radius: 5px;
        border: 1px solid white;
        position: relative;
    
        > .health-fill{
            height: 100%;
            background-color: orange;
            border-radius: 5px;
            transition: width 0.5s;
            
        }
        > .health-value{
            position: absolute;
            width: 100%;
            height: 100%;
            
        }


    }

    
`;
