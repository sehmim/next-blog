import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Container = styled.div`
    padding: 2rem 0rem;
    background: #fff;
    box-shadow: 0 8px 12px 0 rgb(0 0 0 / 10%);
`;

export const FlexEnd = styled.div``;

export const Flex = styled.div<any>`
    display: flex;
    justify-content: ${(props) => props.justifyContent && props.justifyContent};
    padding: ${(props) => (props.padding ? props.padding + 'px' : null)};}; 
    
    ${(props) => props.flexDirection && 'flex-direction: ' + props.flexDirection}; 
`;

export const Button = styled.button`
    color: #4f535d;
    padding: 15px;
    display: inline;
    list-style: none;
    font-weight: 700;
    font-size: 20px;

    :disabled {
        color: grey;
        opacity: 0.5;
    }

    :hover {
        color: #444;
        opacity: 1;
        border-bottom: 2px solid #444;
    }
`;

export const TitleSub = styled.h4`
    margin-top: 0;
    font-weight: 400;
    color: #333;
    word-break: break-word;
    font-size: 20px;
`;

export const TextBody = styled.p``;

export const SubTexts = styled.p``;

export const Capsule = styled.span``;

export const Avatar = styled.img`
    height: 64px;
    aspect-ratio: auto 64 / 64;
    width: 64px;
    border: 1px solid;
`;
