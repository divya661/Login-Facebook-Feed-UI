import styled from "@emotion/styled";

const StyledLink = styled.a<{ textDecoration: string }>`
   text-decoration: ${(props) => props.textDecoration};
`;

export { StyledLink };