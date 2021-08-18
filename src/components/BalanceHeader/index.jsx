import {HeaderWrapper, HeaderBalanceBlock, HeaderContent, HeaderBalance}  from '../styles';

const BalanceHeader = () => {
    return (
        <HeaderWrapper>
            <HeaderBalanceBlock>
                <HeaderContent>
                    <h5>Your balance</h5>
                    <HeaderBalance>$ 5000.00</HeaderBalance>
                </HeaderContent>
            </HeaderBalanceBlock>
        </HeaderWrapper>
    );
};

export default BalanceHeader;