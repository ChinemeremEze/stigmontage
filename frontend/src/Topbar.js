import React from "react";
import styled from 'styled-components';
import {NetworkWifiOutlined} from '@material-ui/icons/';

const Topbar = () => {

    return  (
        <Options>
            <Option>
                <NetworkWifiOutlined/>
            </Option>
        </Options>
    )
}

export default Topbar;

const Options = styled.div`

`;

const Option = styled.div`

`;