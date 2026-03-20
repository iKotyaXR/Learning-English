import {RotateCcw} from "lucide-react";
import {Glass} from "../../../lib/GlassDesign/Components/Glass/Glass.tsx";
import styled from "styled-components";
import {useState} from "react";

const Container = styled.button`
    background: none;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px`

function Controls() {

    const [nativeMode,setNativeMode] = useState<boolean>(true);

    return <>
        <Glass>
            <Container onClick={()=>setNativeMode(!nativeMode)}>
                <RotateCcw/>
                {nativeMode ? "Native - Foreign" : "Foreign - Native" }
            </Container>
        </Glass>
    </>
}

export default Controls