import styled from "styled-components";

import { ThickBorderNoHover } from "@/styles/global";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 3em;
`;

export const ContainerText = styled(ThickBorderNoHover)`
display: flex;
align-items: center;
justify-content: center;
padding: 1em;
font-size: 2em;
font-weight: bold;
`;