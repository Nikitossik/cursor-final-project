import {HeaderWrapper, HeaderBalanceBlock, HeaderContent, HeaderBalance}  from '../styles';
import {useState, useEffect} from 'react';

const BalanceHeader = ({balance}) => {

    return (
        <HeaderWrapper>
            <HeaderBalanceBlock>
                <HeaderContent>
                    <h5>Your balance</h5>
                    <HeaderBalance>{balance} $</HeaderBalance>
                </HeaderContent>
            </HeaderBalanceBlock>
        </HeaderWrapper>
    );
};

export default BalanceHeader;