import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { FC, PropsWithChildren } from "react";



const Wrapper = styled(Container)(({theme}) => ({
    width: "100vh",
    height: "100vh",
    background: "red"
}));

const Layout: FC<PropsWithChildren>  = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Layout;
