import styled from "styled-components";

export const Container = styled.div`
    width: 85%;
    margin: 0 auto;
`;

export const Section = styled(Container)`
    margin-top: 4rem;
    margin-bottom: 4rem;
`;

export const Title = styled.h2`
    /* text-transform: uppercase; */
    font-weight: ${props => props.fontWeight};
    margin-bottom: ${props => props.marginBottom || "2.5rem"};
    margin-top: ${props => props.marginTop || "2.5rem"};
    color: ${props => props.color || "var(--dark-blue)"};
    font-size: ${props => props.fontSize || "25px"};
    text-align: ${props => props.textAlign || "left"};

    @media screen and (max-width: 1024px) {
        text-align: center;
        font-size: 20px;
    }

    @media screen and (max-width: 576px) {
        font-size: 18px;
    }
`;

export const Subtitle = styled(Title).attrs({
    as: "h3"
})`
    font-size: 21px;
`;

export const Box = styled.div(props => ({
    display: props.sx?.display,
    justifyContent: props.sx?.justifyContent,
    alignItems: props.sx?.alignItems,
    flexDirection: props.sx?.flexDirection,
    gap: props.sx?.gap,
    margin: props.sx?.margin,
    marginBottom: props.sx?.marginBottom,
    marginTop: props.sx?.marginTop,
    backgroundColor: props.sx?.backgroundColor,
    width: props.sx?.width,
    height: props.sx?.height,
    marginTop: props.sx?.marginTop,
    marginBottom: props.sx?.marginBottom,
    marginLeft: props.sx?.marginLeft,
    marginRight: props.sx?.marginRight
}));

export const Paragraph = styled.p`
    color: ${props => props.color || "#484848"};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    font-size: ${props => props.fontSize} || "18.5px";
    font-weight: ${props => props.fontWeight};
    @media screen and (max-width: 1200px) {
        p {
            font-size: 15px !important;
        }
    }
`;
